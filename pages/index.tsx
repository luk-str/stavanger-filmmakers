import Layout from "../components/layout/Layout";
import Metadata from "../components/Metadata";
import Welcome from "../components/home/Welcome";
import Info from "../components/home/Info";

export const Home: React.FC = () => (
  <>
    <Metadata />
    <Layout>
      <main>
        <Welcome />
        <Info />
      </main>
    </Layout>
  </>
);

export default Home;
