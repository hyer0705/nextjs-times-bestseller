export default function DetailPage({ res: { results: bookList } }) {
  const { display_name: displayName, books } = bookList || {};
  console.log(displayName, books);

  return (
    <main className="paper">
      <h2>{displayName}</h2>
      <style jsx>{`
        h2 {
          text-align: center;
        }
      `}</style>
    </main>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const res = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)
  ).json();
  return { props: { res } };
}
