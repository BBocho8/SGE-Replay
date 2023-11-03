import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const getGames = axios.create({
	baseURL: import.meta.env.VITE_SGE_DB_URL,
})

export const useGetAllGames = () => {
	const {
		isLoading: isGamesLoading,
		data: games,
		isError: isGamesError,
	} = useQuery({
		queryKey: ["games"],
		queryFn: async () => {
			const { data } = await getGames.get("/games")
			return { data }
		},
		staleTime: 60 * 5000,
	})
	return { isGamesLoading, isGamesError, games }
}
