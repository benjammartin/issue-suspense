import Image from 'next/image';
import getFakePromise from './fake-promise';

export default async function Home() {
  await getFakePromise();
  return <>Done...</>;
}
