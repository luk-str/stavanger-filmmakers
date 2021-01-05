import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />

    <main>{children}</main>

    <Footer />
  </>
);

export default Layout;
