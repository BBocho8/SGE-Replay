import GridTableGames from "../components/GridTableGames"
import HomeHeader from "../components/HomeHeader"

const Landing = () => {
	return (
		<div className="overflow-hidden">
			<HomeHeader />
			<div id="content">
				<GridTableGames />
			</div>

			<p>FB x INSTA FEED x SPONSORS</p>
		</div>
	)
}
export default Landing
