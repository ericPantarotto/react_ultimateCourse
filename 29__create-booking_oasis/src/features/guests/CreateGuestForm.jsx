import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import styled from 'styled-components';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useCountries } from './useCountries.js';
import { useCreateGuest } from './useCreateGuest.js';

const StyledNationalityDiv = styled.div`
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

function CreateGuestForm({
  onCloseModal,
  guest,
  handleGuest,
  handleIsGuestFound,
  handleFormValue,
}) {
  const { isCreating, createGuest } = useCreateGuest();

  const { countries, isLoading } = useCountries();

  const { register, handleSubmit, formState, control, reset } = useForm();

  const { errors } = formState;

  if (isLoading) return <Spinner />;

  const countryOptions = countries
    ?.map((country) => {
      return {
        value: country.name.common,
        label: country.name.common,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label));

  const onSubmit = function (data) {
    const nationality = data.nationality.value;
    const countryFlag = countries.find(
      (country) => country.name.common === nationality
    ).flags.svg;

    createGuest(
      { ...data, nationality, countryFlag },
      {
        onSuccess: (data) => {
          handleGuest({ fullName: data.fullName });
          handleFormValue('fullName', data.fullName); //HACK: keeping Form in sync
          reset();
          handleIsGuestFound((isGuestFound) => !isGuestFound);
        },
      }
    );
  };

  return (
    <Form
      type={onCloseModal ? 'modal' : 'regular'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label='Full name' error={errors?.fullName?.message}>
        <Input
          type='text'
          id='fullName'
          disabled={isCreating}
          //   disabled //NOTE: alternative would be to lock that field to make sure it stays in sync with create booking form (fullName field)
          defaultValue={guest?.fullName}
          {...register('fullName', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label='Email address' error={errors?.email?.message}>
        <Input
          type='email'
          id='email'
          disabled={isCreating}
          {...register('email', {
            required: 'Email address is required',
            pattern: {
              // google: email regex JavaScript
              value: /\S+@\S+\.\S+/,
              message: 'Please specify a valid email',
            },
          })}
        />
      </FormRow>

      {/* <div
        style={{
          display: 'grid',
          gridTemplateColumns: '26.5rem 1fr 1fr',
          paddingTop: '1.2rem',
          paddingBottom: '1.2rem',
          borderBottom: '1px solid var(--color-grey-100)',
        }}
      > */}
      <StyledNationalityDiv>
        <label htmlFor='nationality'>Nationality</label>
        <Controller
          name='nationality'
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <span style={{ color: 'black' }}>
              <Select
                options={countryOptions}
                onChange={onChange}
                value={value}
                inputRef={ref}
                id='nationality'
                error={!!errors.nationality}
              />
            </span>
          )}
          rules={{ required: true }}
        />
        {errors.nationality && (
          <p style={{ color: 'red', paddingLeft: '1rem' }}>
            This field is required.
          </p>
        )}
      </StyledNationalityDiv>
      {/* </div> */}

      <FormRow label='National ID' error={errors?.nationalID?.message}>
        <Input
          type='text'
          disabled={isCreating}
          id='nationalID'
          {...register('nationalID', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          $variation='secondary'
          type='reset'
          disabled={isCreating}
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isCreating}>Add new guest</Button>
      </FormRow>
    </Form>
  );
}

export default CreateGuestForm;

CreateGuestForm.propTypes = {
  onCloseModal: PropTypes.func,
  guest: PropTypes.object,
  handleGuest: PropTypes.func.isRequired,
  handleIsGuestFound: PropTypes.func.isRequired,
  handleFormValue: PropTypes.func.isRequired,
};
