import Link from "next/link";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <section>
          <h5>🎉 Copyright something 2021</h5>
        </section>
        <section>
          <ul>
            <li>check this</li>
            <li>maybe that?</li>
            <li>something</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
