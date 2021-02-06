import Metadata from "../../components/Metadata";
import Films from "../../components/Films/Films";
import { fetchContactInfo, fetchThumbnails } from "../../shared/lib/sanity";
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
  const filmThumbnails = await fetchThumbnails();
  const contactInfo = await fetchContactInfo();

  return {
    props: {
      filmThumbnails,
      contactInfo,
    },
    revalidate: 1,
  };
}
