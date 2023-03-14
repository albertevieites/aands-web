import Link from 'next/link';
import { useState } from 'react';

import ButtonContact from '../tokens/buttons/ContactBtn';
import ProductsBtn from '../tokens/buttons/ProductsBtn';
import { MenuToggle } from './MenuToggle';


export default function Burger() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='burger'>
      <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      {isOpen &&
        <div className='burger__wrapper'>
          <ul className='burger__list'>
            <li>
              <Link href='#story'>Our Story</Link>
            </li>
            <li>
              <Link href='#ftex'>Events</Link>
            </li>
          </ul>
          <div className="burger__btns">
            <ProductsBtn />
            <ButtonContact />
          </div>
        </div>
      }
    </div>
  )
}
