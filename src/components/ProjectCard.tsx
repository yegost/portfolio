import { ArrowUpRight, FolderOpen } from "lucide-react"
import type { Project } from "../data/data"

type Props = {
    project: Project
    index: number
}

function ProjectCard({ project, index }: Props) {
    return(
        <div
            key={project.title}
            className={`flex flex-col sm:flex-row gap-4 mb-15 items-center ${
                index % 2 !== 0 ? "sm:flex-row-reverse" : ""
            }`}
        >
            {project.images && (
                <div className="w-full sm:w-1/2 shrink-0">
                    <img 
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-60 object-cover rounded-xl"
                    />
                </div>
            )}
            <div className="w-full sm:w-1/2 flex flex-col gap-3">
                <p className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
                    {project.stack.slice(0, 4).join(" / ")}
                </p>
                <h3 className="font-manrope text-2xl font-bold text-neutral-900">
                    {project.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                    {project.description}
                </p>
                <div className="flex items-end gap-4">
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1 text-sm text-neutral-600 border-b border-white hover:text-neutral-900 hover:border-neutral-900 transition-all duration-300"
                        >
                            Live Demo <ArrowUpRight className="w-4 h-4 text-neutral-600" />
                        </a>
                    )}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-sm text-neutral-600 border-b border-white hover:text-neutral-900 hover:border-neutral-900 transition-all duration-300"
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