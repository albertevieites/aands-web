// Modules
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Components
import ButtonContact from '../../tokens/buttons/ContactBtn/ContactBtn';
import Separator from '../../tokens/decorators/Separator/Separator';
import Burger from '../Burger/Burger';

// Images
import brandLogo from '/public/icons/aands.svg';

export default function Navbar() {
	const router = useRouter();
	const pathname = router.pathname;
	const [showBurger, setShowBurger] = useState(false);

	// 770px
	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 770) {
				setShowBurger(true);
			} else {
				setShowBurger(false);
			}
		}

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleClose = () => {
		console.log('Closing burger menu');
		setShowBurger(false);
	};

	return (
		<nav className='navbar'>
			<div className='navbar__top'>
				<div className='navbar__brand'>
					<Link href='/'>
						<Image src={brandLogo} alt='Brand Logo' />
					</Link>
				</div>

				{!showBurger && (
					<div className='navbar__links'>
						<nav className='navbar__nav'>
							<ul className='navbar__list'>
								<li
									style={
										pathname === '/'
											? { display: 'block' }
											: { display: 'none' }
									}
								>
									<a href='#story'>Our Story</a>
								</li>
								<li
									style={
										pathname === '/'
											? { display: 'block' }
											: { display: 'none' }
									}
								>
									<a href='#events'>Events</a>
								</li>
							</ul>
						</nav>
						<ButtonContact />
					</div>
				)}

				{showBurger && <Burger handleClose={handleClose} />}
			</div>
			<Separator />
		</nav>
	);
}
