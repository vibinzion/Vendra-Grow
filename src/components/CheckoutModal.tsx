'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ShieldCheck, Check, CreditCard, Lock, ArrowLeft, ShoppingBag, Leaf, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CheckoutModal() {
  const {
    items,
    isCheckoutOpen,
    setIsCheckoutOpen,
    cartSubtotal,
    cartTotal,
    discountAmount,
    promoCode,
    clearCart,
    cartCount
  } = useCart();

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    postalCode: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'phone': {
        const cleanPhone = value.trim().replace(/[\s\-]/g, '');
        if (!/^03\d{9}$/.test(cleanPhone)) {
          return 'Please enter a valid 11-digit Pakistani phone number (e.g., 03001234567)';
        }
        return '';
      }
      case 'email': {
        const cleanEmail = value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!cleanEmail || !emailRegex.test(cleanEmail)) {
          return 'Please enter a valid email address';
        }
        return '';
      }
      case 'address': {
        const cleanAddress = value.trim();
        if (cleanAddress.length < 10 || !/\s/.test(cleanAddress)) {
          return 'Please enter your complete, real address';
        }
        return '';
      }
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => {
        if (errorMsg) {
          return { ...prev, [name]: errorMsg };
        } else {
          const next = { ...prev };
          delete next[name];
          return next;
        }
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    if (errorMsg) {
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    // 1. Phone Number: MUST match Pakistani format EXACTLY: ^03\d{9}$ (Starts with 03, exactly 11 digits)
    const cleanPhone = formData.phone.trim().replace(/[\s\-]/g, '');
    if (!/^03\d{9}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 11-digit Pakistani phone number (e.g., 03001234567)';
    }

    // 2. Email: MUST match standard email regex
    const cleanEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // 3. Address & City: MUST be at least 10 characters long AND contain at least one space
    const cleanAddress = formData.address.trim();
    if (cleanAddress.length < 10 || !/\s/.test(cleanAddress)) {
      newErrors.address = 'Please enter your complete, real address';
    }

    // 4. Force UI Update: If ANY field is invalid, block submit and display errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitError(null);

    const generatedId = 'VG-' + Math.floor(100000 + Math.random() * 900000);
    const customerName = `${formData.firstName} ${formData.lastName}`.trim() || 'Valued Customer';
    const cityValue = cleanAddress.includes(',')
      ? cleanAddress.split(',').pop()?.trim() || cleanAddress
      : cleanAddress;

    const itemsSummary = items
      .map(
        (item) =>
          `${item.quantity}x ${item.product.name} (${item.product.size}) - Rs. ${(
            item.product.price * item.quantity
          ).toLocaleString()}`
      )
      .join('\n');

    const fullMessage = `
=============================================
         NEW VENDRA GROW ORDER: #${generatedId}
=============================================

CUSTOMER DETAILS:
- Full Name: ${customerName}
- Phone Number: ${cleanPhone}
- Email Address: ${cleanEmail}

SHIPPING ADDRESS:
- Complete Address & City: ${cleanAddress}
- Apartment / Landmark: ${formData.apartment.trim() || 'N/A'}
- Postal Code: ${formData.postalCode.trim() || 'N/A'}

ORDER ITEMS:
${itemsSummary}

FINANCIAL BREAKDOWN:
- Subtotal: Rs. ${cartSubtotal.toLocaleString()}
- Discount: ${discountAmount > 0 ? `Rs. ${discountAmount.toLocaleString()} (${promoCode})` : 'Rs. 0'}
- Express Delivery: FREE
- Total Payable (COD): Rs. ${cartTotal.toLocaleString()}

PAYMENT METHOD: Cash on Delivery (COD)
=============================================
`.trim();

    const payload = {
      access_key: 'fe5c6750-9c14-455e-83e1-8d068778ffb5',
      subject: `New Order #${generatedId} - ${customerName} - Rs. ${cartTotal.toLocaleString()}`,
      from_name: 'Vendra Grow Store',
      name: customerName,
      first_name: formData.firstName.trim() || 'N/A',
      last_name: formData.lastName.trim() || 'N/A',
      email: cleanEmail,
      phone: cleanPhone,
      address: cleanAddress,
      city: cityValue,
      postal_code: formData.postalCode.trim() || 'N/A',
      apartment: formData.apartment.trim() || 'N/A',
      order_id: generatedId,
      order_details: itemsSummary,
      order_subtotal: `Rs. ${cartSubtotal.toLocaleString()}`,
      order_discount: discountAmount > 0 ? `Rs. ${discountAmount.toLocaleString()} (${promoCode})` : 'Rs. 0',
      shipping: 'Free Express Delivery',
      order_total: `Rs. ${cartTotal.toLocaleString()}`,
      payment_method: 'Cash on Delivery (COD)',
      message: fullMessage,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 200 || response.ok) {
        setOrderId(generatedId);
        setIsSubmitting(false);
        setOrderPlaced(true);
        clearCart();
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || `Server responded with status ${response.status}`);
      }
    } catch (err: unknown) {
      console.error('Web3Forms order submission failed:', err);
      setIsSubmitting(false);
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Unable to process your order. Please check your internet connection and try again.'
      );
    }
  };

  const getInputClasses = (fieldName: string) => {
    const hasError = !!errors[fieldName];
    return `w-full px-4 py-3 bg-white rounded-xl text-xs sm:text-sm text-[#2D2D2D] placeholder-[#2D2D2D]/40 focus:outline-none transition-all duration-300 shadow-sm border ${
      hasError
        ? 'border-red-500 focus:ring-2 focus:ring-red-500/30 focus:border-red-500 ring-1 ring-red-500'
        : 'border-[#E3DDD1] focus:ring-2 focus:ring-[#1A472A]/50 focus:border-[#1A472A]'
    }`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-0 md:p-4 lg:p-6">
      <div className="relative w-full max-w-6xl min-h-screen md:min-h-0 bg-[#F9F8F6] md:rounded-3xl shadow-2xl overflow-hidden border border-[#E3DDD1] flex flex-col my-auto text-[#2D2D2D]">
        
        {/* Top Header Bar */}
        <div className="bg-white border-b border-[#2D2D2D]/10 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsCheckoutOpen(false)}
              className="p-1.5 rounded-full hover:bg-[#F4F1EB] text-[#2D2D2D]/70 hover:text-[#1A472A] transition-colors cursor-pointer"
              title="Return to store"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-xl font-bold tracking-[0.2em] text-[#1A472A]">
                VENDRA GROW
              </span>
              <Leaf className="w-4 h-4 text-[#C5A059]" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-[#2D2D2D]/70 font-medium">
              <Lock className="w-3.5 h-3.5 text-[#1A472A]" />
              Secure 256-Bit SSL Checkout
            </span>
            <button
              type="button"
              onClick={() => setIsCheckoutOpen(false)}
              className="p-1.5 rounded-full hover:bg-[#F4F1EB] text-[#2D2D2D]/70 hover:text-[#1A472A] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Split Layout */}
        {orderPlaced ? (
          <div className="p-8 md:p-16 text-center max-w-xl mx-auto my-auto space-y-6">
            <div className="w-20 h-20 bg-[#1A472A] text-white rounded-full flex items-center justify-center mx-auto shadow-xl ring-8 ring-[#1A472A]/10 animate-bounce">
              <Check className="w-10 h-10 stroke-[2.5]" />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">
                Order Confirmed
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#1A472A]">
                Thank You, {formData.firstName || 'Valued Customer'}!
              </h2>
              <p className="text-xs sm:text-sm text-[#2D2D2D]/80 leading-relaxed">
                Your order <strong className="text-[#1A472A]">#{orderId}</strong> has been received and is being prepared with freshly extracted Ayurvedic botanicals.
              </p>
            </div>

            <div className="bg-[#F4F1EB] p-4 rounded-2xl text-left text-xs space-y-1.5 border border-[#E3DDD1]">
              <div className="flex justify-between">
                <span className="text-[#2D2D2D]/60">Payment Method:</span>
                <span className="font-semibold text-[#1A472A]">Cash on Delivery (COD)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#2D2D2D]/60">Delivery Address:</span>
                <span className="font-semibold text-right">{formData.address || 'Address provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#2D2D2D]/60">Contact Number:</span>
                <span className="font-semibold">{formData.phone || 'Phone provided'}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#2D2D2D]/10 text-sm font-bold">
                <span>Amount to Pay:</span>
                <span className="text-[#1A472A]">Rs. {cartTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setOrderPlaced(false);
                setIsCheckoutOpen(false);
              }}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1A472A] hover:bg-[#0D3B22] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1">
            
            {/* Left Side: Shopify-Style Customer Information & Shipping Form (Cols 1-7) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-8 bg-[#F9F8F6]">
              <form onSubmit={handleSubmitOrder} noValidate className="space-y-8">
                
                {/* Contact Information */}
                <div className="space-y-3">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2D2D2D]">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address for tracking updates"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses('email')}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1.5 font-medium flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile phone number (e.g., 03001234567)"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses('phone')}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1.5 font-medium flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="space-y-3">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2D2D2D]">
                    Shipping Address
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={getInputClasses('firstName')}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={getInputClasses('lastName')}
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address & City (e.g., House 14, Street 5, Lahore)"
                      value={formData.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClasses('address')}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1.5 font-medium flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errors.address}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        name="apartment"
                        placeholder="Apartment, suite, landmark (optional)"
                        value={formData.apartment}
                        onChange={handleChange}
                        className={getInputClasses('apartment')}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal code (optional)"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className={getInputClasses('postalCode')}
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Method (Pre-selected active state) */}
                <div className="space-y-3">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2D2D2D]">
                    Shipping Method
                  </h3>
                  <div className="p-4 rounded-2xl bg-[#1A472A]/5 border-2 border-[#1A472A] flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1A472A] flex items-center justify-center text-white text-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#1A472A] block">
                          Free Express Delivery Across Pakistan
                        </span>
                        <span className="text-[11px] text-[#2D2D2D]/70 block">
                          Delivered within 2–4 business days with live SMS tracking
                        </span>
                      </div>
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-[#1A472A] uppercase">
                      FREE
                    </span>
                  </div>
                </div>

                {/* Payment Method (Pre-selected active state for Cash on Delivery ONLY) */}
                <div className="space-y-3">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2D2D2D]">
                    Payment Method
                  </h3>
                  
                  {/* COD Pre-Selected Active */}
                  <div className="p-4 rounded-2xl bg-[#1A472A]/5 border-2 border-[#1A472A] space-y-2 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#1A472A] flex items-center justify-center text-white text-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-[#1A472A]">
                          Cash on Delivery (COD)
                        </span>
                      </div>
                      <CreditCard className="w-5 h-5 text-[#1A472A]" />
                    </div>
                    <p className="text-[11px] text-[#2D2D2D]/70 pl-8 leading-relaxed">
                      Pay with cash upon receipt of your parcel directly to the courier. No advance payment required.
                    </p>
                  </div>
                </div>

                {/* Error Banner if submission fails */}
                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-xs flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Complete Order Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || items.length === 0}
                    className="w-full py-4 bg-[#1A472A] text-white font-serif text-base font-bold tracking-wide rounded-full shadow-[0_8px_25px_rgba(26,71,42,0.3)] hover:-translate-y-1 hover:shadow-xl hover:brightness-110 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        <span>Transmitting Order to Vendra Grow...</span>
                      </span>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>Complete order &bull; Rs. {cartTotal.toLocaleString()}</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-[#2D2D2D]/60 mt-2.5 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1A472A]" />
                    <span>Backed by 30-Day Results Guarantee • Zero Risk</span>
                  </p>
                </div>

              </form>
            </div>

            {/* Right Side: Order Summary (Cols 8-12 with darker cream bg) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-[#F4F1EB] border-t lg:border-t-0 lg:border-l border-[#E3DDD1] flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#2D2D2D]/10">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2D2D2D] flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-[#1A472A]" />
                    <span>Order Summary</span>
                  </h3>
                  <span className="text-xs bg-[#E8EFE9] text-[#1A472A] font-bold px-2.5 py-0.5 rounded-full">
                    {cartCount} items
                  </span>
                </div>

                {/* Items List */}
                <div className="space-y-3.5 max-h-[340px] overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-[#E3DDD1] shadow-xs">
                      <div className="relative w-14 h-16 rounded-xl overflow-hidden bg-[#F9F8F6] shrink-0 border border-[#F0EBE1]">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover object-center"
                        />
                        <span className="absolute top-0 right-0 bg-[#1A472A] text-white text-[9px] font-bold w-4 h-4 rounded-bl-lg flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-xs font-bold text-[#2D2D2D] truncate">
                          {item.product.name}
                        </h4>
                        <span className="text-[10px] text-[#1A472A] block font-medium">
                          {item.product.size}
                        </span>
                        <span className="text-xs font-bold text-[#2D2D2D] mt-0.5 block">
                          Rs. {(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cost Breakdown */}
                <div className="space-y-2 text-xs text-[#2D2D2D]/80 pt-4 border-t border-[#2D2D2D]/10">
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

                  <div className="flex justify-between text-base font-bold text-[#2D2D2D] pt-3 border-t border-[#2D2D2D]/10">
                    <span className="font-serif">Total Due</span>
                    <div className="text-right">
                      <span className="text-[10px] text-[#2D2D2D]/60 block font-normal -mb-0.5">PKR (Includes all taxes)</span>
                      <span className="font-serif text-2xl text-[#1A472A]">
                        Rs. {cartTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Trust Guarantee Box */}
              <div className="p-4 rounded-2xl bg-white border border-[#E3DDD1] space-y-1.5 shadow-xs">
                <span className="text-xs font-bold text-[#1A472A] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  100% Ayurvedic Purity Guarantee
                </span>
                <p className="text-[11px] text-[#2D2D2D]/70 leading-relaxed">
                  Every batch of Vendra Grow is hand-crafted with pure botanical herbs. Sealed for hygiene and dispatched from local climate-controlled facilities.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
