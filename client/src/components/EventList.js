import { Link } from "react-router-dom";
import { FormatDate } from "./index";


export function EventList({ event }) {
  return (
    <Link
      key={event.id}
      className="card link"
      to={`/events/${event.id}`}
    >
      <div className="card_head">
        <FormatDate date={event.date} />
        <div className="main">
          <h2 className="name_small"><span>{event.name}</span></h2>
          <p className="name_large"><span>{event.Place.name}</span></p>
        </div>
      </div>
    </Link>
  );
}