import Head from "next/head";

export default function DetailPage({ error, res: { results: bookList } }) {
  if (error) {
    return (
      <>
        <Head>
          <title>NotFound... | The New York Times Best Seller</title>
        </Head>
        <main className="paper">
          <h2>{error.title}</h2>
        </main>
        {/**
         * To Do
         * Redirecting to Home in 3 seconds... 구현하기~
         */}
      </>
    );
  }

  const { display_name: displayName, books } = bookList || {};

  return (
    <>
      <Head>
        <title>{displayName} | The New York Times Best Seller</title>
      </Head>
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
    </>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const res = await (
    await fetch(`http://localhost:3000/api/list/${id}`)
  ).json();

  const error =
    res.status === "ERROR"
      ? { title: res.errors[0], status: res.status }
      : false;

  return { props: { error, res } };
}
