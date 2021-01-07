import Layout from "../components/layout/Layout";
import Head from "next/head";

export const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact | Stavanger Filmmakers</title>
      </Head>
      <Layout>
        <h2 style={{ minHeight: `80vh` }}>This is the contact page</h2>
      </Layout>
    </>
  );
};

export default Contact;
