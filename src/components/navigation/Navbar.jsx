import Image from 'next/image';
import Link from 'next/link';

import brandLogo from '/public/icons/aands.svg';

import ButtonContact from '../tokens/buttons/ContactBtn';
import Separator from '../tokens/Separator';
import { useRouter } from 'next/router';

export default function Navbar() {
	const router = useRouter();
	const pathname = router.pathname;

	return (
		// NAVBAR
		<div className='navbar'>
			<div className="navbar__top">
				<div className='navbar__brand'>
					<Link href='/'>
						<Image src={brandLogo} alt='Brand Logo' />
					</Link>
				</div>
				<div className="navbar__links">
					<nav className='navbar__nav'>
						<ul className='navbar__list'>
							<li style={pathname === "/" ? { display: "block" } : { display: "none" }}>
								<a href='#story'>Our Story</a>
							</li>
							<li style={pathname === "/" ? { display: "block" } : { display: "none" }}>
								<a href='#services'>Our Services</a>
							</li>
							<li style={pathname === "/" ? { display: "block" } : { display: "none" }}>
								<a href='#ftex'>Our Events</a>
							</li>
						</ul>
					</nav>
					<ButtonContact />
				</div>
			</div>
			<Separator />
		</div>
	);
}
