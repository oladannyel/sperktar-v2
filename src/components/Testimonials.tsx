const testimonials = [
  {
    quote: "Working with Sperktar Lab was a game-changer. They took our rough concept and turned it into a polished, market-ready MVP in just 8 weeks. Unbelievable speed and quality. All our partners were absolutely impressed with the delivery speed and quality.",
    name: "Monique L.",
    title: "Media Chronometer",
  },
  {
    quote: "The team's expertise in both strategy and execution is unmatched. They understood our vision and helped us avoid costly mistakes. Highly recommended!",
    name: "Kenny",
    title: "Fojo Global",
  },
  {
    quote: "Their iterative process allowed us to launch, gather feedback, and adapt quickly. We wouldn’t be where we are today without their guidance.",
    name: "Isaac A.",
    title: "Founder, LCApp",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background-dark">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[600px] w-[600px] -translate-x-[20%] translate-y-[-10%] rounded-full bg-primary/10 opacity-40 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] translate-x-[-20%] translate-y-[20%] rounded-full bg-blue-600/10 opacity-30 blur-[90px]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-secondary-text md:text-xl">
            Real stories from satisfied customers. 
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glassmorphic-card flex flex-col justify-between rounded-lg p-6 md:p-8"
            >
              <p className="text-lg font-light leading-relaxed text-text-secondary">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm font-medium text-text-secondary">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
