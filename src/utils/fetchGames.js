let myHeaders = new Headers()
myHeaders.append("x-auth-token", import.meta.env.VITE_GAMES_ACCESS_DE_TOKEN)

let requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow",
}

export async function fetchGames() {
	try {
		const fetchData = await fetch(
			`/api/team/${import.meta.env.VITE_DE_TEAM_ID}`,
			requestOptions
		)
		const response = await fetchData.json()
		const games = response.data
		const { prevGames, nextGames, table } = games

		return { games, prevGames, nextGames, table }
	} catch (error) {
		console.log(error)
	}
}
