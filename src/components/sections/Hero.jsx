import ButtonProducts from '../tokens/buttons/ProductsBtn';

export default function Hero() {
	return (
		<section className='hero'>
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
		</section>
	)
}
