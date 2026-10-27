import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
    return (
        <section id="projects" className="relative py-24">
            <div className="mx-auto max-w-6xl px-5 lg:px-8">
                <div className="flex items-end justify-between gap-6 border-b border-white/5 pb-8">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-amber-400">
                            / 01 — Projetos
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                            Selecionados
                        </h2>
                    </div>
                    <p className="hidden max-w-sm text-sm text-zinc-500 sm:block">
                        {projects.length} projetos entre produtos próprios, trabalhos de bootcamp e estudos.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
