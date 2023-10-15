"use client";

// export async function generateMetadata({ params }) {
//   const id = params.id;

//   return {
//     title: id,
//   };
// }

export default async function DetailPage({ params }) {
  const { results: bookList } = await (
    await fetch(`http://localhost:3000/api/list/${params.id}`, {
      cache: "no-store",
    })
  ).json();

  const { display_name: displayName, books } = bookList || {};

  return (
    <main className="paper">
      <h2>{displayName}</h2>
      <div className="row flex-spaces child-borders">
        {books.map((book, index) => (
          <div
            key={`${index}_${book.rank}_${book.title}`}
            className="card margin"
            style={{ width: "330px" }}
          >
            <img
              title={book.title}
              alt={book.title}
              src={book.book_image}
              style={{ height: "500px" }}
            />
            <div className="card-body">
              <h4 className="card-title">{book.title}</h4>
              <h5 className="card-subtitle">{book.author}</h5>
              <p>{book.description}</p>
              <a
                target="_blank"
                href={book.amazon_product_url}
                className="paper-btn"
              >
                Buy now &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        h2 {
          text-align: center;
        }
      `}</style>
    </main>
  );
}
