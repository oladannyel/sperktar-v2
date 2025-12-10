
'use client';

export default function ContactForm() {

  return (
    <form className="space-y-6">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">Full Name</label>
            <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:ring-primary focus:border-primary transition-all" />
        </div>
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">Email Address</label>
            <input type="email" name="email" id="email" placeholder="your.email@example.com" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:ring-primary focus:border-primary transition-all" />
        </div>
        <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">Message</label>
            <textarea name="message" id="message" rows={6} placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:ring-primary focus:border-primary transition-all"></textarea>
        </div>
        <button type="submit" className="w-full py-4 px-6 bg-primary text-background-dark font-bold text-lg rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105">
            Send Message
        </button>
    </form>
  );
}
