import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
import { BsFacebook, BsInstagram } from "react-icons/bs"

const FooterPage = () => {
	return (
		<Footer container className="border-t  rounded-none">
			<Footer.Copyright
				by="SGE-Replay"
				year={new Date().getFullYear()}
				className="text-black font-semibold text-sm"
			/>
			<Footer.LinkGroup className="gap-x-4 text-md text-black ">
				<Link to="/replay">Replay</Link>
				<Link to="/table">Table</Link>
				<Link to="/results">Results</Link>
			</Footer.LinkGroup>
			<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-black">
				<Link
					to="https://www.facebook.com/SGEintrachtMendigBell"
					target="_blank"
					rel="noreferrer"
				>
					<BsFacebook className="w-5 h-5 hover:opacity-70" />
				</Link>
				<Link
					to="https://www.instagram.com/sgeintrachtmendigbell/"
					target="_blank"
					rel="noreferrer"
				>
					<BsInstagram className="w-5 h-5 hover:opacity-70" />
				</Link>
			</div>
		</Footer>
	)
}
export default FooterPage
