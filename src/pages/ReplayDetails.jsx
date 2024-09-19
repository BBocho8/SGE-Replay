import { useParams } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { getFormattedDate, getFormattedTime } from "../utils/formatDate";
import { useGetAllVideos } from "../utils/fetchVideo";

const ReplayDetails = () => {
	const [gamePart, setGamePart] = useState("");
	const [isResultOpen, setIsResultOpen] = useState(false);

	const { gameID } = useParams();
	const { isVideosLoading, data } = useGetAllVideos();
	const { videoGames } = data;

	const game = videoGames?.find((videoGame) => {
		if (gameID === videoGame?.id) {
			return videoGame;
		}
	});
	if (isVideosLoading || !game) {
		return (
			<div className="my-4 flex-center">
				<LoadingSpinner />
			</div>
		);
	}

	const {
		isVideoAvailable,

		competition,
		homeTeam,
		awayTeam,
		homeScore,
		awayScore,
		date,
		firstHalf1,
		firstHalf2,
		firstHalf3,
		secondHalf1,
		secondHalf2,
		secondHalf3,
		fullGame,
	} = game;

	const gameLinks = {
		firstHalf1,
		firstHalf2,
		firstHalf3,
		secondHalf1,
		secondHalf2,
		secondHalf3,
		fullGame,
	};

	const gameLinksArray = Object.keys(gameLinks);

	const result = gameLinksArray.filter((link) => {
		if (game[link]) {
			return link;
		}
	});

	const handleClick = (res) => {
		setGamePart(res);
	};

	const handleResult = () => {
		setIsResultOpen(!isResultOpen);
	};

	return (
		<div className="flex flex-col items-center mx-auto my-4">
			<p className="my-2 text-xl font-semibold">
				{homeTeam} <span className="text-xl font-bold">-</span> {awayTeam}
			</p>
			<p>{competition}</p>
			<p>
				<span>{getFormattedDate(date)}</span> -{" "}
				<span>{getFormattedTime(date)}</span>
			</p>
			<div className="flex flex-wrap items-center justify-center my-2 gap-x-2 gap-y-2">
				{result.map((res, index) => {
					return (
						<button
							key={index}
							className={res === gamePart ? "btn bg-black" : "btn"}
							onClick={() => handleClick(res)}
						>
							{res === "firstHalf1"
								? "First Half 1"
								: res === "firstHalf2"
									? "First Half 2"
									: res === "firstHalf3"
										? "First Half 3"
										: res === "secondHalf1"
											? "Second Half 1"
											: res === "secondHalf2"
												? "Second Half 2"
												: res === "secondHalf3"
													? "Second Half 3"
													: res === "fullGame"
														? "Full Game"
														: ""}
						</button>
					);
				})}
			</div>
			{!isVideoAvailable && (
				<p className="text-blue-800">Game is not yet available</p>
			)}
			{gamePart && (
				<iframe
					src={game[gamePart]}
					allowFullScreen
					className="w-4/5 h-auto my-2 aspect-video"
					title="video game"
				/>
			)}

			<button className="btn" onClick={handleResult}>
				{!isResultOpen ? "see result" : "Hide result"}
			</button>
			{isResultOpen && (
				<p className="text-lg">
					{homeTeam}
					<span className="mt-2 text-xl font-bold ">{`   ${homeScore} - ${awayScore}   `}</span>
					{awayTeam}
				</p>
			)}
		</div>
	);
};
export default ReplayDetails;
