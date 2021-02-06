import Metadata from "../../components/Metadata";
import Members from "../../components/Members/Members";
import { fetchContactInfo, fetchMembers } from "../../shared/lib/sanity";
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
  const members = await fetchMembers();
  const contactInfo = await fetchContactInfo();

  return {
    props: {
      members,
      contactInfo,
    },
    revalidate: 1,
  };
}
