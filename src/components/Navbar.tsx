'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, User, Menu, X, Sparkles, ChevronRight, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartCount, setIsCartOpen, setIsSearchModalOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Shop', href: '#shop' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'How to Use', href: '#how-to-use' },
    { name: 'Results', href: '#results' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#1A472A] text-xs sm:text-sm py-2 px-4 border-b border-[#0D3B22]/40 transition-colors duration-300">
        <div className="flex items-center justify-center gap-3 font-serif italic text-white tracking-wide">
          <Leaf className="w-3.5 h-3.5 text-[#C5A059] shrink-0 -rotate-12 transition-transform duration-300 hover:rotate-12" />
          <p className="text-center font-medium not-italic">
            <span className="font-serif italic font-semibold text-[#C5A059] tracking-wider">Free</span> Express Delivery on all orders
          </p>
          <Leaf className="w-3.5 h-3.5 text-[#C5A059] shrink-0 rotate-12 transition-transform duration-300 hover:-rotate-12" />
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F9F8F6]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-[#2D2D2D]/5 py-3'
            : 'bg-[#F9F8F6]/75 backdrop-blur-sm py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Pill-Shaped Navigation Bar (matching reference screenshot with sleek hover effects) */}
            <nav className="hidden lg:flex items-center bg-[#F2EFE9]/90 p-1.5 rounded-full border border-[#E3DDD1] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => {
                  const isActive = activeTab === link.name;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setActiveTab(link.name)}
                      className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 group overflow-hidden ${
                        isActive
                          ? 'bg-[#1A472A] text-white shadow-sm'
                          : 'text-[#2D2D2D]/80 hover:text-[#1A472A] hover:bg-black/5'
                      }`}
                    >
                      <span className="relative z-10 transition-colors duration-300">
                        {link.name}
                      </span>
                      {/* Sleek bottom indicator bar on hover for non-active links */}
                      {!isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#1A472A] transition-all duration-300 group-hover:w-3/5 rounded-full" />
                      )}
                    </a>
                  );
                })}
              </div>
            </nav>

            {/* Mobile Menu Button (Left on small screens) */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-full text-[#2D2D2D] hover:bg-[#EAE5DC]/60 hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Center: Brand Logo in luxury serif with hover feedback */}
            <div className="flex-1 lg:flex-none text-center">
              <a href="#hero" className="inline-flex flex-col items-center group cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] font-bold text-[#1A472A] group-hover:text-[#0D3B22] group-hover:tracking-[0.24em] transition-all duration-300">
                    VENDRA
                  </span>
                  <Leaf className="w-4 h-4 text-[#1A472A] -mt-2 group-hover:rotate-45 group-hover:text-[#C5A059] transition-all duration-500 ease-out" />
                </div>
                <span className="font-serif text-[10px] sm:text-xs tracking-[0.35em] text-[#1A472A]/75 font-semibold uppercase -mt-0.5 group-hover:text-[#1A472A] transition-colors duration-300">
                  G R O W
                </span>
              </a>
            </div>

            {/* Right: E-Commerce Utility Icons with scale & glow effects */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setIsSearchModalOpen(true)}
                className="p-2 sm:p-2.5 rounded-full text-[#2D2D2D] hover:text-[#1A472A] hover:bg-[#EAE5DC]/70 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                title="Search Products & Remedies"
                aria-label="Search"
              >
                <Search className="w-5 h-5 stroke-[1.8]" />
              </button>

              {/* Wishlist Heart Icon */}
              <button
                type="button"
                onClick={() => alert('Wishlist saved to your profile!')}
                className="hidden sm:inline-flex p-2 sm:p-2.5 rounded-full text-[#2D2D2D] hover:text-[#1A472A] hover:bg-[#EAE5DC]/70 hover:scale-110 active:scale-95 transition-all duration-300 relative cursor-pointer"
                title="Your Wishlist"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5 stroke-[1.8]" />
              </button>

              {/* User Profile */}
              <button
                type="button"
                onClick={() => alert('Vendra Herbals VIP Member Account')}
                className="p-2 sm:p-2.5 rounded-full text-[#2D2D2D] hover:text-[#1A472A] hover:bg-[#EAE5DC]/70 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                title="Account"
                aria-label="Account"
              >
                <User className="w-5 h-5 stroke-[1.8]" />
              </button>

              {/* Shopping Cart with interactive badge counter & hover scale */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 sm:p-2.5 rounded-full text-[#2D2D2D] hover:text-[#1A472A] hover:bg-[#EAE5DC]/70 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
                title="View Shopping Bag"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
                <span className="absolute -top-0.5 -right-0.5 bg-[#1A472A] group-hover:bg-[#0D3B22] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {cartCount}
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#F9F8F6] p-6 shadow-2xl flex flex-col justify-between border-r border-[#E3DDD1] transition-transform duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#2D2D2D]/10">
                <div className="flex items-center gap-1">
                  <span className="font-serif text-xl font-bold tracking-[0.2em] text-[#1A472A]">
                    VENDRA GROW
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-[#2D2D2D] hover:bg-[#EAE5DC] hover:scale-110 transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveTab(link.name);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-[#2D2D2D] hover:bg-[#1A472A] hover:text-white transition-all duration-300 group"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#2D2D2D]/10 space-y-3">
              <div className="p-3 bg-[#E8EFE9] rounded-xl text-xs text-[#1A472A] font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>Ayurvedic formulations backed by botanical science</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full py-3 bg-[#1A472A] hover:bg-[#0D3B22] hover:scale-105 hover:shadow-[0_10px_25px_rgba(26,71,42,0.3)] hover:brightness-110 active:scale-95 text-[#F9F8F6] font-medium text-sm rounded-full shadow-md flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View Bag ({cartCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
