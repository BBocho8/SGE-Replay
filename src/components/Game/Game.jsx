const Game = ({
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
		<div className="opacity-80 rounded-xl bg-gray-100  pt-4 md:pt-0 pb-4 relative max-w-sm md:max-w-3xl mx-auto px-8 md:grid md:grid-cols-12 md:grid-rows-2 md:items-center">
			<div className=" md:col-span-5 md:row-span-2 text-xl font-bold flex flex-col justify-center items-center md:items-start mb-1 md:mb-0">
				{isHomepage && <p className="uppercase">Next game</p>}
				<span className="text-orange-400 text-xl ">
					{date}-{time}
				</span>
			</div>
			<div className="md:col-span-1 md:row-span-2"></div>
			<div className="mb-2 md:mb-0 text-center md:row-span-1 md:col-span-5 md:flex md:justify-center items-center uppercase font-bold text-xl">
				{competition}
			</div>
			<div className="md:col-span-5 md:row-span-1 flex justify-between items-center md:gap-x-4">
				<div className="flex flex-col  items-center text-sm font-semibold">
					<img src={homeLogo} alt="" />
					<span>{homeTeam}</span>
				</div>
				{isResult ? (
					<p className="font-bold text-3xl">{`${homeScore}-${awayScore}`}</p>
				) : (
					<p className="font-bold text-sm">VS</p>
				)}

				<div className="flex flex-col  items-center text-sm font-semibold">
					<img
						src={awayLogo}
						alt=""
						className="w-14 h-14 rounded-full shadow-sm"
					/>
					<span>{awayTeam}</span>
				</div>
			</div>
		</div>
	)
}
export default Game
