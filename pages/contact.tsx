import Layout from "../components/layout/Layout";
import Head from "next/head";

export const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact | Stavanger Filmmakers</title>
      </Head>
      <Layout>
        <h2>This is the contact info</h2>
        <p>Read more of the Lorem ipsum dolor sit amet.</p>
      </Layout>
    </>
  );
};

export default Contact;
