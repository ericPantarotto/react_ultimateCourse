'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

export default function Navigation({ session }) {
  const pathname = usePathname();

  const navLinks = [
    { href: '/cabins', name: 'Cabins' },
    { href: '/about', name: 'About' },
    { href: '/account', name: 'Guest area' },
  ];

  return (
    <nav className='z-10 text-xl'>
      <ul className='flex items-center gap-16'>
        {navLinks.map(({ href, name }) => {
          const isActive = pathname.includes(href);

          if (href === '/account' && session?.user?.image) {
            return (
              <li key={href}>
                <Link
                  key={href}
                  href='/account'
                  className={`hover:text-accent-400 flex items-center gap-4 transition-colors ${isActive ? 'text-accent-400 underline' : ''}`}
                >
                  <img
                    className='h-8 rounded-full'
                    src={session.user.image}
                    alt={session.user.name}
                    referrerPolicy='no-referrer'
                  />
                  <span>Guest area</span>
                </Link>
              </li>
            );
          }

          return (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-accent-400 transition-colors ${isActive ? 'text-accent-400 underline' : ''}`}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  session: PropTypes.shape({
    user: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
