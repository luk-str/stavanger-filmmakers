import { getWebsiteContent } from "../shared/lib/sanity";

import Metadata from "../components/Metadata";
import Intro from "../components/Intro/Intro";
import Events from "../components/Events/Events";
import Films from "../components/Films/Films";
import Members from "../components/Members/Members";
import Contact from "../components/Contact/Contact";

export const Home: React.FC = () => {
  getWebsiteContent();

  return (
    <>
      <Metadata />
      <Intro />
      <Events />
      <Films />
      <Members />
      <Contact />
    </>
  );
};

export default Home;
