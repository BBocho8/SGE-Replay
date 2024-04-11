import { useState } from "react"

import LoadingSpinner from "../components/LoadingSpinner"
import { useGetAllGames } from "../utils/fetchGames"
import GameTestV2 from "../components/Game/GameTestV2"

const Results = () => {
	const { isGamesLoading, games } = useGetAllGames()
	const { prevGames, nextGames } = games.data

	const [isResultsOpen, setIsResultsOpen] = useState(true)

	if (isGamesLoading) {
		return (
			<div className="flex-center">
				<LoadingSpinner />
			</div>
		)
	}
	return (
		<div className="">
			<div className="flex items-center justify-center gap-x-2">
				<button
					className={`btn ${!isResultsOpen && "bg-black"}`}
					type="button"
					onClick={() => setIsResultsOpen(true)}
				>
					RESULTS
				</button>
				<button
					className={`btn bg-black ${!isResultsOpen && "btn bg-primaryGreen"}`}
					type="button"
					onClick={() => setIsResultsOpen(false)}
				>
					NEXT GAMES
				</button>
			</div>

			{isResultsOpen ? (
				<div className="py-6">
					<GameTestV2 games={prevGames} isNext={false} />
				</div>
			) : (
				<div className="py-6">
					<GameTestV2 games={nextGames} isNext={true} />
				</div>
			)}
		</div>
	)
}
export default Results
