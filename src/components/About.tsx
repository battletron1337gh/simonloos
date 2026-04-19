"use client";

import { useEffect, useRef, useState } from "react";
import { Truck, MapPin, Calendar, Users } from "lucide-react";
import { company, stats } from "@/data/company";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay: number;
}

function StatItem({ icon, value, label, suffix = "", delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-white mb-1 tabular-nums">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 lg:py-32 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About Content */}
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="order-2 lg:order-1">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Over Simon Loos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Een familiebedrijf met{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                bijna 90 jaar
              </span>{" "}
              ervaring
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>{company.longDescription}</p>
              <div className="bg-white/5 border-l-4 border-cyan-500 p-6 rounded-r-lg">
                <p className="italic text-gray-300">&quot;{company.mission}&quot;</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Neem contact op
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Onze diensten
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
                  alt="Simon Loos vrachtwagens en warehouse"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">1938</div>
                <div className="text-sm opacity-90">Oprichtingsjaar</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center mb-12">
          <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Cijfers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Simon Loos in cijfers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatItem
            icon={<Truck size={24} />}
            value={1200}
            label="Vrachtwagens"
            delay={0}
          />
          <StatItem
            icon={<MapPin size={24} />}
            value={60}
            label="Locaties"
            delay={100}
          />
          <StatItem
            icon={<Calendar size={24} />}
            value={90}
            label="Jaar ervaring"
            suffix="+"
            delay={200}
          />
          <StatItem
            icon={<Users size={24} />}
            value={1500}
            label="Medewerkers"
            suffix="+"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}
