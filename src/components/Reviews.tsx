'use client';

import React from 'react';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';
import { customerTestimonials } from '../data/products';
import RevealOnScroll from './RevealOnScroll';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#F4F1EB]/40 border-t border-[#E8E2D5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Scroll Reveal */}
        <RevealOnScroll delay={100} direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E8EFE9] px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] text-[#1A472A] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Community Love</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] tracking-tight">
              Loved by Thousands of Roots
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#2D2D2D]/75 leading-relaxed">
              Real stories from verified customers whose hair found renewed vitality and strength through Vendra Grow.
            </p>
          </div>
        </RevealOnScroll>

        {/* Testimonials Grid with Staggered Scroll Reveal and Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {customerTestimonials.map((t, idx) => (
            <RevealOnScroll
              key={t.id}
              delay={idx * 150 + 200}
              duration={700}
              direction="up"
              width="full"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D5] shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  {/* Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#C5A059]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#1A472A]/20 group-hover:text-[#1A472A]/50 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-[#2D2D2D] mb-2 leading-snug group-hover:text-[#1A472A] transition-colors duration-300">
                    &ldquo;{t.title}&rdquo;
                  </h3>

                  {/* Content */}
                  <p className="text-xs sm:text-sm text-[#2D2D2D]/80 leading-relaxed mb-6">
                    {t.review}
                  </p>
                </div>

                {/* Author & Product */}
                <div className="pt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#2D2D2D] flex items-center gap-1.5">
                      <span>{t.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    </h4>
                    <span className="text-[11px] text-[#2D2D2D]/60 block">{t.location}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#1A472A] font-semibold bg-[#E8EFE9] px-2.5 py-1 rounded-full group-hover:bg-[#1A472A] group-hover:text-white transition-colors duration-300">
                      {t.product.split(' ')[0]}
                    </span>
                    <span className="text-[10px] text-[#2D2D2D]/40 block mt-1">{t.date}</span>
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
