import Metadata from "../../components/Metadata";
import Films from "../../components/Films/Films";
import { getContactInfo, getThumbnails } from "../../shared/lib/sanity";
import Contact from "../../components/Contact/Contact";
import { InferGetStaticPropsType } from "next";

export const FilmsIndex = ({
  filmThumbnails,
  contactInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Metadata />

    <main className="fullHeight">
      <Films filmThumbnails={filmThumbnails} />
    </main>

    <Contact contactInfo={contactInfo} />
  </>
);

export default FilmsIndex;

export async function getStaticProps() {
  const filmThumbnails = await getThumbnails();
  const contactInfo = await getContactInfo();

  return {
    props: {
      filmThumbnails,
      contactInfo,
    },
    revalidate: 1,
  };
}
