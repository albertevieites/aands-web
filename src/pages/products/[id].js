// import Image from "next/image";
import { useRouter } from 'next/router';
import ProductDetails from '../../components/cards/productDetails';

import { productData } from '../../data/products';

export default function DetailsPage() {
	const router = useRouter();
	const { id } = router.query;

	if (!router.isReady) {
		return <div>Loading...</div>;
	}

	const details = productData.filter(detail => {
		return detail.id === Number(id);
	})[0];

	return (
			<div className='dynamic--product'>
				<ProductDetails details={details} />
			</div>
	);
}
