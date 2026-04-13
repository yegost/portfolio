import { skills } from "../data/data";

function Skills() {
    return(
        <section id="skills" className="bg-neutral-100 dark:bg-neutral-900">
            <div className="mx-auto max-w-3xl px-6 py-20">
                <p className="font-mono text-sm text-neutral-400  mb-2 tracking-wide">Skills</p>
                <h2 className="font-manrope text-3xl font-bold text-neutral-900 dark:text-white mb-10">What I work with</h2>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
                    {skills.map((group, index) => (
                        <div
                            key={group.category}
                            className={`bg-neutral-200 dark:bg-neutral-700 rounded-xl p-6 
                                ${
                                    index === 1 || index === 2 ? "sm:col-span-1" : "sm:col-span-2"
                                }`}
                        >
                            <group.icon className="w-5 h-5 text-neutral-500 dark:text-neutral-300 mb-3" />
                            <h3 className="font-manrope text-lg font-semibold text-neutral-800 dark:text-white mb-4">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map(item => (
                                    <span
                                        key={item}
                                        className="bg-white border border-neutral-200 text-neutral-600 dark:bg-neutral-300 dark:text-black text-xs font-medium px-3 py-1 rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills