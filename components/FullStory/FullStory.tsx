import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import styles from "./FullStory.module.css";
import { FiCornerDownLeft } from "react-icons/fi";

const FullStory = ({ text }) => {
  return (
    <>
      <Link href="/">
        <a className={styles.link}>
          <FiCornerDownLeft className={styles.icon__back} />
          Go Back
        </a>
      </Link>

      <article className={styles.container}>
        <h1>The Full Story</h1>

        <BlockContent blocks={text} />
      </article>
    </>
  );
};

export default FullStory;
