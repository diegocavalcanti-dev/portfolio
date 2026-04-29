import { Code2, Database, Layout, ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white pt-32 pb-20">
            <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
            <div className="absolute right-0 top-40 -z-10 h-72 w-72 rounded-full bg-purple-100/70 blur-3xl" />
            <div className="absolute left-0 bottom-10 -z-10 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        Disponível para novos projetos
                    </div>

                    <h1 className="text-4xl font-black tracking-tight text-gray-950 sm:text-5xl md:text-7xl">
                        Desenvolvedor{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                            Full Stack
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg md:text-xl">
                        Sou Diego Cavalcanti, desenvolvedor focado em criar aplicações web modernas,
                        rápidas e bem estruturadas. Trabalho com React, TypeScript, Python, Django,
                        APIs, bancos de dados e interfaces responsivas.
                    </p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="#projects"
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-950 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-gray-900/20 transition-all hover:-translate-y-0.5 hover:bg-gray-800 sm:w-auto"
                        >
                            Ver projetos
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>

                        <a
                            href="mailto:cavalcantidiego@hotmail.com"
                            className="inline-flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-bold text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md sm:w-auto"
                        >
                            Entrar em contato
                        </a>
                    </div>

                    <div className="mt-7 flex items-center justify-center gap-3">
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
                    </div>
                </div>

                <div className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-3">
                    <div className="group rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-110">
                            <Layout className="h-7 w-7" />
                        </div>
                        <h3 className="mt-5 text-lg font-bold text-gray-950">
                            Frontend
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Interfaces modernas, responsivas e otimizadas com React, TypeScript e Tailwind CSS.
                        </p>
                    </div>

                    <div className="group rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition-transform group-hover:scale-110">
                            <Database className="h-7 w-7" />
                        </div>
                        <h3 className="mt-5 text-lg font-bold text-gray-950">
                            Backend
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            APIs, autenticação, banco de dados, integrações e regras de negócio bem organizadas.
                        </p>
                    </div>

                    <div className="group rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition-transform group-hover:scale-110">
                            <Code2 className="h-7 w-7" />
                        </div>
                        <h3 className="mt-5 text-lg font-bold text-gray-950">
                            Código limpo
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Estrutura clara, componentes reutilizáveis e foco em performance, manutenção e escalabilidade.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}