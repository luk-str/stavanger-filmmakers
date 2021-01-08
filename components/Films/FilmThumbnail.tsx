import type { FilmItem } from "../../shared/types";
import styles from "./FilmThumbnail.module.css";

type Props = {
  film: FilmItem;
};

const FilmThumbnail = ({ film }: Props) => {
  return (
    <button className={styles.container}>
      <div className={styles.title__container}>
        <h3 className={styles.title}> {film.title} </h3>
        <p className={styles.genre}>{film.genre}</p>
      </div>

      <img src={film.imageUrl} className={styles.thumbnail} />
    </button>
  );
};

export default FilmThumbnail;
