import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will reach out shortly.');
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Let’s talk</h2>
            <p className="mt-3 text-slate-300">Tell us about your goals, and we’ll craft a path to get you there.</p>

            <div className="mt-8 space-y-3 text-slate-300/90">
              <p>Email: hello@novait.co</p>
              <p>Phone: +1 (555) 012-3456</p>
              <p>HQ: 300 Tech Ave, San Francisco, CA</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">First name</label>
                <input required className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Last name</label>
                <input required className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Doe" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Work email</label>
                <input type="email" required className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="jane@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Project details</label>
                <textarea rows={4} className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="What are you building?" />
              </div>
            </div>
            <button className="mt-4 w-full sm:w-auto px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500">Send message</button>
            {status && <p className="mt-3 text-green-400">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
