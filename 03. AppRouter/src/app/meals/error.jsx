'use client';
export default function Error({ error }) {
  console.log(error);
  return (
    <main className="error">
      <p>An Error Occurred!</p>
      <h1>{error.message}</h1>
    </main>
  );
}
