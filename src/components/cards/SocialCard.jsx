import Image from 'next/image';

import { socialData } from '../../data/social';

export default function SocialCard() {
	return (
		<>
			{socialData.map((data, key) => {
				return (
					<div key={key} className='social--card'>
						<div className='social--card__comment'>
							<p className='social--card--paragraph'>{data.comment}</p>
						</div>

						<div className='social--card__user'>
							<div className='social--card__user--persona'>
								<Image
									className='social--card__image'
									src={data.img}
									alt={data.alt}
									width={50}
									height={50}
								/>
								<h5 className='social--card__name'>{data.name}</h5>
							</div>

							<div className='social--card__user--social'>
								<Image
									src={data.socialImg}
									alt='google icon'
									width={15}
									height={15}
								/>
								<Image
									src={data.stars && data.stars}
									alt='stars'
									width={60}
									height={16}
								/>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}
