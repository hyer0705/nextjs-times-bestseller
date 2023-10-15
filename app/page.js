import Link from "next/link";

export default async function IndexPage() {
  const { results: bestSellerList } = await (
    await fetch(`http://localhost:3000/api/lists`, { cache: "no-store" })
  ).json();

  return (
    <main className="paper container">
      <h2>The New York Times Best Seller Explorer.</h2>
      <div className="collapseible-body">
        <div className="row child-borders">
          {bestSellerList.map((book, index) => (
            <Link
              className="paper-btn margin"
              key={index}
              href={`/list/${book.list_name_encoded}`}
            >
              {book.display_name} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
