'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    cartCount,
    cartSubtotal,
    cartTotal,
    discountAmount,
    promoCode,
    updateQuantity,
    removeFromCart,
    setIsCheckoutOpen
  } = useCart();

  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F9F8F6] border-l border-[#E3DDD1] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#2D2D2D]/10 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#1A472A]" />
                <h2 className="font-serif text-xl font-bold text-[#2D2D2D]">
                  Your Shopping Bag
                </h2>
                <span className="text-xs bg-[#E8EFE9] text-[#1A472A] font-bold px-2.5 py-0.5 rounded-full">
                  {cartCount} {cartCount === 1 ? 'item' : 'items'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-full text-[#2D2D2D] hover:bg-[#F4F1EB] transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Body: Items List or Order Complete */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderComplete ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#E8EFE9] rounded-full flex items-center justify-center mx-auto text-[#1A472A]">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A472A]">
                  Thank You for Your Order!
                </h3>
                <p className="text-xs sm:text-sm text-[#2D2D2D]/80 max-w-xs mx-auto">
                  Your Vendra Grow natural hair care order has been simulated successfully. We are preparing your fresh herbal batch!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setOrderComplete(false);
                    setIsCartOpen(false);
                  }}
                  className="px-6 py-2.5 bg-[#1A472A] text-white rounded-full text-xs font-semibold hover:bg-[#0D3B22] transition-colors cursor-pointer"
                >
                  Continue Browsing
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#F4F1EB] rounded-full flex items-center justify-center mx-auto text-[#2D2D2D]/40">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2D2D2D]">
                  Your cart is empty
                </h3>
                <p className="text-xs text-[#2D2D2D]/70 max-w-xs mx-auto">
                  Explore our cold-pressed Ayurvedic shampoos and herbal oils to start your hair transformation.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-[#1A472A] text-white rounded-full text-xs font-semibold hover:bg-[#0D3B22] transition-colors cursor-pointer"
                >
                  Explore Products
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="p-4 bg-white rounded-2xl border border-[#E8E2D5] flex gap-4 shadow-sm"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-[#F9F8F6] shrink-0 border border-[#F0EBE1]">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm font-bold text-[#2D2D2D] leading-snug">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#2D2D2D]/40 hover:text-red-600 transition-colors p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-[11px] text-[#1A472A] font-medium block mt-0.5">
                        {item.product.size}
                      </span>
                    </div>

                    {/* Quantity controls & price */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#E3DDD1] rounded-full bg-[#F9F8F6]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:text-[#1A472A] transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold px-2 text-[#2D2D2D]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:text-[#1A472A] transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-serif text-sm font-bold text-[#1A472A]">
                          Rs. {(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer: Summary & Checkout */}
          {!orderComplete && items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#2D2D2D]/10 space-y-4">
              
              {/* Price Calculation */}
              <div className="space-y-1.5 text-xs text-[#2D2D2D]/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#2D2D2D]">
                    Rs. {cartSubtotal.toLocaleString()}
                  </span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount ({promoCode})</span>
                    <span>- Rs. {discountAmount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span>Shipping</span>
                  <span className="text-[#1A472A] font-bold bg-[#E8EFE9] px-2 py-0.5 rounded-full text-[10px]">
                    FREE EXPRESS
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-[#2D2D2D] pt-2 border-t border-[#F0EBE1]">
                  <span>Total Amount</span>
                  <span className="font-serif text-xl text-[#1A472A]">
                    Rs. {cartTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full py-4 bg-[#1A472A] hover:bg-[#0D3B22] text-[#F9F8F6] text-sm font-semibold rounded-full shadow-[0_6px_20px_rgba(26,71,42,0.25)] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#2D2D2D]/60 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1A472A]" />
                <span>Cash on Delivery (COD) Only</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
