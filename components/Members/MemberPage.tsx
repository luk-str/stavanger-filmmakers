import styles from "./MemberPage.module.css";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import { urlFor } from "../../shared/lib/sanity";
import type { Member } from "../../shared/types";

const MemberPage = ({ member }: { member: Member }) => {
  return (
    <main>
      <Link href="/#members">
        <a>Go back</a>
      </Link>

      <article className={styles.container__main}>
        <figure>
          <img src={urlFor(member.image).width(300).url()} />
        </figure>

        <h3>name: {member.name}</h3>
        <p> role: {member.role}</p>
        <p> bio:</p>
        <BlockContent blocks={member.bio} />
      </article>
    </main>
  );
};

export default MemberPage;
