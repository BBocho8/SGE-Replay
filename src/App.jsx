import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Landing, Table, Results, Replay, HomeLayout } from "./pages"
import useFetchGames from "../utils/fetchGames"
import useFetchVideoGames from "../utils/fetchVideoGames"

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,

		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: "/results",
				element: <Results />,
			},
			{
				path: "/replay",
				element: <Replay />,
			},
			{
				path: "/table",
				element: <Table />,
			},
		],
	},
])
const App = () => {
	useFetchGames()
	useFetchVideoGames()

	return <RouterProvider router={router} />
}
export default App
