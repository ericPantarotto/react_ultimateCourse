'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
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

          return (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-accent-400 transition-colors ${isActive ? 'text-accent-400' : ''}`}
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
