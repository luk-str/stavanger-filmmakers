import Link from "next/link";
import styles from "./Intro.module.css";

const Intro: React.FC = () => {
  return (
    <header>
      <h1>
        {" "}
        Stavanger
        <br /> Filmmakers <br />
        Club{" "}
      </h1>
      <p>
        This is a quick introduction to the club. Two or three sentences to get
        people interested.
        <br />
        <Link href="/fullstory">
          <a>Here's the full story.</a>
        </Link>
      </p>
    </header>
  );
};

export default Intro;
