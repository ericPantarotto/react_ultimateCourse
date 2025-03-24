'use client';

import { useFormStatus } from 'react-dom';

import PropTypes from 'prop-types';

export default function SubmitButton({
  children,
  pendingLabel,
  isDisabled = false,
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className='bg-accent-500 text-primary-800 hover:bg-accent-600 px-8 py-4 font-semibold transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'
      disabled={pending || isDisabled}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  pendingLabel: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};
