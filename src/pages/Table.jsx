import { useLoaderData } from "react-router-dom"
import TableContainer from "../components/Classement/TableContainer"
import LoadingSpinner from "../components/LoadingSpinner"

const Table = () => {
	const { games, table } = useLoaderData()

	if (!games) {
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
