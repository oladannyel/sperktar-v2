
import Link from 'next/link';

export default function MvpDevelopmentPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden p-4 sm:p-6 md:p-8">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background-dark">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[600px] w-[600px] -translate-x-[20%] translate-y-[-10%] rounded-full bg-primary/10 opacity-40 blur-[100px]"></div>
      </div>
      <div className="w-full max-w-4xl py-16 sm:py-24">
        <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-8">
          <span className="material-symbols-outlined">arrow_back</span>
          <span>Back to Services</span>
        </Link>
        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
          MVP Development
        </h1>
        <p className="text-lg text-secondary-text leading-relaxed">
          Launch faster with a powerful Minimum Viable Product designed to test hypotheses and gain traction quickly. We help you build the right features for your target audience and get to market faster.
        </p>
        {/* Add more detailed content about your MVP development services here */}
      </div>
    </div>
  );
}
