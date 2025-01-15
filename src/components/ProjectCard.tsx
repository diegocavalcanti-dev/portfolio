import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types/Project';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative h-64 overflow-hidden group">
                <iframe
                    src={project.liveUrl}
                    title={project.title}
                    className="w-full h-full border-none"
                    sandbox="allow-scripts allow-same-origin"
                    loading="lazy"
                ></iframe>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="mt-4 flex items-center gap-4">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                        Live Demo <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                    <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-800"
                    >
                        <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                </div>
            </div>
        </div>
    );
}