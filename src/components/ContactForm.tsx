
'use client';

import { useState } from 'react';

export default function ContactForm({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-md bg-background-dark shadow-lg transition-transform duration-300 ease-in-out z-50 ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}>
      <div className="flex flex-col h-full p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          <button onClick={onClose} className="text-white/70 hover:text-white">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white/10 border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-white/10 border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="bg-white/10 border-white/20 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-background-dark font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
