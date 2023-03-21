import Image from "next/image";

import OfficeImg from '/public/images/assets/office.svg'

export default function Story({ className, dataSpeed }) {
	return (
		<section
			id='story'
			className={`story ${className}`}
			data-speed={dataSpeed}
		>
			<div className="story__container">
				<h2>Our Story (so far...)</h2>
				<div className='story__content'>
					<div className="story__content--image">
						<Image
							src={OfficeImg}
							alt='office graphics'
							width={500}
						/>
					</div>
					<div className="story__content--text">
						<p>A&S Lifts was founded in 1985 by two brothers, Alex and Sam, who had a passion for engineering and innovation. They started the company in a small garage in Maidenhead, where they would spend long hours tinkering with elevator parts and brainstorming new designs.</p>

						<p>At first, the company struggled to gain traction, but as word spread about their high-quality elevators and excellent customer service, they began to attract more clients. One of their biggest early contracts was with a large hotel chain that wanted to replace all the outdated elevators in their properties with modern, efficient ones.</p>

						<p>As A&S Lifts continued to grow, they expanded their operations to include maintenance and repair services, as well as custom elevator design for high-end residential properties. They also started to experiment with new technologies, such as remote monitoring and predictive maintenance, which helped them stay ahead of the curve in the industry.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
