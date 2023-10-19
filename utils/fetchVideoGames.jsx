import { createClient } from "contentful"
import { useEffect } from "react"
import { useGlobalContext } from "../src/context"

const client = createClient({
	space: import.meta.env.VITE_SPACE_ID,
	environment: "master",
	accessToken: import.meta.env.VITE_ACCESS_TOKEN,
})

const useFetchVideoGames = () => {
	const { videoGames, setVideoGames } = useGlobalContext()

	const getData = async () => {
		try {
			const response = await client.getEntries({
				content_type: "matchs-videos",
			})
			const matchsVideos = response.items.map((item) => {
				const {
					isVideoAvailable,
					gameInfo,
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
				} = item.fields
				const id = item.sys.id
				return {
					id,
					isVideoAvailable,
					gameInfo,
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
				}
			})
			setVideoGames(matchsVideos)
			// setLoading(false)
		} catch (error) {
			console.log(error)
			// setLoading(false)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	return { videoGames }
}

export default useFetchVideoGames
