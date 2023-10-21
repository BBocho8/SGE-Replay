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

const NextGames = ({ isResult, isHomepage, games }) => {
	return (
		<div className="py-4 px-2 sm:px-0">
			<h2 className="text-center uppercase">NEXT GAMES</h2>
			<AliceCarousel
				mouseTracking
				items={games.map((game) => {
					return (
						<GamesContainer
							key={nanoid()}
							isResult={isResult}
							isHomepage={isHomepage}
							{...game}
						/>
					)
				})}
				responsive={responsive}
				autoPlay
				autoPlayStrategy="none"
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
}

export default NextGames
