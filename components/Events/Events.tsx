import Link from "next/link";
import styles from "./Events.module.css";

const Events: React.FC = () => {
  return (
    <section className={styles.container} id="events">
      <h2 className={styles.header}> Upcoming Events </h2>
      <ul className={styles.list}>
        <li>
          <Link href="/events">
            <a>
              Filmmaking club: Let's make/discuss films together!
              <span className={styles.date}>06.01.2020 - Sølvberget</span>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/events">
            <a>
              Filmmaking at Kunst Rom Arbeid!
              <span className={styles.date}>12.02.2020 - Kunst Rom Arbeid</span>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/events">
            <a>
              Filmmaking club: Let's make/discuss films together!
              <span className={styles.date}>08.03.2020 - Sølvberget</span>
            </a>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Events;
