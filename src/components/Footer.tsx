import { personal } from "../data/data"
import { useState } from "react"

const links = [
    { label: "About", href: "#about", id: '1' },
    { label: "Skills", href: "#skills", id: '2' },
    { label: "Projects", href: "#projects", id: '3' },
]

function Footer() {
    const [firstName, lastName] = personal.name.split(' ')
    const [copied, setCopied] = useState(false)

    function copyEmail() {
        navigator.clipboard.writeText(personal.email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }
    
    return(
        <footer id="contact" className="font-inter bg-neutral-100 py-15">
            <div className="mx-auto max-w-3xl px-6">
                <div className="flex justify-between flex-col sm:flex-row">
                    <div className="flex mb-6 sm:mb-0 items-end">
                        <div className="flex flex-col text-neutral-800 font-black">
                            <h1>{lastName}</h1>
                            <h1>{firstName}.</h1>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-12">
                        <div>
                            <h2 className="text-neutral-700 mb-4">Explore</h2>
                            <div>
                                <ul className="text-neutral-500 tracking-wide cursor-pointer">
                                    {links.map(link => (
                                        <li key={link.href}>
                                            <a 
                                                href={link.href}
                                                className="border-b border-neutral-100 hover:text-neutral-900 hover:border-neutral-900 transition-colors"
                                            >{link.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-neutral-700 mb-4">Socials</h2>
                            <div>
                                <ul className="text-neutral-500 tracking-wide cursor-pointer">
                                    <li>
                                        <a 
                                            href={personal.github}
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="border-b  border-neutral-100 hover:border-neutral-900 transition-colors  hover:text-neutral-900"
                                        >GitHub</a>
                                    </li>
                                    <li>
                                        <a 
                                            href={personal.linkedin}
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="border-b  border-neutral-100 hover:border-neutral-900 transition-colors  hover:text-neutral-900"
                                        >LinkedIn</a>
                                    </li>
                                    <button
                                        onClick={copyEmail}
                                        className="text-left text-neutral-500 tracking-wide hover:text-neutral-900 transition-colors cursor-pointer"
                                    >
                                        {copied ? "Copied!" : "Email"}
                                    </button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer