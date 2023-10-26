import { useState } from "react"
import LastGames from "../components/Game/LastGames"
import NextGames from "../components/Game/NextGames"
import { useGlobalContext } from "../context"
import LoadingSpinner from "../components/LoadingSpinner"

const Results = () => {
	const { games } = useGlobalContext()
	const [isResultsOpen, setIsResultsOpen] = useState(true)

	if (!games.data) {
		return (
			<div className="flex-center">
				<LoadingSpinner />
			</div>
		)
	}
	const { prevGames, nextGames } = games.data
	return (
		<div className="">
			<div className="flex justify-center items-center gap-x-2">
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
				<div className="py-2">
					<LastGames isResult={true} isHomepage={false} games={prevGames} />
				</div>
			) : (
				<div className="py-2">
					<NextGames isResult={false} isHomepage={false} games={nextGames} />
				</div>
			)}
		</div>
	)
}
export default Results
