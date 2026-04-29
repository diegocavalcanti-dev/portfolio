import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden bg-gray-50 py-24">
            <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
            <div className="absolute right-0 bottom-20 -z-10 h-72 w-72 rounded-full bg-purple-100/70 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm">
                        Portfólio
                    </span>

                    <h2 className="mt-5 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
                        Projetos em destaque
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                        Alguns projetos desenvolvidos com foco em performance, design responsivo,
                        boas práticas de código e soluções reais para web.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}