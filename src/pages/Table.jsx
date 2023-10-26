import TableContainer from "../components/Classement/TableContainer"
import LoadingSpinner from "../components/LoadingSpinner"
import { useGlobalContext } from "../context"

const Table = () => {
	const { games } = useGlobalContext()
	if (!games.data) {
		return (
			<div className="flex-center">
				<LoadingSpinner />
			</div>
		)
	}
	const { table } = games.data
	return (
		<div className="mx-1 nav:mx-0">
			<TableContainer table={table} isHomepage={false} />
		</div>
	)
}
export default Table
