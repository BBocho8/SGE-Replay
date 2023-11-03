import gameImg from "../../assets/images/team.jpg"
import { Link } from "react-router-dom"
import getYoutubeID from "../../utils/getYoutubeID"
import { getFormattedDate, getFormattedTime } from "../../utils/formatDate"

const GamesContainer = ({
	id,
	isVideoAvailable,
	competition,
	homeTeam,
	awayTeam,
	date,
	firstHalf1,
	fullGame,
}) => {
	return (
		<div key={id} className="mx-auto py-4 ">
			<div className="max-w-md  md:max-w-sm border rounded-sm shadow-sm bg-gray-100  border-gray-400">
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
						<img src={gameImg} alt={`${homeTeam} ${awayTeam} ${competition}`} />
					)}
					<div className="flex flex-col items-center justify-center my-4">
						<p className="text-lg uppercase">{competition}</p>
						<p className="font-bold">
							{homeTeam} vs {awayTeam}
						</p>
						<p>{getFormattedDate(date)}</p>
						<p className="text-sm">{getFormattedTime(date)}</p>
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
}
export default GamesContainer
