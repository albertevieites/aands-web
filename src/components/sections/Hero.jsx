import Image from 'next/image';
import ButtonProducts from '../tokens/buttons/ProductsBtn';

import isometric from '/public/images/assets/isometric.svg';

export default function Hero({className, dataSpeed}) {
	return (
		<section
			className={`hero ${className}`}
			data-speed={dataSpeed}
		>
			<div className='hero__message'>
				<h1>Leading solutions for<br></br>
					the <span>lift</span> industry
				</h1>
				<p>
					We offer a wide range of <span>products</span> and services <br></br> to
					maintain your <span>lift </span>
					in the best condition.
				</p>
			</div>
			<ButtonProducts />
					<Image
						src={isometric}
						alt= "isometric pattern"
						priority
					/>
		</section>
	)
}
