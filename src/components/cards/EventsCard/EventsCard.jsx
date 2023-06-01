import Image from "next/image"

import { eventsData } from "../../../data/events"

export default function EventsCard() {
  return (
    <>
      {
        eventsData.map((event) => {
          return (
            <div className="events--card" key={event.title}>
              <Image
                src={event.img}
                alt={`${event.title} photo`}
                width={1000}
                height={500}
              />
              <div className="events--card__content">
                <div className="events--card__content--invisible"></div>
                <div className="events--card__content--text">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
                <div className="events--card__content--loc">
                  <div className="events--card__date">
                    <h4>{event.location}</h4>
                    <p>{event.date}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )
      }
    </>
  )
}
