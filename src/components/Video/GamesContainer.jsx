import getYoutubeID from "../../../utils/getYoutubeID"
import { useGlobalContext } from "../../context"
import gameImg from "../../assets/images/team.jpg"
import { Link } from "react-router-dom"
import { getFormattedDate, getFormattedTime } from "../../../utils/formatDate"
import { sortVideoGames } from "../../../utils/sortGames"

const GamesContainer = () => {
	const { videoGames } = useGlobalContext()
	const sortedGames = sortVideoGames(videoGames)
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-8 gap-x-2">
			{sortedGames.map((game) => {
				const {
					id,
					isVideoAvailable,

					competition,
					homeTeam,
					awayTeam,

					date,
					firstHalf1,

					fullGame,
				} = game

				return (
					<div key={id} className="mx-auto py-4 ">
						<div className="max-w-md  md:max-w-sm border rounded-sm shadow-sm">
							<Link to={`/replay/${id}`}>
								{isVideoAvailable ? (
									<img
										src={
											getYoutubeID(firstHalf1)
												? `${getYoutubeID(firstHalf1)}`
												: `${getYoutubeID(fullGame)}`
										}
										alt={`${homeTeam} ${awayTeam} ${competition}`}
									/>
								) : (
									<img
										src={gameImg}
										alt={`${homeTeam} ${awayTeam} ${competition}`}
									/>
								)}
								<div className="flex flex-col items-center justify-center my-2">
									<p className="font-bold">{competition}</p>
									<p>
										{homeTeam} vs {awayTeam}
									</p>
									<p>{getFormattedDate(date)}</p>
									<p>{getFormattedTime(date)}</p>
									{isVideoAvailable ? (
										<button className="btn">Full game</button>
									) : (
										<button
											className="btn bg-opacity-70 bg-red-500 hover:bg-red-500 hover:text-white hover:bg-opacity-70 hover:border-red-500"
											disabled
										>
											Video is not available
										</button>
									)}
								</div>
							</Link>
						</div>
					</div>
				)
			})}
		</div>
	)
}
export default GamesContainer
