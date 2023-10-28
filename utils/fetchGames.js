var myHeaders = new Headers()
myHeaders.append("x-auth-token", "01C6C937L5P333Z5F9k960m4q6vJrmJMMSKJDGWOnu")

var requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow",
}

export async function fetchGames() {
	try {
		const fetchData = await fetch(
			"/api/team/02EPUU1T88000000VS5489B1VT0RKM5V",
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
