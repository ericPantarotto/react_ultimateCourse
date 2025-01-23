import PropTypes from 'prop-types';

// Structural
export function Main({ children }) {
  return (
    <main className='main'>
      {children}
    </main>
  );
}
Main.propTypes = {
  children: PropTypes.node.isRequired,
};
