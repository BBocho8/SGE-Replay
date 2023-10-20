import GamesContainer from "../components/Video/GamesContainer"
import { useGlobalContext } from "../context"

const Replay = () => {
	const { videoGames } = useGlobalContext()
	return (
		<section>
			<h1 className="text-center text-h2 uppercase">All Full Game ReplaysÒ</h1>

			<GamesContainer />
			{videoGames.map((game) => {
				const {
					id,
					isVideoAvailable,
					gameInfo,
					competition,
					homeTeam,
					awayTeam,
					homeScore,
					awayScore,
					date,
					firstHalf1,
					firstHalf2,
					firstHalf3,
					secondHalf1,
					secondHalf2,
					secondHalf3,
					fullGame,
				} = game
				return (
					<div key={id} className="my-8 mx-auto flex flex-col items-center">
						<p className="font-semibold text-xl">
							{homeTeam} VS {awayTeam}
						</p>
						{!isVideoAvailable && (
							<p className="text-blue-800">Game is not yet available</p>
						)}
						{firstHalf1 && (
							<iframe
								src={firstHalf1}
								className="w-4/5 h-auto aspect-video my-2"
							></iframe>
						)}{" "}
						{firstHalf2 && (
							<iframe
								src={firstHalf2}
								className="w-4/5 h-auto aspect-video my-2"
							></iframe>
						)}
						{secondHalf1 && (
							<iframe
								src={secondHalf1}
								className="w-4/5 h-auto aspect-video my-2"
							></iframe>
						)}{" "}
						{secondHalf2 && (
							<iframe
								src={secondHalf2}
								className="w-4/5 h-auto aspect-video my-2"
							></iframe>
						)}
						{secondHalf3 && (
							<iframe
								src={secondHalf3}
								className="w-4/5 h-auto aspect-video my-2"
							></iframe>
						)}{" "}
						{fullGame && (
							<iframe
								src={fullGame}
								className="w-4/5 h-auto aspect-video my-2"
							></iframe>
						)}
					</div>
				)
			})}
		</section>
	)
}
export default Replay
