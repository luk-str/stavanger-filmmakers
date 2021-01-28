import styles from "./Films.module.css";
import type { FilmItem } from "../../shared/types";

import FilmThumbnail from "./FilmThumbnail";

type Props = {
  filmThumbnails: FilmItem[];
};

const Films = ({ filmThumbnails }: Props) => {
  return (
    <article className={styles.container__main} id="films">
      <h2 className={styles.header}> Films </h2>
      <p className={styles.description}>Watch some of our productions</p>
      <section className={styles.thumbnails__container}>
        {filmThumbnails.map((film) => (
          <FilmThumbnail film={film} key={film.slug} />
        ))}
      </section>
    </article>
  );
};

export default Films;
