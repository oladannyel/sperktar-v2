
import Link from 'next/link';
import RecentWork from '../components/RecentWork';
import LeadooInPageBot from '../components/LeadooInPageBot';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen px-4 sm:px-6 lg:px-8">
        
        <main className="flex-grow flex flex-col items-center justify-center py-12 lg:py-20 gap-8">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 flex items-center">
              <div className="glass-panel rounded-xl p-8 md:p-12 lg:p-16 w-full h-full flex flex-col justify-center">
                <div className="flex flex-col gap-6 text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-white">
                                You focus on the business. We build the tech.
                            </h1>
                  <p className="text-base md:text-lg font-normal text-text-secondary max-w-md">
                                Product teams for founders who want to move fast and launch right.
                            </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 flex items-center">
                <div className="glass-panel rounded-xl p-8 w-full h-full flex flex-col justify-center">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-white">Have an idea?</h2>
                    <p className="text-text-secondary">
                      Let's partner to build your MVP and scale your vision. Get a proposal in 48 hours.
                    </p>
                    <div className="mt-4">
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm">
                            <span>Start Your Project</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-5">
                <div className="flex items-center gap-4">
                    <span className="text-white/40 text-xs font-bold tracking-widest uppercase pl-2">Scaling Tech For</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div className="logo-glass rounded-xl h-24 flex items-center justify-center group cursor-pointer">
                        <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-4xl text-white">deployed_code</span>
                            <span className="text-[10px] font-semibold text-white tracking-widest uppercase mt-1">NEXUS</span>
                        </div>
                    </div>
                    <div className="logo-glass rounded-xl h-24 flex items-center justify-center group cursor-pointer">
                        <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-4xl text-white">token</span>
                            <span className="text-[10px] font-semibold text-white tracking-widest uppercase mt-1">ORBIT</span>
                        </div>
                    </div>
                    <div className="logo-glass rounded-xl h-24 flex items-center justify-center group cursor-pointer">
                        <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-4xl text-white">all_inclusive</span>
                            <span className="text-[10px] font-semibold text-white tracking-widest uppercase mt-1">FLUX</span>
                        </div>
                    </div>
                    <div className="logo-glass rounded-xl h-24 flex items-center justify-center group cursor-pointer">
                        <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-4xl text-white">change_history</span>
                            <span className="text-[10px] font-semibold text-white tracking-widest uppercase mt-1">APEX</span>
                        </div>
                    </div>
                    <div className="logo-glass rounded-xl h-24 flex items-center justify-center group cursor-pointer">
                        <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-4xl text-white">blur_on</span>
                            <span className="text-[10px] font-semibold text-white tracking-widest uppercase mt-1">PULSE</span>
                        </div>
                    </div>
                    <div className="logo-glass rounded-xl h-24 flex items-center justify-center group cursor-pointer">
                        <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-4xl text-white">view_in_ar</span>
                            <span className="text-[10px] font-semibold text-white tracking-widest uppercase mt-1">CUBE</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-6xl mx-auto pt-8">
<div className="glass-panel rounded-2xl p-8 md:p-12 lg:p-20 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
<div className="lg:col-span-5 flex flex-col justify-between h-full">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
<span className="text-xs font-semibold tracking-widest text-white/80 uppercase">Core Capabilities</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white leading-tight tracking-tight">
                      Future-Proofing Your Vision: <br className="hidden lg:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Engineered for Tomorrow.</span>
</h2>
</div>
<div className="hidden lg:flex mt-12 opacity-60">
<svg className="text-white/20" fill="none" height="120" viewBox="0 0 100 100" width="120" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="48" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1"></circle>
<circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1"></circle>
<path d="M50 20 L50 50 L75 65" stroke="currentColor" strokeWidth="1"></path>
<circle cx="50" cy="50" fill="white" fillOpacity="0.8" r="4"></circle>
</svg>
</div>
</div>
<div className="lg:col-span-7 flex flex-col gap-8">
<div className="space-y-6 text-lg text-text-secondary font-light leading-relaxed">
<p>
                      At our core, we transcend traditional development to architect bespoke digital products. Leveraging expertise in <span className="text-white font-medium">Data & AI</span>, advanced <span className="text-white font-medium">Mobile/Web Applications</span>, robust <span className="text-white font-medium">Cloud infrastructures</span>, and insightful <span className="text-white font-medium">Research & Design</span>, we craft not just solutions, but strategic assets. Our commitment is to empower founders with scalable technology that drives immediate impact and secures enduring market leadership.
                  </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
<div className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
<span className="material-symbols-outlined text-primary text-2xl">dataset</span>
<div className="flex flex-col">
<span className="text-white/90 text-sm font-bold">Data & AI</span>
<span className="text-white/40 text-xs">Intelligent automation</span>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
<span className="material-symbols-outlined text-blue-400 text-2xl">devices</span>
<div className="flex flex-col">
<span className="text-white/90 text-sm font-bold">Mobile/Web Apps</span>
<span className="text-white/40 text-xs">Cross-platform solutions</span>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
<span className="material-symbols-outlined text-purple-400 text-2xl">cloud</span>
<div className="flex flex-col">
<span className="text-white/90 text-sm font-bold">Cloud Infrastructure</span>
<span className="text-white/40 text-xs">Scalable architecture</span>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
<span className="material-symbols-outlined text-pink-400 text-2xl">palette</span>
<div className="flex flex-col">
<span className="text-white/90 text-sm font-bold">Research & Design</span>
<span className="text-white/40 text-xs">User-centric experiences</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<RecentWork />

<section className="relative w-full flex-grow flex items-center justify-center py-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 bg-mesh-gradient"></div>
        {/* Abstract glowing orb decoration top right */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        {/* Abstract glowing orb decoration bottom left */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
            <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden group">
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-2xl transition-all duration-700 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                  The team you wish <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary/80 glow-text">you’d discovered sooner.</span>
                </h1>
                <p className="text-text-secondary text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                  Digital transformation requires dedication and vast in-house capabilities. So, you’ll be needing <span className="text-white font-medium">empathetic UX researchers</span>, designers who put humans at the heart of every concept, <span className="text-white font-medium">award-winning developers</span> and a QA team who could perform meticulous testing in their sleep. 
                </p>
                <p className="text-text-secondary text-lg md:text-xl font-light leading-relaxed">
                  That’s where a global tech consultancy like us comes in.
                </p>
                <div className="pt-6">
                  <Link href="/about">
                    <button className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-primary px-8 py-4 font-bold text-background-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(13,223,242,0.4)]">
                      <span className="relative z-10 text-base mr-2">Meet us</span>
                      <span className="material-symbols-outlined relative z-10 text-lg transition-transform duration-300 group-hover/btn:translate-x-1">arrow_forward</span>
                      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover/btn:opacity-100"></div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Trust indicators / Stats (Optional enhancement for "Social Proof") */}
            <div className="grid grid-cols-3 gap-4 px-2">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-white">50+</span>
                <span className="text-sm text-text-secondary">MVPs Shipped</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-white">98%</span>
                <span className="text-sm text-text-secondary">Client Retention</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-white">24/7</span>
                <span className="text-sm text-text-secondary">Support Cycle</span>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full order-1 lg:order-2 flex items-center justify-center">
            {/* Abstract Tech Visual */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden abstract-shape">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark/90 z-10"></div>
              <img alt="Futuristic Technology Abstract" className="w-full h-full object-cover object-center opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQidGpeLuserm6tSe2VdrYWsO_wq5DNo2bmhOOEeoh4rxbTTvrR4ggXqr7JjhkImRQCKUM1b1nvW1sYgBZG49C0OtODYawGIa-LQUHlKo8sY2hkMQxOezqNT4QwWHFGesIFc5zBC0dyvfIANJHQLABl0pThw9z9ODqjGO_sgT_rALLMWpO-KgxPYFpqY0D7-8SugCVg1pS_EKJhl2sWWNB0qNptcsAPkwuV6HoTyxeAlhXQUmVcQZJMTEzY0_Dm5p-7S9Cye0RkB1H"/>
              {/* Floating Tech Cards Decoration */}
              <div className="absolute top-1/4 -left-6 z-20 glass-panel p-4 rounded-xl flex items-center gap-3 animate-[pulse_4s_ease-in-out_infinite]">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-text-secondary uppercase tracking-wider">System Architecture</span>
                  <span className="text-white font-bold text-sm">Scalable &amp; Secure</span>
                </div>
              </div>
              <div className="absolute bottom-1/3 -right-4 z-20 glass-panel p-4 rounded-xl flex items-center gap-3 animate-[pulse_5s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-text-secondary uppercase tracking-wider">UX Research</span>
                  <span className="text-white font-bold text-sm">Human-Centric</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<LeadooInPageBot />
        </main>
      </div>
    </div>
  );
}
