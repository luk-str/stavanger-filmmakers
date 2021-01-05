import Layout from "../components/layout/Layout";
import Metadata from "../components/Metadata";
import Welcome from "../components/home/Welcome";
import Info from "../components/home/Info";
import Members from "../components/home/Members";

export const Home: React.FC = () => (
  <>
    <Metadata />
    <Layout>
      <main>
        <Welcome />
        <Info />
        <Members />
      </main>
    </Layout>
  </>
);

export default Home;
