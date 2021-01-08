import styles from "./Films.module.css";
import filmData from "../../shared/data/films.json";
import type { FilmItem } from "../../shared/types";

import FilmThumbnail from "./FilmThumbnail";

const Films: React.FC = () => {
  const films: FilmItem[] = filmData.data;

  return (
    <>
      <h2> Films </h2>
      {films.map((film, index) => (
        <FilmThumbnail film={film} key={index} />
      ))}
    </>
  );
};

export default Films;
