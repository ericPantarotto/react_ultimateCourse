'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  // console.log(
  //   "it's a client component, this log will appear in the browser, not in the server console.",
  // );

  const displayText = isExpanded
    ? children
    : children.split(' ').slice(0, 40).join(' ') + '...';

  return (
    <span>
      {displayText}{' '}
      <button
        className='text-primary-700 border-primary-700 border-b pb-1 leading-3'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </span>
  );
}

export default TextExpander;

TextExpander.propTypes = {
  children: PropTypes.node.isRequired,
};
