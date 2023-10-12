import Link from "next/link";

export default function IndexPage({ res: { results: bookList } }) {
  return (
    <main className="paper container">
      <h2>The New York Times Best Seller Explorer.</h2>
      <div className="collapseible-body">
        <div className="row child-borders">
          {bookList.map((book) => (
            <Link href={`/list/book.list_name_encoded`}>
              <a className="paper-btn margin">{book.display_name} &rarr;</a>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await (
    await fetch("https://books-api.nomadcoders.workers.dev/lists")
  ).json();

  return { props: { res } };
}
