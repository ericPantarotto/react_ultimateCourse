import { differenceInDays, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import Select from 'react-select';
import styled from 'styled-components';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner.jsx';
import Textarea from '../../ui/Textarea';
import useCabins from '../cabins/useCabins.js';
import CreateGuestForm from '../guests/CreateGuestForm';
import { useGuests } from '../guests/useGuests.js';
import { useCreateBooking } from './useCreateBooking.js';

const StyledDiv = styled.div`
  /* div */
  display: grid;
  grid-template-columns: 26.5rem 1fr 1fr;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid var(--color-grey-100);

  & > label {
    font-weight: 500;
  }
`;

function CreateBookingForm({ onCloseModal }) {
  const [isGuestFound, setIsGuestFound] = useState(false);
  const [showCreateGuestForm, setShowCreateGuestForm] = useState(false);
  const [guest, setGuest] = useState(null);

  const { cabins, isLoading: isLoadingCabins } = useCabins();

  const { guests, isLoading: isLoadingGuests } = useGuests();

  const { isCreating, createBooking } = useCreateBooking();

  const { register, handleSubmit, reset, formState, control, setValue } =
    useForm({
      // defaultValues: isEditSession ? editValues : {},
      defaultValues: {},
      mode: 'onChange',
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'guestsArray',
  });

  const { errors } = formState;

  const cabinOptions = cabins?.map((cabin) => {
    return {
      value: cabin.id,
      label: cabin.name + ' - ' + 'max capacity: ' + cabin.maxCapacity,
    };
  });

  // const isWorking = isCreating || isUpdating;

  function onSubmit(data) {
    // Create new booking object from form data
    console.log(guest);
    const newBooking = (({
      startDate,
      endDate,
      status,
      hasBreakfast,
      isPaid,
      observations,
    }) => ({
      startDate,
      endDate,
      numNights: duration(data.startDate, data.endDate),
      numGuests: data.guestsArray.length + 1,
      cabinPrice: cabins.find((cabin) => cabin.id === data.cabinId.value)
        .regularPrice,
      extrasPrice: Number(data.extrasPrice),
      totalPrice:
        cabins.find((cabin) => cabin.id === data.cabinId.value).regularPrice +
        Number(data.extrasPrice),
      status,
      hasBreakfast,
      isPaid,
      observations,
      cabinId: data.cabinId.value,
      guestId: guests.find(
        (guestArr) =>
          guestArr.fullName.toUpperCase() === data.fullName.toUpperCase() // NOTE: using form field value
        // (guestArr) =>
        //   guestArr.fullName.toUpperCase() === guest?.fullName.toUpperCase() // NOTE: using state variable
      )?.id,
    }))(data);

    // Create the booking object and save it to supabase
    createBooking(newBooking, {
      onSuccess: (newBooking) => {
        console.log(newBooking);

        reset();
        onCloseModal?.();
      },
    });
  }

  function onSubmitGuest(data) {
    setIsGuestFound(
      guests.some(
        (guest) => guest.fullName.toUpperCase() === data.fullName.toUpperCase()
      )
    );
    if (isGuestFound)
      setGuest(
        guests.find(
          (guest) =>
            guest.fullName.toUpperCase() === data.fullName.toUpperCase()
        )
      );
    else {
      // show create guest form
      setGuest({ fullName: data.fullName });
      setShowCreateGuestForm(true);
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  function duration(startDate, endDate) {
    return differenceInDays(parseISO(endDate), parseISO(startDate));
  }

  if (isLoadingCabins || isLoadingGuests) return <Spinner />;

  return (
    <>
      {!showCreateGuestForm && (
        <Form
          type={onCloseModal ? 'modal' : 'regular'}
          onSubmit={handleSubmit(onSubmitGuest, onError)}
        >
          <FormRow label='Guest full name' error={errors?.startDate?.message}>
            <Input
              type='text'
              id='fullName'
              disabled={isCreating}
              {...register('fullName')}
            />
          </FormRow>
          <FormRow>
            {/* type is an HTML attribute! */}
            <Button
              variation='secondary'
              type='reset'
              onClick={() => onCloseModal?.()}
            >
              Cancel
            </Button>
            <Button
            // disabled={isCreating}
            >
              Lookup guest
            </Button>
          </FormRow>
        </Form>
      )}
      {showCreateGuestForm && !isGuestFound && (
        <CreateGuestForm
          guest={guest}
          handleGuest={setGuest}
          onCloseModal={onCloseModal}
          handleIsGuestFound={setIsGuestFound}
          handleFormValue={setValue}
        />
      )}
      {isGuestFound && (
        <Form
          onSubmit={handleSubmit(onSubmit, onError)}
          type={onCloseModal ? 'modal' : 'regular'}
        >
          {/* needed fields are: startDate, endDate, numNights, numGuests, cabinPrice, extrasPrice, totalPrice, status, hasBreakfast, isPaid, observations, cabinId, guestId  */}
          <FormRow label='Full name' error={errors?.fullName?.message}>
            <Input
              type='text'
              id='fullName'
              defaultValue={guest?.fullName}
              {...register('fullName', {
                required: 'This field is required',
              })}
            />
          </FormRow>

          <StyledDiv>
            <label
              htmlFor='guestsArray'
              // style={{ width: "100%" }}
            >
              Additional guests
            </label>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {fields.map((field, index) => {
                return (
                  <li
                    style={{
                      display: 'flex',
                      gap: '0.5rem',
                    }}
                    key={field.id}
                  >
                    <Input
                      type='text'
                      id='guestsArray'
                      disabled={isCreating}
                      {...register(`guestsArray.${index}.fullName`)}
                    />
                    {index > -1 && (
                      <Button
                        $variation='secondary'
                        size='small'
                        onClick={() => remove(index)}
                      >
                        Remove
                      </Button>
                    )}
                  </li>
                );
              })}

              <span>
                <Button
                  $variation='secondary'
                  size='small'
                  onClick={() => append({ fullName: '' })}
                >
                  Add guest full name
                </Button>
              </span>
            </ul>
          </StyledDiv>

          <FormRow label='Start date' error={errors?.startDate?.message}>
            <Input
              type='date'
              id='startDate'
              disabled={isCreating}
              {...register('startDate', {
                required: 'This field is required.',
              })}
            />
          </FormRow>
          <FormRow label='End date' error={errors?.endDate?.message}>
            <Input
              type='date'
              id='endDate'
              disabled={isCreating}
              {...register('endDate', {
                required: 'This field is required.',
              })}
            />
          </FormRow>

          <StyledDiv>
            <label htmlFor='cabinId'>Select cabin</label>
            <Controller
              name='cabinId'
              control={control}
              render={({ field: { onChange, value, ref } }) => (
                <span style={{ color: 'black' }}>
                  <Select
                    options={cabinOptions}
                    onChange={onChange}
                    value={value}
                    inputRef={ref}
                    id='cabinId'
                    error={!!errors.cabinId}
                  />
                </span>
              )}
              rules={{ required: true }}
            />
            {errors.cabinId && (
              <p style={{ color: 'red', paddingLeft: '1rem' }}>
                This field is required.
              </p>
            )}
          </StyledDiv>
          <FormRow label='Extras price' error={errors?.extrasPrice?.message}>
            <Input
              type='number'
              id='extrasPrice'
              disabled={isCreating}
              {...register('extrasPrice')}
            />
          </FormRow>
          <FormRow label='Status' error={errors?.status?.message}>
            <Input
              type='text'
              id='status'
              disabled={isCreating}
              defaultValue='unconfirmed'
              {...register('status')}
            />
          </FormRow>
          <FormRow
            label='Include breakfast?'
            error={errors?.hasBreakfast?.message}
          >
            <input
              type='checkbox'
              id='hasBreakfast'
              disabled={isCreating}
              {...register('hasBreakfast')}
            />
          </FormRow>
          <FormRow label='Paid?' error={errors?.isPaid?.message}>
            <input
              type='checkbox'
              id='isPaid'
              disabled={isCreating}
              {...register('isPaid')}
            />
          </FormRow>
          <FormRow label='Observations' error={errors?.observations?.message}>
            <Textarea
              type='text'
              id='observations'
              disabled={isCreating}
              {...register('observations')}
            />
          </FormRow>
          <FormRow>
            {/* type is an HTML attribute! */}
            <Button
              $variation='secondary'
              type='reset'
              onClick={() => onCloseModal?.()}
            >
              Cancel
            </Button>
            <Button disabled={isCreating}>
              {/* {isEditSession ? "Edit booking" : "Add booking"} */}
              Add booking
            </Button>
          </FormRow>
        </Form>
      )}{' '}
    </>
  );
}

export default CreateBookingForm;

CreateBookingForm.propTypes = {
  onCloseModal: PropTypes.func,
};
