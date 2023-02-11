import Link from 'next/link';
import Image from 'next/image';

import brandLogo from '/public/icons/aands.svg';

import ButtonContact from '@/components/tokens/buttons/ContactBtn';

export default function Navbar() {
	return (
		// NAVBAR
		<div className='navbar'>
			<div className='navbar__brand'>
				<Link href='/'>
					<Image src={brandLogo} alt='Brand Logo' />
				</Link>
			</div>

			<div className="navbar__links">
				<nav className='navbar__nav'>
					<ul className='navbar__list'>
						<li>
							<a href='#story'>Our Story</a>
						</li>
						<li>
							<a href='#services'>Our Services</a>
						</li>
						<li>
							<a href='#ftex'>Our Events</a>
						</li>
					</ul>
				</nav>
				<ButtonContact />
			</div>
		</div>
	);
}
