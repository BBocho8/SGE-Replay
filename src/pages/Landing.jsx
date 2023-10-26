import GridTableGames from "../components/Homepage/GridTableGames"
import HomeHeader from "../components/Homepage/HomeHeader"

const Landing = () => {
	return (
		<div className="overflow-hidden">
			<HomeHeader />
			<div id="content">
				<GridTableGames />
			</div>
		</div>
	)
}
export default Landing
