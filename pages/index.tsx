import { getWebsiteIntro } from "../shared/lib/sanity";

import Metadata from "../components/Metadata";
import Intro from "../components/Intro/Intro";
import Events from "../components/Events/Events";
import Films from "../components/Films/Films";
import Members from "../components/Members/Members";
import Contact from "../components/Contact/Contact";

export const Home = ({ intro }) => {

  return (
    <>
      <Metadata />
      <Intro />
      <pre>{JSON.stringify(intro)}</pre>
      <Events />
      <Films />
      <Members />
      <Contact />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const intro = await getWebsiteIntro();

  return {
    props: {
      intro,
    },
  };
}
