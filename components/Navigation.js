import Link from "next/link";
import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__menuwrapper}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </nav>
    </>
  );
}
