import { Moon, Sun } from 'lucide-react'

type Props = {
    dark: boolean
    onToggle: () => void
}

function ThemeToggle({ dark, onToggle }: Props) {
    return (
        <button
            onClick={onToggle}
            className={`relative w-14 h-8 rounded-full transition-colors duration-300 cursor-pointer ${
                dark ? "bg-neutral-600" : "bg-neutral-400"
            }`}
        >
            <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
                dark ? "translate-x-6" : "translate-x-0"
            }`}>
                {dark ? <Sun className="text-amber-600 p-1" /> : <Moon className="text-cyan-700 p-1" />}
            </span>
        </button>
    )
}

export default ThemeToggle