import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import brandLogo from '/public/icons/aands.svg';

import ButtonContact from '../tokens/buttons/ContactBtn';

export default function Navbar() {
	const [ sticky, setSticky] = useState(false);

	useEffect(()=> {
		handleScroll()
		window.addEventListener('scroll', handleScroll);
		return ( ) => window.removeEventListener('scroll', handleScroll);
	})

	const handleScroll = () => {
		setSticky(window.scrollY > 80);
		console.log(window.scrollY);
	}

	return (
		// NAVBAR
		<div className={`${sticky ? "sticky" : "navbar"}`}>
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
