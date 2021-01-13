import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import styles from "./Info.module.css";

const FullStory = ({ text }) => {
  return (
    <article>
      <Link href="/">
        <a>Go back</a>
      </Link>
      <h1>The Full Story</h1>

      <BlockContent blocks={text} />
    </article>
  );
};

export default FullStory;
