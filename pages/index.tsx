import { InferGetStaticPropsType } from "next";
import {
  getWebsiteIntro,
  getThumbnails,
  getMembers,
  getContactInfo,
  fetchEvents,
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
  contactInfo,
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata />

      <main>
        <Intro text={introText} />
        <Events events={events} />
        <Films filmThumbnails={filmThumbnails} />
        <Members members={members} />
      </main>

      <Contact contactInfo={contactInfo} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const introText = await getWebsiteIntro();
  const filmThumbnails = await getThumbnails();
  const members = await getMembers();
  const contactInfo = await getContactInfo();
  const events = await fetchEvents();

  return {
    props: {
      introText,
      filmThumbnails,
      members,
      contactInfo,
      events,
    },
    revalidate: 1,
  };
}
