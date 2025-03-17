'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Counter({ users }) {
  const [count, setCount] = useState(users.length);

  // console.log(users); NOTE: will be logged in browser's console as it's a client component

  return (
    <div>
      <p>There are {users.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}

Counter.propTypes = {
  users: PropTypes.array.isRequired,
};
