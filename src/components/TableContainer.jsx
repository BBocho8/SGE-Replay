import { nanoid } from "nanoid"

const TableContainer = ({ table }) => {
	console.log(table)
	return (
		<div className="ptable">
			<h1 className="headin">BEZIRKSLIGA MITTE HERREN</h1>
			<table>
				<thead>
					<tr className="col">
						<th>#</th>
						<th>Team</th>
						<th>GP</th>
						<th>W</th>
						<th>D</th>
						<th>L</th>
						<th>GD</th>
						<th>PTS</th>
					</tr>
				</thead>
				<tbody>
					{table.map((club) => {
						const {
							draw,
							games,
							goal,
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
								className={(isPromotion && "wpos") || (isRelegation && "pos")}
							>
								<td
									className={team === "SGE Mendig" ? "font-bold text-2xl" : ""}
								>
									{place}
								</td>
								<td
									className={
										team === "SGE Mendig"
											? "flex justify-start items-center gap-2 font-bold text-2xl"
											: "flex justify-start items-center gap-2"
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
									className={team === "SGE Mendig" ? "font-bold text-xl" : ""}
								>
									{games}
								</td>
								<td
									className={team === "SGE Mendig" ? "font-bold text-xl" : ""}
								>
									{won}
								</td>
								<td
									className={team === "SGE Mendig" ? "font-bold text-xl" : ""}
								>
									{draw}
								</td>
								<td
									className={team === "SGE Mendig" ? "font-bold text-xl" : ""}
								>
									{lost}
								</td>
								<td
									className={team === "SGE Mendig" ? "font-bold text-xl" : ""}
								>
									{goalDifference}
								</td>
								<td
									className={team === "SGE Mendig" ? "font-bold text-xl" : ""}
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
