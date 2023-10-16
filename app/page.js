import BestSellerList from "../components/BestSellerList";

export default async function IndexPage() {
  return (
    <main className="paper container">
      <h2>The New York Times Best Seller Explorer.</h2>
      <div className="collapseible-body">
        <BestSellerList />
      </div>
    </main>
  );
}
