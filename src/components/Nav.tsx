import { personal } from "../data/data"
import { useState } from "react"
import { Moon, Sun } from 'lucide-react'
import ThemeToggle from "./ThemeToggle"

const links = [
    { label: "Skills", href: "#skills", id: '2' },
    { label: "Projects", href: "#projects", id: '3' },
    { label: "Contact", href: "#contact", id: '4' },
]

type NavProps = {
  onThemeToggle: () => void
  dark: boolean
}

function Nav({ onThemeToggle, dark }: NavProps) {
    const [openNav, setOpenNav] = useState(false)

    return(
        <nav className="dark:bg-neutral-800 dark:text-white">
            <div className="top-0 left-0 right-0 z-50 bg-neutral-100 backdrop-blur-sm dark:bg-neutral-900" id="about">
                <div className="mx-auto flex max-w-3xl items-center justify-between px-6">
                    <span className="font-manrope py-5 text-2xl font-bold">
                        {personal.name}
                    </span>
                    <div className="hidden sm:flex items-center gap-6">
                        <ul className="flex gap-6 ">
                            {links.map(link => (
                                <li key={link.href}>
                                    <a 
                                        href={link.href}
                                        className="text-sm tracking-wider font-inter text-neutral-500 cursor-pointer hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button onClick={onThemeToggle} className="cursor-pointer text-neutral-500 dark:text-neutral-400 transition-colors">
                            {dark ? <Sun className="hover:text-amber-400 w-4 h-4 transition-colors duration-300" /> : <Moon className="hover:text-blue-500 w-4 h-4 transition-colors duration-300" />}
                        </button>
                        <a 
                            href={personal.resume}
                            target="_blank"
                            rel="noreferrer"
                            className="before:ease font-manrope text-sm font-semibold tracking-wide px-4 py-2 rounded relative overflow-hidden bg-neutral-800 text-white dark:text-black dark:bg-neutral-100 transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-10 before:rotate-4 before:bg-white dark:before:bg-black before:opacity-20 before:duration-700 hover:before:-translate-x-25"
                        >
                            Resume
                        </a>
                    </div>
                    <div className="sm:hidden">
                        <button 
                            className="flex cursor-pointer items-center  text-zinc-500 hover:text-zinc-900 dark:text-white dark:hover:text-neutral-400 transition-colors duration-250"
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {!openNav && (
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                                </svg>
                            )}
                            {openNav && (
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${openNav ? "max-h-64" : "max-h-0"}`}>
                <div className="p-2 border-2 border-neutral-200 dark:border-neutral-400 m-1 rounded">
                    <ul className="flex flex-col pb-2 mb-2 border-b border-neutral-300 dark:border-neutral-400">
                        {links.map(link => (
                            <li
                                key={link.id}
                                className="hover:bg-neutral-200 cursor-pointer rounded transition-colors"
                            >
                                <a
                                    onClick={() => setOpenNav(false)}
                                    href={link.href}
                                    className="flex p-2 font-inter text-sm tracking-wider text-neutral-500 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-900 transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-3 items-center">
                        <a 
                            href={personal.resume}
                            target="_blank"
                            rel="noreferrer"
                            className="font-manrope bg-neutral-800 px-4 py-2 rounded text-white dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-300 text-sm font-semibold tracking-wide cursor-pointer hover:bg-neutral-700 transition-colors"
                        >
                            Resume
                        </a>
                        <ThemeToggle dark={dark} onToggle={onThemeToggle} />
                    </div>
                </div>
            </div>   
        </nav>
    )
}

export default Nav