import { Link } from "react-router-dom"
import img from "../assets/homeheader.jpg"
import GamesContainer from "./Game/GamesContainer"
import { FiChevronDown } from "react-icons/fi"

const HomeHeader = () => {
	return (
		<div className="h-[calc(100vh-72px)] overflow-hidden w-full m-auto relative ">
			<img src={img} alt="" className="object-cover" />
			<div className="child">
				<GamesContainer />
			</div>

			<div className="box">
				<Link href="#heroScroll">
					<span>
						<FiChevronDown className="h-12 w-12  text-white" />
					</span>
				</Link>
			</div>
		</div>
	)
}
export default HomeHeader
