export default function getFakePromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 4000);
  });
}
