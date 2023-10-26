import { Outlet } from "react-router-dom"
import Navbar from "../components/Main/Navbar"
import FooterPage from "../components/Main/Footer"
import BottomNav from "../components/Main/BottomNav"

const HomeLayout = () => {
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
