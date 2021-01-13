import Link from "next/link";
import { urlFor } from "../../shared/lib/sanity";
import type { FilmItem } from "../../shared/types";
import styles from "./FilmThumbnail.module.css";

type Props = {
  film: FilmItem;
};

const FilmThumbnail = ({ film }: Props) => {
  return (
    <Link href={`/films/${film.slug}`}>
      <button className={styles.container}>
        <div className={styles.title__container}>
          <h3 className={styles.title}> {film.title} </h3>
          <p className={styles.genre}>{film.genre}</p>
        </div>

        <img
          src={urlFor(film.image).width(250).url()}
          className={styles.thumbnail}
        />
      </button>
    </Link>
  );
};

export default FilmThumbnail;
