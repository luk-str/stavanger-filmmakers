import Head from "next/head";
import Events from "../components/Events/Events";

export const EventPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Events | Stavanger Filmmakers</title>
      </Head>
      <Events />
    </>
  );
};

export default EventPage;
