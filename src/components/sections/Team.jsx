import TeamCard from "../cards/TeamCard";

export default function Team({className, dataSpeed}) {
  return (
    <section
      className={`team ${className}`}
      data-speed={dataSpeed}
      >
				<h2>Meet the Team</h2>
				<TeamCard />
			</section>
  )
}
