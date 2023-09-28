// DEPENDENCIES
import Image from 'next/image';

// COMPONENTS
import ButtonDetails from '@/components/tokens/buttons/DetailsBtn/DetailsBtn';

// RENDER
export default function ProductCard(props) {
	const { key, product, description, image, code } = props;

	const lastImage = image.length -1;
	console.log(lastImage);

	return (
		<div key={key} className='product--card'>
			<div className='product--card__image'>
				<Image
					src={image[lastImage].src}
					alt={image[lastImage].alt}
					width={1000}
					height={1000}
				/>
			</div>

			<div className='product--card__content'>
				<h3>{product}</h3>
				<p>{description}</p>
			</div>

			<div className='product--card__button'>
				<ButtonDetails link={`/products/${code}`} />
			</div>
		</div>
	);
}
