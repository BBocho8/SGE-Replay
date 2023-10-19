// import img from "../assets/homeheader.jpg"
import GamesContainer from "./Game/GamesContainer"
import { FiChevronDown } from "react-icons/fi"

import { useGlobalContext } from "../context"

const HomeHeader = () => {
	const { games } = useGlobalContext()
	if (!games.data) {
		return <h2>Loading...</h2>
	}
	const { nextGames } = games.data

	return (
		<div className=" hero relative">
			{/* <div className=" xl:h-[calc(100vh-72px)] overflow-hidden w-full m-auto relative "> */}
			{/* <img src={img} alt="" className="object-cover" /> */}
			<div className="child">
				<GamesContainer isHomepage={true} isResult={false} {...nextGames[0]} />
			</div>

			<div className="box">
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
