const TableContainer = ({ table, isHomepage }) => {
	return (
		<div className="ptable  ">
			<h1 className=" text-h2 text-center uppercase">BEZIRKSLIGA MITTE</h1>
			<h3 className="text-center mb-0">League Table</h3>
			<div
				className={isHomepage ? "xl:max-h-96 xl:overflow-y-auto" : undefined}
			>
				<table className="border border-gray-200 ">
					<thead>
						<tr className="col">
							<th className="">#</th>
							<th>Team</th>
							<th>GP</th>
							<th>W</th>
							<th className="hidden sm:table-cell">D</th>
							<th className="hidden sm:table-cell">L</th>
							<th className="hidden sm:table-cell">GD</th>
							<th>PTS</th>
						</tr>
					</thead>
					<tbody>
						{table.map((club) => {
							const {
								draw,
								games,

								goalDifference,
								img,
								isPromotion,
								isRelegation,
								lost,
								place,
								points,
								team,
								won,
							} = club
							return (
								<tr
									key={team}
									className={`${isPromotion ? "promotion" : undefined} ${
										isRelegation ? "relegation" : undefined
									} ${
										team === "SGE Mendig" && !isRelegation && !isPromotion
											? "bg-orange-100"
											: undefined
									} border border-gray-200`}
								>
									<td
										className={
											team === "SGE Mendig"
												? "font-bold text-md border border-gray-200"
												: " border border-gray-200"
										}
									>
										{place}
									</td>
									<td
										className={
											team === "SGE Mendig"
												? "flex justify-start items-center gap-2 font-bold text-xl border border-gray-200"
												: "flex justify-start items-center gap-2 border-x border-gray-200"
										}
									>
										<img
											src={img}
											alt={team}
											className={
												team === "SGE Mendig" ? "h-10 w-10" : "h-8 w-8"
											}
										/>{" "}
										<p className="text-center">{team}</p>
									</td>
									<td
										className={
											team === "SGE Mendig"
												? "font-bold text-md border border-gray-200"
												: " border border-gray-200"
										}
									>
										{games}
									</td>
									<td
										className={
											team === "SGE Mendig"
												? "font-bold text-md border border-gray-200"
												: " border border-gray-200"
										}
									>
										{won}
									</td>
									<td
										className={
											team === "SGE Mendig"
												? "font-bold text-md hidden sm:table-cell border border-gray-200 bg-slate-50 sm:bg-transparent"
												: " hidden sm:table-cell border border-gray-200 bg-slate-50 sm:bg-transparent"
										}
									>
										{draw}
									</td>
									<td
										className={
											team === "SGE Mendig"
												? "font-bold text-md hidden sm:table-cell border border-gray-200 bg-slate-50 sm:bg-transparent"
												: " hidden sm:table-cell border border-gray-200 bg-slate-50 sm:bg-transparent"
										}
									>
										{lost}
									</td>
									<td
										className={
											team === "SGE Mendig"
												? "font-bold text-md  hidden sm:table-cell border border-gray-200 bg-slate-50 sm:bg-transparent"
												: " hidden sm:table-cell  border border-gray-200 bg-slate-50 sm:bg-transparent"
										}
									>
										{goalDifference}
									</td>
									<td
										className={
											team === "SGE Mendig"
												? "font-bold text-md border bg-orange-100 sm:bg-transparent border-gray-200"
												: "border border-gray-200 bg-slate-50 sm:bg-transparent"
										}
									>
										{points}
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}
export default TableContainer
