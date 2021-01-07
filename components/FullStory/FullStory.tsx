import Link from "next/link";
import styles from "./Info.module.css";

const FullStory: React.FC = () => {
  return (
    <article>
      <Link href="/">
        <a>Go back</a>
      </Link>
      <h1>The Full Story</h1>

      <p>
        Stavanger Filmmakers Club was started by Leo X. Robertson, a guy who
        owned a phone and wanted to start making films. So he did. The first
        ones were made with his phone, starring only himself, but when he
        realised that filmmaking was essentially a collaborative medium, he
        started the Stavanger Filmmakers Club to find like-minded people who
        wanted to make cool things together and learn more about filmmaking by
        making films.
        <br />
        <br />
        The club has an emphasis on low budget DIY filmmaking to ensure maximum
        accessibility: there are monetary or skill barriers as far as possible.
        Anyone is always welcome to join: they need only bring themselves and a
        positive attitude!
      </p>
    </article>
  );
};

export default FullStory;
