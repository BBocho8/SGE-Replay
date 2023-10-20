import { useGlobalContext } from "../context"
import LastGames from "./Game/LastGames"
import NextGames from "./Game/NextGames"
import TableContainer from "./Classement/TableContainer"

const GridTableGames = () => {
	const { games } = useGlobalContext()
	if (!games.data) {
		return <h2>Loading...</h2>
	}
	const { prevGames, nextGames, table } = games.data

	return (
		<section className="block xl:grid xl:grid-cols-12 xl:grid-rows-2 xl:max-w-screen-2xl ">
			<div className="mx-4 xl:px-0 xl:col-span-8 xl:row-span-2 xl:my-auto">
				<div>
					<LastGames isResult={true} isHomepage={false} games={prevGames} />
				</div>
				<div>
					<NextGames isResult={false} isHomepage={false} games={nextGames} />
				</div>
			</div>
			<div className="mx-1 xl:px-0 xl:mx-8 xl:col-span-4 xl:row-span-2 xl:my-auto">
				<TableContainer table={table} />
			</div>
		</section>
	)
}
export default GridTableGames
