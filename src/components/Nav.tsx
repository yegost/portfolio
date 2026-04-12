import { personal } from "../data/data"
import { useState } from "react"

const links = [
    { label: "About", href: "#about", id: '1' },
    { label: "Skills", href: "#skills", id: '2' },
    { label: "Projects", href: "#projects", id: '3' },
    { label: "Contact", href: "#contact", id: '4' },
]

function Nav() {
    const [openNav, setOpenNav] = useState(false)

    return(
        <>
            <nav className="top-0 left-0 right-0 z-50 bg-neutral-100 backdrop-blur-sm" id="about">
                <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
                    <span className="font-mono text-2xl font-bold">
                        {personal.name}
                    </span>
                    <div className="hidden sm:flex items-center gap-6">
                        <ul className="flex gap-6">
                            {links.map(link => (
                                <li key={link.href}>
                                    <a 
                                        href={link.href}
                                        className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-900 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button className="bg-gray-500 px-4 py-1 rounded text-white text-sm font-semibold tracking-wide cursor-pointer">Resume</button>
                    </div>
                    <div className="sm:hidden">
                        <button 
                            className="flex cursor-pointer items-center p-1 text-zinc-500 hover:text-zinc-900 transition-colors duration-250"
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {!openNav && (
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                                </svg>
                            )}
                            {openNav && (
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`sm:hidden overflow-hidden transition-all duration-400 ease-in-out ${openNav ? "max-h-64" : "max-h-0"}`}>
                <div className="p-2 border-2 border-neutral-200 m-1 rounded">
                    <ul className="flex flex-col">
                        {links.map(link => (
                            <li
                                key={link.id}
                                className="hover:bg-neutral-200 cursor-pointer rounded"
                            >
                                <a
                                    onClick={() => setOpenNav(false)}
                                    href={link.href}
                                    className="flex p-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>   
        </>
    )
}

export default Nav