import SocialCard from "../cards/socialCard";

export default function Social() {
  return (
    <section className='social'>
      <h2>We are Social</h2>
      <div className='social__grid'>
        <SocialCard className='social__card' />
      </div>
    </section>
  )
}
