import Image from 'next/image';
import Link from 'next/link';

// Components
import Form from '../../components/utils/Form';
import Map from '../../components/utils/Map';
import ButtonCall from '../../components/tokens/buttons/CallBtn';

// Images
import CallIcon from '/public/icons/call.svg';
import EmailIcon from '/public/icons/email.svg';
import MapIcon from '/public/icons/map.svg';

export default function Products() {
	return (
		<div className='contact'>
			<h2>Get in touch!</h2>
			<p>Contact us for a quote or help</p>

			<div className='contact__links'>
				<div className='contact__links--email'>
					<Image src={EmailIcon} alt='email icon' />
					<Link href='mailto:info@aandslifts.co.uk'>info@aandslifts.co.uk</Link>
				</div>
				<div className='contact__links--call'>
					<Image src={CallIcon} alt='phone icon' />
					<ButtonCall tel='tel:+447394699196' text='Call Jose' />
					<ButtonCall tel='tel:+447507200480' text='Call David' />
				</div>
				<div className='contact__links--map'>
					<Image src={MapIcon} alt='map icon' />
					<Link href="https://www.google.com/maps/place/51.537793731262134+-0.7068510371442662/@51.537793731262134,-0.7068510371442662,15z}" >
						<span>
							Sheephouse Road <br /> Maidenhead SL6 8HA <br /> London
						</span>
					</Link>
				</div>
			</div>

			<div className="contact__bottom">
				<Form />
				<Map />
			</div>
		</div>
	);
}
