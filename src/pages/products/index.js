import { useState } from 'react';

import ProductCard from '../../components/cards/ProductCard/ProductCard';
import ProductDetails from '../../components/cards/ProductDetails/ProductDetails';
import Separator from '../../components/tokens/decorators/Separator/Separator';


export default function Products() {
	const [selectedId, setSelectedId] = useState('');

	return (
		<>
			<Separator />
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
		</>
	);
}
