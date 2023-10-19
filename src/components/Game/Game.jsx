const Game = ({
	isResult,
	isHomepage,
	homeLogo,
	awayLogo,
	date,
	time,
	homeTeam,
	homeScore,
	awayTeam,
	awayScore,
	competition,
}) => {
	return (
		<div className="container">
			<div className="next-game">
				{isHomepage && <p className="uppercase">Next game</p>}
				<span className="text-orange-400 text-xl ">
					{date}-{time}
				</span>
			</div>
			<div className="empty"></div>
			<div className="competition">{competition}</div>
			<div className="team-vs">
				<div className="team-next">
					<img src={homeLogo} alt="" />
					<span>{homeTeam}</span>
				</div>
				{isResult ? (
					<p className="font-bold text-3xl">{`${homeScore}-${awayScore}`}</p>
				) : (
					<p className="font-bold text-sm">VS</p>
				)}

				<div className="team-next">
					<img src={awayLogo} alt="" />
					<span>{awayTeam}</span>
				</div>
			</div>
		</div>
	)
}
export default Game
