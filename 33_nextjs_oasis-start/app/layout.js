import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';
import '@/app/_styles/globals.css';
import { Josefin_Sans } from 'next/font/google';
import PropTypes from 'prop-types';

export const metadata = {
  title: {
    template: '%s - The Wild Oasis',
    default: 'Welcome - The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright by the Wild Oasis</footer>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
