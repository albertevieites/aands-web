// Components
import FeatureLargeCard from "../cards/featureLargeCard";
import FeatureSmallCard from "../cards/featureSmallCard";

// Large Card Imports
import advertisimImage from "/public/images/products/advertisim/advertisim_3.png";
import gsmImage from "/public/images/products/gsm/gsm_1.png";
import switchImage from "/public/images/products/switch/switch_1.png";

// Small Card Imports
import communicationIcon from "/public/icons/communication.svg";
import connectivityIcon from "/public/icons/connectivity.svg";
import transparentVector from "/public/images/assets/transparent.svg";
import wiresVector from "/public/images/assets/wires.svg";

export default function Features() {
  return (
    <section className='features'>
      <div className="features__blur"></div>

      <div className="features__header">
        <h2>Features that deliver benefits</h2>
        <p>Our technology lift offers increased efficiency and safety, with user-friendly features and 24/7 customer support.</p>
      </div>

      <div className="features__container">
        <FeatureLargeCard
          className="features__container--grid-col-span-2"
          img1={gsmImage}
          img2={switchImage}
          img3={advertisimImage}
          legend="Increased Efficiency"
          text="Technological lift products are designed with advanced safety features such as load sensors, emergency stop buttons, and automatic shut-off systems."
        />
        <FeatureSmallCard
          className="features__container--connectivity"
          imgBg={wiresVector}
          imgIcn={connectivityIcon}
          title="Connectivity"
          text="Our products offer connectivity solutions such as real-time data transmission, wireless access, and remote control."
        />
        <FeatureSmallCard
          className="features__container--communication"
          imgBg={transparentVector}
          imgIcn={communicationIcon}
          title="Communication"
          text="Our products offer connectivity solutions such as real-time data transmission, wireless access, and remote control."
        />
        <FeatureLargeCard
          className="features__container--grid-col-span-2"
          img1={gsmImage}
          img2={switchImage}
          img3={advertisimImage}
          legend="Easy Maintenance"
          text="Many technological lift products are designed with easy-to-access components and built-in diagnostics, making maintenance and repairs."
        />
      </div>
    </section>
  )
}
