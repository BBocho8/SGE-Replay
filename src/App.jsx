import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	Replay,
	HomeLayout,
	Error as ErrorComponent,
	ReplayDetails,
} from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <ErrorComponent />,

		children: [
			{
				index: true,
				element: <Replay />,
			},
			// {
			// 	path: "/results",
			// 	element: <Results />,
			// },
			{
				path: "/replay",
				element: <Replay />,
			},
			{
				path: "replay/:gameID",
				element: <ReplayDetails />,
			},

			// {
			// 	path: "/table",
			// 	element: <Table />,
			// },
		],
	},
]);
const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
