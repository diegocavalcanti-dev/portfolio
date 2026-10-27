import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../types/Project';
import ImageWithFallback from './ImageWithFallback';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <article className="group relative flex flex-col overflow-hidden rounded-xl border border-white/5 bg-zinc-900/40 transition hover:border-white/15 hover:bg-zinc-900/70">
            <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] overflow-hidden bg-zinc-900"
                aria-label={`Abrir ${project.title}`}
            >
                <ImageWithFallback
                    src={`https://image.thum.io/get/width/900/crop/563/noanimate/${project.liveUrl}`}
                    fallbackSrc={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/0 to-zinc-950/0" />
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-950/70 text-zinc-200 backdrop-blur-md transition group-hover:bg-amber-400 group-hover:text-zinc-950">
                    <ArrowUpRight className="h-4 w-4" />
                </div>
            </a>

            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Repositório"
                        className="text-zinc-500 transition hover:text-zinc-200"
                    >
                        <Github className="h-4 w-4" />
                    </a>
                </div>

                <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-50">
                    {project.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-400">
                    {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                        <span
                            key={tech}
                            className="rounded border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[11px] text-zinc-400"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 5 && (
                        <span className="rounded border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[11px] text-zinc-500">
                            +{project.technologies.length - 5}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}
