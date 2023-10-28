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

//Loaders
import { loader as HomeLayoutLoader } from "./pages/HomeLayout"

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		loader: HomeLayoutLoader,

		children: [
			{
				index: true,
				element: <Landing />,
				loader: HomeLayoutLoader,
			},
			{
				path: "/results",
				element: <Results />,
				loader: HomeLayoutLoader,
			},
			{
				path: "/replay",
				element: <Replay />,
				loader: HomeLayoutLoader,
			},
			{
				path: "replay/:gameID",
				element: <ReplayDetails />,
				loader: HomeLayoutLoader,
			},

			{
				path: "/table",
				element: <Table />,
				loader: HomeLayoutLoader,
			},
		],
	},
])
const App = () => {
	return <RouterProvider router={router} />
}
export default App
