// import Link from 'next/link';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1>The Wild Oasis. Welcome to paradise.</h1>;
      {/* <a href='/cabins'>Explore luxury cabins</a> */}
      {/* <Link href='/cabins'>Explore luxury cabins</Link> */}
    </div>
  );
}
