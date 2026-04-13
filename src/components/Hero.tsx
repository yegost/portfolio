import { personal } from "../data/data"

function Hero() {
    return(
        <header className="dark:bg-neutral-800">
            <div className="mx-auto max-w-3xl px-6 pb-63 pt-63">
                <div className="flex items-center mb-3 gap-1">
                    <svg className="w-4 h-4 text-neutral-400 dark:text-neutral-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
                    </svg>
                    <p className="font-inter text-sm text-neutral-400 dark:text-neutral-300 tracking-wide">
                    {personal.location}
                    </p>
                </div>
                <h1 className="font-manrope text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4">
                    Hi, I'm <span className="text-neutral-400 ">{personal.name}</span>
                </h1>
                <p className="font-inter text-lg text-neutral-500 dark:text-neutral-300 max-w-xl leading-relaxed mb-2">
                    {personal.title}
                </p>
                <p className="font-inter text-base text-neutral-400 max-w-xl leading-relaxed mb-10">
                    {personal.bio}
                </p>
                <div className="flex flex-wrap gap-3">
                    <a
                        href="#projects"
                        className="flex items-center gap-2 bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-300 px-5 py-4 rounded text-white text-sm font-semibold tracking-wide hover:bg-neutral-700 transition-colors cursor-pointer"
                    >
                        <span>View Projects</span>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                    </a>
                    <a
                        href={`mailto:${personal.email}`}
                        className="flex items-center gap-2 border border-neutral-300 dark:text-white dark:hover:bg-neutral-600 px-5 py-3 rounded text-neutral-700 text-sm font-semibold tracking-wide hover:bg-neutral-100 transition-colors cursor-pointer"
                    >
                        Get in touch
                    </a>
                    <a
                        href={personal.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-3 py-3 border border-neutral-300 dark:text-white dark:hover:bg-neutral-600 rounded text-neutral-700 text-sm font-semibold tracking-wide hover:bg-neutral-100 transition-colors cursor-pointer"
                    >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                        </svg>
                        <span>/yegost</span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Hero