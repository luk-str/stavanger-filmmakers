import Metadata from "../components/Metadata";
import Intro from "../components/Intro";
import Events from "../components/Events";
import Films from "../components/Films";
import Members from "../components/Members";
import Contact from "../components/Contact";

export const Home: React.FC = () => (
  <>
    <Metadata />
    <Intro />
    <Events />
    <Films />
    <Members />
    <Contact />
  </>
);

export default Home;
