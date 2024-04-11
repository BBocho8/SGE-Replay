import GamesContainerV2 from "../components/Game/GamesContainerV2"
import GridTableGames from "../components/Homepage/GridTableGames"
import HomeHeader from "../components/Homepage/HomeHeader"

const Landing = () => {
	return (
		<div className="overflow-hidden">
			<HomeHeader />
			<div id="content">
				<GamesContainerV2 />
				<GridTableGames />
			</div>
		</div>
	)
}
export default Landing
