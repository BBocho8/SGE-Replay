import {
	BottomNavigation,
	BottomNavigationAction,
	createTheme,
} from "@mui/material"
import { useState } from "react"
import { FaHome, FaYoutube, FaListOl } from "react-icons/fa"
import { IoIosStats } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
const theme = createTheme({
	palette: {
		primary: {
			main: "#15A34A",
		},
	},
})

const BottomNav = () => {
	const [btnValue, setBtnValue] = useState(0)
	const navigate = useNavigate()
	return (
		<ThemeProvider theme={theme}>
			<BottomNavigation
				sx={{ width: "100%", position: "fixed", bottom: 0 }}
				value={btnValue}
				onChange={(event, value) => setBtnValue(value)}
				showLabels
			>
				<BottomNavigationAction
					label="Home"
					value="home"
					icon={<FaHome />}
					onClick={() => navigate("/")}
				/>
				<BottomNavigationAction
					label="Replay"
					value="replay"
					icon={<FaYoutube />}
					onClick={() => navigate("/replay")}
				/>
				<BottomNavigationAction
					label="Table"
					value="table"
					icon={<FaListOl />}
					onClick={() => navigate("/table")}
				/>
				<BottomNavigationAction
					label="Results"
					value="results"
					icon={<IoIosStats />}
					onClick={() => navigate("/results")}
				/>
			</BottomNavigation>
		</ThemeProvider>
	)
}
export default BottomNav
