import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import { extractYoutubeId } from "../../shared/lib/video";
import styles from "./FilmPage.module.css";
import type { FilmItem } from "../../shared/types";

const FilmPage = ({ film }: { film: FilmItem }) => {
  return (
    <>
      <Link href="/">
        <a>Go back</a>
      </Link>

      <section className={styles.videoContainer}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${extractYoutubeId(
            film.videoLink
          )}?rel=0&modestbranding=1&showinfo=0&color=white`}
          frameBorder="0"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.video}
        ></iframe>
      </section>

      <h3>title: {film.title} </h3>
      <p>genre: {film.genre}</p>

      <BlockContent blocks={film.description} />
    </>
  );
};

export default FilmPage;
