import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createEditCabin } from '../../services/apiCabins';

function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created', { icon: '✅' });
      queryClient.invalidateQueries('cabins');
    },
    onError: (err) => toast(err.message || 'An error occurred', { icon: '❌' }),
  });

  return { createCabin, isCreating };
}

export default useCreateCabin;
