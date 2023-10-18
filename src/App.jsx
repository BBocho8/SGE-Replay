import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Landing, Table, Results, Replay, HomeLayout } from "./pages"

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
	return <RouterProvider router={router} />
}
export default App
