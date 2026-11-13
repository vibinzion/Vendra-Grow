'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { visibleResultsData } from '../data/products';
import RevealOnScroll from './RevealOnScroll';

export default function VisibleResults() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="results" className="py-20 md:py-28 bg-[#F4F1EB]/50 border-y border-[#E8E2D5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <RevealOnScroll delay={100} direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E8EFE9] px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] text-[#1A472A] uppercase mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-[#1A472A]" />
              <span>Visible Results With Regular Use</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] tracking-tight">
              Real Hair. Visible Transformation.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#2D2D2D]/75 leading-relaxed">
              Observed across 800+ consumer evaluations over 4 to 8 weeks of consistent Ayurvedic ritual application.
            </p>
          </div>
        </RevealOnScroll>

        {/* Comparison Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Model Comparison Visual Poster with Gentle Lift & Inner Zoom */}
          <div className="lg:col-span-6 relative">
            <RevealOnScroll delay={200} direction="up" width="full">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(26,71,42,0.2)] transition-all duration-500 border border-[#E3DDD1] bg-white group">
                <Image
                  src="/images/shampoo-results-model.jpg"
                  alt="Before and After Results: Smoother, Silkier, Reduced Hairfall"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white group-hover:translate-y-[-4px] transition-transform duration-300">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#C5A059] block">
                    Consumer Test Case
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">
                    Smoother &amp; Silkier in Just 3 Washes
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    Hair fall &amp; breakage drastically minimized; natural gloss restored.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: 4 Real Conditions Before/After Cards */}
          <div className="lg:col-span-6 space-y-4">
            <RevealOnScroll delay={350} direction="up" width="full">
              <div className="space-y-4">
                {visibleResultsData.map((item, idx) => {
                  const isSelected = activeTab === idx;
                  return (
                    <div
                      key={item.condition}
                      onClick={() => setActiveTab(idx)}
                      className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 cursor-pointer ${
                        isSelected
                          ? 'bg-white border-[#1A472A] shadow-[0_12px_30px_rgba(26,71,42,0.12)] ring-1 ring-[#1A472A]/20'
                          : 'bg-white/70 border-[#E8E2D5] hover:bg-white hover:border-[#1A472A]/40 hover:shadow-lg'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-serif text-lg font-bold text-[#2D2D2D] flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#1A472A]" />
                          <span>{item.condition}</span>
                        </h3>
                        <span className="text-xs font-bold text-[#1A472A] bg-[#E8EFE9] px-3 py-1 rounded-full shadow-sm">
                          {item.metric}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        {/* Before State */}
                        <div className="p-3 rounded-xl bg-red-50/60 border border-red-200/50 hover:bg-red-50 transition-colors">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 block mb-1">
                            Before Treatment
                          </span>
                          <p className="text-[#2D2D2D]/80 leading-relaxed">
                            {item.before}
                          </p>
                        </div>

                        {/* After State */}
                        <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/60 hover:bg-emerald-50 transition-colors">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A472A] block mb-1 flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            <span>After Vendra Routine</span>
                          </span>
                          <p className="text-[#2D2D2D]/90 font-medium leading-relaxed">
                            {item.after}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </RevealOnScroll>

            {/* Bottom Guarantee Pill with Button Hover Effect */}
            <RevealOnScroll delay={500} direction="up" width="full">
              <div className="p-4 rounded-2xl bg-[#1A472A] text-white flex items-center justify-between gap-4 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#C5A059] shrink-0 animate-pulse" />
                  <div>
                    <span className="text-xs font-bold block">30-Day Performance Guarantee</span>
                    <span className="text-[11px] text-white/80 block">100% guaranteed noticeable results and visibly reduced hair fall within 30 days of consistent use.</span>
                  </div>
                </div>
                <a
                  href="#shop"
                  className="text-xs font-bold bg-[#C5A059] hover:bg-[#B38F46] hover:scale-105 hover:shadow-[0_8px_20px_rgba(197,160,89,0.35)] hover:brightness-110 active:scale-95 text-[#0D3B22] px-5 py-2.5 rounded-full shrink-0 transition-all duration-300 cursor-pointer flex items-center gap-1"
                >
                  <span>Start Routine</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </RevealOnScroll>

          </div>

        </div>

      </div>
    </section>
  );
}
