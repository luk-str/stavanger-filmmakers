import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "buq8gsbj",
  dataset: "production",
  token: "",
  useCdn: true,
});

export const getWebsiteContent = async () => {
  const query = `*[_type == "websiteContent"] { contentTag, content }`;

  client.fetch(query).then((data) => {
    console.log(data);
  });
};
