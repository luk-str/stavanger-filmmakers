import styles from "./Films.module.css";
import type { FilmItem } from "../../shared/types";

import FilmThumbnail from "./FilmThumbnail";

type Props = {
  filmThumbnailData: FilmItem[];
};

const Films = ({ filmThumbnailData }: Props) => {
  return (
    <>
      <h2> Films </h2>
      {filmThumbnailData.map((film) => (
        <FilmThumbnail film={film} key={film.slug} />
      ))}
    </>
  );
};

export default Films;
