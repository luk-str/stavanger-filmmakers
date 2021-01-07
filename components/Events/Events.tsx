import Link from "next/link";
import styles from "./Events.module.css";

const Events: React.FC = () => {
  return (
    <>
      <h2> Upcoming Events </h2>
      <ul className={styles.list}>
        <Link href="/events">
          <li>
            Filmmaking club: Let's make/discuss films together!
            <span className={styles.date}>06.01.2020 - Sølvberget</span>
          </li>
        </Link>

        <Link href="/events">
          <li>
            Filmmaking at Kunst Rom Arbeid!
            <span className={styles.date}>12.02.2020 - Kunst Rom Arbeid</span>
          </li>
        </Link>

        <Link href="/events">
          <li>
            Filmmaking club: Let's make/discuss films together!
            <span className={styles.date}>08.03.2020 - Sølvberget</span>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default Events;
