'use client';

import React from 'react';
import { Leaf, MessageCircle, ShieldCheck } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function Footer() {
  return (
    <footer className="bg-[#0D3B22] text-[#F9F8F6] pt-16 pb-12 border-t border-[#1A472A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Evenly Distributed Footer Columns */}
        <RevealOnScroll delay={150} direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-white/10">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 group cursor-pointer">
                <span className="font-serif text-2xl tracking-[0.25em] font-bold text-[#F9F8F6] group-hover:text-[#C5A059] transition-colors duration-300">
                  VENDRA
                </span>
                <Leaf className="w-4 h-4 text-[#C5A059] group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <span className="text-[10px] tracking-[0.35em] text-[#C5A059] uppercase block font-semibold -mt-2">
                G R O W &bull; B O T A N I C A L S
              </span>

              <p className="text-xs text-[#F9F8F6]/75 leading-relaxed">
                Crafting authentic Ayurvedic remedies using ethically harvested botanicals.
                Free of artificial fillers, synthetic perfumes, silicones, and parabens.
              </p>

              {/* Social Icons with Smooth Scale & Hover Lift */}
              <div className="flex items-center space-x-3 pt-2">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/vendra.4612061/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#0D3B22] hover:-translate-y-1 hover:scale-110 flex items-center justify-center transition-all duration-300 cursor-pointer"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61592019837337&_rdc=1&_rdr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#0D3B22] hover:-translate-y-1 hover:scale-110 flex items-center justify-center transition-all duration-300 cursor-pointer"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/vendra-grow-0947a9434/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#0D3B22] hover:-translate-y-1 hover:scale-110 flex items-center justify-center transition-all duration-300 cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/923305841287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#0D3B22] hover:-translate-y-1 hover:scale-110 flex items-center justify-center transition-all duration-300 cursor-pointer"
                  aria-label="WhatsApp Support"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Shop Remedies */}
            <div className="space-y-4 lg:pl-6">
              <h4 className="font-serif text-sm font-bold tracking-wider text-[#C5A059] uppercase">
                Shop Remedies
              </h4>
              <ul className="space-y-2.5 text-xs text-[#F9F8F6]/80">
                <li>
                  <a href="#shop" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    Vendra Herbal Shampoo
                  </a>
                </li>
                <li>
                  <a href="#shop" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    Vendra Natural Hair Oil
                  </a>
                </li>
                <li>
                  <a href="#shop" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    Ayurvedic Hair Growth Duo
                  </a>
                </li>
                <li>
                  <a href="#shop" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    Scalp Stimulating Kits
                  </a>
                </li>
                <li>
                  <a href="#shop" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    Bestsellers &amp; Bundles
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Ayurvedic Science */}
            <div className="space-y-4 lg:pl-4">
              <h4 className="font-serif text-sm font-bold tracking-wider text-[#C5A059] uppercase">
                Ayurvedic Science
              </h4>
              <ul className="space-y-2.5 text-xs text-[#F9F8F6]/80">
                <li>
                  <a href="#ingredients" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    Amla Super-Antioxidant
                  </a>
                </li>
                <li>
                  <a href="#ingredients" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    Reetha Saponin Cleansing
                  </a>
                </li>
                <li>
                  <a href="#ingredients" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    Shikakai Cuticle Seal
                  </a>
                </li>
                <li>
                  <a href="#how-to-use" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    4-Step Hair Routine
                  </a>
                </li>
                <li>
                  <a href="#results" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    Clinical Before &amp; After
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Assistance & Legal */}
            <div className="space-y-4">
              <h4 className="font-serif text-sm font-bold tracking-wider text-[#C5A059] uppercase">
                Assistance &amp; Legal
              </h4>
              <ul className="space-y-2.5 text-xs text-[#F9F8F6]/80">
                <li>
                  <a href="#shop" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    Track Your Order
                  </a>
                </li>
                <li>
                  <a href="#shop" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    30-Day Results Guarantee
                  </a>
                </li>
                <li>
                  <a href="#hero" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#hero" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#hero" className="hover:text-[#C5A059] hover:translate-x-1.5 transition-all duration-300 inline-block">
                    Contact Support (@vendragrow)
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </RevealOnScroll>

        {/* Bottom Strip: Badges & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F9F8F6]/60">
          <div className="flex items-center gap-2">
            <span>&copy; 2026 Vendra Grow Organic Herbals. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#C5A059]">
            <span className="flex items-center gap-1 hover:text-white transition-colors cursor-default">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Certified Ayurvedic
            </span>
            <span>&bull;</span>
            <span className="hover:text-white transition-colors cursor-default">Cruelty-Free</span>
            <span>&bull;</span>
            <span className="hover:text-white transition-colors cursor-default">SLES &amp; Paraben Free</span>
            <span>&bull;</span>
            <span className="hover:text-white transition-colors cursor-default">Made with Pure Botanicals</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
