import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import BottomNav from "../components/BottomNav"
const HomeLayout = () => {
	return (
		<div className="">
			<Navbar />
			<div className="nav:pb-[56px]">
				<Outlet />
			</div>
			<div className="nav:hidden ">
				<BottomNav />
			</div>
		</div>
	)
}
export default HomeLayout
