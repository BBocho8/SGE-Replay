import { Link, useRouteError } from "react-router-dom";

import img from "../assets/not-found.svg";

const ErrorComponent = () => {
	const error = useRouteError();

	if (error.status === 404) {
		return (
			<div className="flex-col min-h-screen text-center flex-center ">
				<img
					src={img}
					alt="not found"
					className="w-[90vw] max-w-xl block mb-8 mt-[-3rem]"
				/>
				<h3 className="mb-2">Ohh!</h3>
				<p className="mt-2 mb-4 leading-6 text-gray-500">
					We can&apos;t seem to find the page you are looking for!
				</p>
				<Link to="/" className="py-2">
					<button type="button" className="btn">
						back home
					</button>
				</Link>
			</div>
		);
	}
	return (
		<div className="flex-col min-h-screen text-center flex-center ">
			<img
				src={img}
				alt="not found"
				className="w-[90vw] max-w-xl block mb-8 mt-[-3rem]"
			/>
			<h3 className="mb-2">Ohh!</h3>
			<p className="mt-2 mb-4 leading-6 text-gray-500">
				We can&apos;t seem to find the page you are looking for!
			</p>
			<Link to="/" className="py-2">
				<button type="button" className="btn">
					back home
				</button>
			</Link>
		</div>
	);
};
export default ErrorComponent;
