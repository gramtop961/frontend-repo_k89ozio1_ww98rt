export default function Blocks() {
  const items = [
    {
      title: "Cloud & DevOps",
      desc: "Automated pipelines, IaC and cloud-native architectures to accelerate delivery.",
    },
    {
      title: "Data & AI",
      desc: "From modern data stacks to applied AI that augments decisions securely.",
    },
    {
      title: "Cybersecurity",
      desc: "Zero‑trust, governance and continuous monitoring baked into every layer.",
    },
    {
      title: "Product Engineering",
      desc: "Cross‑functional teams building reliable web, mobile and platform products.",
    },
  ];

  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Capabilities</h2>
          <p className="mt-3 text-slate-300">End‑to‑end services that meet your business where it is — then scale with you.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 opacity-80 group-hover:opacity-100 shadow-[0_0_20px_rgba(59,130,246,0.4)]" />
              <h3 className="mt-5 text-white font-medium">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
