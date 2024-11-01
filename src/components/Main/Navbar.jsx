import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const links = [
	{
		id: 1,
		url: "/",
		text: "home",
	},
	// {
	// 	id: 2,
	// 	url: "/replay",
	// 	text: "replay",
	// },
	// {
	// 	id: 3,
	// 	url: "/table",
	// 	text: "table",
	// },
	// {
	// 	id: 4,
	// 	url: "/results",
	// 	text: "results",
	// },
];
const social = [
	{
		id: 1,
		url: "https://www.facebook.com/SGEintrachtMendigBell",
		icon: <FaFacebook className="w-5 h-5 hover:opacity-80" />,
	},
	{
		id: 2,
		url: "https://www.instagram.com/sveintrachtmendig/",
		icon: <FaInstagram className="w-5 h-5 hover:opacity-80" />,
	},
];

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);

	const linkContainerRef = useRef(null);
	const linksRef = useRef(null);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	const linkStyles = {
		height: showLinks
			? `${linksRef.current.getBoundingClientRect().height}px`
			: "0px",
	};

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<Link
						className="flex items-center justify-center cursor-pointer gap-x-3"
						to={"/"}
					>
						<img src={logo} alt="logo" className="logo" />

						<p className="tracking-wide text-black">
							<span className="text-white bg-primaryGreen rounded-sm p-0.5 mr-1 ">
								SVE
							</span>
							REPLAY
						</p>
					</Link>
					<button
						className={
							showLinks
								? "nav-toggle text-primaryGreen rotate-90"
								: "nav-toggle"
						}
						onClick={toggleLinks}
						type="button"
					>
						<FaBars />
					</button>
				</div>
				<div
					className="links-container"
					ref={linkContainerRef}
					style={linkStyles}
				>
					<div className="flex justify-center gap-4 links" ref={linksRef}>
						{links.map((link) => {
							const { id, url, text } = link;
							return (
								<NavLink
									key={id}
									to={url}
									style={({ isActive }) => ({
										color: isActive ? "#15A34A" : "rgb(17 24 39)",
										textTransform: "capitalize",
										padding: "0.5rem 0.5rem 0.5rem 0",
										letterSpacing: "2px",
										fontWeight: "bold",
									})}
								>
									{text}
								</NavLink>
							);
						})}
					</div>
				</div>
				{/* SOCIAL LINKS */}
				<ul className="social-icons">
					{social.map((socialIcon) => {
						const { id, url, icon } = socialIcon;
						return (
							<Link key={id} to={url} target="_blank" rel="noreferrer">
								{icon}
							</Link>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;
