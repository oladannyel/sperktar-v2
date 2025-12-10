
'use client';

import { useEffect } from 'react';
import ContactForm from './ContactForm';

interface ContactModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ContactModal({ isVisible, onClose }: ContactModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isVisible, onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-50 transform transition-transform duration-500 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-full'} flex justify-end`}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
        <div className="relative w-full max-w-lg h-full glass-panel-form p-8 flex flex-col justify-center">
          <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-2">Let's Get in Touch</h2>
            <p className="text-white/70">Fill out the form below, and we'll get back to you as soon as possible.</p>
          </div>

          <ContactForm />
        </div>
    </div>
  );
}
