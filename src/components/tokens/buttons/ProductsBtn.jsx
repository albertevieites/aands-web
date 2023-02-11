import Link from "next/link";

export default function ProductsBtn() {
  return (
    <Link className='products__btn' href='/products'>
      <span>Our Products</span>
    </Link>
  )
}
