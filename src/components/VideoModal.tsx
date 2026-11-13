'use client';

import React from 'react';
import Image from 'next/image';
import { X, Play, Sparkles, CheckCircle2, Leaf, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function VideoModal() {
  const { isVideoModalOpen, setIsVideoModalOpen } = useCart();

  if (!isVideoModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsVideoModalOpen(false)}
      />

      <div className="relative w-full max-w-3xl bg-[#F9F8F6] rounded-3xl overflow-hidden shadow-2xl border border-[#E3DDD1] z-10">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#2D2D2D]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2D2D2D]">
              The 60-Second Ayurvedic Growth Ritual
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsVideoModalOpen(false)}
            className="p-1.5 rounded-full text-[#2D2D2D] hover:bg-[#F4F1EB] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Screen Mockup */}
        <div className="relative aspect-video w-full bg-[#111] overflow-hidden group">
          <Image
            src="/images/hero-botanical-cliff.jpg"
            alt="Ayurvedic Ritual Showcase Video Preview"
            fill
            className="object-cover opacity-85 group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

          {/* Central Play Trigger */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
            <div className="w-20 h-20 rounded-full bg-[#1A472A]/90 text-white border-2 border-white/50 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform mb-4 cursor-pointer">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold max-w-md">
              Cold-Pressed Botanical Mastery
            </h4>
            <p className="text-xs sm:text-sm text-white/80 max-w-sm mt-1">
              Watch how our herbal artisans infuse raw Amla, Reetha, and Shikakai in copper cauldrons.
            </p>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-white flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>01:14</span>
          </div>
        </div>

        {/* Video Key Takeaways */}
        <div className="p-6 bg-[#F4F1EB] border-t border-[#E8E2D5]">
          <h5 className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A472A] mb-3">
            In this guide you will discover:
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#2D2D2D]/80">
            <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#E3DDD1]">
              <CheckCircle2 className="w-4 h-4 text-[#1A472A] shrink-0 mt-0.5" />
              <span>Correct scalp temperature for herbal shampoo absorption</span>
            </div>
            <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#E3DDD1]">
              <CheckCircle2 className="w-4 h-4 text-[#1A472A] shrink-0 mt-0.5" />
              <span>Marma-point acupressure scalp massage technique</span>
            </div>
            <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#E3DDD1]">
              <CheckCircle2 className="w-4 h-4 text-[#1A472A] shrink-0 mt-0.5" />
              <span>How cold-pressed oil locks in hydration for 48 hours</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
