import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import brandLogo from '/public/icons/aands.svg';

import ButtonContact from '../tokens/buttons/ContactBtn';
import Separator from '../tokens/Separator';

export default function Navbar() {
	const router = useRouter();
	const pathname = router.pathname;

	return (
		<nav className='navbar'>
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
								<a href='#ftex'>Events</a>
							</li>
						</ul>
					</nav>
					<ButtonContact />
				</div>
			</div>
			<Separator />
		</nav>
	);
}
