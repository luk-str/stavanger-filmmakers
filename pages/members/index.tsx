import Metadata from "../../components/Metadata";
import Members from "../../components/Members/Members";
import { getContactInfo, getMembers } from "../../shared/lib/sanity";
import type { Member } from "../../shared/types";
import Contact from "../../components/Contact/Contact";
import { InferGetStaticPropsType } from "next";

export const MembersIndex = ({
  members,
  contactInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Metadata />

    <main className="fullHeight">
      <Members members={members} />
    </main>

    <Contact contactInfo={contactInfo} />
  </>
);

export default MembersIndex;

export async function getStaticProps() {
  const members = await getMembers();
  const contactInfo = await getContactInfo();

  return {
    props: {
      members,
      contactInfo,
    },
    revalidate: 1,
  };
}
