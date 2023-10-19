import TableContainer from "../components/TableContainer"
import { useGlobalContext } from "../context"

const Table = () => {
	const { games } = useGlobalContext()

	const { table } = games.data
	return (
		<div>
			<TableContainer table={table} />
		</div>
	)
}
export default Table
