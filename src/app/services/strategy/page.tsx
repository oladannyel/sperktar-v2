
import React from 'react';

const StrategyPage = () => {
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
            Strategy
          </h2>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-secondary-text sm:text-lg">
            Charting the course from idea to market-fit with data-driven insights.
          </p>
        </main>
      </div>
    </div>
  );
};

export default StrategyPage;
