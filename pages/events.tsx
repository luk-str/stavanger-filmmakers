import Link from "next/link";
import Head from "next/head";
import Events from "../components/Events/Events";

export const EventPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Events | Stavanger Filmmakers</title>
      </Head>
      <Link href="/">
        <a>Go back</a>
      </Link>
      <Events />
    </>
  );
};

export default EventPage;
