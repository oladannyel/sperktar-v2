
import Link from 'next/link';

const services = [
  {
    title: "Strategy",
    description: "Charting the course from idea to market-fit with data-driven insights.",
    icon: "explore",
    href: "/services/strategy",
  },
  {
    title: "UX/UI Design",
    description: "Crafting intuitive, user-centric and beautiful digital experiences.",
    icon: "layers",
    href: "/services/ux-ui-design",
  },
  {
    title: "Engineering",
    description: "Building robust, scalable, and secure software architectures.",
    icon: "code",
    href: "/services/engineering",
  },
  {
    title: "MVP Development",
    description: "Launch faster with a powerful Minimum Viable Product designed to test hypotheses and gain traction quickly.",
    icon: "rocket_launch",
    href: "/services/mvp-development",
  },
  {
    title: "Dedicated Teams",
    description: "Augment your team with our world-class engineering talent.",
    icon: "groups",
    href: "/services/dedicated-teams",
  },
];

const detailspage = [
  {
    title: "Strategy",
    description: "Charting the course from idea to market-fit with data-driven insights.",
    icon: "explore",
    href: "/services/strategy",
  },
  {
    title: "UX/UI Design",
    description: "Crafting intuitive, user-centric and beautiful digital experiences.",
    icon: "layers",
    href: "/services/ux-ui-design",
  },
  {
    title: "Engineering",
    description: "Building robust, scalable, and secure software architectures.",
    icon: "code",
    href: "/services/engineering",
  },
  {
    title: "MVP Development",
    description: "Launch faster with a powerful Minimum Viable Product designed to test hypotheses and gain traction quickly.",
    icon: "rocket_launch",
    href: "/services/mvp-development",
  },
  {
    title: "Dedicated Teams",
    description: "Augment your team with our world-class engineering talent.",
    icon: "groups",
    href: "/services/dedicated-teams",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden p-4 sm:p-6 md:p-8">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background-dark">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[600px] w-[600px] -translate-x-[20%] translate-y-[-10%] rounded-full bg-primary/10 opacity-40 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] translate-x-[-20%] translate-y-[20%] rounded-full bg-blue-600/10 opacity-30 blur-[90px]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="w-full max-w-6xl">
        <main className="flex flex-col items-center gap-8 px-4 py-16 text-center sm:py-24">
          <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            How We Build Your Vision
          </h2>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-secondary-text sm:text-lg">
            You focus on the business. We build the tech. A complete product development lifecycle under one roof.
          </p>
          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-3">
            {services.map((service, index) => (
              <Link href={service.href} key={index} className={`glassmorphic-card group relative flex flex-col items-start rounded-2xl p-8 text-left h-full ${service.title === "MVP Development" ? "md:col-span-2" : ""}`}>
                <div className="icon-background mb-5 flex size-14 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-primary text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className={`text-sm font-normal text-muted leading-relaxed ${service.title === "MVP Development" ? "max-w-md" : ""}`}>{service.description}</p>
                <div className="absolute right-6 top-6 opacity-0 transform translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span className="material-symbols-outlined text-primary">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </main>
        <section className="flex flex-col items-center gap-8 px-4 py-16 text-center sm:py-24">
          <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Explore Our Services
          </h2>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-secondary-text sm:text-lg">
            Click on a service to learn more about how we can help you achieve your goals.
          </p>
          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-3">
            {detailspage.map((service, index) => (
              <Link href={service.href} key={index} className={`glassmorphic-card group relative flex flex-col items-start rounded-2xl p-8 text-left h-full ${service.title === "MVP Development" ? "md:col-span-2" : ""}`}>
                <div className="icon-background mb-5 flex size-14 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-primary text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className={`text-sm font-normal text-muted leading-relaxed ${service.title === "MVP Development" ? "max-w-md" : ""}`}>{service.description}</p>
                <div className="absolute right-6 top-6 opacity-0 transform translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span className="material-symbols-outlined text-primary">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Why Choose Us</h1>
            <p className="mt-4 text-lg text-secondary-text md:text-xl">You focus on the business. We build the tech.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            <div className="glassmorphic-card flex flex-col gap-4 rounded-lg p-6 md:p-8 group">
              <div className="icon-container flex h-14 w-14 items-center justify-center rounded-full transition-colors group-hover:bg-primary/20">
                <span className="material-symbols-outlined text-3xl text-primary transition-transform group-hover:scale-110">groups</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-white">Founder Empathy</h2>
                <p className="text-secondary-text text-base font-normal leading-relaxed">
                  We're builders and former founders. We understand the pressures and priorities of bringing a vision to life.
                </p>
              </div>
            </div>
            <div className="glassmorphic-card flex flex-col gap-4 rounded-lg p-6 md:p-8 group">
              <div className="icon-container flex h-14 w-14 items-center justify-center rounded-full transition-colors group-hover:bg-primary/20">
                <span className="material-symbols-outlined text-3xl text-primary transition-transform group-hover:scale-110">rocket_launch</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-white">Startup Experience</h2>
                <p className="text-secondary-text text-base font-normal leading-relaxed">
                  From MVP to scale, we've navigated the startup journey. We build robust systems designed for rapid growth.
                </p>
              </div>
            </div>
            <div className="glassmorphic-card flex flex-col gap-4 rounded-lg p-6 md:p-8 group">
              <div className="icon-container flex h-14 w-14 items-center justify-center rounded-full transition-colors group-hover:bg-primary/20">
                <span className="material-symbols-outlined text-3xl text-primary transition-transform group-hover:scale-110">electric_bolt</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-white">Unmatched Speed</h2>
                <p className="text-secondary-text text-base font-normal leading-relaxed">
                  Our streamlined processes and expert team deliver high-quality products faster, giving you a critical market advantage.
                </p>
              </div>
            </div>
            <div className="glassmorphic-card flex flex-col gap-4 rounded-lg p-6 md:p-8 group">
              <div className="icon-container flex h-14 w-14 items-center justify-center rounded-full transition-colors group-hover:bg-primary/20">
                <span className="material-symbols-outlined text-3xl text-primary transition-transform group-hover:scale-110">filter_center_focus</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-white">Radical Clarity</h2>
                <p className="text-secondary-text text-base font-normal leading-relaxed">
                  No jargon, just clear communication. We provide transparent roadmaps and progress updates every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-10 w-full max-w-6xl px-4 md:px-8 lg:px-12 py-12">
          <div className="flex flex-col gap-32">
            <div className="w-full relative">
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-y-1/2"></div>
              <div className="relative inline-block bg-background-dark px-6 left-1/2 transform -translate-x-1/2">
                <h2 className="font-display text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight text-center uppercase text-primary/80">The Build Process</h2>
              </div>
            </div>
            <div className="group grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative">
              <div className="hidden lg:block absolute left-1/2 top-full h-32 w-px bg-gradient-to-b from-primary/50 to-transparent"></div>
              <div className="relative flex justify-center items-center h-80 lg:h-96">
                <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
                <div className="relative w-full h-full p-8 bg-glass-bg border border-glass-border backdrop-blur-2xl rounded-2xl flex flex-col justify-between shadow-2xl shadow-black/50 hover:border-primary/30 transition-colors duration-500">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                      <span className="material-symbols-outlined text-primary">search</span>
                    </div>
                    <h3 className="font-display text-3xl font-bold text-white tracking-wide">Discover</h3>
                  </div>
                  <p className="font-display text-[#E5E7EB] text-lg leading-relaxed">We dive deep into your business goals, user needs, and market landscape to build a solid foundation for success.</p>
                  <div className="flex justify-end items-end">
                    <span className="font-display text-7xl font-bold text-white/5 select-none">01</span>
                  </div>
                </div>
              </div>
              <div className="text-left lg:pl-10">
                <h4 className="font-display text-primary text-sm font-bold uppercase tracking-widest mb-3">Phase One</h4>
                <h3 className="font-display text-4xl font-bold text-white mb-6">Mapping the Blueprint</h3>
                <p className="font-display text-[#E5E7EB] text-lg leading-relaxed opacity-90">Our journey begins with a comprehensive discovery phase. We collaborate closely with you to define project scope, identify key challenges, and chart a strategic path forward. This ensures every decision is informed and aligned with your vision.</p>
              </div>
            </div>
            <div className="group grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative">
              <div className="hidden lg:block absolute left-1/2 top-full h-32 w-px bg-gradient-to-b from-primary/50 to-transparent"></div>
              <div className="text-right lg:pr-10 order-2 lg:order-1">
                <h4 className="font-display text-primary text-sm font-bold uppercase tracking-widest mb-3">Phase Two</h4>
                <h3 className="font-display text-4xl font-bold text-white mb-6">Crafting the Experience</h3>
                <p className="font-display text-[#E5E7EB] text-lg leading-relaxed opacity-90">Next, our team creates intuitive user flows, wireframes, and high-fidelity UI/UX designs that bring your vision to life. We focus on creating a seamless and engaging user experience that looks beautiful and functions flawlessly.</p>
              </div>
              <div className="relative flex justify-center items-center h-80 lg:h-96 order-1 lg:order-2">
                <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
                <div className="relative w-full h-full p-8 bg-glass-bg border border-glass-border backdrop-blur-2xl rounded-2xl flex flex-col justify-between shadow-2xl shadow-black/50 hover:border-primary/30 transition-colors duration-500">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                      <span className="material-symbols-outlined text-primary">design_services</span>
                    </div>
                    <h3 className="font-display text-3xl font-bold text-white tracking-wide">Design</h3>
                  </div>
                  <p className="font-display text-[#E5E7EB] text-lg leading-relaxed">From wireframes to pixel-perfect mockups, we design interfaces that are both beautiful and intuitive, ensuring a delightful user journey.</p>
                  <div className="flex justify-end items-end">
                    <span className="font-display text-7xl font-bold text-white/5 select-none">02</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative">
              <div className="hidden lg:block absolute left-1/2 top-full h-32 w-px bg-gradient-to-b from-primary/50 to-transparent"></div>
              <div className="relative flex justify-center items-center h-80 lg:h-96">
                <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
                <div className="relative w-full h-full p-8 bg-glass-bg border border-glass-border backdrop-blur-2xl rounded-2xl flex flex-col justify-between shadow-2xl shadow-black/50 hover:border-primary/30 transition-colors duration-500">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                      <span className="material-symbols-outlined text-primary">code</span>
                    </div>
                    <h3 className="font-display text-3xl font-bold text-white tracking-wide">Build</h3>
                  </div>
                  <p className="font-display text-[#E5E7EB] text-lg leading-relaxed">Designs are transformed into a robust, functional product with clean, scalable code, ready for launch and future development.</p>
                  <div className="flex justify-end items-end">
                    <span className="font-display text-7xl font-bold text-white/5 select-none">03</span>
                  </div>
                </div>
              </div>
              <div className="text-left lg:pl-10">
                <h4 className="font-display text-primary text-sm font-bold uppercase tracking-widest mb-3">Phase Three</h4>
                <h3 className="font-display text-4xl font-bold text-white mb-6">Engineering the Future</h3>
                <p className="font-display text-[#E5E7EB] text-lg leading-relaxed opacity-90">Our developers turn the designs into a high-performance, secure, and scalable application. We follow agile methodologies to deliver consistent progress and adapt to changes, ensuring the final product exceeds expectations.</p>
              </div>
            </div>
            <div className="group grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              <div className="text-right lg:pr-10 order-2 lg:order-1">
                <h4 className="font-display text-primary text-sm font-bold uppercase tracking-widest mb-3">Phase Four</h4>
                <h3 className="font-display text-4xl font-bold text-white mb-6">Growing Without Limits</h3>
                <p className="font-display text-[#E5E7EB] text-lg leading-relaxed opacity-90">Launch is just the beginning. We help you refine, optimize, and scale your product based on user feedback and performance data to ensure long-term growth and success in a competitive market.</p>
              </div>
              <div className="relative flex justify-center items-center h-80 lg:h-96 order-1 lg:order-2">
                <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
                <div className="relative w-full h-full p-8 bg-glass-bg border border-glass-border backdrop-blur-2xl rounded-2xl flex flex-col justify-between shadow-2xl shadow-black/50 hover:border-primary/30 transition-colors duration-500">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                      <span className="material-symbols-outlined text-primary">trending_up</span>
                    </div>
                    <h3 className="font-display text-3xl font-bold text-white tracking-wide">Scale</h3>
                  </div>
                  <p className="font-display text-[#E5E7EB] text-lg leading-relaxed">We provide ongoing support and strategic guidance to adapt your product, add new features, and scale your infrastructure as your user base grows.</p>
                  <div className="flex justify-end items-end">
                    <span className="font-display text-7xl font-bold text-white/5 select-none">04</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center pt-16">
              <Link href="/contact">
                <button className="group relative flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-primary hover:bg-primary-hover transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
                  <span className="relative z-10 text-white text-lg font-bold tracking-wide uppercase">Start Your Project</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out skew-y-12"></div>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
