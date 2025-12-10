
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  isLarge: boolean;
}

export default function ServiceCard({ icon, title, description, isLarge }: ServiceCardProps) {
  const cardClasses = `glassmorphic-card group relative flex flex-col items-start rounded-lg p-6 text-left ${isLarge ? 'md:col-span-2' : ''} hover:bg-white/10 transition-all transform hover:scale-105 transition-transform duration-300`;

  return (
    <div className={cardClasses}>
      <div className="icon-background mb-4 flex size-12 items-center justify-center rounded-full">
        <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-1 text-sm font-normal text-gray-400">{description}</p>
      <span className="material-symbols-outlined absolute right-4 top-4 text-gray-600 transition-all group-hover:text-primary group-hover:translate-x-1">arrow_forward</span>
    </div>
  );
}
