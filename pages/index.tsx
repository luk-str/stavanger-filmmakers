import { getWebsiteIntro, getFilmThumbnailData } from "../shared/lib/sanity";

import Metadata from "../components/Metadata";
import Intro from "../components/Intro/Intro";
import Events from "../components/Events/Events";
import Films from "../components/Films/Films";
import Members from "../components/Members/Members";
import Contact from "../components/Contact/Contact";
import { SanityDocument } from "@sanity/client";
import { FilmItem } from "../shared/types";

type Props = {
  introText: SanityDocument;
  filmThumbnailData: FilmItem[];
};

export const Home = ({ introText, filmThumbnailData }: Props) => {
  return (
    <>
      <Metadata />
      <Intro text={introText} />
      <Events />
      <Films filmThumbnailData={filmThumbnailData} />
      <Members />
      <Contact />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const introText = await getWebsiteIntro();
  const filmThumbnailData = await getFilmThumbnailData();

  return {
    props: {
      introText,
      filmThumbnailData,
    },
    revalidate: 1,
  };
}
