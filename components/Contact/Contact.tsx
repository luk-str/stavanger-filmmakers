import styles from "./Contact.module.css";
import { FiMail, FiPhone } from "react-icons/fi";
import type { ContactInfo } from "../../shared/types";

const Contact = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  return (
    <footer>
      <h4 className={styles.header}>{contactInfo.header}</h4>

      <p className={styles.link__container}>
        <FiMail className={styles.icon} />
        <a
          href={`mailto:${contactInfo.mail}`}
          title="E-mail Stavanger Filmmakers Club"
          className={`${styles.link} ${styles.link__email}`}
        >
          {contactInfo.mail}
        </a>
      </p>

      <p className={styles.link__container}>
        <FiPhone className={styles.icon} />
        <a
          href={`tel:${contactInfo.phone}`}
          title="Call Stavanger Filmmmakers Club"
          className={`${styles.link} ${styles.link__phone}`}
        >
          {contactInfo.phone}
        </a>
      </p>
    </footer>
  );
};

export default Contact;
