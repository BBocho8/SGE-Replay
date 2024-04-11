import { useState } from "react"
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx"
import { twMerge } from "tailwind-merge"

const GameTestV2 = ({ games, isNext }) => {
	const [value, setValue] = useState(0)
	const [currentGame, setCurrentGame] = useState(games[0])

	const handlePrevious = () => {
		if (value === 0) {
			// setValue(games.length - 1)
			// setCurrentGame(games[games.length - 1])
		} else {
			setValue(value - 1)
			setCurrentGame(games[value - 1])
		}
	}

	const handleNext = () => {
		if (value === games.length - 1) {
			return
			// setValue(0)
			// setCurrentGame(games[0])
		} else {
			setValue(value + 1)
			setCurrentGame(games[value + 1])
		}
	}

	return (
		<div className="flex flex-col items-center transition">
			<h3 className="text-3xl">{isNext ? "NEXT GAMES" : "LAST GAMES"}</h3>
			<div className="flex flex-col w-full pb-4 bg-white shadow-sm gap-y-4">
				<div className="flex items-center justify-center ">
					<span className="px-2 py-1 font-semibold text-white uppercase bg-primaryGreen">
						{currentGame.competition}
					</span>
				</div>
				<div className="flex items-center justify-center">
					<p className="flex flex-col items-center justify-end w-2/5 px-4 font-semibold uppercase sm:flex-row gap-x-2">
						<img
							src={currentGame.homeLogo}
							alt="home team logo"
							className="rounded-full shadow-sm w-9 h-9"
						/>
						<span className="text-center line-clamp-2">
							{currentGame.homeTeam}
						</span>
					</p>
					{!isNext ? (
						<p className="flex items-center justify-center gap-x-1">
							<span className="px-3 py-2 text-2xl font-bold text-white bg-gray-800">
								{currentGame.homeScore}
							</span>
							<span className="text-3xl font-bold">:</span>
							<span className="px-3 py-2 text-2xl font-bold text-white bg-gray-800">
								{currentGame.awayScore}
							</span>
						</p>
					) : (
						<p className="flex items-center justify-center gap-x-1">
							<span className="px-3 py-2 text-2xl font-bold text-white bg-gray-800">
								VS
							</span>
						</p>
					)}
					<p className="flex flex-col items-center justify-start w-2/5 px-4 font-semibold uppercase sm:flex-row gap-x-2">
						<span className="order-2 text-center line-clamp-2 sm:order-1">
							{currentGame.awayTeam}
						</span>
						<img
							src={currentGame.awayLogo}
							alt="home team logo"
							className="order-1 rounded-full shadow-sm w-9 h-9 sm:order-2"
						/>
					</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-md">{currentGame.date}</p>
					<p className="font-light text-md">{currentGame.time}</p>
				</div>
			</div>
			<div className="flex items-center justify-center mt-2 gap-x-8">
				<button
					onClick={handlePrevious}
					className={twMerge(
						"p-3 text-2xl font-semibold transition bg-white cursor-pointer hover:bg-gray-800 hover:text-white",
						value === 0 && "opacity-50 cursor-not-allowed text-red-300"
					)}
				>
					<RxDoubleArrowLeft />
				</button>
				<button
					onClick={handleNext}
					className={twMerge(
						"p-3 text-2xl font-semibold transition bg-white cursor-pointer hover:bg-gray-800 hover:text-white",
						value === games.length - 1 &&
							"opacity-50 cursor-not-allowed text-red-300"
					)}
				>
					<RxDoubleArrowRight />
				</button>
			</div>
		</div>
	)
}
export default GameTestV2
