import styles from "./MemberPage.module.css";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import { urlFor } from "../../shared/lib/sanity";
import type { Member } from "../../shared/types";
import { FiCornerDownLeft } from "react-icons/fi";

const MemberPage = ({ member }: { member: Member }) => {
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
      </article>
    </main>
  );
};

export default MemberPage;
