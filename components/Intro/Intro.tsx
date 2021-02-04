import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import styles from "./Intro.module.css";

const Intro = ({ text }) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        Stavanger
        <br /> Filmmakers <br />
        Club
      </h1>

      <section className={styles.text__container}>
        <BlockContent blocks={text} />

        <Link href="/fullstory">
          <a className={styles.link}>Here's our story.</a>
        </Link>
      </section>
    </header>
  );
};

export default Intro;
