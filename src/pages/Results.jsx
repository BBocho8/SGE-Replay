import LastGames from "../components/Game/LastGames"
import NextGames from "../components/Game/NextGames"
import { useGlobalContext } from "../context"

const Results = () => {
	const { games } = useGlobalContext()
	if (!games.data) {
		return <h2>Loading...</h2>
	}
	const { prevGames, nextGames } = games.data
	return (
		<div>
			<div className="my-2">
				<LastGames isResult={true} isHomepage={false} games={prevGames} />
			</div>

			<div className="my-8">
				<NextGames isResult={false} isHomepage={false} games={nextGames} />
			</div>
		</div>
	)
}
export default Results
