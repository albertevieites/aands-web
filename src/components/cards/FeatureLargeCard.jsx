import Image from "next/image";

export default function FeatureLargeCard(props) {
  const { img1, img2, img3, legend, text } = props;
  console.log(img1);
  return (
    <div className='card--large'>
      <div className="card--large__text">
        <h3>{legend}</h3>
        <p>{text}</p>
      </div>
      <div className="card--large__products">
        <Image
          className="card--large__image1"
          src={img1}
          alt="image1 picture"
         />
        <Image
          className="card--large__image1"
          src={img2}
          alt="image1 picture"
         />
        <Image
          className="card--large__image1"
          src={img3}
          alt="image1 picture"
         />
      </div>
    </div>
  )
}