'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, X, ArrowRight, Sparkles, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { productsData, ingredientsData } from '../data/products';

export default function SearchModal() {
  const { isSearchModalOpen, setIsSearchModalOpen, addToCart, setQuickViewProduct } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isSearchModalOpen) return null;

  const query = searchTerm.toLowerCase().trim();

  const matchedProducts = query
    ? productsData.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.ingredients.some((ing) => ing.toLowerCase().includes(query)) ||
          p.features.some((f) => f.toLowerCase().includes(query))
      )
    : productsData;

  const matchedIngredients = query
    ? ingredientsData.filter(
        (i) =>
          i.name.toLowerCase().includes(query) ||
          i.description.toLowerCase().includes(query) ||
          i.role.toLowerCase().includes(query)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 pt-16 sm:pt-24 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsSearchModalOpen(false)}
      />

      <div className="relative w-full max-w-2xl bg-[#F9F8F6] rounded-3xl overflow-hidden shadow-2xl border border-[#E3DDD1] z-10">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#2D2D2D]/10">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-[#1A472A] absolute left-4" />
            <input
              type="text"
              autoFocus
              placeholder="Search shampoo, hair oil, Amla, dandruff, hair fall..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 bg-[#F4F1EB] rounded-2xl text-sm text-[#2D2D2D] font-medium placeholder-[#2D2D2D]/50 focus:outline-none focus:ring-2 focus:ring-[#1A472A]/30 border border-[#E3DDD1]"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-12 text-[#2D2D2D]/40 hover:text-[#2D2D2D]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSearchModalOpen(false)}
              className="ml-3 p-2 rounded-full hover:bg-[#F4F1EB] text-[#2D2D2D]/60 hover:text-[#2D2D2D]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Search Suggestions */}
          <div className="flex flex-wrap items-center gap-2 mt-3 pt-2">
            <span className="text-[11px] text-[#2D2D2D]/60 font-semibold uppercase tracking-wider">
              Popular:
            </span>
            {['Shampoo', 'Hair Oil', 'Amla', 'Hair Fall', 'Dandruff', 'Reetha'].map((keyword) => (
              <button
                key={keyword}
                type="button"
                onClick={() => setSearchTerm(keyword)}
                className="text-xs bg-[#F4F1EB] hover:bg-[#E8EFE9] text-[#1A472A] px-3 py-1 rounded-full font-medium transition-colors"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Matched Products */}
          <div>
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A472A] mb-3">
              Matched Remedies ({matchedProducts.length})
            </h4>

            {matchedProducts.length === 0 ? (
              <p className="text-xs text-[#2D2D2D]/60 py-4">
                No matching product found. Try searching for &quot;Amla&quot;, &quot;Oil&quot;, or &quot;Shampoo&quot;.
              </p>
            ) : (
              <div className="space-y-3">
                {matchedProducts.map((p) => (
                  <div
                    key={p.id}
                    className="p-3 bg-white rounded-2xl border border-[#E8E2D5] flex items-center justify-between gap-4 hover:border-[#1A472A] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-14 h-16 rounded-xl overflow-hidden bg-[#F4F1EB] shrink-0 border border-[#F0EBE1]">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <div>
                        <h5 className="font-serif text-sm font-bold text-[#2D2D2D]">
                          {p.name}
                        </h5>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-bold text-[#1A472A]">
                            Rs. {p.price.toLocaleString()}
                          </span>
                          <span className="text-[11px] text-[#2D2D2D]/60">
                            • {p.size}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        addToCart(p);
                        setIsSearchModalOpen(false);
                      }}
                      className="px-4 py-2 bg-[#1A472A] hover:bg-[#0D3B22] text-white text-xs font-semibold rounded-full shadow-sm transition-colors shrink-0"
                    >
                      Add to Bag
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Matched Botanicals */}
          {matchedIngredients.length > 0 && (
            <div className="pt-4 border-t border-[#2D2D2D]/10">
              <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A472A] mb-3">
                Matched Ayurvedic Botanicals ({matchedIngredients.length})
              </h4>
              <div className="space-y-2">
                {matchedIngredients.map((ing) => (
                  <div
                    key={ing.name}
                    className="p-3 bg-white rounded-xl border border-[#E8E2D5] text-xs text-[#2D2D2D]/80"
                  >
                    <span className="font-bold text-[#1A472A] block">{ing.name}</span>
                    <span className="text-[11px] text-[#2D2D2D]/60">{ing.role}</span>
                    <p className="mt-1 text-[11px]">{ing.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
