import Metadata from "../../components/Metadata";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import {
  getMemberSlugs,
  getMemberBySlug,
  getContactInfo,
} from "../../shared/lib/sanity";
import MemberPage from "../../components/Members/MemberPage";
import Contact from "../../components/Contact/Contact";

const Member = ({
  member,
  contactInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata />
      <Head>
        <title>{member?.name} | Stavanger Filmmakers</title>
      </Head>

      {member && <MemberPage member={member} />}

      {contactInfo && <Contact contactInfo={contactInfo} />}
    </>
  );
};

export async function getStaticPaths() {
  const slugs = await getMemberSlugs();

  const paths = slugs.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const member = await getMemberBySlug(params.slug);
  const contactInfo = await getContactInfo();

  return {
    props: { member, contactInfo },
    revalidate: 1,
  };
}

export default Member;
