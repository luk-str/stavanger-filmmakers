import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { getFilmBySlug, getFilmSlugs } from "../../shared/lib/sanity";

const Film = ({ film }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Link href="/">
        <a>Go back</a>
      </Link>

      <h3>title: {film.title} </h3>
      <p>genre: {film.genre}</p>
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
