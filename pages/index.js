import Link from "next/link";

export default function IndexPage({ res: { results: bestSellerList } }) {
  return (
    <main className="paper container">
      <h2>The New York Times Best Seller Explorer.</h2>
      <div className="collapseible-body">
        <div className="row child-borders">
          {bestSellerList.map((book, index) => (
            <Link key={index} href={`/list/${book.list_name_encoded}`}>
              <a className="paper-btn margin">{book.display_name} &rarr;</a>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const res = await (await fetch(`http://localhost:3000/api/lists`)).json();

  return { props: { res } };
}
