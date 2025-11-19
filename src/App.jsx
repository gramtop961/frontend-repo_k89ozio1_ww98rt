import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Blocks from './components/Blocks';
import Partners from './components/Partners';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* background accents */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Blocks />
        <Partners />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-slate-400">
          <p>© {new Date().getFullYear()} NovaIT. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
