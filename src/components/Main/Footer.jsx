import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const FooterPage = () => {
	return (
		<Footer container className="border-t rounded-none">
			<Footer.Copyright
				by="SVE-Replay"
				year={new Date().getFullYear()}
				className="text-sm font-semibold text-black"
			/>
			<Footer.LinkGroup className="text-black gap-x-4 text-md ">
				<Link to="/replay">Replay</Link>
				<Link to="/table">Table</Link>
				<Link to="/results">Results</Link>
			</Footer.LinkGroup>
			<div className="flex mt-4 space-x-6 text-black sm:mt-0 sm:justify-center">
				<Link
					to="https://www.facebook.com/SGEintrachtMendigBell"
					target="_blank"
					rel="noreferrer"
				>
					<BsFacebook className="w-5 h-5 hover:opacity-70" />
				</Link>
				<Link
					to="https://www.instagram.com/sveintrachtmendig/"
					target="_blank"
					rel="noreferrer"
				>
					<BsInstagram className="w-5 h-5 hover:opacity-70" />
				</Link>
			</div>
		</Footer>
	);
};
export default FooterPage;
