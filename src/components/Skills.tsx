import { skills } from "../data/data";

function Skills() {
    return(
        <section id="skills" className="bg-neutral-100 left-0 right-0 ">
            <div className="mx-auto max-w-3xl px-6 py-20">
                <div className="flex gap-2">
                    {skills.map(group => (
                        <div key={group.category}>
                            <div>{group.category}</div>
                            <div>{group.items}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills