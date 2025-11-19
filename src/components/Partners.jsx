export default function Partners() {
  const logos = [
    { name: 'AWS' },
    { name: 'Google Cloud' },
    { name: 'Microsoft' },
    { name: 'HashiCorp' },
    { name: 'Datadog' },
  ];

  return (
    <section id="partners" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Trusted by partners</h2>
          <p className="mt-3 text-slate-300">We collaborate with global technology leaders to deliver dependable solutions.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {logos.map((l) => (
            <div key={l.name} className="h-20 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300/90">
              <span className="text-sm">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
