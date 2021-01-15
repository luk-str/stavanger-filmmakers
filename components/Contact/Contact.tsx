import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <footer>
      <p>
        <a
          href="mailto:stavangerfilmmakers@gmail.com"
          title="E-mail Stavanger Filmmakers Club"
          className={`${styles.link} ${styles.link__email}`}
        >
          stavangerfilmmakers@gmail.com
        </a>
      </p>
      <p>
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
