import TableContainer from "../components/Classement/TableContainer"
import LoadingSpinner from "../components/LoadingSpinner"
import { useGetAllGames } from "../utils/fetchGames"

const Table = () => {
	const { isGamesLoading, games } = useGetAllGames()
	const { table } = games.data

	const isHomepage = false

	if (!games || isGamesLoading) {
		return (
			<div className="flex-center">
				<LoadingSpinner />
			</div>
		)
	}
	return (
		<div className="mx-1 nav:mx-0">
			<TableContainer table={table} isHomepage={isHomepage} />
		</div>
	)
}
export default Table
