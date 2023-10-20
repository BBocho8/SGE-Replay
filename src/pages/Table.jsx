import TableContainer from "../components/Classement/TableContainer"
import { useGlobalContext } from "../context"

const Table = () => {
	const { games } = useGlobalContext()
	if (!games.data) {
		return <h2>Loading...</h2>
	}
	const { table } = games.data
	return (
		<div>
			<TableContainer table={table} />
		</div>
	)
}
export default Table
