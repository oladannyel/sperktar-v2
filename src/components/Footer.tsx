
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Our Work' },
    { href: '#', label: 'About' },
    { href: '#', label: 'Contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 mt-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="size-8 text-primary">
                    <span className="material-symbols-outlined text-4xl">layers</span>
                </div>
                <h2 className="text-white text-xl font-bold tracking-tight">sperktar</h2>
            </Link>
            <p className="text-sm text-secondary-text/60 max-w-sm">
                A digital agency specializing in scalable systems, MVPs, and digital platforms for ambitious startups.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row justify-between sm:justify-end items-center sm:items-start gap-10 sm:gap-20">
            
            <div className="flex flex-col items-center sm:items-start gap-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-secondary-text/80">Navigate</h3>
              <div className="flex flex-col items-center sm:items-start gap-3">
                {navLinks.map(link => (
                    <Link key={link.label} href={link.href} className="text-sm text-secondary-text/60 hover:text-primary transition-colors">
                        {link.label}
                    </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-secondary-text/80">Connect</h3>
              <div className="flex flex-col items-center sm:items-start gap-3">
                <a href="#" className="text-sm text-secondary-text/60 hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="text-sm text-secondary-text/60 hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="text-sm text-secondary-text/60 hover:text-primary transition-colors">GitHub</a>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-secondary-text/80">Legal</h3>
              <div className="flex flex-col items-center sm:items-start gap-3">
                <Link href="#" className="text-sm text-secondary-text/60 hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-sm text-secondary-text/60 hover:text-primary transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row-reverse justify-between items-center gap-4">
          <div className="flex gap-6">
            {/* Social Icons can go here */}
          </div>
          <p className="text-sm text-secondary-text/40 text-center md:text-left">
            © {new Date().getFullYear()} speckter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
