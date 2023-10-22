import "react-alice-carousel/lib/alice-carousel.css"
import GamesContainer from "./GamesContainer"
import { nanoid } from "nanoid"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
	dots: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	pauseOnDotsHover: true,
}
const LastGames = ({ isResult, isHomepage, games }) => (
	<div className="py-4 px-2 sm:px-0">
		<h2 className="text-center uppercase">LAST RESULTS</h2>
		<Slider {...settings}>
			{games.map((game) => {
				return (
					<GamesContainer
						key={nanoid()}
						isResult={isResult}
						isHomepage={isHomepage}
						{...game}
					/>
				)
			})}
		</Slider>
	</div>
)

export default LastGames
