import LastGames from "./LastGames"
import NextGames from "./NextGames"
import TableContainer from "./TableContainer"

const GridTableGames = () => {
	return (
		<section className="grid grid-cols-12 grid-rows-2 max-w-screen-2xl">
			<div className="col-span-8 row-span-2 my-auto">
				<div className="">
					<LastGames />
				</div>
				<div className="">
					<NextGames />
				</div>
			</div>
			<div className="col-span-4 row-span-2 my-auto">
				<TableContainer />
			</div>
		</section>
	)
}
export default GridTableGames
