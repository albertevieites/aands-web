import SocialCard from "../cards/SocialCard";

export default function Social({className, dataSpeed}) {
  return (
    <section 
      className={`social ${className}`}
      data-speed={dataSpeed}
    >
      <h2>We are Social</h2>
      <div className='social__grid'>
        <SocialCard className='social__card' />
      </div>
    </section>
  )
}
