import Image from 'next/image';

import ButtonDetails from '../tokens/buttons/DetailsBtn';

import { productData } from '../../data/products';

export default function ProductCard() {

	return (
		<>
			{/* Product Card Div */}
			{productData.map((product) => {
				return (
					<div key={product.id} className='product--card'>
						<div className='product--card__image--container'>
							<div className="product--card__image--img">
								<Image
									className='product--card__image'
									src={product.img[0].src}
									alt={product?.img[0].alt}
									width={1000}
									height={1000}
								/>
							</div>
						</div>

						<h3>{product.product}</h3>
						<p>{product.description}</p>

						<div className="product--card__button">
							<ButtonDetails link={`/products/${product.code}`}  />
						</div>
					</div>
				)})}
		</>
	);
};
