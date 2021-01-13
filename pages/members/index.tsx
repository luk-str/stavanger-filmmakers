import Metadata from "../../components/Metadata";
import Members from "../../components/Members/Members";
import { getMembers } from "../../shared/lib/sanity";
import type { Member } from "../../shared/types";

type Props = {
  members: Member[];
};

export const MembersIndex = ({ members }: Props) => (
  <>
    <Metadata />
    <Members members={members} />
  </>
);

export default MembersIndex;

export async function getStaticProps() {
  const members = await getMembers();

  return {
    props: {
      members,
    },
    revalidate: 1,
  };
}
