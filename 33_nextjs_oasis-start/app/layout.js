import '@/app/_styles/globals.css';
import { Josefin_Sans } from 'next/font/google';
import PropTypes from 'prop-types';
import Header from './_components/Header';

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
        className={`${josefin.className} bg-primary-950 text-primary-100 relative flex min-h-screen flex-col antialiased`}
      >
        <Header />

        <div className='grid flex-1 px-8 py-12'>
          <main className='mx-auto w-full max-w-7xl'>{children}</main>
        </div>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
