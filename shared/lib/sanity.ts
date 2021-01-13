import sanityClient, { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { FilmItem, Member } from "../types";

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

export const getWebsiteIntro = (): Promise<SanityDocument> => {
  const query = `*[_type == "websiteContent" && contentTag == "intro"].content[0]`;

  return fetchFromSanity(query);
};

export const getFullStory = (): Promise<SanityDocument> => {
  const query = `*[_type == "websiteContent" && contentTag == "fullStory"].content[0]`;

  return fetchFromSanity(query);
};

export const getThumbnails = (): Promise<FilmItem[]> => {
  const query = `*[_type == "film"] | order(releaseDate desc)
    { title, genre, "slug": slug.current, "image" : poster }`;

  return fetchFromSanity(query);
};

export const urlFor = (source: SanityImageSource) => builder.image(source);

export const getMembers = (): Promise<Member[]> => {
  const query = `*[_type == "person"]
    {name, role, "slug": slug.current, image, bio}`;

  return fetchFromSanity(query);
};

export const getFilmSlugs = (): Promise<{ slug: string }[]> => {
  const query = `*[_type == "film"] {"slug": slug.current}`;

  return fetchFromSanity(query);
};

export const getFilmBySlug = (slug: string): Promise<FilmItem> => {
  const query = `*[_type == "film" && slug.current == "${slug}"]
  { title, genre, description, castMembers, crewMembers, videoLink, externalLink, "slug": slug.current, "image" : poster, releaseDate }[0]`;

  return fetchFromSanity(query);
};
