import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import {
  getMemberSlugs,
  getMemberBySlug,
  urlFor,
} from "../../shared/lib/sanity";
import BlockContent from "@sanity/block-content-to-react";

const Member = ({ member }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Link href="/">
        <a>Go back</a>
      </Link>

      <figure>
        <img src={urlFor(member.image).width(300).url()} />
      </figure>

      <h3>name: {member.name}</h3>
      <p> role: {member.role}</p>
      <p> bio:</p>
      <BlockContent blocks={member.bio} />
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
