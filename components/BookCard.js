import { ErrorBoundary } from "react-error-boundary";

export default async function BookCard({ params }) {
  const { results: bookList } = await (
    await fetch(`/api/list/${params.id}`, {
      cache: "no-store",
    })
  ).json();

  const { books } = bookList || {};

  return (
    <div className="row flex-spaces child-borders">
      <ErrorBoundary fallback={<Error />}>
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
      </ErrorBoundary>
    </div>
  );
}
