import { createContext, useState, useContext } from "react"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [games, setGames] = useState([])
	const [videoGames, setVideoGames] = useState([])

	return (
		<AppContext.Provider
			value={{
				games,
				setGames,
				videoGames,
				setVideoGames,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}
