import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {
	Landing,
	Table,
	Results,
	Replay,
	ReplayDetails,
	HomeLayout,
	Error,
} from "./pages"

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,

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
				path: "replay/:gameID",
				element: <ReplayDetails />,
			},

			{
				path: "/table",
				element: <Table />,
			},
		],
	},
])
const App = () => {
	return <RouterProvider router={router} />
}
export default App
