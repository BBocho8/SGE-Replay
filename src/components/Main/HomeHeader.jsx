// import img from "../assets/homeheader.jpg"
import GamesContainer from "../Game/GamesContainer"
import { FiChevronDown } from "react-icons/fi"

import { useGlobalContext } from "../../context"

const HomeHeader = () => {
	const { games } = useGlobalContext()
	if (!games.data) {
		return <h2>Loading...</h2>
	}
	const { nextGames } = games.data

	return (
		<div className=" hero relative object-cover">
			<div className="w-4/5 md:w-full md:mx-0 child top-[50%] left-[50%] md:top-[70%] ">
				<GamesContainer isHomepage={true} isResult={false} {...nextGames[0]} />
			</div>

			<div className="box top-[75%] left-[50%] md:top-[92%] ">
				<a href="#content">
					<span className="block cursor-pointer">
						<FiChevronDown className="h-12 w-12  text-white" />
					</span>
				</a>
			</div>
		</div>
	)
}
export default HomeHeader
