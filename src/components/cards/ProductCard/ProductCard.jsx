import Image from 'next/image';

import ButtonDetails from '../../tokens/buttons/DetailsBtn/DetailsBtn';

import { productData } from '../../../data/products';

export default function ProductCard() {
	return (
		<>
			{/* Product Card Div */}
			{productData.map(product => {
				return (
					<div key={product.id} className='product--card'>
						<div className='product--card__image'>
							<Image
								src={product.img[0].src}
								alt={product?.img[0].alt}
								width={1000}
								height={1000}
							/>
						</div>

						<div className='product--card__content'>
							<h3>{product.product}</h3>
							<p>{product.description}</p>
						</div>

						<div className='product--card__button'>
							<ButtonDetails link={`/products/${product.code}`} />
						</div>
					</div>
				);
			})}
		</>
	);
}
