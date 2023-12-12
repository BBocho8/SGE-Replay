import LastGames from "../Game/LastGames"
import NextGames from "../Game/NextGames"
import TableContainer from "../Classement/TableContainer"
import LoadingSpinner from "../LoadingSpinner"
import { useGetAllGames } from "../../utils/fetchGames"

const GridTableGames = () => {
	const { isGamesLoading, games } = useGetAllGames()
	const { table, prevGames, nextGames } = games.data

	console.log(nextGames[0])

	if (!games || isGamesLoading || !table || !prevGames || !nextGames) {
		return (
			<div className="flex-center">
				<LoadingSpinner />
			</div>
		)
	}

	return (
		<section className="block xl:grid xl:grid-cols-12 xl:grid-rows-4 xl:max-w-screen-xl xl:py-12 xl:mx-auto ">
			<div className="mx-4 xl:px-0 xl:col-span-6 xl:row-span-4 xl:my-auto">
				<div className="my-8 xl:my-0 ">
					<LastGames isResult={true} isHomepage={false} games={prevGames} />
				</div>
				<div className="my-8 xl:my-0 ">
					<NextGames isResult={false} isHomepage={false} games={nextGames} />
				</div>
			</div>
			<div className="mx-auto my-8 xl:px-0 xl:mx-8 xl:col-span-6 xl:row-span-4 xl:my-auto ">
				<TableContainer table={table} isHomepage={true} />
			</div>
		</section>
	)
}
export default GridTableGames
