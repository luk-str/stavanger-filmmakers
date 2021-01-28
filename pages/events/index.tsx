import Link from "next/link";
import Head from "next/head";

export const EventPage: React.FC = () => (
  <>
    <Head>
      <title>Events | Stavanger Filmmakers</title>
    </Head>
    <Link href="/#events">
      <a>Go back</a>
    </Link>
    <h1>This will be the events page 😊</h1>
  </>
);

export default EventPage;
