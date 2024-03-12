import gameImg from "../../assets/images/team.jpg"
import { Link } from "react-router-dom"
import getYoutubeID from "../../utils/getYoutubeID"
import { getFormattedDate, getFormattedTime } from "../../utils/formatDate"
import logo from "../../assets/logo.png"

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
		<div key={id} className="py-4 mx-auto ">
			<div className="max-w-md md:max-w-sm">
				<Link to={`/replay/${id}`}>
					{isVideoAvailable ? (
						<img
							src={
								getYoutubeID(firstHalf1)
									? `${getYoutubeID(firstHalf1)}`
									: `${getYoutubeID(fullGame)}`
							}
							alt={`${homeTeam} ${awayTeam} ${competition}`}
							className="rounded-xl"
						/>
					) : (
						<img src={gameImg} alt={`${homeTeam} ${awayTeam} ${competition}`} />
					)}
					<div className="flex flex-col my-4">
						<div className="flex items-center justify-start px-4 gap-x-3">
							<img
								src={logo}
								alt="logo SGE"
								className="rounded-full aspect-square w-9 h-9"
							/>
							<div className="flex flex-col gap-y-1.5 mb-2">
								<p className="text-lg font-medium leading-6 tracking-tighter line-clamp-1 ">
									{homeTeam} vs {awayTeam} - <span>{competition}</span>
								</p>
								<p className="font-light text-md">
									{getFormattedDate(date)} -{" "}
									<span>{getFormattedTime(date)}</span>
								</p>
							</div>
						</div>
						{isVideoAvailable ? (
							<button className="btn">WATCH REPLAY</button>
						) : (
							<button
								className="bg-red-500 btn bg-opacity-70 hover:bg-red-500 hover:text-white hover:bg-opacity-70 hover:border-red-500"
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
