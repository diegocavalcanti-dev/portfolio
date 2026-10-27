import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
            <div className="mx-auto max-w-6xl px-5 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <a href="#" className="group flex items-center gap-3">
                        <span className="font-mono text-sm text-amber-400">◆</span>
                        <span className="text-sm font-semibold tracking-tight text-zinc-100">
                            diego<span className="text-zinc-500">.cavalcanti</span>
                        </span>
                    </a>

                    <nav className="hidden items-center gap-8 md:flex">
                        <a href="#projects" className="text-sm text-zinc-400 transition hover:text-zinc-100">
                            Projetos
                        </a>
                        <a href="#stack" className="text-sm text-zinc-400 transition hover:text-zinc-100">
                            Stack
                        </a>
                        <a href="#contact" className="text-sm text-zinc-400 transition hover:text-zinc-100">
                            Contato
                        </a>
                        <div className="h-4 w-px bg-white/10" />
                        <div className="flex items-center gap-1">
                            <a
                                href="https://github.com/diegocavalcanti-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="rounded-md p-2 text-zinc-400 transition hover:bg-white/5 hover:text-zinc-100"
                            >
                                <Github className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/diegoscavalcanti/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="rounded-md p-2 text-zinc-400 transition hover:bg-white/5 hover:text-zinc-100"
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                        </div>
                    </nav>

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                        className="rounded-md border border-white/10 p-2 text-zinc-300 md:hidden"
                    >
                        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>

                {isOpen && (
                    <div className="border-t border-white/5 py-4 md:hidden">
                        <div className="flex flex-col gap-1">
                            <a onClick={() => setIsOpen(false)} href="#projects" className="rounded-md px-3 py-2 text-sm text-zinc-300 hover:bg-white/5">
                                Projetos
                            </a>
                            <a onClick={() => setIsOpen(false)} href="#stack" className="rounded-md px-3 py-2 text-sm text-zinc-300 hover:bg-white/5">
                                Stack
                            </a>
                            <a onClick={() => setIsOpen(false)} href="#contact" className="rounded-md px-3 py-2 text-sm text-zinc-300 hover:bg-white/5">
                                Contato
                            </a>
                            <div className="my-2 h-px bg-white/5" />
                            <div className="flex gap-2 px-3">
                                <a href="https://github.com/diegocavalcanti-dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs text-zinc-300">
                                    <Github className="h-3.5 w-3.5" /> GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/diegoscavalcanti/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs text-zinc-300">
                                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                                </a>
                                <a href="mailto:cavalcantidiego@hotmail.com" className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-3 py-2 text-xs font-semibold text-zinc-950">
                                    <Mail className="h-3.5 w-3.5" /> Email
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
