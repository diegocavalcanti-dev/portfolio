import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <a href="#" className="group flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 text-sm font-black text-white shadow-lg shadow-gray-900/20 transition-transform group-hover:scale-105">
                            DC
                        </div>

                        <div className="leading-tight">
                            <h1 className="text-lg font-extrabold tracking-tight text-gray-950 sm:text-xl">
                                Diego Cavalcanti
                            </h1>
                            <p className="text-xs font-medium text-gray-500">
                                Desenvolvedor Full Stack
                            </p>
                        </div>
                    </a>

                    <nav className="hidden items-center gap-3 md:flex">
                        <a
                            href="https://github.com/diegocavalcanti-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="rounded-full border border-gray-200 bg-white p-2.5 text-gray-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:text-gray-950 hover:shadow-md"
                        >
                            <Github className="h-5 w-5" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/diegoscavalcanti/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="rounded-full border border-gray-200 bg-white p-2.5 text-gray-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:text-gray-950 hover:shadow-md"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>

                        <a
                            href="mailto:cavalcantidiego@hotmail.com"
                            aria-label="E-mail"
                            className="rounded-full border border-gray-200 bg-white p-2.5 text-gray-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:text-gray-950 hover:shadow-md"
                        >
                            <Mail className="h-5 w-5" />
                        </a>

                        <a
                            href="mailto:cavalcantidiego@hotmail.com"
                            className="ml-2 inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-gray-900/20 transition-all hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl"
                        >
                            <Mail className="h-4 w-4" />
                            Fale comigo
                        </a>
                    </nav>

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                        className="rounded-2xl border border-gray-200 bg-white p-2.5 text-gray-700 shadow-sm transition-all hover:bg-gray-50 md:hidden"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {isOpen && (
                    <div className="border-t border-gray-200/80 py-4 md:hidden">
                        <div className="grid grid-cols-3 gap-3">
                            <a
                                href="https://github.com/diegocavalcanti-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm"
                            >
                                <Github className="h-4 w-4" />
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/diegoscavalcanti/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm"
                            >
                                <Linkedin className="h-4 w-4" />
                                LinkedIn
                            </a>

                            <a
                                href="mailto:cavalcantidiego@hotmail.com"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 rounded-2xl bg-gray-950 px-4 py-3 text-sm font-bold text-white shadow-sm"
                            >
                                <Mail className="h-4 w-4" />
                                Email
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}