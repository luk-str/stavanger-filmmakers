import sanityClient, { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { FilmItem, Member, ContactInfo, Event } from "../types";

const client = sanityClient({
  projectId: "buq8gsbj",
  dataset: "production",
  token: "",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

const fetchFromSanity = async (query: string) => {
  return client
    .fetch(query)
    .then((data) => data)
    .catch((err) => console.log(err));
};

export const fetchWebsiteIntro = (): Promise<SanityDocument> => {
  const query = `*[_type == "websiteContent" && contentTag == "intro"].content[0]`;
  return fetchFromSanity(query);
};

export const fetchOurStory = (): Promise<SanityDocument> => {
  const query = `*[_type == "websiteContent" && contentTag == "fullStory"].content[0]`;
  return fetchFromSanity(query);
};

export const fetchContactInfo = async (): Promise<ContactInfo> => {
  const query = `*[_type == "contactInfo"]{contentTag, content}`;
  const data = await fetchFromSanity(query);
  let result = {};
  data.forEach(
    (item: { contentTag: string; content: string }) =>
      (result[item.contentTag] = item.content)
  );
  return result as ContactInfo;
};

export const fetchThumbnails = (): Promise<FilmItem[]> => {
  const query = `*[_type == "film"] | order(releaseDate desc) { title, genre, "slug": slug.current, "image" : poster }`;
  return fetchFromSanity(query);
};

export const urlFor = (source: SanityImageSource) => builder.image(source);

export const fetchMembers = (): Promise<Member[]> => {
  const query = `*[_type == "person"] { name, role, "slug": slug.current, image, bio } | order(_createdAt asc)`;
  return fetchFromSanity(query);
};

export const fetchFilmSlugs = (): Promise<{ slug: string }[]> => {
  const query = `*[_type == "film"] { "slug": slug.current }`;
  return fetchFromSanity(query);
};

export const fetchFilmBySlug = (slug: string): Promise<FilmItem> => {
  const query = `*[_type == "film" && slug.current == "${slug}"] { title, genre, description, castMembers, crewMembers, videoLink, externalLink, "slug": slug.current, "image" : poster, releaseDate }[0]`;
  return fetchFromSanity(query);
};

export const fetchMemberSlugs = (): Promise<{ slug: string }[]> => {
  const query = `*[_type == "person"] {"slug": slug.current}`;
  return fetchFromSanity(query);
};

export const fetchMemberBySlug = (slug: string): Promise<Member> => {
  const query = `*[_type == "person" && slug.current == "${slug}"] { name, role, bio, image, "links": links[]{websiteName, url} }[0]`;
  return fetchFromSanity(query);
};

export const fetchEvents = (): Promise<Event[]> => {
  const dateNow = new Date().toISOString();
  const query = `*[_type == "event" && date >= "${dateNow}"]{title, place, date, link} | order(date)`;
  return fetchFromSanity(query);
};
