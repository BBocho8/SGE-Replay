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
		<div className=" rounded-md bg-gray-200  py-4 px-4  shadow-xl max-w-xl mx-auto">
			<div className="flex flex-col justify-center items-center ">
				{isHomepage && (
					<p className="uppercase text-gray-600 text-sm">Next game</p>
				)}
				<div className=" text-center  items-center uppercase font-bold tracking-wider">
					{competition}
				</div>
			</div>

			<hr className="border border-gray-400 w-2/5 mx-auto mt-3" />

			<div className="mt-4 flex justify-center items-start w-full h-24">
				<div className="flex flex-col  items-center text-sm font-medium gap-y-2 w-1/3 ">
					<img
						src={homeLogo}
						alt="home team logo"
						className="w-14 h-14 rounded-full shadow-sm"
					/>
					<span className="truncate text-center w-full">{homeTeam}</span>
				</div>
				<div className="flex flex-col h-full w-1/3 items-center">
					<p className="text-black text-sm flex flex-col   text-center">
						<span className="font-semibold">{date}</span>
						<span>{time}</span>
					</p>

					{isResult ? (
						<div className="tracking-widest text-3xl font-bold my-auto flex justify-center items-center ">
							<span>{`${homeScore}-${awayScore}`}</span>
						</div>
					) : (
						<div className="tracking-widest text-md font-semibold mt-auto  border-2 border-black rounded-full w-12 h-12 flex justify-center items-center shadow-md">
							<span>VS</span>
						</div>
					)}
				</div>

				<div className="flex flex-col  items-center text-sm font-medium  gap-y-2 w-1/3">
					<img
						src={awayLogo}
						alt="away team logo"
						className="w-14 h-14 rounded-full shadow-sm"
					/>
					<span className="truncate text-center w-full">{awayTeam}</span>
				</div>
			</div>
		</div>
	)
}
export default GameTest
