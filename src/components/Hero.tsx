'use client';

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Droplets, Leaf, Star } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-[#F9F8F6] bg-[url('/images/hero-forest-bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Soft Cream Overlay for Balanced Forest Visibility */}
      <div className="absolute inset-0 bg-[#F9F8F6]/65 pointer-events-none" />

      {/* Subtle Ambient Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#E8EFE9]/25 via-[#F4F1EB]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 100% Width, Full-Center Layout */}
        <div className="max-w-4xl mx-auto text-center space-y-7 md:space-y-8 py-4 sm:py-8 relative z-10">
          
          {/* Overline with balanced subtle divider lines */}
          <RevealOnScroll delay={100} direction="up">
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-8 sm:w-12 bg-[#1A472A]/30" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#1A472A] uppercase">
                100% AYURVEDIC. REAL RESULTS.
              </span>
              <div className="h-[1px] w-8 sm:w-12 bg-[#1A472A]/30" />
            </div>
          </RevealOnScroll>

          {/* Main Headline (Serif, Large, with Italic Accent) */}
          <RevealOnScroll delay={220} direction="up">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-[#2D2D2D] font-medium leading-[1.1] tracking-tight">
              Strengthen. Nourish.<br />
              <span className="font-serif italic font-normal text-[#1A472A] relative inline-block transition-transform duration-300 hover:scale-[1.02]">
                Grow Naturally.
                {/* Subtle natural underline flourish */}
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-3 text-[#C5A059]/50 -z-10"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 190 2 247 8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </RevealOnScroll>

          {/* Subheadline (Sans-serif) */}
          <RevealOnScroll delay={350} direction="up">
            <p className="text-[#2D2D2D]/80 font-sans text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A complete natural care routine for visibly better hair, enriched with
              potent cold-pressed <strong className="text-[#1A472A] font-semibold">Amla</strong>,{' '}
              <strong className="text-[#1A472A] font-semibold">Reetha</strong>, &amp;{' '}
              <strong className="text-[#1A472A] font-semibold">Shikakai</strong>. Hand-crafted to end hair fall and awaken dormant roots.
            </p>
          </RevealOnScroll>

          {/* Centered Call to Action: Only Prominent Dark Green "SHOP NOW →" Button */}
          <RevealOnScroll delay={480} direction="up">
            <div className="flex items-center justify-center pt-2">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-3 bg-[#1A472A] text-white hover:-translate-y-1 hover:shadow-xl hover:brightness-110 active:scale-95 font-sans font-medium text-sm sm:text-base px-10 py-4 rounded-full shadow-[0_8px_20px_rgba(26,71,42,0.25)] transition-all duration-300 ease-in-out group cursor-pointer"
              >
                <span className="tracking-wide">SHOP NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 ease-in-out" />
              </a>
            </div>
          </RevealOnScroll>

          {/* Centered Social Proof Star Rating */}
          <RevealOnScroll delay={600} direction="up">
            <div className="pt-4 inline-flex flex-wrap items-center justify-center gap-3 border-t border-[#2D2D2D]/10 px-6">
              <div className="flex text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current transition-transform duration-300 hover:scale-125" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#2D2D2D]/80">
                <strong className="text-[#1A472A] font-semibold">4.9 / 5</strong> from{' '}
                <span className="underline decoration-[#1A472A]/30 underline-offset-4 font-medium hover:text-[#1A472A] transition-colors cursor-pointer">
                  12,400+ satisfied customers
                </span>
              </p>
            </div>
          </RevealOnScroll>

        </div>

        {/* Bottom Strip: Horizontal feature bar across bottom with Staggered Scroll Reveal */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-[#2D2D2D]/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Feature 1 - Stagger delay 100ms */}
            <RevealOnScroll delay={100} duration={600} direction="up" width="full">
              <div className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-2xl bg-[#F9F8F6]/80 backdrop-blur-sm hover:bg-white hover:-translate-y-1 hover:shadow-xl border border-[#1A472A]/10 shadow-sm transition-all duration-300 ease-in-out cursor-default group">
                <div className="w-9 h-9 rounded-full bg-[#1A472A]/10 flex items-center justify-center text-[#1A472A] transition-colors duration-300 shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs sm:text-sm font-bold text-[#1A472A]">100% Organic</span>
                  <span className="block text-[11px] text-[#1A472A]/75">Pure Ayurvedic Roots</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Feature 2 - Stagger delay 200ms */}
            <RevealOnScroll delay={200} duration={600} direction="up" width="full">
              <div className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-2xl bg-[#F9F8F6]/80 backdrop-blur-sm hover:bg-white hover:-translate-y-1 hover:shadow-xl border border-[#1A472A]/10 shadow-sm transition-all duration-300 ease-in-out cursor-default group">
                <div className="w-9 h-9 rounded-full bg-[#1A472A]/10 flex items-center justify-center text-[#1A472A] transition-colors duration-300 shrink-0">
                  <Droplets className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs sm:text-sm font-bold text-[#1A472A]">Deeply Nourishes</span>
                  <span className="block text-[11px] text-[#1A472A]/75">Penetrates to Follicle</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Feature 3 - Stagger delay 300ms */}
            <RevealOnScroll delay={300} duration={600} direction="up" width="full">
              <div className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-2xl bg-[#F9F8F6]/80 backdrop-blur-sm hover:bg-white hover:-translate-y-1 hover:shadow-xl border border-[#1A472A]/10 shadow-sm transition-all duration-300 ease-in-out cursor-default group">
                <div className="w-9 h-9 rounded-full bg-[#1A472A]/10 flex items-center justify-center text-[#1A472A] transition-colors duration-300 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs sm:text-sm font-bold text-[#1A472A]">Reduces Hair Fall</span>
                  <span className="block text-[11px] text-[#1A472A]/75">Stops Root Breakage</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Feature 4 - Stagger delay 400ms */}
            <RevealOnScroll delay={400} duration={600} direction="up" width="full">
              <div className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-2xl bg-[#F9F8F6]/80 backdrop-blur-sm hover:bg-white hover:-translate-y-1 hover:shadow-xl border border-[#1A472A]/10 shadow-sm transition-all duration-300 ease-in-out cursor-default group">
                <div className="w-9 h-9 rounded-full bg-[#1A472A]/10 flex items-center justify-center text-[#1A472A] transition-colors duration-300 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs sm:text-sm font-bold text-[#1A472A]">Chemical Free</span>
                  <span className="block text-[11px] text-[#1A472A]/75">0% SLES &amp; Parabens</span>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>

      </div>
    </section>
  );
}
