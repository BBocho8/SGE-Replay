export const getFormattedDate = (date) => {
	const options = {
		// weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	}
	const newDate = new Date(date)

	const formattedDate = newDate.toLocaleDateString("en-UK", options)

	return formattedDate
}

export const getFormattedTime = (date) => {
	let str = date
	if (typeof str === "string") {
		str = str.split("T")[1]

		return str
	}
}
