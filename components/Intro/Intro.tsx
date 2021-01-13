import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import styles from "./Intro.module.css";

const Intro = ({ text }) => {
  return (
    <header>
      <h1>
        {" "}
        Stavanger
        <br /> Filmmakers <br />
        Club{" "}
      </h1>

      <BlockContent blocks={text} />

      <Link href="/fullstory">
        <a>Here's the full story.</a>
      </Link>
    </header>
  );
};

export default Intro;
