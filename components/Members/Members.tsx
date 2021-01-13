import { Member } from "../../shared/types";
import MemberCard from "./MemberCard";
import styles from "./Members.module.css";

type Props = {
  members: Member[];
};

const Members = ({ members }: Props) => {
  return (
    <article>
      <h1> Members </h1>
      {members.map((member) => (
        <MemberCard member={member} key={member.slug} />
      ))}
    </article>
  );
};

export default Members;
