"use client";

import { useEffect, useRef, useState } from "react";

export default function Clients() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const clients = [
    "Albert Heijn", "Jumbo", "Plus", "Coop", "Spar", "DekaMarkt", "Hoogvliet", "Vomar"
  ];

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Vertrouwd door
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Toonaangevende bedrijven kiezen voor Simon Loos
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={client}
              className={`group flex items-center justify-center h-24 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:bg-white/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="text-gray-500 font-semibold group-hover:text-white transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-500 text-sm">
          En vele andere aansprekende merken in Nederland
        </p>
      </div>
    </section>
  );
}
