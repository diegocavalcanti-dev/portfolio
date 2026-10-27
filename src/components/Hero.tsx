import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const stack = [
    'React', 'TypeScript', 'Node', 'Python', 'Django', 'PostgreSQL', 'Tailwind', 'Vite',
];

export default function Hero() {
    return (
        <section className="relative pt-36 pb-24">
            <div className="mx-auto max-w-6xl px-5 lg:px-8">
                <div className="grid items-center gap-14 md:grid-cols-[1fr_280px] md:gap-20">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            Disponível para novos projetos
                        </div>

                        <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-6xl md:text-7xl">
                            Diego<br />
                            <span className="text-zinc-500">Cavalcanti.</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                            Desenvolvedor full stack. Construo produtos web rápidos e bem estruturados
                            com <span className="text-zinc-200">React</span>,{' '}
                            <span className="text-zinc-200">TypeScript</span>,{' '}
                            <span className="text-zinc-200">Python</span> e{' '}
                            <span className="text-zinc-200">Django</span>.
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
                            <MapPin className="h-3.5 w-3.5" />
                            Brasil · trabalho remoto
                        </div>

                        <div id="contact" className="mt-10 flex flex-wrap items-center gap-3">
                            <a
                                href="#projects"
                                className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
                            >
                                Ver projetos
                                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>

                            <a
                                href="mailto:cavalcantidiego@hotmail.com"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
                            >
                                <Mail className="h-4 w-4" />
                                cavalcantidiego@hotmail.com
                            </a>

                            <div className="flex items-center gap-1">
                                <a
                                    href="https://github.com/diegocavalcanti-dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                                >
                                    <Github className="h-4 w-4" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/diegoscavalcanti/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="order-first md:order-last">
                        <div className="relative mx-auto w-56 md:w-full">
                            <div className="absolute -inset-2 rounded-full bg-amber-400/10 blur-2xl" />
                            <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-zinc-900">
                                <img
                                    src="/diego.jpg"
                                    alt="Diego Cavalcanti"
                                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="absolute -bottom-2 -right-2 rounded-full border border-white/10 bg-zinc-900 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-amber-400">
                                v2026
                            </div>
                        </div>
                    </div>
                </div>

                <div id="stack" className="mt-20 border-t border-white/5 pt-8">
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                        Stack principal
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {stack.map((item) => (
                            <span
                                key={item}
                                className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
