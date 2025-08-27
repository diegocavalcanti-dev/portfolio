import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white/80 backdrop-blur-sm mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Texto de direitos autorais */}
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} Diego Cavalcanti - Todos os direitos reservados.
                    </p>
                    
                    {/* Links das redes sociais */}
                    <nav className="flex items-center gap-6">
                        <a
                            href="https://github.com/diegocavalcanti-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/diegoscavalcanti/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:cavalcantidiego@hotmail.com"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
