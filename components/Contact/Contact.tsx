import styles from "./Contact.module.css";
import { FiMail, FiPhone, FiFacebook } from "react-icons/fi";
import type { ContactInfo } from "../../shared/types";

const Contact = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  return (
    <footer>
      <h4 className={styles.header}>{contactInfo.header}</h4>

      <p className={styles.link__container}>
        <a
          href="https://www.facebook.com/groups/StavangerFilmmakers"
          title="Stavanger Filmmakers Club Facebook Group"
          className={`${styles.link} ${styles.link__email}`}
        >
          <FiFacebook className={styles.icon} />
          Facebook group
        </a>
      </p>
      <p className={styles.link__container}>
        <a
          href={`mailto:${contactInfo.mail}`}
          title="E-mail Stavanger Filmmakers Club"
          className={`${styles.link} ${styles.link__email}`}
        >
          <FiMail className={styles.icon} />
          {contactInfo.mail}
        </a>
      </p>

      <p className={styles.link__container}>
        <a
          href={`tel:${contactInfo.phone}`}
          title="Call Stavanger Filmmmakers Club"
          className={`${styles.link} ${styles.link__phone}`}
        >
          <FiPhone className={styles.icon} />
          {contactInfo.phone}
        </a>
      </p>
    </footer>
  );
};

export default Contact;
