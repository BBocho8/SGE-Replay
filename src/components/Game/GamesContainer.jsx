import Game from "./Game"

const GamesContainer = ({
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
		<div>
			<Game
				isResult={isResult}
				isHomepage={isHomepage}
				homeLogo={homeLogo}
				awayLogo={awayLogo}
				date={date}
				time={time}
				homeTeam={homeTeam}
				homeScore={homeScore}
				awayTeam={awayTeam}
				awayScore={awayScore}
				competition={competition}
			/>
		</div>
	)
}
export default GamesContainer
