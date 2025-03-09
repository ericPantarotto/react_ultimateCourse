import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: async (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success('Booking deleted successfully', { icon: '✅' });
      queryClient.invalidateQueries('bookings');
    },
    onError: (err) => toast(err.message || 'An error occurred', { icon: '❌' }),
  });

  return { deleteBooking, isDeleting };
}
