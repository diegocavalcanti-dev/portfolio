import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-white/5">
            <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-md">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-sm text-amber-400">◆</span>
                            <span className="text-sm font-semibold tracking-tight text-zinc-100">
                                diego<span className="text-zinc-500">.cavalcanti</span>
                            </span>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-zinc-500">
                            Aberto a novos projetos, freelas e colaborações. Me chama no email ou LinkedIn.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <a
                            href="https://github.com/diegocavalcanti-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="rounded-md border border-white/10 bg-white/5 p-2.5 text-zinc-400 transition hover:text-zinc-100"
                        >
                            <Github className="h-4 w-4" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/diegoscavalcanti/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="rounded-md border border-white/10 bg-white/5 p-2.5 text-zinc-400 transition hover:text-zinc-100"
                        >
                            <Linkedin className="h-4 w-4" />
                        </a>
                        <a
                            href="mailto:cavalcantidiego@hotmail.com"
                            aria-label="E-mail"
                            className="rounded-md border border-white/10 bg-white/5 p-2.5 text-zinc-400 transition hover:text-zinc-100"
                        >
                            <Mail className="h-4 w-4" />
                        </a>
                        <a
                            href="#"
                            aria-label="Voltar ao topo"
                            className="ml-2 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-300 transition hover:text-zinc-100"
                        >
                            Topo
                            <ArrowUp className="h-3.5 w-3.5" />
                        </a>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-xs text-zinc-600 md:flex-row">
                    <p>© {new Date().getFullYear()} Diego Cavalcanti</p>
                    <p className="font-mono">Vite · React · TypeScript · Tailwind</p>
                </div>
            </div>
        </footer>
    );
}
