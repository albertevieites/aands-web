import { useState } from 'react';
import ProductDetails from 'src/components/cards/ProductDetails';

import ProductCard from '../../components/cards/ProductCard';

export default function Products() {
	const [selectedId, setSelectedId] = useState('');

	return (
		<div className='products'>
			<ProductCard selectedId={selectedId} setSelectedId={setSelectedId} />

			{/* <ProductDetails /> */}
			<>
				{selectedId && (
					<div
						onClick={() => setSelectedId(null)}
						className='layout-mini-modal-backdrop'
					>
					<ProductDetails />
					</div>
				)}
			</>
		</div>
	);
}
