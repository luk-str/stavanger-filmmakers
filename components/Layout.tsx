import Head from "next/head";
import Link from "next/link";

export const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="website description" />
    </Head>
    <header>
      <h1>Test website</h1>
      <h4>This is a tagline</h4>
    </header>
    <main>{children}</main>
    <footer>
      <h5>This is footer content.</h5>
      <Link href="/contact">
        <a title="Go to contact page">Click on the link for contact</a>
      </Link>
      <br />
      <br />
      <Link href="/">
        <a title="Go Home">Go back home</a>
      </Link>
    </footer>
  </>
);

export default Layout;
