import Link from "next/link";

export default function ContactBtn() {
  return (
    <Link className='contact__btn' href='/contact'>
      <span>Contact Us</span>
    </Link>
  )
}
