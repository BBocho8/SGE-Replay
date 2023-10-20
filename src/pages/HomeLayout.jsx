import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import BottomNav from "../components/BottomNav"
import Footer from "../components/Footer"
const HomeLayout = () => {
	return (
		<div className="">
			<div className="pb-[56px]">
				<Navbar />
				<Outlet />
				<Footer />
			</div>
			<div className="nav:hidden ">
				<BottomNav />
			</div>
		</div>
	)
}
export default HomeLayout
