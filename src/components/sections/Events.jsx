import EventsCard from "../cards/EventsCard";

export default function Events() {
	return (
		<section className="events" id="events">
			<div className='events__container'>
				<h2>Events</h2>
        <EventsCard />
			</div>
		</section>
	)
}