import { useQuery } from "@tanstack/react-query"
import axios from "axios"

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
