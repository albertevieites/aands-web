import Image from 'next/image';
import { useState } from 'react';

export default function ProductDetails(props) {
	const { product, longDescription, img, featureImg } = props.details;
	const [selectedImg, setSelectedImg] = useState(img[0]);

	const handleClick = newImg => {
		setSelectedImg(newImg);
	};

	return (
			<div className='product--details'>
				<div className='product--details__carrousel'>
					{img.map(image => {
						return (
							<Image
								key={image.id}
								src={image.src}
								alt={image.alt}
								width={1000}
								height={1000}
								className={selectedImg.id === image.id ? "active" : ''}
								onClick={() => handleClick(image)}
							/>
						);
					})}
				</div>

				<div className='product--details__image'>
					<Image
						src={selectedImg.src}
						alt={selectedImg.alt}
						width={1000}
						height={1000}
					/>
				</div>

				<div className='product--details__content'>
					<div className='product--details__content--text'>
						<h3>{product}</h3>
						<p>{longDescription}</p>
					</div>

					<div className='product--details__content--features'>
						{featureImg.map(icon => {
							return (
								<div
									key={icon.id}
									className='product--details__content--icon'
								>
									<Image src={icon.src} alt={icon.alt} width={30} height={30} />
									<p>{icon.text}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
	);
}
