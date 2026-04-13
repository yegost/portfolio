import { useState, useEffect } from "react"

function useTheme() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark)
    }, [dark])
    
    const toggle = () => setDark(d => !d)
    
    return { dark, toggle }
}

export default useTheme