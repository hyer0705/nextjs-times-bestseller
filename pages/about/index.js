import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | The New York Times Best Seller</title>
      </Head>
      <main className="paper container">
        <h1>About US</h1>
        <p>
          Welcome to the official explorer for The New York Times Best Seller
          list expolorer.
        </p>
        <p>We hope you enjoy your stay!</p>
      </main>
    </>
  );
}
