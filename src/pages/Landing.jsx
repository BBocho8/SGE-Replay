import Footer from "../components/Footer"
import GridTableGames from "../components/GridTableGames"
import HomeHeader from "../components/HomeHeader"
// import LastGames from "../components/LastGames"
// import NextGames from "../components/NextGames"
// import TableContainer from "../components/TableContainer"

const Landing = () => {
	return (
		<div>
			<HomeHeader />
			<h1>HOMEPAGE</h1>
			{/* <TableContainer />
			<NextGames />
			<LastGames /> */}
			<GridTableGames />
			<Footer />
		</div>
	)
}
export default Landing
