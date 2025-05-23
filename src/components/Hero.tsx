import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80")'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
          Experience Fine Dining
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Savor the artistry of culinary excellence in every bite
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 rounded-full 
            transition-colors duration-300 flex items-center gap-2 text-lg">
            View Menu <ArrowRight size={20} />
          </button>
          <button className="px-8 py-3 border-2 border-white hover:bg-white/10 rounded-full 
            transition-colors duration-300 text-lg">
            Make Reservation
          </button>
        </div>
      </div>
    </section>
  );
}