import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "buq8gsbj",
  dataset: "production",
  token: "",
  useCdn: true,
});

export const getWebsiteIntro = async () => {
  const query = `*[_type == "websiteContent" && contentTag == "intro"].content`;

  return client
    .fetch(query)
    .then((data) => data)
    .catch((err) => console.log(err));
};
