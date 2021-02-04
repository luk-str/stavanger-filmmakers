import Link from "next/link";
import { Event } from "../../shared/types";
import styles from "./Events.module.css";

type Props = {
  events: Event[];
};

const Events: React.FC<Props> = ({ events }) => {
  function formatDate(dateString: string): string {
    const date = new Date(dateString);

    const [day, month, year] = date.toLocaleDateString().split("/");
    const [hours, minutes] = date.toLocaleTimeString().split(":");

    return `${day}.${month}.${year}, ${hours}:${minutes}`;
  }

  return (
    <section className={styles.container} id="events">
      <h2 className={styles.header}> Upcoming Events </h2>

      {events.length > 0 ? (
        <ul className={styles.list}>
          {events.map((event) => (
            <li key={event.date}>
              <a
                href={event.link}
                title={`External website for event ${event.title}. Opens in new tab`}
                rel="noopener norefferer"
                target="_blank"
              >
                {event.title}
                <span className={styles.date}>
                  {formatDate(event.date)} - {event.place}
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noEvents}>
          There are currently no upcoming events 😭
          <br />
          Please check back later!
        </p>
      )}
    </section>
  );
};

export default Events;
