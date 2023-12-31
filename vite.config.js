import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			"/api": {
				target: "https://api-fussball.de",
				changeOrigin: true,
				secure: false,
				ws: true,
			},
		},
	},
	plugins: [react()],
})
