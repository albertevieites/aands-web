// DEPENDENCIES
import Image from 'next/image';

// RENDER
export default function FeatureSmallCard(props) {
	const { imgBg, imgIcn, title, text, className } = props;

	return (
		<div className='card--small'>
			<Image
				className={`card--small__bg ${className}`}
				src={imgBg}
				alt='circuitImage vector image'
			/>
			<div className='card--small__icon'>
				<Image src={imgIcn} alt='connectivity vector image' />
			</div>

			<div className='card--small__content'>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
		</div>
	);
}
