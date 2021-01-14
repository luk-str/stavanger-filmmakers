import Head from "next/head";
import FullStory from "../components/FullStory/FullStory";
import { getFullStory } from "../shared/lib/sanity";

export const FullStoryPage = ({ fullStoryText }) => {
  return (
    <>
      <Head>
        <title>Full Story | Stavanger Filmmakers</title>
      </Head>
      <main>
        <FullStory text={fullStoryText} />
      </main>
    </>
  );
};

export default FullStoryPage;

export async function getStaticProps() {
  const fullStoryText = await getFullStory();

  return {
    props: {
      fullStoryText,
    },
    revalidate: 1,
  };
}
