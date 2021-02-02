import styles from "./MemberPage.module.css";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import { urlFor } from "../../shared/lib/sanity";
import type { Member } from "../../shared/types";
import {
  FiCornerDownLeft,
  FiExternalLink,
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";
import { SiImdb, SiLinkedin, SiSpotify, SiTwitter } from "react-icons/si";

const MemberPage = ({ member }: { member: Member }) => {
  function getIconForLink(websiteName: string): JSX.Element {
    let icon = <FiExternalLink />;

    switch (websiteName) {
      case "imdb":
        icon = <SiImdb />;
        break;
      case "youtube":
        icon = <FiYoutube />;
        break;
      case "spotify":
        icon = <SiSpotify />;
        break;
      case "linkedin":
        icon = <SiLinkedin />;
        break;
      case "instagram":
        icon = <FiInstagram />;
        break;
      case "facebook":
        icon = <FiFacebook />;
        break;
      case "twitter":
        icon = <SiTwitter />;
        break;
    }

    return icon;
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

        {/* <ul className={styles.links__container}>
          {member.links.map((link, index) => (
            <li key={index} className={styles.links__item}>
              <a
                href={link.url}
                title={`Link to ${member.name}'s ${link.websiteName}. Opens in new tab`}
                rel="noreferrer noopener"
                target="blank"
              >
                {getIconForLink(link.websiteName)}
              </a>
            </li>
          ))}
        </ul> */}
      </article>
    </main>
  );
};

export default MemberPage;
