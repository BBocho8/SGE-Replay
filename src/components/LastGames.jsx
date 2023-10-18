import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import GamesContainer from "./Game/GamesContainer"

const responsive = {
	0: {
		items: 1,
	},
	568: {
		items: 1,
	},
	1024: {
		items: 1,
		itemsFit: "contain",
	},
}

const items = [
	<GamesContainer key={1} />,
	<GamesContainer key={2} />,
	<GamesContainer key={3} />,
	<GamesContainer key={4} />,
	<GamesContainer key={5} />,
]

const LastGames = () => (
	<div className="py-4">
		<h2 className="text-center text-4xl font-bold py-4">LAST RESULTS</h2>
		<AliceCarousel
			mouseTracking
			items={items}
			responsive={responsive}
			autoPlay
			autoPlayStrategy="none"
			autoPlayInterval={3000}
			animationDuration={1000}
			animationType="fadeout"
			infinite
			touchTracking={false}
			disableButtonsControls
		/>
	</div>
)

export default LastGames
