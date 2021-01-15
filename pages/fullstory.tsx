import Head from "next/head";
import Contact from "../components/Contact/Contact";
import FullStory from "../components/FullStory/FullStory";
import { getContactInfo, getFullStory } from "../shared/lib/sanity";

export const FullStoryPage = ({ fullStoryText, contactInfo }) => {
  return (
    <>
      <Head>
        <title>Full Story | Stavanger Filmmakers</title>
      </Head>

      <main>
        <FullStory text={fullStoryText} />
      </main>

      <Contact contactInfo={contactInfo} />
    </>
  );
};

export default FullStoryPage;

export async function getStaticProps() {
  const fullStoryText = await getFullStory();
  const contactInfo = await getContactInfo();

  return {
    props: {
      fullStoryText,
      contactInfo,
    },
    revalidate: 1,
  };
}
