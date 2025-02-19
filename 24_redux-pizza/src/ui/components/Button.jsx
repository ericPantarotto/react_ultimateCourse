import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, to, type = 'primary' }) {
  const base =
    'focus: inline-block rounded-full bg-yellow-400  font-semibold tracking-wide text-stone-700 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed text-sm';
  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'focus: inline-block rounded-full bg-transparent  font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 focus:text-stone-800 focus:bg-stone-300 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return <button className={styles[type]}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
