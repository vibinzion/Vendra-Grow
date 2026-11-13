'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';
import { productsData } from '../data/products';

interface PromoResult {
  success: boolean;
  message: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartCount: number;
  cartSubtotal: number;
  cartTotal: number;
  discountAmount: number;
  promoCode: string;
  applyPromoCode: (code: string) => PromoResult;
  freeShippingThreshold: number;
  freeShippingRemaining: number;
  toastMessage: string | null;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  isVideoModalOpen: boolean;
  setIsVideoModalOpen: (open: boolean) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Initialize with empty array so cart is completely empty by default for every new visitor
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const freeShippingThreshold = 2500;

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (product: Product, quantity = 1) => {
    setItems(prevItems => {
      const existing = prevItems.find(item => item.product.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { product, quantity }];
    });
    showToast(`Added "${product.name}" to your shopping bag!`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const applyPromoCode = (code: string): PromoResult => {
    const clean = code.trim().toUpperCase();
    if (clean === 'AYURVEDA20' || clean === 'GROW20') {
      setPromoCode(clean);
      setDiscountPercent(0.20);
      return { success: true, message: '🎉 20% Ayurvedic discount applied!' };
    }
    if (clean === 'ORGANIC10') {
      setPromoCode(clean);
      setDiscountPercent(0.10);
      return { success: true, message: '🎉 10% Welcome discount applied!' };
    }
    return { success: false, message: 'Invalid coupon code. Try AYURVEDA20' };
  };

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(cartSubtotal * discountPercent);
  const cartTotal = Math.max(0, cartSubtotal - discountAmount);
  const freeShippingRemaining = Math.max(0, freeShippingThreshold - cartSubtotal);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartCount,
        cartSubtotal,
        cartTotal,
        discountAmount,
        promoCode,
        applyPromoCode,
        freeShippingThreshold,
        freeShippingRemaining,
        toastMessage,
        quickViewProduct,
        setQuickViewProduct,
        isVideoModalOpen,
        setIsVideoModalOpen,
        isSearchModalOpen,
        setIsSearchModalOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
