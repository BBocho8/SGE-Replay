import { useState } from "react"
import GamesContainer from "../components/Video/GamesContainer"
import { useGlobalContext } from "../context"
import { sortVideoGames } from "../../utils/sortGames"

const Replay = () => {
	const { videoGames } = useGlobalContext()
	const [isCompetition, setIsCompetition] = useState("all")

	if (!videoGames) {
		return <h2>Loading...</h2>
	}

	const sortedGames = sortVideoGames(videoGames)

	const competitions = [
		"Kreisfreundschaftsspiele",
		"Bezirksliga",
		"Rheinlandpokal",
	]

	return (
		<section>
			<h1 className="text-center text-h2 uppercase">All Full Game Replays</h1>
			<div className="flex justify-center items-center gap-2 flex-wrap">
				{competitions.map((competition) => {
					return (
						<button
							onClick={() => setIsCompetition(competition)}
							className={isCompetition === competition ? "btn bg-black" : "btn"}
							key={competition}
						>
							{competition}
						</button>
					)
				})}
				<button
					className={isCompetition === "all" ? "btn bg-black" : "btn"}
					onClick={() => setIsCompetition("all")}
				>
					ALL GAMES
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-8 gap-x-2">
				{isCompetition === "all"
					? sortedGames.map((game) => {
							const {
								id,
								isVideoAvailable,

								competition,
								homeTeam,
								awayTeam,

								date,
								firstHalf1,

								fullGame,
							} = game
							return (
								<GamesContainer
									key={game.id}
									id={id}
									isVideoAvailable={isVideoAvailable}
									competition={competition}
									homeTeam={homeTeam}
									awayTeam={awayTeam}
									date={date}
									firstHalf1={firstHalf1}
									fullGame={fullGame}
								/>
							)
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  })
					: sortedGames
							.filter((game) => game.competition === isCompetition)
							.map((game) => {
								const {
									id,
									isVideoAvailable,

									competition,
									homeTeam,
									awayTeam,

									date,
									firstHalf1,

									fullGame,
								} = game
								return (
									<GamesContainer
										key={game.id}
										id={id}
										isVideoAvailable={isVideoAvailable}
										competition={competition}
										homeTeam={homeTeam}
										awayTeam={awayTeam}
										date={date}
										firstHalf1={firstHalf1}
										fullGame={fullGame}
									/>
								)
							})}
			</div>
		</section>
	)
}
export default Replay
