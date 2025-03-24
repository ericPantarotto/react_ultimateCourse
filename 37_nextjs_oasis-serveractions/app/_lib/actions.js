'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth, signIn, signOut } from './auth';
import { getBookings } from './data-service';
import { supabase } from './supabase';

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
  revalidatePath('/account/profile');
}

export async function updateGuest(formData) {
  // console.log(formData);

  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const nationalID = formData.get('nationalID');
  const [nationality, countryFlag] = formData.get('nationality').split('%');

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    //NOTE: check for alphanumerics between 6 - 12 characters
    throw new Error('Please provide a valid national ID');

  const updateData = { nationality, countryFlag, nationalID };

  const { error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user.guestId);

  if (error) throw new Error('Guest could not be updated');

  revalidatePath('/account/profile');
}

export async function deleteBooking(bookingId) {
  await new Promise((r) => setTimeout(() => r(), 3000));
  // throw new Error('HACK to simulate optimistic delete'); //HACK: simulate optimistic delete

  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error('You are not allowed to delete this booking');

  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId);

  if (error) throw new Error('Booking could not be deleted');

  revalidatePath('/account/reservations');
}

export async function updateBooking(formData) {
  // console.log(formData);
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  const bookingId = Number(formData.get('id'));
  if (!guestBookingIds.includes(bookingId))
    throw new Error('You are not allowed to edit this booking');

  const numGuests = Number(formData.get('numGuests'));
  const observations = formData.get('observations').slice(0, 120);
  const startDate = new Date(formData.get('startDate'));
  const endDate = new Date(formData.get('endDate'));

  if (
    !numGuests ||
    startDate.toString() === 'Invalid Date' ||
    endDate.toString() === 'Invalid Date'
  )
    throw new Error('Booking could not be edited');

  const updateData = { numGuests, observations, startDate, endDate };

  const { error } = await supabase
    .from('bookings')
    .update(updateData)
    .eq('id', bookingId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be updated');
  }

  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath('/account/reservations');

  redirect('/account/reservations');
}
