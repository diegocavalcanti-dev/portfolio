import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div>
                        <a href="#" className="group inline-flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 text-sm font-black text-white shadow-lg shadow-gray-900/20 transition-transform group-hover:scale-105">
                                DC
                            </div>

                            <div>
                                <h2 className="text-base font-black text-gray-950">
                                    Diego Cavalcanti
                                </h2>
                                <p className="text-sm text-gray-500">
                                    Desenvolvedor Full Stack
                                </p>
                            </div>
                        </a>

                        <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
                            Criando aplicações web modernas, responsivas e bem estruturadas
                            com foco em performance, usabilidade e código limpo.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                        <nav className="flex items-center gap-3">
                            <a
                                href="https://github.com/diegocavalcanti-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="rounded-full border border-gray-200 bg-white p-3 text-gray-600 shadow-sm transition-all hover:-translate-y-0.5 hover:text-gray-950 hover:shadow-md"
                            >
                                <Github className="h-5 w-5" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/diegoscavalcanti/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="rounded-full border border-gray-200 bg-white p-3 text-gray-600 shadow-sm transition-all hover:-translate-y-0.5 hover:text-gray-950 hover:shadow-md"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>

                            <a
                                href="mailto:cavalcantidiego@hotmail.com"
                                aria-label="E-mail"
                                className="rounded-full border border-gray-200 bg-white p-3 text-gray-600 shadow-sm transition-all hover:-translate-y-0.5 hover:text-gray-950 hover:shadow-md"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </nav>

                        <a
                            href="#"
                            aria-label="Voltar ao topo"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-gray-900/10 transition-all hover:-translate-y-0.5 hover:bg-gray-800"
                        >
                            Topo
                            <ArrowUp className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-6">
                    <p className="text-center text-sm text-gray-500 md:text-left">
                        © {new Date().getFullYear()} Diego Cavalcanti. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}