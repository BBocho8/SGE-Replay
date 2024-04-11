import { useGetAllGames } from "../../utils/fetchGames"
import LoadingSpinner from "../LoadingSpinner"
import GameTestV2 from "./GameTestV2"

const GamesContainerV2 = () => {
	const { isGamesLoading, games } = useGetAllGames()
	const { table, prevGames, nextGames } = games.data

	if (!games || isGamesLoading || !table || !prevGames || !nextGames) {
		return (
			<div className="flex-center">
				<LoadingSpinner />
			</div>
		)
	}

	return (
		<div className="grid px-4 py-8 bg-gray-50 md:grid-cols-2 gap-y-10 gap-x-4">
			<GameTestV2 games={prevGames} isNext={false} />
			<GameTestV2 games={nextGames} isNext={true} />
		</div>
	)
}
export default GamesContainerV2
