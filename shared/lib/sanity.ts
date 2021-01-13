import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = sanityClient({
  projectId: "buq8gsbj",
  dataset: "production",
  token: "",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);

export const getWebsiteIntro = async (): Promise<{}> => {
  const query = `*[_type == "websiteContent" && contentTag == "intro"].content[0]`;

  return client
    .fetch(query)
    .then((data) => data)
    .catch((err) => console.log(err));
};

export const getFullStory = async (): Promise<{}> => {
  const query = `*[_type == "websiteContent" && contentTag == "fullStory"].content[0]`;

  return client
    .fetch(query)
    .then((data) => data)
    .catch((err) => console.log(err));
};

export const getFilmThumbnailData = async (): Promise<
  { title: string; genre: "string"; slug: "string"; image: SanityImageSource }[]
> => {
  const query = `*[_type == "film"] | order(releaseDate desc)
    { title, genre, "slug": slug.current, "image" : poster }`;

  return client
    .fetch(query)
    .then((data) => data)
    .catch((err) => console.log(err));
};
