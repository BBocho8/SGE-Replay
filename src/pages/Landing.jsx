import getYoutubeID from "../../utils/getYoutubeID"
import GridTableGames from "../components/GridTableGames"
import HomeHeader from "../components/HomeHeader"

const Landing = () => {
	const url = "https://www.youtube.com/embed/WuPkwlBQORo?si=ZyVw3GW44GKAJWlX"

	const ytid = getYoutubeID(url)

	console.log(ytid)

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
		</div>
	)
}
export default Landing
