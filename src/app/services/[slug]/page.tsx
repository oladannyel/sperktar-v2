
import { notFound } from 'next/navigation';

const serviceDetails: { [key: string]: { title: string; description: string; } } = {
  strategy: {
    title: 'Strategy',
    description: 'A deep dive into our strategic process, from market research to data-driven insights.',
  },
  'ux-ui-design': {
    title: 'UX/UI Design',
    description: 'Our approach to crafting intuitive, user-centric, and beautiful digital experiences.',
  },
  engineering: {
    title: 'Engineering',
    description: 'How we build robust, scalable, and secure software architectures.',
  },
  'mvp-development': {
    title: 'MVP Development',
    description: 'Our methodology for launching a powerful Minimum Viable Product to test hypotheses and gain traction quickly.',
  },
  'dedicated-teams': {
    title: 'Dedicated Teams',
    description: 'Learn how our dedicated teams integrate with your existing workflow to provide seamless collaboration.',
  },
};

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="relative flex flex-col w-full min-h-screen pt-20">
      <section className="relative w-full flex-grow flex items-center justify-center py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-mesh-gradient"></div>
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <div className="glass-panel p-8 md:p-12 rounded-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
              {service.title}
            </h1>
            <p className="text-text-secondary text-lg md:text-xl font-light leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
