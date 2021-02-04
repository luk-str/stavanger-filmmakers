import styles from "./MemberPage.module.css";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import { urlFor } from "../../shared/lib/sanity";
import type { Member } from "../../shared/types";
import { FiCornerDownLeft, FiInstagram, FiLink } from "react-icons/fi";
import {
  SiFacebook,
  SiImdb,
  SiLinkedin,
  SiSpotify,
  SiTwitter,
  SiVimeo,
  SiYoutube,
} from "react-icons/si";

const MemberPage = ({ member }: { member: Member }) => {
  function getIconForLink(websiteName: string): JSX.Element {
    switch (websiteName) {
      case "imdb":
        return <SiImdb />;
      case "youtube":
        return <SiYoutube />;
      case "spotify":
        return <SiSpotify />;
      case "linkedin":
        return <SiLinkedin />;
      case "instagram":
        return <FiInstagram />;
      case "facebook":
        return <SiFacebook />;
      case "twitter":
        return <SiTwitter />;
      case "vimeo":
        return <SiVimeo />;
      default:
        return <FiLink />;
    }
  }

  return (
    <main>
      <Link href="/#members">
        <a className={styles.link}>
          <FiCornerDownLeft className={styles.icon__back} />
          Go Back
        </a>
      </Link>

      <article className={styles.main__container}>
        <img
          src={urlFor(member.image).width(300).height(300).url()}
          width="300"
          height="300"
          className={styles.image}
          alt={`Portrait photograph of ${member.name}`}
        />

        <h1 className={styles.name}>{member.name}</h1>
        <h2 className={styles.role}>{member.role}</h2>

        <section className={styles.bio}>
          <BlockContent blocks={member.bio} />
        </section>

        {member.links && (
          <section>
            <h3 className={styles.links__header}>other websites</h3>

            <ul className={styles.links__container}>
              {member.links.map((link, index) => (
                <li key={index} className={styles.links__item}>
                  <a
                    href={link.url}
                    title={`Link to ${member.name}'s ${link.websiteName}. Opens in new tab`}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {getIconForLink(link.websiteName)}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </main>
  );
};

export default MemberPage;
