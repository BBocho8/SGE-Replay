import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import GamesContainer from "./GamesContainer"
import { nanoid } from "nanoid"

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

function prevent(e) {
	e.preventDefault()
}

const LastGames = ({ isResult, isHomepage, games }) => (
	<div className="py-4 px-2 sm:px-0">
		<h2 className="text-center uppercase">LAST RESULTS</h2>
		<AliceCarousel
			mouseTracking
			items={games.map((game) => {
				return (
					<GamesContainer
						key={nanoid()}
						isResult={isResult}
						isHomepage={isHomepage}
						{...game}
						onDragStart={prevent}
					/>
				)
			})}
			responsive={responsive}
			autoPlay
			autoPlayStrategy="default"
			autoPlayInterval={3000}
			animationDuration={2000}
			animationEasingFunction="ease"
			animationType="slide"
			infinite
			touchTracking={false}
			disableButtonsControls
		/>
	</div>
)

export default LastGames
