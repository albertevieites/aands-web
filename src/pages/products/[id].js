// import Image from "next/image";
import { useRouter } from 'next/router';
import Line from 'src/components/tokens/Line';
import Separator from 'src/components/tokens/Separator';
import ProductDetails from '../../components/cards/ProductDetails';

import { productData } from '../../data/products';

export default function DetailsPage() {
	const router = useRouter();
	const { id } = router.query;
	// Double check id meaning

	if (!router.isReady) {
		return <div>Loading...</div>;
	}

	const details = productData.filter(detail => {
		return detail.code === id;
	})[0];

	return (
		<>
			<Separator />
			<div className='dynamic--product'>
				<ProductDetails details={details} />
			</div>
			<Line />
		</>
	);
}
