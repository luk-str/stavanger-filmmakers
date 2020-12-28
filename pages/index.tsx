import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export const Home: React.FC = () => (
  <>
    <Head>
      <title>Stavanger Filmmakers</title>
    </Head>

    <Layout>
      <p>
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        sapiente eveniet, accusantium est enim soluta nemo sequi deleniti
        expedita architecto consequuntur exercitationem ab quis neque, ut,
        quidem sunt harum accusamus.{" "}
      </p>
    </Layout>
  </>
);

export default Home;
