import GamesContainer from "./GamesContainer"

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
const LastGames = ({ isResult, isHomepage, games }) => (
	<div className="py-4 px-2 sm:px-0">
		<h2 className="text-center uppercase">LAST RESULTS</h2>

		<Swiper
			modules={[Navigation, Pagination, A11y, Autoplay]}
			autoplay={{
				disableOnInteraction: true,
			}}
			speed={1000}
			loop={true}
			spaceBetween={16}
			slidesPerView={1}
			centeredSlides={true}
			pagination={{
				el: ".pagination-div-last",
				clickable: true,
				renderBullet: (index, className) => {
					return '<span class="' + className + '">' + "</span>"
				},
			}}
		>
			{games.map((game) => {
				return (
					<SwiperSlide key={game.id}>
						<GamesContainer
							isResult={isResult}
							isHomepage={isHomepage}
							{...game}
						/>
					</SwiperSlide>
				)
			})}
		</Swiper>
		<div className="pagination-div-last"></div>
	</div>
)

export default LastGames
