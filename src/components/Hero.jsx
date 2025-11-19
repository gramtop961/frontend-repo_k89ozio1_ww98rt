import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-24 overflow-hidden min-h-[80vh] flex items-center" id="about">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 w-full">
        <div className="py-10">
          <span className="inline-flex items-center text-xs font-medium uppercase tracking-widest text-blue-300/80 bg-white/5 ring-1 ring-white/10 rounded-full px-3 py-1">Enterprise IT Partner</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            We design, build and scale resilient digital systems
          </h1>
          <p className="mt-5 text-slate-300 max-w-xl">
            NovaIT is a technology consultancy helping modern businesses ship secure, scalable and future‑ready platforms. From cloud to AI, we deliver outcomes, not just roadmaps.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors">Start a project</a>
            <a href="#solutions" className="px-5 py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 transition-colors">Our solutions</a>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
