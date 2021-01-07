import Head from "next/head";
import FullStory from "../components/FullStory/FullStory";

export const FullStoryPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Full Story | Stavanger Filmmakers</title>
      </Head>
      <FullStory />
    </>
  );
};

export default FullStoryPage;
