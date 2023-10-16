import Link from "next/link";

async function getBestSellerList() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/lists`, { cache: "no-store" })
  ).json();

  return results;
}

export default async function BestSellerList() {
  const bestSellerList = await getBestSellerList();

  return (
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
  );
}
