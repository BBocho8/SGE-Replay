import { useRef, useState } from "react"
import { FaBars } from "react-icons/fa"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
import logo from "../../assets/logo.png"

const links = [
	{
		id: 1,
		url: "/",
		text: "home",
	},
	{
		id: 2,
		url: "/replay",
		text: "replay",
	},
	{
		id: 3,
		url: "/table",
		text: "table",
	},
	{
		id: 4,
		url: "/results",
		text: "results",
	},
]
const social = [
	{
		id: 1,
		url: "https://www.facebook.com/SGEintrachtMendigBell",
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: "https://www.instagram.com/sgeintrachtmendigbell/",
		icon: <FaInstagram />,
	},
]

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false)

	const linkContainerRef = useRef(null)
	const linksRef = useRef(null)

	const toggleLinks = () => {
		setShowLinks(!showLinks)
	}

	const linkStyles = {
		height: showLinks
			? `${linksRef.current.getBoundingClientRect().height}px`
			: "0px",
	}

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<div className="flex gap-x-2 items-center justify-center">
						<img src={logo} alt="logo" className="logo" />

						<p className="text-black font-bold">SG MENDIG REPLAY</p>
					</div>
					<button className="nav-toggle" onClick={toggleLinks}>
						<FaBars />
					</button>
				</div>
				<div
					className="links-container"
					ref={linkContainerRef}
					style={linkStyles}
				>
					<div className="flex gap-4 justify-center links" ref={linksRef}>
						{links.map((link) => {
							const { id, url, text } = link
							return (
								<NavLink
									key={id}
									to={url}
									style={({ isActive }) => ({
										color: isActive ? "rgb(249 115 22)" : "rgb(17 24 39)",
										textTransform: "capitalize",
										padding: "0.5rem 0.5rem 0.5rem 0",
										letterSpacing: "2px",
										fontWeight: "bold",
									})}
								>
									{text}
								</NavLink>
							)
						})}
					</div>
				</div>
				{/* SOCIAL LINKS */}
				<ul className="social-icons">
					{social.map((socialIcon) => {
						const { id, url, icon } = socialIcon
						return (
							<li key={id}>
								<a href={url}>{icon}</a>
							</li>
						)
					})}
					<BsSearch />
				</ul>
			</div>
		</nav>
	)
}
export default Navbar
