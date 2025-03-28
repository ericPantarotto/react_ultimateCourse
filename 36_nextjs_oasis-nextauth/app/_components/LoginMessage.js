import Link from 'next/link';

export default function LoginMessage() {
  return (
    <div className='bg-primary-800 grid'>
      <p className='self-center py-12 text-center text-xl'>
        Please{' '}
        <Link href='/login' className='text-accent-500 underline'>
          login
        </Link>{' '}
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}
