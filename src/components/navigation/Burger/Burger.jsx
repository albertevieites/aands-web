import Link from 'next/link';
import { useState } from 'react';

import ButtonContact from '../../tokens/buttons/ContactBtn/ContactBtn';
import ProductsBtn from '../../tokens/buttons/ProductsBtn/ProductsBtn';
import { MenuToggle } from '../MenuToggle/MenuToggle';


export default function Burger() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen);

  // Function to close the menu clicking on the buttons
  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <div className='burger'>
      <MenuToggle isOpen={isOpen} toggle={toggle} />
      {isOpen &&
        <div className='burger__wrapper'>
          <ul className='burger__list'>
            <li>
              <Link
                onClick={handleClose}
                href='#story'>Our Story</Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                href='#ftex'>Events</Link>
            </li>
          </ul>
          <div className="burger__btns">
            <ProductsBtn handleClose={handleClose} />
            <ButtonContact handleClose={handleClose} />
          </div>
        </div>
      }
    </div>
  )
}
