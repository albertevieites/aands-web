import EventsCard from '../../cards/EventsCard/EventsCard';

import { eventsData } from '../../../data/events';

function Events() {
	console.log(eventsData);
	return (
		<section className='events'>
			<div className='events__container'>
				<h2>Events</h2>
				<div className='events__container--grid'>
					{eventsData.map(eachCard => (
						<EventsCard
							key={eachCard.id}
							image={eachCard.img}
							title={eachCard.title}
							description={eachCard.description}
							location={eachCard.location}
							date={eachCard.date}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Events;
