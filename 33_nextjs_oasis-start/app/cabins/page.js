// import Counter from '../_components/Counter';
import Counter from '@/app/_components/Counter';

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  // console.log(data); NOTE: will be logged in the server terminal & browser's console since recent Next.js versions

  return (
    <div>
      <h1>Cabins page</h1>

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Counter users={data} />
    </div>
  );
}
