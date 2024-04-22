const GameTest = ({
	isResult,
	isHomepage,
	homeLogo,
	awayLogo,
	date,
	time,
	homeTeam,
	homeScore,
	awayTeam,
	awayScore,
	competition,
}) => {
	return (
		<div className="max-w-xl px-4 py-4 mx-auto bg-gray-200 rounded-md shadow-xl ">
			<div className="flex flex-col items-center justify-center ">
				{isHomepage && (
					<p className="text-sm text-gray-600 uppercase">Next game</p>
				)}
				<div className="items-center font-bold tracking-wider text-center uppercase ">
					{competition}
				</div>
			</div>

			<hr className="w-2/5 mx-auto mt-3 border border-gray-400 " />

			<div className="flex items-start justify-center w-full h-24 mt-4">
				<div className="flex flex-col items-center w-1/3 text-sm font-medium gap-y-2 ">
					<img
						src={homeLogo}
						alt="home team logo"
						className="rounded-full shadow-sm w-14 h-14"
					/>
					<span className="w-full text-center truncate">{homeTeam}</span>
				</div>
				<div className="flex flex-col items-center w-1/3 h-full">
					<p className="flex flex-col text-sm text-center text-black">
						<span className="font-semibold">{date}</span>
						<span>{time}</span>
					</p>

					{isResult ? (
						<div className="flex items-center justify-center my-auto text-3xl font-bold tracking-widest ">
							<span>{`${homeScore}-${awayScore}`}</span>
						</div>
					) : (
						<div className="flex items-center justify-center w-12 h-12 mt-auto font-semibold tracking-widest border-2 border-black rounded-full shadow-md text-md">
							<span>VS</span>
						</div>
					)}
				</div>

				<div className="flex flex-col items-center w-1/3 text-sm font-medium gap-y-2">
					<img
						src={awayLogo}
						alt="away team logo"
						className="rounded-full shadow-sm w-14 h-14"
					/>
					<span className="w-full text-center truncate">{awayTeam}</span>
				</div>
			</div>
		</div>
	)
}
export default GameTest
