import styles from "./Contact.module.css";
import { FiMail, FiPhone, FiFacebook } from "react-icons/fi";
import type { ContactInfo } from "../../shared/types";

const Contact = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  return (
    <footer>
      <h4>{contactInfo.header}</h4>

      <article className={styles.main__container}>
        <section>
          <p className={styles.link__container}>
            <a
              href="https://www.facebook.com/groups/StavangerFilmmakers"
              title="Stavanger Filmmakers Club Facebook Group. Opens in new tab"
              className={styles.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiFacebook className={styles.icon} />
              facebook group
            </a>
          </p>

          <p className={styles.link__container}>
            <a
              href={`mailto:${contactInfo.mail}`}
              title="E-mail Stavanger Filmmakers Club"
              className={styles.link}
            >
              <FiMail className={styles.icon} />
              {contactInfo.mail}
            </a>
          </p>

          <p className={styles.link__container}>
            <a
              href={`tel:${contactInfo.phone}`}
              title="Call Stavanger Filmmmakers Club"
              className={styles.link}
            >
              <FiPhone className={styles.icon} />
              {contactInfo.phone}
            </a>
          </p>
        </section>

        <section className={styles.developer}>
          <p>
            Code and design by{" "}
            <a
              href="https://lukstr.dev"
              title="Homepage of this website's developer. Opens in new tab."
              rel="noreferrer noopener"
              target="_blank"
            >
              Lukas Strociak
            </a>
          </p>
        </section>
      </article>
    </footer>
  );
};

export default Contact;
