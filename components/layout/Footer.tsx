import Link from "next/link";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <section className={styles.copyright}>
          <h5>🎉 Copyright something 2021</h5>
        </section>
        <nav className={styles.nav}>
          <Link href="">
            <a>facebook</a>
          </Link>
          <Link href="">
            <a>e-mail</a>
          </Link>
          <Link href="">
            <a>something</a>
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
