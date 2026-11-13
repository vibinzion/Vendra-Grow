'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Star, Eye, Check, Sparkles, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { productsData } from '../data/products';
import { Product } from '../types';
import RevealOnScroll from './RevealOnScroll';

export default function FeaturedProducts() {
  const { addToCart, setQuickViewProduct } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'shampoo' | 'oil' | 'bundle'>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Remedies' },
    { id: 'shampoo', label: 'Herbal Shampoos' },
    { id: 'oil', label: 'Nourishing Oils' },
    { id: 'bundle', label: 'Routine Bundles' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter((p) => p.category === selectedCategory);

  const handleAdd = (product: Product) => {
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1800);
  };

  return (
    <section id="shop" className="py-20 md:py-28 bg-[#F4F1EB]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Matching Reference Title & Subtitle with Scroll Reveal */}
        <RevealOnScroll delay={100} direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#1A472A] animate-ping" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#1A472A] uppercase">
                  Ayurvedic Formulations
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] tracking-tight">
                Discover Nature&apos;s Goodness
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#2D2D2D]/75 max-w-xl">
                Clean, earth-derived hair elixirs enriched with cold-pressed Amla, Reetha, and Shikakai to revitalize your hair from roots to ends.
              </p>
            </div>

            {/* Right Header: View All Link with hover scale */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#2D2D2D]/60 hidden sm:inline">Explore Full Range</span>
              <a
                href="#ingredients"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1A472A] hover:text-[#0D3B22] bg-white hover:bg-[#F9F8F6] px-5 py-2.5 rounded-full border border-[#E3DDD1] shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
              >
                <span>View Botanical Actives</span>
                <div className="w-5 h-5 rounded-full bg-[#1A472A] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Category Pills Filter with Stagger */}
        <RevealOnScroll delay={200} direction="up">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-10">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                    isActive
                      ? 'bg-[#1A472A] text-white shadow-md'
                      : 'bg-white text-[#2D2D2D] hover:bg-[#EAE5DC] hover:text-[#1A472A] border border-[#E3DDD1]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Products Grid with Gentle Lift (-translate-y-2 & shadow-2xl) and Inner Zoom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => {
            const isJustAdded = addedId === product.id;
            const discountPercent = Math.round(
              ((product.originalPrice - product.price) / product.originalPrice) * 100
            );

            return (
              <RevealOnScroll
                key={product.id}
                delay={idx * 150 + 100}
                duration={700}
                direction="up"
                width="full"
              >
                <div className="group bg-white rounded-3xl p-5 sm:p-6 border border-[#E8E2D5] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full">
                  {/* Top Image Card */}
                  <div>
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#F9F8F6] border border-[#F0EBE1] mb-5">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Badge */}
                      {product.badge && (
                        <div className="absolute top-3 left-3 bg-[#1A472A] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-md group-hover:scale-105 transition-transform duration-300">
                          {product.badge}
                        </div>
                      )}

                      {/* Discount Tag */}
                      <div className="absolute top-3 right-3 bg-[#C5A059] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                        {product.discountBadge ?? `${discountPercent}% OFF`}
                      </div>

                      {/* Quick View Button overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <button
                          type="button"
                          onClick={() => setQuickViewProduct(product)}
                          className="bg-white/95 backdrop-blur text-[#2D2D2D] hover:text-[#1A472A] px-4 py-2 rounded-full text-xs font-semibold shadow-lg hover:scale-110 active:scale-95 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Quick Details</span>
                        </button>
                      </div>
                    </div>

                    {/* Size & Rating */}
                    <div className="flex items-center justify-between text-xs text-[#2D2D2D]/60 mb-2">
                      <span className="font-medium bg-[#F4F1EB] px-2.5 py-0.5 rounded-full text-[#1A472A]">
                        {product.size}
                      </span>
                      <div className="flex items-center gap-1 text-[#C5A059]">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-bold text-[#2D2D2D]">{product.rating}</span>
                        <span className="text-[#2D2D2D]/60">({product.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2D2D] group-hover:text-[#1A472A] transition-colors duration-300 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1A472A] font-medium mt-1">
                      {product.tagline}
                    </p>

                    {/* Features Bullet list */}
                    <ul className="mt-3.5 space-y-1.5 text-xs text-[#2D2D2D]/80">
                      {product.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#1A472A] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Price & Add to Cart Button with Enhanced Hover Effects */}
                  <div className="mt-6 pt-5 border-t border-[#F0EBE1] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#2D2D2D]/60 block font-semibold">
                        Special Price
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-2xl font-bold text-[#1A472A]">
                          Rs. {product.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-[#2D2D2D]/40 line-through">
                          Rs. {product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Dark Green "Add to Cart" Button with scale & glow effect */}
                    <button
                      type="button"
                      onClick={() => handleAdd(product)}
                      className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md cursor-pointer ${
                        isJustAdded
                          ? 'bg-emerald-700 text-white scale-105 shadow-lg'
                          : 'bg-[#1A472A] hover:bg-[#0D3B22] hover:scale-105 hover:shadow-[0_10px_25px_rgba(26,71,42,0.3)] hover:brightness-110 active:scale-95 text-[#F9F8F6]'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4 animate-bounce" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Feature highlight banner beneath product grid with Scroll Reveal */}
        <RevealOnScroll delay={250} direction="up">
          <div className="mt-14 bg-gradient-to-r from-[#1A472A] to-[#0D3B22] rounded-3xl p-8 sm:p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-white/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ayurvedic Quality Assurance</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight">
                  Authentic Cold-Press Extraction • Zero Harmful Chemicals
                </h3>
                <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
                  Every bottle of Vendra Grow contains herbs harvested at peak potency. No synthetic foaming sulfates, no parabens, and no mineral oils. Just raw botanical vitality.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href="#how-to-use"
                  className="bg-[#C5A059] hover:bg-[#B38F46] hover:scale-105 hover:shadow-[0_10px_25px_rgba(197,160,89,0.35)] hover:brightness-110 active:scale-95 text-[#0D3B22] font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>View Daily Routine</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
