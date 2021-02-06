import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Contact from "../components/Contact/Contact";
import OurStory from "../components/FullStory/OurStory";
import { fetchContactInfo, fetchOurStory } from "../shared/lib/sanity";

export const FullStoryPage = ({
  ourStoryText,
  contactInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Full Story | Stavanger Filmmakers</title>
      </Head>

      <main>
        <OurStory text={ourStoryText} />
      </main>

      <Contact contactInfo={contactInfo} />
    </>
  );
};

export default FullStoryPage;

export async function getStaticProps() {
  const ourStoryText = await fetchOurStory();
  const contactInfo = await fetchContactInfo();

  return {
    props: {
      ourStoryText,
      contactInfo,
    },
    revalidate: 1,
  };
}
