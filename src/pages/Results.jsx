import LastGames from "../components/LastGames"
import NextGames from "../components/NextGames"
import { useGlobalContext } from "../context"

const Results = () => {
	const { games } = useGlobalContext()
	if (!games.data) {
		return <h2>Loading...</h2>
	}
	const { prevGames, nextGames } = games.data
	return (
		<div>
			<LastGames isResult={true} isHomepage={false} games={prevGames} />

			<NextGames isResult={false} isHomepage={false} games={nextGames} />
		</div>
	)
}
export default Results
