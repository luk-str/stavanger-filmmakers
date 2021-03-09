import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import { extractYoutubeId } from "../../shared/lib/video";
import styles from "./FilmPage.module.css";
import type { FilmItem } from "../../shared/types";
import { FiCornerDownLeft } from "react-icons/fi";
import WebsiteIconLink from "../common/WebsiteIconLink";

const FilmPage = ({ film }: { film: FilmItem }) => {
  return (
    <div className={styles.pageHeight}>
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

      <Link href="/#films">
        <a className={styles.link}>
          <FiCornerDownLeft className={styles.icon__back} />
          Go Back
        </a>
      </Link>

      <main className={styles.container__main}>
        <article>
          <h1 className={styles.title}>{film.title}</h1>
          <h2 className={styles.genre}>
            {film.genre}
            <span className={styles.date}>
              {new Date(film.releaseDate).getFullYear()}
            </span>
          </h2>

          <section className={styles.description}>
            <BlockContent blocks={film.description} />
          </section>

          {film.links && (
            <section>
              <h3 className={styles.links__header}>other websites</h3>

              <ul className={styles.links__container}>
                {film.links.map((link, index) => (
                  <li key={index} className={styles.links__item}>
                    <WebsiteIconLink link={link} title={film.title} />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </main>
    </div>
  );
};

export default FilmPage;
