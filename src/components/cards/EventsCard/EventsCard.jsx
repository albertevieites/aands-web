import Image from 'next/image';

function EventsCard(props) {
	const { key, image, title, description, location, date } = props;

	return (
		<div className='events--card' key={key}>
			<div className='events--card__image'>
				<Image src={image} alt={`${title} photo`} width={1000} height={500} />
			</div>
			<div className='events--card__content'>
				<div className="events--card__content--title">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
				<div className='events--card__content--date'>
					<h4>{location}</h4>
					<span>{date}</span>
				</div>
			</div>
		</div>
	);
}

export default EventsCard;
