import styles from "./Films.module.css";
import type { FilmItem } from "../../shared/types";

import FilmThumbnail from "./FilmThumbnail";

type Props = {
  filmThumbnails: FilmItem[];
};

const Films = ({ filmThumbnails }: Props) => {
  return (
    <>
      <h2> Films </h2>
      {filmThumbnails.map((film) => (
        <FilmThumbnail film={film} key={film.slug} />
      ))}
    </>
  );
};

export default Films;
