import { InferGetStaticPropsType } from "next";
import {
  getContactInfo,
  getFilmBySlug,
  getFilmSlugs,
} from "../../shared/lib/sanity";
import FilmPage from "../../components/Films/FilmPage";
import Metadata from "../../components/Metadata";
import Head from "next/head";
import Contact from "../../components/Contact/Contact";

const Film = ({
  film,
  contactInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata />
      <Head>
        <title>{film.title} | Stavanger Filmmakers</title>
      </Head>
      <FilmPage film={film} />

      <Contact contactInfo={contactInfo} />
    </>
  );
};

export async function getStaticPaths() {
  const slugs = await getFilmSlugs();

  const paths = slugs.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const film = await getFilmBySlug(params.slug);
  const contactInfo = await getContactInfo();

  return { props: { film, contactInfo }, revalidate: 1 };
}

export default Film;
