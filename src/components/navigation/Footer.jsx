// Modules
import Image from 'next/image';
import Link from 'next/link';

// Components
import CallBtn from '../tokens/buttons/CallBtn';
import Line from '../tokens/Line';

// Images
import brandIcon from '/public/icons/aands.svg';
import facebookIcon from '/public/icons/facebook.svg';
import googleIcon from '/public/icons/google.svg';
import linkedinIcon from '/public/icons/linkedin.svg';

export default function Footer() {
	return (
		<footer className='footer'>
			<Line />
			<div className="footer__container">
				<div className="footer__top">
					<div className='footer__image'>
						<Image src={brandIcon} alt='brand icon' />
						<h4>A&S Lifts</h4>
					</div>
					<div className='footer__talk'>
						<h4>{"Let's talk."}</h4>
						<Link href='mailto:info@aandslifts.co.uk' className='footer__email'>
							info@aandslifts.co.uk
						</Link>
						<div className='footer__btns'>
							<CallBtn tel='tel:+447394699196' text='Call Jose' />
							<CallBtn tel='tel:+447507200480' text='Call David' />
						</div>
					</div>
					<div className='footer__sitemap'>
						<div className='footer__links'>
							<Link href='/'>Home</Link>
							<Link href='#partners'>Partners</Link>
							<Link href='#features'>Features and Benefits</Link>
							<Link href='#story'>Our Story</Link>
							<Link href='#social'>Social</Link>
							<Link href='#team'>Our Team</Link>
							<Link href='/products'>Products</Link>
							<Link href='/contact'>Contact</Link>
						</div>
					</div>
				</div>
				<div className='footer__bottom'>
					<div className='footer__social'>
						<span>Follow Us:</span>
						<div className='footer__icons'>
							<Link href='https://goo.gl/maps/JeoGgA34CGTzHfs8A'>
								<Image
									className='footer__google'
									src={googleIcon}
									alt='google icon'
								/>
							</Link>
							<Link href='https://www.facebook.com/people/AS-Lifts/100055158621181/'>
								<Image
									className='footer__facebook'
									src={facebookIcon}
									alt='facebook icon'
								/>
							</Link>
							<Link href='https://www.linkedin.com/in/a-and-s-lifts-ltd-%F0%9F%9B%97-34a5a91a5/'>
								<Image
									className='footer__linkedin'
									src={linkedinIcon}
									alt='linkedin icon'
								/>
							</Link>
						</div>
					</div>
					<div className='footer__copy'>Copyright ?? 2023 A&S LIFTS</div>
				</div>
			</div>
		</footer>
	);
}
