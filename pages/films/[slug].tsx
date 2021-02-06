import { InferGetStaticPropsType } from "next";
import {
  fetchContactInfo,
  fetchFilmBySlug,
  fetchFilmSlugs,
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
        <title>{film?.title} | Stavanger Filmmakers</title>
      </Head>

      {film && <FilmPage film={film} />}

      {contactInfo && <Contact contactInfo={contactInfo} />}
    </>
  );
};

export async function getStaticPaths() {
  const slugs = await fetchFilmSlugs();

  const paths = slugs.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const film = await fetchFilmBySlug(params.slug);
  const contactInfo = await fetchContactInfo();

  return {
    props: { film, contactInfo },
    revalidate: 5,
  };
}

export default Film;
