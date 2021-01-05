import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <section className={styles.navbar}>
      <Link href="/">
        <a>
          <h1 className={styles.logo}>
            Stavanger
            <br />
            Filmmakers
          </h1>
        </a>
      </Link>
      <nav className={styles.nav}>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/contact">
          <a>contact</a>
        </Link>
        <Link href="/events">
          <a>events</a>
        </Link>
      </nav>
    </section>
  );
};

export default Navbar;
