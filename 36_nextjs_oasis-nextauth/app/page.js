import bg from '@/public/bg.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className='mt-24'>
      <Image
        src={bg}
        fill
        placeholder='blur'
        quality={80}
        className='object-cover object-top'
        alt='Mountains and forests with two cabins'
      />

      <div className='relative z-10 text-center'>
        <h1 className='text-primary-50 mb-10 text-8xl font-normal tracking-tight'>
          Welcome to paradise.
        </h1>
        <Link
          href='/cabins'
          className='text-primary-800 hover:bg-accent-600 bg-accent-500 px-8 py-6 text-lg font-semibold transition-all'
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
