import PropTypes from 'prop-types';
import { useState } from 'react';

// Stateful
export function ListBox({ children }) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? '–' : '+'}
      </button>
      {isOpen1 && children}
    </div>
  );
}
ListBox.propTypes = {
  children: PropTypes.node.isRequired,
};
