import supabase from './supabase';

export async function getGuests() {
  const { data, error } = await supabase.from('guests').select('*');

  if (error) {
    console.log(error);
    throw new Error('Guests could not be retrieved.');
  }

  return data;
}

export async function createGuestApi(newGuest) {
  const query = supabase.from('guests').insert([{ ...newGuest }]);
  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error('Guest could not be created.');
  }

  return data;
}
