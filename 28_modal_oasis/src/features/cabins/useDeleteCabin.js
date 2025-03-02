import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { mutate: deleteCabin, isLoading: isDeleting } = useMutation({
    mutationFn: async (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success('Cabin deleted successfully', { icon: '✅' });
      queryClient.invalidateQueries('cabins');
    },
    onError: (err) => toast(err.message || 'An error occurred', { icon: '❌' }),
  });

  return { deleteCabin, isDeleting };
}
