'use client';

import React from 'react';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import VisualBenefits from '../components/VisualBenefits';
import VisibleResults from '../components/VisibleResults';
import HowToUse from '../components/HowToUse';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import VideoModal from '../components/VideoModal';
import SearchModal from '../components/SearchModal';
import QuickViewModal from '../components/QuickViewModal';
import CheckoutModal from '../components/CheckoutModal';
import Toast from '../components/Toast';

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen bg-[#F9F8F6] text-[#2D2D2D] relative selection:bg-[#1A472A] selection:text-[#F9F8F6]">
        {/* Sticky Header with Pill Navigation & Brand Logo */}
        <Navbar />

        {/* Hero Section: 50/50 Layout with Floating Rings & Bottom Badges Strip */}
        <Hero />

        {/* Featured Products / "Shop By Category" Section */}
        <FeaturedProducts />

        {/* Asymmetric Visual Benefits & Ingredients Section */}
        <VisualBenefits />

        {/* Clinical Visible Results / Before & After Transformations */}
        <VisibleResults />

        {/* How to Use 4-Step Timeline Guide */}
        <HowToUse />

        {/* Verified Customer Reviews */}
        <Reviews />

        {/* Footer in Deep Dark Green with Newsletter & Links */}
        <Footer />

        {/* Modals & Interactive Overlays */}
        <CartDrawer />
        <VideoModal />
        <SearchModal />
        <QuickViewModal />
        <CheckoutModal />
        <Toast />
      </main>
    </CartProvider>
  );
}
