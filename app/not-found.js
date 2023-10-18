import { Link } from "next/link";

export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className="paper container">
      <h1>What are you doing here...?</h1>
      <Link href="/">Go Home</Link>
    </div>
  );
}
