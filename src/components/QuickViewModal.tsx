'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Star, ShoppingBag, Check, ShieldCheck, Leaf, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!quickViewProduct) return null;

  const handleAdd = () => {
    addToCart(quickViewProduct, qty);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="relative w-full max-w-3xl bg-[#F9F8F6] rounded-3xl overflow-hidden shadow-2xl border border-[#E3DDD1] z-10">
        
        <button
          type="button"
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#2D2D2D] shadow-md transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Image */}
          <div className="md:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-[#E8E2D5]">
            <Image
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              fill
              className="object-cover object-center"
            />
            {quickViewProduct.badge && (
              <div className="absolute top-3 left-3 bg-[#1A472A] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                {quickViewProduct.badge}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-1.5 text-[#C5A059] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs font-bold text-[#2D2D2D] ml-1">
                  {quickViewProduct.rating} ({quickViewProduct.reviewsCount} reviews)
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#2D2D2D]">
                {quickViewProduct.name}
              </h3>
              <p className="text-xs font-semibold text-[#1A472A] mt-0.5">
                {quickViewProduct.tagline} • {quickViewProduct.size}
              </p>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-[#1A472A]">
                  Rs. {quickViewProduct.price.toLocaleString()}
                </span>
                <span className="text-sm text-[#2D2D2D]/40 line-through">
                  Rs. {quickViewProduct.originalPrice.toLocaleString()}
                </span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[#2D2D2D]/80 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Ingredients tag cloud */}
              <div className="mt-4 pt-3 border-t border-[#2D2D2D]/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1A472A] block mb-2">
                  Active Botanical Ingredients:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickViewProduct.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="bg-[#E8EFE9] text-[#1A472A] text-[11px] font-medium px-2.5 py-1 rounded-lg"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="pt-4 border-t border-[#E8E2D5] space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#E3DDD1] rounded-full bg-white px-3 py-1.5">
                  <button
                    type="button"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="p-1 hover:text-[#1A472A]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-bold px-3">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty(qty + 1)}
                    className="p-1 hover:text-[#1A472A]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  className="flex-1 py-3 bg-[#1A472A] hover:bg-[#0D3B22] text-[#F9F8F6] text-sm font-semibold rounded-full shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag • Rs. {(quickViewProduct.price * qty).toLocaleString()}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#2D2D2D]/70">
                <ShieldCheck className="w-4 h-4 text-[#1A472A]" />
                <span>100% Ayurvedic • Lab Tested • 30-Day Results Guarantee</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
