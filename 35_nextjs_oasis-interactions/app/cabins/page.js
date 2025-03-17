import Loading from '@/app/cabins/loading';
import { Suspense } from 'react';
import CabinList from '../_components/CabinList';

// export const revalidate = 0; //NOTE: Dynamic page
export const revalidate = 3600; //NOTE: Incremental Static Regeneration

export const metadata = {
  title: 'Cabins',
};

export default function Page() {
  return (
    <div>
      <h1 className='text-accent-400 mb-5 text-4xl font-medium'>
        Our Luxury Cabins
      </h1>
      <p className='text-primary-200 mb-10 text-lg'>
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <Suspense fallback={<Loading />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
