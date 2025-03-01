import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createEditCabin } from '../../services/apiCabins';

function useUpdateCabin() {
  const queryClient = useQueryClient();
  const { mutate: updateCabin, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully edited', { icon: '✅' });
      queryClient.invalidateQueries('cabins');
    },
    onError: (err) => toast(err.message || 'An error occurred', { icon: '❌' }),
  });

  return { updateCabin, isUpdating };
}

export default useUpdateCabin;
