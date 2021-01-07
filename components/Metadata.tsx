import Head from "next/head";

const Metadata: React.FC = () => {
  return (
    <Head>
      <title>Stavanger Filmmakers</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="website description" />

      <link
        rel="preload"
        href="/fonts/happy-times/happy-times-NG_italic_master_web.woff2"
        as="font"
        crossOrigin=""
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
    </Head>
  );
};

export default Metadata;
