import { useGlobalContext } from "../context"
import LastGames from "./LastGames"
import NextGames from "./NextGames"
import TableContainer from "./TableContainer"

const GridTableGames = () => {
	const { games } = useGlobalContext()
	if (!games.data) {
		return <h2>Loading...</h2>
	}
	const { prevGames, nextGames, table } = games.data

	return (
		<section className="grid grid-cols-12 grid-rows-2 max-w-screen-2xl">
			<div className="col-span-8 row-span-2 my-auto">
				<div className="">
					<LastGames isResult={true} isHomepage={false} games={prevGames} />
				</div>
				<div className="">
					<NextGames isResult={false} isHomepage={false} games={nextGames} />
				</div>
			</div>
			<div className="col-span-4 row-span-2 my-auto">
				<TableContainer table={table} />
			</div>
		</section>
	)
}
export default GridTableGames
