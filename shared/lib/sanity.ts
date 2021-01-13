import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { FilmItem } from "../types";

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

export const getWebsiteIntro = (): Promise<{}> => {
  const query = `*[_type == "websiteContent" && contentTag == "intro"].content[0]`;

  return fetchFromSanity(query);
};

export const getFullStory = (): Promise<{}> => {
  const query = `*[_type == "websiteContent" && contentTag == "fullStory"].content[0]`;

  return fetchFromSanity(query);
};

export const getThumbnails = (): Promise<FilmItem[]> => {
  const query = `*[_type == "film"] | order(releaseDate desc)
    { title, genre, "slug": slug.current, "image" : poster }`;

  return fetchFromSanity(query);
};

export const urlFor = (source: SanityImageSource) => builder.image(source);

export const getMembers = (): Promise<any> => {
  const query = `*[_type == "person"]
    {name, role, "slug": slug.current, image, bio}`;
    
  return fetchFromSanity(query);
};
