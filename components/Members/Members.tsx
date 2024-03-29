import { Member } from "../../shared/types";
import MemberCard from "./MemberCard";
import styles from "./Members.module.css";

type Props = {
  members: Member[];
};

const Members = ({ members }: Props) => {
  return (
    <article className={styles.container} id="members">
      <h2 className={styles.header}> Members </h2>
      <p className={styles.description}>Say hello to the crew</p>
      <section className={styles.cards__container}>
        {members.map((member) => (
          <MemberCard member={member} key={member.slug} />
        ))}
      </section>
    </article>
  );
};

export default Members;
