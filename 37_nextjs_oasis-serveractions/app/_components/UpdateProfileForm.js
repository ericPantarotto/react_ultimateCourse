'use client';

// import { useState } from "react";
import PropTypes from 'prop-types';
import { useFormStatus } from 'react-dom';
import { updateGuest } from '../_lib/actions';

export default function UpdateProfileForm({ children, guest }) {
  const { fullName, email, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className='bg-primary-900 flex flex-col gap-6 px-12 py-8 text-lg'
    >
      <div className='space-y-2'>
        <label>Full Name</label>
        <input
          name='fullName'
          defaultValue={fullName}
          disabled
          className='bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <label>Email address</label>
        <input
          name='email'
          defaultValue={email}
          disabled
          className='bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='nationality'>Where are you from?</label>
          <img
            src={countryFlag}
            alt='Country flag'
            className='h-5 rounded-sm'
          />
        </div>

        {children}
      </div>

      <div className='space-y-2'>
        <label htmlFor='nationalID'>National ID number</label>
        <input
          defaultValue={nationalID}
          name='nationalID'
          className='bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm'
        />
      </div>

      <div className='flex items-center justify-end gap-6'>
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className='bg-accent-500 text-primary-800 hover:bg-accent-600 px-8 py-4 font-semibold transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'
      disabled={pending}
    >
      {pending ? 'updating' : 'Update profile'}
    </button>
  );
}

UpdateProfileForm.propTypes = {
  children: PropTypes.node,
  guest: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    nationality: PropTypes.string,
    nationalID: PropTypes.string,
    countryFlag: PropTypes.string,
  }).isRequired,
};
