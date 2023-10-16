import BookCard from "../../../components/BookCard";

function generateDisplayName(id) {
  return id
    .split("-")
    .map((s) => s.slice(0, 1).toUpperCase() + s.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const id = params.id;
  return {
    title: generateDisplayName(id),
  };
}

export default async function DetailPage({ params }) {
  return (
    <main className="paper">
      <h2 style={{ textAlign: "center" }}>{generateDisplayName(params.id)}</h2>
      <BookCard params={params} />
    </main>
  );
}
