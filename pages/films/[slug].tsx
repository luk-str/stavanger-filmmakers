import { InferGetStaticPropsType } from "next";
import { getFilmBySlug, getFilmSlugs } from "../../shared/lib/sanity";
import FilmPage from "../../components/Films/FilmPage";
import Metadata from "../../components/Metadata";
import Head from "next/head";

const Film = ({ film }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata />
      <Head>
        <title>{film.title} | Stavanger Filmmakers</title>
      </Head>
      <FilmPage film={film} />
    </>
  );
};

export async function getStaticPaths() {
  const slugs = await getFilmSlugs();

  const paths = slugs.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const film = await getFilmBySlug(params.slug);

  return { props: { film } };
}

export default Film;
