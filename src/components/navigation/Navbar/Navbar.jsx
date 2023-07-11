// Modules
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Components
import ContactBtn from '../../tokens/buttons/ContactBtn/ContactBtn';
import Separator from '../../tokens/decorators/Separator/Separator';
import Burger from '../Burger/Burger';

// Images
import Modal from '../../tokens/modal/Modal';
import brandLogo from '/public/icons/aands.svg';

// Context
import { useModal } from '../../../context/ModalContext';

// NAVBAR COMPONENT
export default function Navbar() {
	const router = useRouter();
	const pathname = router.pathname;

	// UseState
	const [showBurger, setShowBurger] = useState(false);
	// const [openModal, setOpenModal] = useState(false);
	const { openModal, setOpenModal } = useModal();

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

	// Close Hamburger
	const handleClose = () => {
		console.log('Closing burger menu');
		setShowBurger(false);
	};

	// Handle modal toggle clicking User Links anchor
	const handleModalToggle = () => {
		setOpenModal(prevState => !prevState);
	};

	// NAVBAR COMPONENT RENDERING
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
									<a onClick={handleModalToggle}>User Links</a>
								</li>
							</ul>
						</nav>
						<ContactBtn />
					</div>
				)}

				{showBurger && <Burger handleClose={handleClose} />}
			</div>

			<Separator />

			{openModal && (
				<Modal open={openModal} onClose={() => setOpenModal(false)} />
			)}
		</nav>
	);
}
