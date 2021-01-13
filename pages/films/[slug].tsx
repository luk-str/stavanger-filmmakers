import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { getFilmBySlug, getFilmSlugs, urlFor } from "../../shared/lib/sanity";
import BlockContent from "@sanity/block-content-to-react";

const Film = ({ film }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Link href="/">
        <a>Go back</a>
      </Link>

      <figure>
        <img src={urlFor(film.image).width(500).url()} />
      </figure>

      <h3>title: {film.title} </h3>
      <p>genre: {film.genre}</p>

      <BlockContent blocks={film.description} />

      <a href={`${film.videoLink}`}>Watch on YouTube</a>
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
