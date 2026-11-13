'use client';

import React from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toastMessage, setIsCartOpen } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-500">
      <div className="bg-[#1A472A] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 max-w-sm">
        <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0" />
        <span className="text-xs font-medium leading-tight flex-1">
          {toastMessage}
        </span>
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="text-xs font-bold text-[#C5A059] hover:text-white underline underline-offset-2 shrink-0 cursor-pointer"
        >
          View Bag
        </button>
      </div>
    </div>
  );
}
