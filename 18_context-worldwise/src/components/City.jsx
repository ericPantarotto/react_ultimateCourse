import { useParams, useSearchParams } from 'react-router-dom';
function City() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  console.log(setSearchParams);

  return (
    <>
      <h1>City {id}</h1>
      <h2>
        Position: {lat}, {lng}
      </h2>
    </>
  );
}

export default City;
