import { InferGetStaticPropsType } from "next";
import {
  getWebsiteIntro,
  getThumbnails,
  getMembers,
} from "../shared/lib/sanity";

import Metadata from "../components/Metadata";
import Intro from "../components/Intro/Intro";
import Events from "../components/Events/Events";
import Films from "../components/Films/Films";
import Members from "../components/Members/Members";
import Contact from "../components/Contact/Contact";

export const Home = ({
  introText,
  filmThumbnails,
  members,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata />
      <Intro text={introText} />
      <Events />
      <Films filmThumbnails={filmThumbnails} />
      <Members members={members} />
      <Contact />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const introText = await getWebsiteIntro();
  const filmThumbnails = await getThumbnails();
  const members = await getMembers();

  return {
    props: {
      introText,
      filmThumbnails,
      members,
    },
    revalidate: 1,
  };
}
