import TableContainer from "../components/Classement/TableContainer"
import LoadingSpinner from "../components/LoadingSpinner"
import { useGetAllGames } from "../utils/fetchGames"

const Table = () => {
	const { isGamesLoading, games } = useGetAllGames()
	const { table } = games.data

	if (!games || isGamesLoading) {
		return (
			<div className="flex-center">
				<LoadingSpinner />
			</div>
		)
	}
	return (
		<div className="mx-1 nav:mx-0">
			<TableContainer table={table} isHomepage={false} />
		</div>
	)
}
export default Table
