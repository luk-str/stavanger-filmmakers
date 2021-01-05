import Link from "next/link";
import styles from "./Welcome.module.css";

const Welcome: React.FC = () => {
  return (
    <article className={styles.content}>
      <section className={styles.text__container}>
        <h2 className={styles.text__header}>
          Welcome to Stavanger Filmmakers Club ✌🏻
        </h2>
        <p className={styles.text__copy}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          accusantium blanditiis dicta architecto illum! Aliquid, ullam.
          Obcaecati, amet.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <Link href="/#info">
          <a>
            <button className={`${styles.button} ${styles.button_info}`}>WHAT</button>
          </a>
        </Link>
        <Link href="/#members">
          <a>
            <button className={`${styles.button} ${styles.button_members}`}>WHO</button>
          </a>
        </Link>
      </section>
      <section className={styles.image__container}>
        <img
          className={styles.image}
          src="https://picsum.photos/id/54/1000/800"
        ></img>
      </section>
    </article>
  );
};

export default Welcome;
