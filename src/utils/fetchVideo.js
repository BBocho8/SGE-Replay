import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { createClient } from "contentful"

const client = createClient({
	space: import.meta.env.VITE_SPACE_ID,
	environment: "master",
	accessToken: import.meta.env.VITE_ACCESS_TOKEN,
})

export const fetchVideoGames = async () => {
	try {
		const response = await client.getEntries({
			content_type: "matchs-videos",
		})
		const videoGames = response.items.map((item) => {
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
		return { videoGames }
		// setLoading(false)
	} catch (error) {
		console.log(error)
		// setLoading(false)
	}
}

export const getVideos = axios.create({
	baseURL: import.meta.env.VITE_SGE_DB_URL,
})

export const useGetAllVideos = () => {
	const {
		isLoading: isVideosLoading,
		data,
		isError: isVideosError,
	} = useQuery({
		queryKey: ["videos"],
		queryFn: async () => {
			const { data } = await getVideos.get("/videos")
			return data
		},
		staleTime: 60 * 5000,
	})
	return { isVideosLoading, isVideosError, data }
}
