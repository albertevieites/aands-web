import Link from 'next/link';
import Image from 'next/image';

import nayarLogo from '/public/icons/nayar.svg';

export default function Partners() {
  return (
    <section className='partners'>
      <div className='partners__container'>
        <Link
          className='partners__link'
          href='https://www.nayarsystems.com/en/'
        >
          <Image src={nayarLogo} alt='Nayar Logo' />
          <span>Nayar UK representatives</span>
        </Link>
      </div>
    </section>
  )
}
