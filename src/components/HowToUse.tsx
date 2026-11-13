'use client';

import React from 'react';
import { Droplet, Sparkles, Clock, RefreshCw, CheckCircle2 } from 'lucide-react';
import { howToUseSteps } from '../data/products';
import RevealOnScroll from './RevealOnScroll';

export default function HowToUse() {
  const stepIcons = [
    <Droplet key="1" className="w-5 h-5 text-[#1A472A]" />,
    <Sparkles key="2" className="w-5 h-5 text-[#1A472A]" />,
    <Clock key="3" className="w-5 h-5 text-[#1A472A]" />,
    <RefreshCw key="4" className="w-5 h-5 text-[#1A472A]" />
  ];

  return (
    <section id="how-to-use" className="py-20 md:py-28 bg-[#F9F8F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <RevealOnScroll delay={100} direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E8EFE9] px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] text-[#1A472A] uppercase mb-3">
              <Clock className="w-3.5 h-3.5 text-[#1A472A]" />
              <span>The Daily Natural Ritual</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] tracking-tight">
              How to Use
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#2D2D2D]/75 leading-relaxed">
              A natural routine for stronger, healthier hair. Four mindful steps to awaken your follicles and restore healthy bounce.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4-Step Horizontal Timeline Grid with Staggered Scroll Reveal */}
        <div className="relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-[#1A472A]/10 via-[#1A472A]/30 to-[#1A472A]/10 -translate-y-12 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {howToUseSteps.map((step, idx) => (
              <RevealOnScroll
                key={step.step}
                delay={idx * 150 + 100}
                duration={700}
                direction="up"
                width="full"
              >
                <div className="group cursor-pointer bg-white rounded-3xl p-6 border border-[#E8E2D5] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-white hover:border-[#1A472A]/20 flex flex-col justify-between h-full">
                  <div>
                    {/* Step Number & Icon with Hover Scale */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif text-3xl font-bold text-[#1A472A]/30 inline-block transition-transform duration-300 group-hover:scale-110 group-hover:text-[#1A472A]">
                        {step.step}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#E8EFE9] group-hover:bg-[#1A472A] flex items-center justify-center text-[#1A472A] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                        {stepIcons[idx]}
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-serif text-xl font-bold text-[#2D2D2D] mb-2 group-hover:text-[#1A472A] transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm font-semibold text-[#1A472A] mb-3">
                      {step.shortDesc}
                    </p>

                    {/* Detailed Description */}
                    <p className="text-xs text-[#2D2D2D]/70 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Bottom Step Indicator */}
                  <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex items-center gap-2 text-[11px] font-semibold text-[#2D2D2D]/60 uppercase tracking-wider group-hover:text-[#1A472A] transition-colors duration-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1A472A] group-hover:scale-110 transition-transform duration-300" />
                    <span>Step {idx + 1} of 4</span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

        </div>

        {/* Pro Ayurvedic Tip Box with Scroll Reveal & Hover Lift */}
        <RevealOnScroll delay={650} direction="up">
          <div className="mt-14 max-w-4xl mx-auto bg-[#F4F1EB] hover:bg-white rounded-3xl p-6 sm:p-8 border border-[#E3DDD1] hover:border-[#1A472A]/30 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#1A472A] text-white flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 hover:rotate-6">
              <Sparkles className="w-8 h-8 text-[#C5A059] animate-pulse" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-[#1A472A]">
                Ayurvedic Vaidya Pro Tip:
              </span>
              <h4 className="font-serif text-lg font-bold text-[#2D2D2D]">
                Maximize Thickness with the Overnight Oil Infusion
              </h4>
              <p className="text-xs sm:text-sm text-[#2D2D2D]/80 leading-relaxed">
                Warm 2 tablespoons of <strong>Vendra Grow Natural Hair Oil</strong> between your palms and gently massage into your scalp the night before shampooing. Wrap in a warm towel for 10 minutes to open follicles. Wash off next morning with <strong>Vendra Grow Herbal Shampoo</strong> for unmatched luster.
              </p>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
