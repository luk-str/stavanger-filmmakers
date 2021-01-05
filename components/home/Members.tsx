import styles from "./Members.module.css";

const Members: React.FC = () => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h2>Who is this?</h2>
      </header>
      <section className={styles.members__container}>
        <div className={styles.member}>
          <img
            src="https://picsum.photos/id/40/200"
            className={styles.member__image}
          />
          <h5 className={styles.member__name}>John John</h5>
          <p className={styles.member__description}>
            Explicabo aliquam itaque accusamus labore! Ratione, voluptate
          </p>
        </div>
        <div className={styles.member}>
          <img
            src="https://picsum.photos/id/91/220"
            className={styles.member__image}
          />
          <h5 className={styles.member__name}>Abigail Abigail</h5>
          <p className={styles.member__description}>
            Delectus autem unde perferendis dicta explicabo
          </p>
        </div>
        <div className={styles.member}>
          <img
            src="https://picsum.photos/id/40/250"
            className={styles.member__image}
          />
          <h5 className={styles.member__name}>Christina Christina</h5>
          <p className={styles.member__description}>
            Architecto iste consectetur obcaecati itaque quibusdam facilis
          </p>
        </div>
      </section>
    </article>
  );
};

export default Members;
