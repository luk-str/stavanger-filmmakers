import Link from "next/link";
import styles from "./Intro.module.css";

const Intro: React.FC = () => {
  return (
    <article>
      <h1> Stavanger Filmmakers Club </h1>
      <p>
        This is a quick introduction to the club. Two or three sentences to get
        people interested.
        <br />
        <Link href="/fullstory">
          <a>Here's the full story.</a>
        </Link>
      </p>
    </article>
  );
};

export default Intro;
