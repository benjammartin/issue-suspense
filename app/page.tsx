import Image from 'next/image';
import getFakePromise from './fake-promise';

export const dynamic = 'force-dynamic'

export default async function Home() {
  await getFakePromise();
  return <>Done...</>;
}
