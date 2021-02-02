import Link from "next/link";
import { urlFor } from "../../shared/lib/sanity";
import type { Member } from "../../shared/types";
import styles from "./MemberCard.module.css";

type Props = {
  member: Member;
};

const MemberCard = ({ member }: Props) => {
  return (
    <Link href={`/members/${member.slug}`}>
      <button className={styles.container}>
        <img
          src={urlFor(member.image)
            .width(700)
            .height(700)
            .saturation(-100)
            .url()}
          className={styles.image}
          alt={`Portrait photograph of ${member.name}`}
        />
        <div className={styles.name__container}>
          <h3 className={styles.name}> {member.name} </h3>
          <p className={styles.role}>{member.role}</p>
        </div>
      </button>
    </Link>
  );
};

export default MemberCard;
