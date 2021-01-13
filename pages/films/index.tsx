import Metadata from "../../components/Metadata";
import Films from "../../components/Films/Films";
import { getThumbnails } from "../../shared/lib/sanity";
import type { FilmItem } from "../../shared/types";

type Props = {
  filmThumbnails: FilmItem[];
};

export const FilmsIndex = ({ filmThumbnails }) => (
  <>
    <Metadata />
    <Films filmThumbnails={filmThumbnails} />
  </>
);

export default FilmsIndex;

export async function getStaticProps() {
  const filmThumbnails = await getThumbnails();

  return {
    props: {
      filmThumbnails,
    },
    revalidate: 1,
  };
}
