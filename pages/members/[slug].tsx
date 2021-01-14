import Metadata from "../../components/Metadata";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { getMemberSlugs, getMemberBySlug } from "../../shared/lib/sanity";
import MemberPage from "../../components/Members/MemberPage";

const Member = ({ member }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Metadata />
      <Head>
        <title>{member.name} | Stavanger Filmmakers</title>
      </Head>

      <MemberPage member={member} />
    </>
  );
};

export async function getStaticPaths() {
  const slugs = await getMemberSlugs();

  const paths = slugs.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const member = await getMemberBySlug(params.slug);

  return { props: { member } };
}

export default Member;
