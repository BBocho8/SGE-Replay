import { nanoid } from "nanoid"

const TableContainer = ({ table }) => {
	return (
		<div className="ptable mx-auto">
			<h1 className="text-black font-bold text-2xl text-center">
				BEZIRKSLIGA MITTE HERREN
			</h1>
			<table className="border border-gray-200">
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
								key={nanoid()}
								className={`${isPromotion && "wpos"} ${isRelegation && "pos"} ${
									team === "SGE Mendig" &&
									!isRelegation &&
									!isPromotion &&
									"bg-orange-100"
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
										className={team === "SGE Mendig" ? "h-10 w-10" : "h-8 w-8"}
									/>{" "}
									{team}
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
	)
}
export default TableContainer
