import Head from "next/head";

const Metadata: React.FC = () => {
  return (
    <Head>
      <title>Stavanger Filmmakers</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="website description" />

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
