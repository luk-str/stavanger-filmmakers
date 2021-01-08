import Link from "next/link";
import Head from "next/head";

export const EventPage: React.FC = () => (
  <>
    <Head>
      <title>Events | Stavanger Filmmakers</title>
    </Head>
    <Link href="/">
      <a>Go back</a>
    </Link>
    <h1>Events Page</h1>
  </>
);

export default EventPage;
