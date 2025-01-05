import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <h1 className="text-2xl font-bold text-gray-900">Diego Cavalcanti</h1>
                    <nav className="flex items-center gap-6">
                        <a
                            href="https://github.com/diegocavalcanti-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/diegoscavalcanti/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:cavalcatidiego@hotmail.com"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}