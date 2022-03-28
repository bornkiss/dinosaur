import { useEffect, useState } from "react"

function useTheme() {
  const [themeName, setThemeName] = useState("light")
  useEffect(() => {
    const theme = document.getElementsByTagName('html')[0].getAttribute('data-theme')
    setThemeName(theme)
  }, [])
  return {
    themeName,
    isDarkMode: themeName === "dark",
    isLightMode: themeName === "light",
  }
}

export default useTheme