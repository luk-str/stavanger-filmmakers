import styles from "./Contact.module.css";
import { FiMail, FiPhone } from "react-icons/fi";

const Contact: React.FC = () => {
  return (
    <footer>
      <h4 className={styles.header}>Get in touch!</h4>

      <p className={styles.link__container}>
        <FiMail className={styles.icon} />
        <a
          href="mailto:stavangerfilmmakers@gmail.com"
          title="E-mail Stavanger Filmmakers Club"
          className={`${styles.link} ${styles.link__email}`}
        >
          stavangerfilmmakers@gmail.com
        </a>
      </p>

      <p className={styles.link__container}>
        <FiPhone className={styles.icon} />
        <a
          href="tel:+4790286691"
          title="Call Leo"
          className={`${styles.link} ${styles.link__phone}`}
        >
          +4790286691
        </a>
      </p>
    </footer>
  );
};

export default Contact;
