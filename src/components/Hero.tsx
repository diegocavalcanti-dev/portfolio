import { Code2, Database, Layout } from 'lucide-react';

export default function Hero() {
    return (
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                        Desenvolvedor Full Stack
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Apaixonado por criar experiências web com tecnologias modernas. 
                        Especializado em construir aplicações Full-stack com React, Django, Python e TypeScript.
                    </p>
                    <div className="mt-10 flex justify-center gap-8">
                        <div className="text-center">
                            <Layout className="w-8 h-8 mx-auto text-blue-500" />
                            <h3 className="mt-2 font-semibold">Frontend</h3>
                        </div>
                        <div className="text-center">
                            <Database className="w-8 h-8 mx-auto text-green-500" />
                            <h3 className="mt-2 font-semibold">Backend</h3>
                        </div>
                        <div className="text-center">
                            <Code2 className="w-8 h-8 mx-auto text-purple-500" />
                            <h3 className="mt-2 font-semibold">Clean Code</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}