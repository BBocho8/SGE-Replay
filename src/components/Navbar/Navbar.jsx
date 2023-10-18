import "./navbar.css"
import { useRef, useState } from "react"
import { FaBars } from "react-icons/fa"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs"

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
		url: "https://www.twitter.com",
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: "https://www.twitter.com",
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
					{/* <img
						src="https://www.fussball.de/export.media/-/action/getLogo/format/3/id/00ES8GNB78000035VV0AG08LVUPGND5I"
						alt="logo"
						className="logo"
					/> */}
					<p className="text-black font-bold">SG MENDIG REPLAY</p>
					<button className="nav-toggle" onClick={toggleLinks}>
						<FaBars />
					</button>
				</div>
				<div
					className="links-container"
					ref={linkContainerRef}
					style={linkStyles}
				>
					<ul className="links" ref={linksRef}>
						{links.map((link) => {
							const { id, url, text } = link
							return (
								<li key={id}>
									<Link to={url}>{text}</Link>
								</li>
							)
						})}
					</ul>
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
