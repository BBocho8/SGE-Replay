import { createContext, useState, useContext } from "react"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [games, setGames] = useState([])

	return (
		<AppContext.Provider
			value={{
				games,
				setGames,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}
