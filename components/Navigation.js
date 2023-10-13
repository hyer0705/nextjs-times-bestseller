import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav className={`border fixed split-nav`}>
        <div className="nav-brand">
          <h4>
            <Link href="/">
              <a>Home</a>
            </Link>
          </h4>
        </div>
        <div className="nav-brand">
          <h4>
            <Link href="/about">
              <a>About</a>
            </Link>
          </h4>
        </div>
      </nav>
    </>
  );
}
