export const sortVideoGames = (params) => {
	const sortedArray = params.sort(function (a, b) {
		return new Date(b.date) - new Date(a.date)
	})
	return sortedArray
}
