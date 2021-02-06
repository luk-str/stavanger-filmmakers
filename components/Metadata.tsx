import Head from "next/head";

const Metadata: React.FC = () => {
  return (
    <Head>
      <title>Stavanger Filmmakers Club</title>

      <meta
        name="description"
        content="This is the place for all film lovers, filmmakers and film buffs from the Stavanger area. We meet to discuss, learn from one another and experiment. Interested in filmmaking? Join us now!"
      />
      <meta name="author" content="https://luk-str.dev" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="Stavanger Filmmakers Club" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="This is the place for all film lovers, filmmakers and film buffs from the Stavanger area. We meet to discuss, learn from one another and experiment. Interested in filmmaking? Join us now!"
      />
      <meta
        property="og:image"
        content="https://stavangerfilmmakers.com/img/og_image.jpeg"
      />
      <meta
        property="og:image:alt"
        content="Preview of Stavanger Filmmakers Club's film productions"
      />

      <link
        rel="preload"
        href="/fonts/sporting-grotesque/Sporting_Grotesque-Regular_web.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/sporting-grotesque/Sporting_Grotesque-Bold_web.woff2"
        as="font"
        crossOrigin=""
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>
  );
};

export default Metadata;
