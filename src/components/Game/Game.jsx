const Game = () => {
	return (
		<div className="container">
			<div className="next-game">
				<p className="uppercase">Next game</p>
				<span className="text-orange-400 text-xl ">Dimanche 22 Oct 13h00</span>
			</div>
			<div className="empty"></div>
			<div className="competition">BEZIRKSLIGA</div>
			<div className="team-vs">
				<div className="team-next">
					<img
						src="https://www.fussball.de/export.media/-/action/getLogo/format/3/id/00ES8GNB78000035VV0AG08LVUPGND5I"
						alt=""
					/>
					<span>SGE Mendig</span>
				</div>
				<p className="font-bold text-sm">VS</p>
				<div className="team-next">
					<img
						src="https://www.fussball.de/export.media/-/action/getLogo/format/3/id/00ES8GNB78000054VV0AG08LVUPGND5I"
						alt=""
					/>
					<span>FV Rübenach</span>
				</div>
			</div>
		</div>
	)
}
export default Game
