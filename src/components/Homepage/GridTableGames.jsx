import TableContainer from "../Classement/TableContainer"
import LoadingSpinner from "../LoadingSpinner"
import { useGetAllGames } from "../../utils/fetchGames"

const GridTableGames = () => {
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
		<section className="block xl:grid xl:grid-cols-12 xl:grid-rows-4 xl:max-w-screen-xl xl:py-12 xl:mx-auto ">
			<div className="mx-auto my-8 xl:px-0 xl:mx-8 xl:col-start-4 xl:col-span-6 xl:row-span-4 xl:my-auto ">
				<TableContainer table={table} isHomepage={true} />
			</div>
		</section>
	)
}
export default GridTableGames
