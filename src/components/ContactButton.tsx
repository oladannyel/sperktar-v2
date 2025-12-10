
'use client';

import { useState, useEffect } from 'react';

export default function ContactButton({ onClick }: { onClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={onClick}
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-primary text-background-dark font-bold py-4 px-2 rounded-r-md shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-80 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
    >
      Contact Us
    </button>
  );
}
