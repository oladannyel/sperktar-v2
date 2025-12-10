
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from './Footer';
import ContactButton from './ContactButton';
import ContactForm from './ContactForm';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  const toggleContactForm = () => {
    setIsContactFormVisible(!isContactFormVisible);
  };

  return (
    <>
      <ContactButton onClick={toggleContactForm} />
      <ContactForm isVisible={isContactFormVisible} onClose={toggleContactForm} />
      <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden p-4 sm:p-6 md:p-8">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background-dark">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary/20 opacity-50 blur-[80px]"></div>
        </div>
        <div className="flex flex-col w-full max-w-6xl flex-grow">
          <header className="flex w-full items-center justify-between whitespace-nowrap px-4 py-5 sm:px-6">
            <div className="flex items-center gap-4 text-white">
              <Link href="/" className="flex items-center gap-4">
                <div className="text-primary size-7">
                  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6_319)">
                      <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath>
                    </defs>
                  </svg>
                </div>
                <h1 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Software Building Lab</h1>
              </Link>
            </div>
            <nav className="hidden items-center gap-9 md:flex">
              <Link className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors" href="/services">Services</Link>
              <a className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Work</a>
              <a className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">About</a>
              <a className="text-gray-300 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Contact</a>
            </nav>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
              <span className="truncate">Get a Quote</span>
            </button>
          </header>
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
