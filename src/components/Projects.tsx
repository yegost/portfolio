import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";

function Projects() {
    return(
        <section id="projects" className="font-inter">
            <div className="mx-auto max-w-3xl px-6 py-20">
                <div className="sm:flex justify-between gap-5 flex-wrap mb-15 sm:items-center">
                    <h1 className="font-manrope text-4xl font-black text-neutral-900">Selected Projects</h1>
                    <p className="max-w-60 font-mono text-xs text-neutral-400 tracking-normal items-center">Things I’ve built, explored, and improved</p>
                </div>
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Projects