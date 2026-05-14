/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "motion/react";
import { 
  ArrowRight, 
  ShoppingBag, 
  Calendar, 
  Palette, 
  Stethoscope, 
  Utensils, 
  Church, 
  Home, 
  Dog, 
  Sparkles, 
  Globe, 
  CheckCircle2, 
  Zap, 
  Target, 
  Smartphone, 
  Settings, 
  MessageSquare,
  Linkedin,
  Twitter,
  Flower2,
  ExternalLink
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "@/src/lib/utils";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-6",
        isScrolled ? "glass py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-baseline space-x-1 font-display text-2xl font-bold tracking-tighter">
          <span className={cn("transition-colors duration-500", isScrolled ? "text-roselle-green" : "text-white")}>ROSELLE</span>
          <span className="text-roselle-gold">STUDIO</span>
        </div>
        
        <div className={cn(
          "hidden md:flex items-center gap-10 text-sm font-bold tracking-tight transition-colors duration-500",
          isScrolled ? "text-roselle-black/80" : "text-white/80"
        )}>
          <a href="#build" className="hover:text-roselle-gold transition-colors">What We Build</a>
          <a href="#live" className="hover:text-roselle-gold transition-colors">Our Work</a>
          <a href="#how" className="hover:text-roselle-gold transition-colors">How It Works</a>
          <a href="#contact" className="hover:text-roselle-gold transition-colors">Contact</a>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "px-6 py-3 rounded-pill text-sm font-bold shadow-lg transition-all duration-500",
            isScrolled 
              ? "bg-roselle-green text-white shadow-roselle-green/10" 
              : "bg-white text-roselle-dark-green shadow-black/20"
          )}
        >
          Get Started
        </motion.button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-roselle-dark-green">
      {/* Background Radial Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 glow-radial pointer-events-none"
      />

      {/* Decorative Botanical Art */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 opacity-[0.08] pointer-events-none translate-x-1/4 -translate-y-1/4 rotate-12">
        <Flower2 size={800} className="text-roselle-cream" strokeWidth={0.5} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-10 backdrop-blur-sm"
      >
        <span className="w-2 h-2 rounded-full bg-roselle-gold animate-pulse" />
        <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Now accepting new clients</span>
      </motion.div>

      <div className="text-center max-w-6xl relative z-10">
        <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] font-display font-black leading-[0.85] tracking-tighter mb-10 text-white">
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Premium websites.
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Deployed in <span className="font-accent italic font-normal text-roselle-gold lowercase">days.</span>
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-14 font-sans leading-relaxed"
        >
          We build category-specific, ready-made websites for businesses that are serious about their online presence. 
          No months of waiting. Just world-class results, fast.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <button className="bg-white text-roselle-dark-green px-10 py-5 rounded-pill font-bold shadow-2xl hover:scale-105 transition-all text-lg">
            See What We Build
          </button>
          <button className="text-white font-bold flex items-center gap-2 px-10 py-5 hover:translate-x-2 transition-all text-lg group">
            How It Works <ArrowRight size={24} className="text-roselle-gold group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <span className="text-roselle-gold">✦</span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">Live in 72 hours</span>
          </div>
          
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <span className="text-roselle-gold">✦</span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">Ready for the world</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const items = [
    "ECOMMERCE STORES",
    "BOOKING SITES",
    "PORTFOLIO WEBSITES",
    "CLINIC PAGES",
    "READY IN 72 HOURS",
    "BUILT IN LAGOS",
    "BUILT FOR THE WORLD"
  ];

  return (
    <div className="marquee-container bg-roselle-gold text-roselle-near-black">
      <div className="marquee-content gap-12 pr-12">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-12 text-sm font-display font-black tracking-[0.3em] uppercase">
                <span>{item}</span>
                <span className="text-roselle-dark-green">✦</span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const CATEGORIES = [
  { id: "ecommerce", name: "Ecommerce Stores", icon: ShoppingBag, desc: "Product catalog, admin dashboard, WhatsApp checkout" },
  { id: "booking", name: "Booking & Appointment Sites", icon: Calendar, desc: "Calendar booking, deposits, automated reminders" },
  { id: "portfolio", name: "Portfolio & Creative Sites", icon: Palette, desc: "Cinematic showcase for photographers, artists, creatives" },
  { id: "health", name: "Clinic & Health Sites", icon: Stethoscope, desc: "Services, doctor profiles, appointment booking" },
  { id: "food", name: "Restaurant & Food Sites", icon: Utensils, desc: "Menu, ordering, table reservations" },
  { id: "church", name: "Church & Ministry Sites", icon: Church, desc: "Sermons, events, online giving" },
  { id: "realestate", name: "Real Estate Sites", icon: Home, desc: "Property listings, search, lead capture" },
  { id: "pets", name: "Pet Care Sites", icon: Dog, desc: "Vet clinics, pet shops, booking and products" },
  { id: "beauty", name: "Beauty & Wellness Sites", icon: Sparkles, desc: "Salons, spas, service menus, booking" },
  { id: "ngo", name: "NGO & Nonprofit Sites", icon: Globe, desc: "Donations, impact stories, volunteer sign-up" },
];

const WhatWeBuild = () => {
  return (
    <section id="build" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <div className="w-12 h-1 bg-roselle-gold mb-8 rounded-full" />
        <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter">
          Whatever your business —<br />
          we've already built for it.
        </h2>
        <p className="text-gray-500 max-w-2xl text-xl leading-relaxed">
          Roselle Studio builds category-specific websites engineered for how each type of business actually works. 
          Pick your category. We handle everything else.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {CATEGORIES.map((cat, i) => (
          <motion.div 
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5 }}
            className="group gradient-border p-8 rounded-3xl border border-gray-100/50 hover:bg-roselle-green/[0.02] transition-all cursor-default"
          >
            <div className="w-14 h-14 bg-roselle-cream rounded-2xl flex items-center justify-center mb-6 group-hover:bg-roselle-green group-hover:text-white group-hover:scale-110 transition-all duration-500">
              <cat.icon size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">{cat.name}</h3>
            <p className="text-gray-500 text-base leading-relaxed">{cat.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <p className="text-xl text-gray-500">
          Have something else in mind? <a href="#contact" className="text-roselle-green font-bold inline-flex items-center gap-2 hover:gap-4 transition-all">We build for any business type <ArrowRight size={22} className="text-roselle-gold" /></a>
        </p>
      </div>
    </section>
  );
};

const LIVE_PRODUCTS = [
  {
    name: "Tolak Ventures",
    tag: "Ecommerce",
    desc: "A full-featured online store with product catalog, admin dashboard, and WhatsApp checkout.",
    link: "https://tolakventures.netlify.app",
    gradient: "from-roselle-dark-green to-[#1e5d3d]"
  },
  {
    name: "Maison Marina",
    tag: "Luxury Retail",
    desc: "A cinematic storefront for a premium perfume brand. Built for quality and elegance.",
    link: "https://maisonmarina.netlify.app",
    gradient: "from-[#0a1e2f] to-[#2d1b4d]"
  },
  {
    name: "Paws & Play Clinic",
    tag: "Pet Care",
    desc: "Professional web presence for a dog-only vet clinic and pet shop. Services, products, and booking.",
    link: "https://pawsclinic.netlify.app",
    gradient: "from-[#0f3d25] to-[#14532d]"
  }
];

const LiveProducts = () => {
  return (
    <section id="live" className="py-32 px-6 bg-roselle-dark-green relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            Our work, live in the world.
          </h2>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Every Roselle product is deployed and working for real businesses right now. Browse them below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {LIVE_PRODUCTS.map((prod, i) => (
            <motion.a 
              key={prod.name}
              href={prod.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={cn(
                "group relative block p-10 rounded-[2.5rem] bg-gradient-to-br overflow-hidden shadow-2xl transition-all duration-500",
                prod.gradient
              )}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-10 transition-opacity" />
              
              <div className="relative z-10 flex flex-col h-full min-h-[320px]">
                <div className="flex-1">
                  <div className="inline-flex px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase font-bold tracking-widest text-white/80 mb-6 border border-white/5">
                    {prod.tag}
                  </div>
                  <h3 className="text-white text-4xl font-display font-black tracking-tight mb-4 group-hover:text-roselle-gold transition-colors">{prod.name}</h3>
                  <p className="text-white/60 text-lg leading-relaxed mb-8">{prod.desc}</p>
                </div>
                
                <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                  Visit Live Site <ExternalLink size={20} className="text-roselle-gold" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "You Inquire", desc: "Fill a short form. Tell us your business type and goals." },
    { title: "We Match", desc: "We recommend the right Roselle product for your business." },
    { title: "You Brand It", desc: "Send your logo, colors, and content. We handle everything." },
    { title: "You Go Live", desc: "Your site is deployed, tested, and handed over. Max 5 days." },
  ];

  return (
    <section id="how" className="py-32 px-6 bg-[#111111] overflow-hidden relative">
      <div className="noise-overlay opacity-[0.03]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-white text-5xl md:text-7xl font-bold mb-24 tracking-tighter">
          From inquiry to live —<br />
          in days, not months.
        </h2>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 w-full h-[1px] bg-white/10 hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="w-16 h-16 bg-roselle-green rounded-full flex items-center justify-center text-white text-2xl font-display font-black mb-10 shadow-lg shadow-roselle-green/20 relative z-10 border-4 border-[#111111]">
                  0{i + 1}
                </div>
                <h3 className="text-white text-3xl font-bold mb-6 tracking-tight">{step.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyRoselle = () => {
  const features = [
    { title: "72-Hour Delivery", desc: "Most clients go live within 3 days of onboarding", icon: Zap },
    { title: "Category Specific", desc: "Each product is engineered for a specific type of business", icon: Target },
    { title: "Mobile First", desc: "Every site performs flawlessly on any device", icon: Smartphone },
    { title: "Self-Managed", desc: "Clients update their own content with zero tech knowledge", icon: Settings },
    { title: "Built for the World", desc: "Global-standard output from Lagos, Nigeria", icon: Globe },
    { title: "WhatsApp Native", desc: "Checkout and communication built for African commerce", icon: MessageSquare },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <div className="w-12 h-1 bg-roselle-gold mb-8 rounded-full" />
        <h2 className="text-5xl md:text-72 font-bold leading-[1.05] mb-8 tracking-tighter">
          Not an agency.<br />
          Not a template.<br />
          <span className="text-roselle-gold italic">Something better.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 bg-white rounded-[2.5rem] border-l-[6px] border-l-transparent border-t border-r border-b border-gray-100 shadow-sm hover:border-l-roselle-green hover:shadow-2xl transition-all group"
          >
            <div className="w-14 h-14 bg-roselle-green/5 text-roselle-green rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <feature.icon size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed text-base font-medium">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#111111] relative overflow-hidden">
      <div className="noise-overlay opacity-[0.03]" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="w-12 h-1 bg-roselle-gold mb-8 rounded-full" />
          <h2 className="text-white text-5xl md:text-7xl font-bold mb-10 tracking-tighter">
            Your business deserves<br />
            a better internet presence.<br />
            <span className="text-roselle-gold">Let's build it.</span>
          </h2>
          <p className="text-xl text-white/50 mb-14 max-w-md leading-relaxed">
            No pricing walls. No long calls. Just tell us about your business and we'll get back to you within 24 hours.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-10 h-10 bg-roselle-green/20 text-roselle-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} />
              </div>
              <span className="text-white/80 font-bold text-lg tracking-tight">Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-10 h-10 bg-roselle-green/20 text-roselle-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} />
              </div>
              <span className="text-white/80 font-bold text-lg tracking-tight">No commitment required</span>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-10 h-10 bg-roselle-green/20 text-roselle-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} />
              </div>
              <span className="text-white/80 font-bold text-lg tracking-tight">Expert recommendation included</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-black/40 border border-white/10"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Your Name</label>
                    <input required className="w-full bg-roselle-cream rounded-2xl p-5 border border-gray-100 focus:border-roselle-green focus:ring-1 focus:ring-roselle-green outline-none transition-all font-bold text-lg" type="text" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Business Name</label>
                    <input required className="w-full bg-roselle-cream rounded-2xl p-5 border border-gray-100 focus:border-roselle-green focus:ring-1 focus:ring-roselle-green outline-none transition-all font-bold text-lg" type="text" placeholder="ABC Ventures" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Business Type</label>
                  <div className="relative">
                    <select required className="w-full bg-roselle-cream rounded-2xl p-5 border border-gray-100 focus:border-roselle-green focus:ring-1 focus:ring-roselle-green outline-none transition-all font-bold text-lg appearance-none cursor-pointer">
                      <option value="">Select category</option>
                      {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 font-bold">↓</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Project Details</label>
                  <textarea required rows={4} className="w-full bg-roselle-cream rounded-2xl p-5 border border-gray-100 focus:border-roselle-green focus:ring-1 focus:ring-roselle-green outline-none transition-all font-bold text-lg resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-roselle-green text-white font-black text-xl py-6 rounded-2xl shadow-2xl shadow-roselle-green/20 flex items-center justify-center gap-4 disabled:opacity-70 group transition-all"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-roselle-green/10 text-roselle-green rounded-full flex items-center justify-center mx-auto mb-10">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-4xl font-display font-black mb-6 tracking-tight">Message Received</h3>
                <p className="text-gray-500 text-xl font-medium mb-12">We'll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="text-roselle-green font-bold text-lg underline hover:text-roselle-gold transition-colors">Send another message</button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const CTABanner = () => {
  return (
    <section className="gold-gradient py-32 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-roselle-near-black text-5xl md:text-8xl font-display font-black mb-10 tracking-tighter leading-[0.9]"
        >
          Ready to go live<br />
          this week?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-roselle-near-black/70 text-2xl font-bold mb-16 max-w-xl mx-auto tracking-tight"
        >
          Most of our clients are live within 72 hours of getting in touch.
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-roselle-dark-green text-white px-12 py-6 rounded-pill font-black text-xl shadow-2xl flex items-center gap-3 mx-auto group hover:bg-roselle-green transition-all"
        >
          Start Your Project <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
        </motion.button>
      </div>

      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-10">
        <Flower2 size={1000} className="text-roselle-near-black" strokeWidth={0.5} />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-roselle-near-black text-roselle-cream pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-20 mb-32">
          <div className="max-w-md">
            <div className="flex items-baseline space-x-1 font-display text-4xl font-bold tracking-tighter mb-8">
              <span className="text-white">ROSELLE</span>
              <span className="text-roselle-gold">STUDIO</span>
            </div>
            <p className="text-white/40 text-xl font-medium leading-relaxed mb-10">
              Websites that mean business. Ready for the world. Premium quality, delivered in days.
            </p>
            <div className="flex gap-6 mt-2">
              <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-roselle-gold hover:text-white transition-all"><Twitter size={24} /></a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-roselle-gold hover:text-white transition-all"><Linkedin size={24} /></a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h4 className="text-roselle-gold text-xs font-black uppercase tracking-[0.3em]">Navigation</h4>
              <ul className="space-y-5 text-xl font-bold text-white/50">
                <li><a href="#build" className="hover:text-white transition-colors">What We Build</a></li>
                <li><a href="#live" className="hover:text-white transition-colors">Live Showcase</a></li>
                <li><a href="#how" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-roselle-gold text-xs font-black uppercase tracking-[0.3em]">Connect</h4>
              <ul className="space-y-5 text-xl font-bold text-white/50">
                <li><a href="mailto:hello.rosellestudio@gmail.com" className="hover:text-white transition-colors break-all">hello.rosellestudio@gmail.com</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lagos, Nigeria</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-10 text-base font-bold text-white/20">
          <p>© 2025 Roselle Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <span className="w-1.5 h-1.5 bg-roselle-gold rounded-full" />
            <p className="flex items-center gap-2"> <span className="text-roselle-gold">🌺</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CustomCursor = () => {
  const mousePos = { x: useSpring(0, { stiffness: 100, damping: 20 }), y: useSpring(0, { stiffness: 100, damping: 20 }) };
  const ringPos = { x: useSpring(0, { stiffness: 50, damping: 20 }), y: useSpring(0, { stiffness: 50, damping: 20 }) };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x.set(e.clientX);
      mousePos.y.set(e.clientY);
      ringPos.x.set(e.clientX);
      ringPos.y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div 
        style={{ x: mousePos.x, y: mousePos.y, translateX: "-50%", translateY: "-50%" }}
        className="custom-cursor w-2 h-2 bg-roselle-green rounded-full"
      />
      <motion.div 
        style={{ x: ringPos.x, y: ringPos.y, translateX: "-50%", translateY: "-50%" }}
        className="custom-cursor w-8 h-8 border border-roselle-green/20 rounded-full"
      />
    </>
  );
};

export default function App() {
  return (
    <div className="relative overflow-x-hidden selection:bg-roselle-green/30 selection:text-roselle-green scroll-smooth">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhatWeBuild />
        <LiveProducts />
        <HowItWorks />
        <WhyRoselle />
        <ContactForm />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
