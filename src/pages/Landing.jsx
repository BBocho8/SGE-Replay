import GridTableGames from "../components/GridTableGames"
import Footer from "../components/footer/Footer"
import HomeHeader from "../components/main/HomeHeader"

const Landing = () => {
	return (
		<div className="overflow-hidden">
			<HomeHeader />
			<div id="content">
				<GridTableGames />
			</div>

			<p>FB x INSTA FEED x SPONSORS</p>

			<button type="button" className="btn">
				SEND ME PACKING
			</button>
			<Footer />
		</div>
	)
}
export default Landing
