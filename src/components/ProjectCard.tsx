import { ArrowUpRight, FolderOpen, ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "../data/data"
import { useState } from "react"

type Props = {
    project: Project
    index: number
}

function ProjectCard({ project, index }: Props) {
    const [current, setCurrent] = useState(0)
    const images = project.images ?? []

    const prev = () => setCurrent(i => (i === 0 ? images.length - 1 : i - 1))
    const next = () => setCurrent(i => (i === images.length - 1 ? 0 : i + 1))

    return(
        <div
            key={project.title}
            className={`flex flex-col sm:flex-row gap-4 mb-15 items-center ${
                index % 2 !== 0 ? "sm:flex-row-reverse" : ""
            }`}
        >
            {images.length > 0 && (
                <div className="relative w-full sm:w-1/2 shrink-0">
                    <img 
                        src={images[current]}
                        alt={`${project.title} screenshot ${current + 1}`}
                        className="w-full h-70 sm:h-60 object-cover rounded-xl border-2 border-neutral-300 dark:border-neutral-400"
                    />
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4 text-neutral-700" />
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 transition-colors"
                            >
                                <ChevronRight className="w-4 h-4 text-neutral-700" />
                            </button>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                            i === current ? "bg-white" : "bg-white/40"
                                        }`}
                                    ></button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
            <div className="w-full sm:w-1/2 flex flex-col gap-3">
                <p className="font-manrope text-xs text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
                    {project.stack.slice(0, 4).join(" / ")}
                </p>
                <h3 className="font-manrope text-2xl font-bold text-neutral-900 dark:text-white">
                    {project.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                </p>
                <div className="flex items-end gap-4">
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1 text-sm text-neutral-600 border-b border-white hover:text-neutral-900 hover:border-neutral-900 dark:text-white dark:hover:text-white dark:border-neutral-800 dark:hover:border-white transition-all duration-300"
                        >
                            Live Demo <ArrowUpRight className="w-4 h-4 text-neutral-600 dark:text-white" />
                        </a>
                    )}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-sm text-neutral-600 border-b border-white hover:text-neutral-900 hover:border-neutral-900 dark:text-white dark:hover:text-white dark:border-neutral-800 dark:hover:border-white transition-all duration-300"
                    >
                        Source
                        <FolderOpen className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard