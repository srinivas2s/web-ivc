'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Enhanced Gradient Background with Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3] via-[#E8D4BF] to-[#D4BFA8]"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F4C430]/5 via-transparent to-[#DAA520]/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,196,48,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(218,165,32,0.1),transparent_50%)]"></div>

      {/* Header with partner logos */}
      <header className="absolute top-0 left-0 right-0 z-10 p-6 pointer-events-none">
        <div className="w-full flex justify-start items-start gap-4">

          {/* VVCE Logo */}
          <div className="pointer-events-auto">
            <Image
              src="/vvce-logo.png"
              alt="VVCE Logo"
              width={120}
              height={120}
              priority
              className="object-contain"
            />
          </div>

          {/* Inunity Logo */}
          <div className="pointer-events-auto">
            <Image
              src="/inunity-logo.png"
              alt="Inunity Logo"
              width={200}
              height={80}
              priority
              className="object-contain"
            />
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-12">
        <div className="container mx-auto max-w-5xl text-center">

          {/* Animated Main Logo */}
          <div className={`mb-12 ${mounted ? 'logo-entrance' : 'opacity-0'}`}>
            <div className="float-animation inline-block">
              <Image
                src="/ivc-logo.png"
                alt="IVC Logo - Innovators and Visionaries Club"
                width={350}
                height={350}
                priority
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Club Name */}
          <h1
            className={`font-outfit font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-black transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              letterSpacing: '-0.02em'
            }}
          >
            Innovators and Visionaries Club
          </h1>

          {/* Tagline with Marquee Animation */}
          <div className={`overflow-hidden max-w-2xl mx-auto transition-all duration-1000 delay-700 relative ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ width: '600px' }}
          >
            <div
              className="font-inter text-2xl md:text-3xl lg:text-4xl animate-marquee-right whitespace-nowrap"
              style={{
                fontWeight: 300,
                letterSpacing: '0.05em'
              }}
            >
              <span className="inline-block animate-pulse" style={{ color: '#F4C430' }}>Ideate</span>
              <span className="text-[#4A4A4A] mx-2">•</span>
              <span className="inline-block animate-pulse animation-delay-200" style={{ color: '#000000', animationDelay: '0.2s' }}>Visualize</span>
              <span className="text-[#4A4A4A] mx-2">•</span>
              <span className="inline-block animate-pulse animation-delay-400" style={{ color: '#E63946', animationDelay: '0.4s' }}>Create</span>
            </div>
          </div>

        </div>
      </section>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-[#F4C430]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-[#DAA520]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#F4C430]/5 rounded-full blur-2xl animate-pulse delay-500"></div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <p className="text-[#4A4A4A] font-inter text-sm">
          © 2026 Innovators and Visionaries Club - VVCE. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
