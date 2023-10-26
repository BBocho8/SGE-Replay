import GamesContainer from "../Game/GamesContainer"
import { FiChevronDown } from "react-icons/fi"
import LoadingSpinner from "../LoadingSpinner"
import { useGlobalContext } from "../../context"

const HomeHeader = () => {
	const { games } = useGlobalContext()
	if (!games.data) {
		return (
			<div className=" hero relative object-cover">
				<div className="w-4/5 md:w-full md:mx-0 child top-[50%] left-[50%] md:top-[70%] ">
					<div className="opacity-80 rounded-xl bg-gray-100  pt-4 md:pt-0 pb-4 relative max-w-sm md:max-w-3xl mx-auto px-8 ">
						<div className="flex flex-col items-center justify-center gap-y-4">
							<p className="uppercase text-xl font-bold">Next game</p>
							<LoadingSpinner />
						</div>
					</div>
					{/* <GamesContainer isHomepage={true} isResult={false} {...nextGames[0]} /> */}
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
