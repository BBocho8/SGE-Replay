import { useState } from "react"
import GamesContainer from "../components/Video/GamesContainer"
import removeAccents from "remove-accents"
import { Link } from "react-router-dom"
import LoadingSpinner from "../components/LoadingSpinner"
import { sortVideoGames } from "../utils/sortGames"
import { useGetAllVideos } from "../utils/fetchVideo"

const getFilteredItems = (query, items) => {
	if (!query) {
		return items
	}
	if (query.length > 2) {
		return items.filter(
			(game) =>
				removeAccents(game.homeTeam.toLowerCase()).includes(
					`${removeAccents(query.toLowerCase())}`
				) ||
				removeAccents(game.awayTeam.toLowerCase()).includes(
					`${removeAccents(query.toLowerCase())}`
				)
		)
	}
}

const Replay = () => {
	const { isVideosLoading, data } = useGetAllVideos()
	const { videoGames } = data

	const [isCompetition, setIsCompetition] = useState("all")
	const [query, setQuery] = useState("")

	if (isVideosLoading || !data) {
		return (
			<div className="flex-center">
				<LoadingSpinner />
			</div>
		)
	}

	const sortedGames = sortVideoGames(videoGames)

	const filteredItems = getFilteredItems(query, videoGames)

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
			<div className="flex flex-col gap-y-2 justify-center items-center py-4">
				<input
					type="search"
					name="search"
					id="search"
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search for a game"
					className="border-primaryGreen placeholder:text-black placeholder:opacity-70 focus:border-primaryGreen focus:ring-primaryGreen rounded-sm"
				/>

				<ul className="overflow-y-auto max-h-52">
					{query.length > 2 &&
						filteredItems.map((game) => (
							<Link key={game.id} to={`/replay/${game.id}`}>
								<p className="bg-white text-black px-4 py-2 hover:bg-gray-300 border ">
									{game.homeTeam} - {game.awayTeam}
								</p>
							</Link>
						))}
				</ul>
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
