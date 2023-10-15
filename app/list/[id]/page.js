import BookCard from "../../../components/BookCard";

export async function generateMetadata({ params }) {
  const id = params.id;

  return {
    title: id,
  };
}

export default async function DetailPage({ params }) {
  return (
    <main className="paper">
      <BookCard params={params} />
    </main>
  );
}
