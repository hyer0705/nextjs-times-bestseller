import Link from "next/link";

export default function Navigation() {
  return (
    <nav className={`border fixed split-nav`}>
      <div className="nav-brand">
        <h4>
          <Link href="/">Home</Link>
        </h4>
      </div>
      <div className="nav-brand">
        <h4>
          <Link href="/about">About</Link>
        </h4>
      </div>
    </nav>
  );
}
