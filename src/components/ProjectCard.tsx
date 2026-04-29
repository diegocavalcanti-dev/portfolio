import { ExternalLink, Github, Globe2 } from 'lucide-react';
import { Project } from '../types/Project';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-900/10">
            <div className="relative h-64 overflow-hidden bg-gray-100">
                <iframe
                    src={project.liveUrl}
                    title={project.title}
                    className="h-full w-full border-none transition-transform duration-500 group-hover:scale-[1.03]"
                    sandbox="allow-scripts allow-same-origin"
                    loading="lazy"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-gray-800 shadow-lg backdrop-blur-md">
                        <Globe2 className="h-4 w-4" />
                        Preview
                    </span>

                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-3 py-2 text-xs font-bold text-white shadow-lg transition-all hover:bg-gray-800"
                    >
                        Abrir
                        <ExternalLink className="h-4 w-4" />
                    </a>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-black tracking-tight text-gray-950">
                    {project.title}
                </h3>

                <p className="mt-3 line-clamp-4 text-sm leading-6 text-gray-600">
                    {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-bold text-gray-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-gray-900/10 transition-all hover:-translate-y-0.5 hover:bg-gray-800"
                    >
                        Ver projeto
                        <ExternalLink className="h-4 w-4" />
                    </a>

                    <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
                    >
                        <Github className="h-4 w-4" />
                        Código
                    </a>
                </div>
            </div>
        </article>
    );
}