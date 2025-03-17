import CabinCard from '@/app/_components/CabinCard';
import { PropTypes } from 'prop-types';
// import { unstable_noStore } from 'next/cache';
import { getCabins } from '../_lib/data-service';

export default async function CabinList({ filter }) {
  // unstable_noStore(); //NOTE: with partial pre-rendering

  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins;
  if (filter === 'small')
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === 'medium')
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
    );
  if (filter === 'large')
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  if (filter === 'all' || !['all', 'small', 'medium', 'large'].includes(filter))
    displayedCabins = cabins;

  return (
    <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14'>
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

CabinList.propTypes = {
  filter: PropTypes.string.isRequired,
};
