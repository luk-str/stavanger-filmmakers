import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar__container}>
      <Link href="/">
        <a>
          <h1 className={styles.logo}>
            Stavanger
            <br />
            Filmmakers
            <br />
            Club
          </h1>
        </a>
      </Link>
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
  );
};

export default Navbar;
