import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";

function Projects() {
    return(
        <section id="projects" className="font-inter dark:bg-neutral-800">
            <div className="mx-auto max-w-3xl px-6 py-20">
                <div className="sm:flex justify-between gap-5 flex-wrap mb-15 sm:items-center">
                    <h1 className="font-manrope text-4xl font-black text-neutral-900 dark:text-white">Selected Projects</h1>
                    <p className="max-w-60 font-inter text-sm text-neutral-400 tracking-normal items-center">Things I’ve built, explored, and improved</p>
                </div>
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Projects