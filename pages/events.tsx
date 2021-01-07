import Layout from "../components/layout/Layout";
import Head from "next/head";

export const Events: React.FC = () => {
  return (
    <>
      <Head>
        <title>Events | Stavanger Filmmakers</title>
      </Head>
      <Layout>
        <main>
          <h2 style={{ minHeight: `80vh` }}>This is the events page</h2>
        </main>
      </Layout>
    </>
  );
};

export default Events;
