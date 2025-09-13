'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-cream via-warm-cream to-off-white text-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-burgundy rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-px bg-burgundy" />
              <span className="text-sm tracking-[0.3em] uppercase text-burgundy font-medium">Our Story</span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-charcoal tracking-tight drop-shadow-sm">
              Culinary Excellence
              <span className="block text-rich-burgundy font-semibold drop-shadow-sm">Since 1985</span>
            </h2>
            
            {/* Description */}
            <div className="space-y-8 text-lg md:text-xl leading-relaxed">
              <p className="text-charcoal/90 font-medium leading-relaxed">
                Founded on the principles of culinary excellence and refined hospitality, Savora represents the pinnacle of fine dining. Our award-winning chef combines traditional French techniques with innovative modern approaches to create unforgettable culinary experiences.
              </p>
              <p className="text-charcoal/85 leading-relaxed">
                Every dish tells a story, every ingredient is carefully sourced from local farms and artisan producers, and every moment is crafted to transport you into a world where flavor meets artistry in perfect harmony.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              {[
                { number: "38", label: "Years of Excellence" },
                { number: "15", label: "Michelin Stars" },
                { number: "100+", label: "Signature Dishes" },
                { number: "50K+", label: "Happy Guests" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="font-serif text-3xl font-semibold text-rich-burgundy drop-shadow-sm">{stat.number}</div>
                  <div className="text-sm tracking-wider uppercase text-charcoal/75 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Executive Chef - Master Culinary Artist at Savora"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 animate-pulse-slow"
                  priority
                />
              </div>
              
              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -left-6 bg-burgundy text-cream p-6 rounded-lg enhanced-shadow animate-float"
              >
                <div className="text-center">
                  <div className="font-serif text-2xl font-light mb-1">Master Chef</div>
                  <div className="text-xs tracking-wider uppercase opacity-80">Culinary Director</div>
                  <div className="w-8 h-px bg-gold mx-auto mt-3" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}