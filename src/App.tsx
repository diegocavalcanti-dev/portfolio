import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        <div className="relative min-h-screen bg-zinc-950">
            <div className="pointer-events-none fixed inset-0 -z-10 grain opacity-60" />
            <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl" />
            <Header />
            <main>
                <Hero />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}

export default App;
