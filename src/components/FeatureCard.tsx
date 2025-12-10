
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="glassmorphic-card flex flex-col gap-4 rounded-lg p-6 md:p-8 transform hover:scale-105 transition-transform duration-300">
      <div className="icon-container flex h-14 w-14 items-center justify-center rounded-full">
        <span className="material-symbols-outlined text-3xl text-primary">{icon}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-slate-400 text-base font-normal leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
