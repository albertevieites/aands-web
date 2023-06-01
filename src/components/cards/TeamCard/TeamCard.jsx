import Image from 'next/image';

import { teamData } from '../../../data/team';

export default function TeamCard() {
	return (
		<div className='team__grid'>
			{teamData.map((data, key) => {
				return (
					<div key={key} className='team__card'>
						<Image
							className='team__image'
							src={data.img}
							alt={data.alt}
							width={150}
							height={150}
						/>
						<h4 className='team__name'>{data.name}</h4>
						<p>{data.description}</p>
					</div>
				);
			})}
		</div>
	);
}
