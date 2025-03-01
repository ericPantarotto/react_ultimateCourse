import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateSetting as updateSettingApi } from '../../services/apiSettings';

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('Setting successfully edited', { icon: '✅' });
      queryClient.invalidateQueries('settings');
    },
    onError: (err) => toast(err.message || 'An error occurred', { icon: '❌' }),
  });

  return { updateSetting, isUpdating };
}
