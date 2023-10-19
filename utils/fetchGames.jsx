// var myHeaders = new Headers()
// myHeaders.append("x-auth-token", "01C6C937L5P333Z5F9k960m4q6vJrmJMMSKJDGWOnu")

// var requestOptions = {
// 	method: "GET",
// 	headers: myHeaders,
// 	redirect: "follow",
// }

// async function fetchGamesJSON() {
// 	try {
// 		const result = await fetch(
// 			"/api/team/02EPUU1T88000000VS5489B1VT0RKM5V",
// 			requestOptions
// 		)
// 		const json = await result.json()
// 		setGames(json)
// 		return json
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// export default fetchGamesJSON

import { useEffect } from "react"
import { useGlobalContext } from "../src/context"

const useFetchGames = () => {
	const { games, setGames } = useGlobalContext()
	var myHeaders = new Headers()
	myHeaders.append("x-auth-token", "01C6C937L5P333Z5F9k960m4q6vJrmJMMSKJDGWOnu")

	var requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow",
	}

	async function fetchGamesJSON() {
		try {
			const result = await fetch(
				"https://api-fussball.de/api/team/02EPUU1T88000000VS5489B1VT0RKM5V",
				requestOptions
			)
			const json = await result.json()
			setGames(json)

			return json
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchGamesJSON()
	}, [])

	return { games }
}
export default useFetchGames
