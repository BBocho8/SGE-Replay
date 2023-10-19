import Footer from "../components/Footer"
import GridTableGames from "../components/GridTableGames"
import HomeHeader from "../components/HomeHeader"

const Landing = () => {
	return (
		<div className="overflow-hidden">
			<HomeHeader />
			<div id="content">
				<GridTableGames />
			</div>

			<Footer />
		</div>
	)
}
export default Landing
