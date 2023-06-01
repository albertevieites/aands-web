import SocialCard from "../../cards/SocialCard/SocialCard";

export default function Social({className, dataSpeed}) {
  return (
    <section 
      className={`social ${className}`}
      data-speed={dataSpeed}
    >
      <div className="social__container">
        <h2>We are Social</h2>
        <div className='social__grid'>
          <SocialCard className='social__card' />
        </div>
      </div>
    </section>
  )
}
