'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Leaf, ChevronRight, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { ingredientsData } from '../data/products';
import RevealOnScroll from './RevealOnScroll';

export default function VisualBenefits() {
  const [selectedIngredient, setSelectedIngredient] = useState(0);

  const activeIngredient = ingredientsData[selectedIngredient];

  const highlights = [
    { title: '100% Organic & Natural', desc: 'Sourced from organic botanical gardens' },
    { title: 'Deeply Nourishes Scalp', desc: 'Penetrates deep into the dermal papilla' },
    { title: 'Strengthens Root to Tip', desc: 'Prevents shaft split and breakage' },
    { title: 'Promotes Natural Hair Growth', desc: 'Awakens resting follicles safely' },
    { title: 'Reduces Hair Fall', desc: 'Noticeable drop in shedding within 14 days' },
    { title: 'For All Hair & Scalp Types', desc: 'Gentle, pH balanced, hypoallergenic' },
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-[#F9F8F6] relative overflow-hidden scroll-mt-20">
      
      {/* Decorative foliage subtle watermark */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#E8EFE9]/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Scroll Reveal */}
        <RevealOnScroll delay={100} direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E8EFE9] px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] text-[#1A472A] uppercase mb-4">
              <Leaf className="w-3.5 h-3.5 text-[#1A472A]" />
              <span>Rooted in Ayurvedic Wisdom</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] tracking-tight">
              The Power of Pure Botanicals
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#2D2D2D]/75 leading-relaxed">
              Centuries of ancient herbal science distilled into everyday hair nutrition.
              Discover why our sacred trio of Amla, Reetha, and Shikakai transforms tired roots.
            </p>
          </div>
        </RevealOnScroll>

        {/* Asymmetric Grid: Left Image of Model/Product | Right Typography & Ingredients */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: High-Quality Poster of Model & Product with Gentle Lift & Inner Zoom */}
          <div className="lg:col-span-6 relative">
            <RevealOnScroll delay={200} direction="up" width="full">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(26,71,42,0.15)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 border border-[#E3DDD1] bg-[#F4F1EB] group">
                <Image
                  src="/images/model-ingredients-poster.jpg"
                  alt="Vendra Grow Organic Hair Care Ritual with Model and Botanicals"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Overlaid Badge with hover scale */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-lg group-hover:bg-white transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1A472A] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Award className="w-5 h-5 text-[#C5A059]" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#1A472A]">
                        No. 1 Natural Hair Grow Oil
                      </h4>
                      <p className="text-xs text-[#2D2D2D]/75">
                        Enriched with Reetha, Amla &amp; Shikakai • For All Hair Types
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick highlight pills overlaying outside corner */}
              <div className="hidden sm:grid grid-cols-2 gap-2 mt-4">
                <div className="bg-[#F4F1EB] hover:bg-white hover:-translate-y-1 hover:shadow-md p-2.5 rounded-xl border border-[#E8E2D5] text-center transition-all duration-300 cursor-default">
                  <span className="text-[11px] font-bold text-[#1A472A] block">0% Artificial Perfumes</span>
                  <span className="text-[10px] text-[#2D2D2D]/70">Pure botanical fragrance</span>
                </div>
                <div className="bg-[#F4F1EB] hover:bg-white hover:-translate-y-1 hover:shadow-md p-2.5 rounded-xl border border-[#E8E2D5] text-center transition-all duration-300 cursor-default">
                  <span className="text-[11px] font-bold text-[#1A472A] block">Cold-Infused Over 72 Hours</span>
                  <span className="text-[10px] text-[#2D2D2D]/70">Preserves delicate bio-enzymes</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Side: Clean Typography Highlighting Ingredients */}
          <div id="ingredients" className="lg:col-span-6 space-y-6 scroll-mt-24">
            
            {/* Interactive Ingredient Selector Tabs with Staggered Scroll Reveal */}
            <RevealOnScroll delay={350} direction="up" width="full">
              <div className="space-y-4">
                {ingredientsData.map((ing, idx) => {
                  const isSelected = selectedIngredient === idx;
                  return (
                    <div
                      key={ing.name}
                      onClick={() => setSelectedIngredient(idx)}
                      className={`p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.01] hover:-translate-y-0.5 cursor-pointer ${
                        isSelected
                          ? 'bg-white border-[#1A472A] shadow-[0_12px_28px_rgba(26,71,42,0.12)] ring-1 ring-[#1A472A]/20'
                          : 'bg-[#F4F1EB]/70 border-[#E8E2D5] hover:bg-white hover:border-[#1A472A]/30 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              isSelected
                                ? 'bg-[#1A472A] text-white scale-110 shadow-sm'
                                : 'bg-[#E8EFE9] text-[#1A472A]'
                            }`}
                          >
                            <Leaf className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="font-serif text-lg font-bold text-[#2D2D2D]">
                              {ing.name}
                            </h3>
                            <span className="text-xs font-semibold text-[#1A472A]">
                              {ing.role}
                            </span>
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isSelected ? 'rotate-90 text-[#1A472A]' : 'text-[#2D2D2D]/30'
                          }`}
                        />
                      </div>

                      {/* Expandable Active Detail */}
                      {isSelected && (
                        <div className="mt-4 pt-4 border-t border-[#2D2D2D]/10 space-y-3 animate-fadeIn">
                          <p className="text-xs sm:text-sm text-[#2D2D2D]/80 leading-relaxed">
                            {ing.description}
                          </p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                            {ing.benefits.map((b, i) => (
                              <div
                                key={i}
                                className="bg-[#F9F8F6] hover:bg-white p-2 rounded-lg text-[11px] font-medium text-[#1A472A] flex items-center gap-1.5 border border-[#EAE5DC] transition-colors"
                              >
                                <CheckCircle2 className="w-3 h-3 text-[#C5A059] shrink-0" />
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>

                          <div className="bg-[#E8EFE9]/60 p-2.5 rounded-xl text-xs italic text-[#1A472A] font-serif border border-[#1A472A]/10">
                            📜 {ing.ayurvedicNote}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </RevealOnScroll>

            {/* Poster Highlights Feature Pill Matrix */}
            <RevealOnScroll delay={500} direction="up" width="full">
              <div className="p-6 bg-white rounded-3xl border border-[#E8E2D5] shadow-sm hover:shadow-lg transition-all duration-300">
                <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#1A472A] mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span>The Vendra Grow Formula Standard</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#F4F1EB]/80 hover:bg-white hover:-translate-y-1 hover:shadow-md hover:border-[#1A472A]/30 border border-[#EAE5DC] text-left transition-all duration-300 cursor-default group"
                    >
                      <span className="text-xs font-bold text-[#2D2D2D] group-hover:text-[#1A472A] transition-colors block leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-[#2D2D2D]/70 block mt-1">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

          </div>

        </div>

      </div>
    </section>
  );
}
