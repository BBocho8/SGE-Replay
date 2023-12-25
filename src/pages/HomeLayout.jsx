/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom"
import Navbar from "../components/Main/Navbar"
import FooterPage from "../components/Main/Footer"
import BottomNav from "../components/Main/BottomNav"
import { useGetAllGames } from "../utils/fetchGames"
import LoadingSpinner from "../components/LoadingSpinner"
import { useGetAllVideos } from "../utils/fetchVideo"
import { useQuery } from "@tanstack/react-query"

const HomeLayout = () => {
	const { isGamesLoading, games } = useGetAllGames()
	const { isVideosLoading, data } = useGetAllVideos()

	if (isGamesLoading || isVideosLoading || !games || !data) {
		return (
			<div className="flex flex-col items-center justify-center h-screen gap-4">
				<h3>SGE-Replay is loading...</h3>
				<LoadingSpinner />
			</div>
		)
	}

	return (
		<div className="">
			{/* 56px = size bottom nav && 73px = size footer */}
			<div className="pb-[56px] nav:pb-[73px]">
				<Navbar />
				<Outlet />
				<div className="hidden nav:block nav:absolute nav:bottom-0 nav:w-full ">
					<FooterPage />
				</div>
			</div>
			<div className="nav:hidden ">
				<BottomNav />
			</div>
		</div>
	)
}
export default HomeLayout
