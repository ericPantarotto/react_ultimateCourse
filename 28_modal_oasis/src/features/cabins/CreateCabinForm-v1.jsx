import { useMutation, useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createCabin } from '../../services/apiCabins';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Textarea from '../../ui/Textarea';

function CreateCabinForm({ showForm }) {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created', { icon: '✅' });
      queryClient.invalidateQueries('cabins');
      reset();
    },
    onError: (err) => toast(err.message || 'An error occurred', { icon: '❌' }),
  });

  function onSubmit(data) {
    // console.log(data);
    // mutate(data);
    mutate({ ...data, image: data.image[0] });
    showForm(false);
  }

  function onError(errors) {
    console.info(errors);
    toast.error('Please fill out all required fields', { icon: '❌' });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label='Cabin name' error={errors?.name?.message}>
        <Input
          type='text'
          id='name'
          disabled={isCreating}
          {...register('name', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input
          type='number'
          id='maxCapacity'
          disabled={isCreating}
          {...register('maxCapacity', {
            required: 'This field is required',
            min: { value: 1, message: 'Capacity should be at least 1' },
          })}
        />
      </FormRow>

      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
        <Input
          type='number'
          id='regularPrice'
          disabled={isCreating}
          {...register('regularPrice', {
            required: 'This field is required',
            min: { value: 1, message: 'Price should be greater than 0' },
          })}
        />
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message}>
        <Input
          type='number'
          id='discount'
          disabled={isCreating}
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) =>
              +value < getValues('regularPrice') ||
              'Discount should be less than regular price',
          })}
        />
      </FormRow>

      <FormRow
        label='Description for website'
        error={errors?.description?.message}
      >
        <Textarea
          id='description'
          disabled={isCreating}
          {...register('description', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label='Cabin photo'>
        <FileInput
          id='image'
          accept='image/*'
          disabled={isCreating}
          {...register('image', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation='secondary' type='reset'>
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;

CreateCabinForm.propTypes = {
  showForm: PropTypes.func.isRequired,
};
