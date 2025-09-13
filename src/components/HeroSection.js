'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-8 md:px-12 lg:px-16 py-32 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Restaurant name */}
          <motion.h1 
            className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-wider mb-8 leading-none drop-shadow-2xl gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            Savora
          </motion.h1>
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="w-24 h-px bg-gold mx-auto" />
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.3em] text-accent-gold uppercase drop-shadow-lg font-serif">
              Where Elegance Meets Flavor
            </p>
            <div className="w-24 h-px bg-gold mx-auto" />
          </motion.div>
          
          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-cream/95 max-w-2xl mx-auto leading-relaxed font-light mt-12 drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          >
            Experience the pinnacle of fine dining where each dish tells a story of culinary artistry and passion
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            className="pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          >
            <a href="#contact" className="group relative bg-transparent border-2 border-gold hover:bg-gold text-white hover:text-charcoal px-12 py-5 transition-all duration-500 overflow-hidden enhanced-shadow hover:shadow-2xl inline-block">
              <span className="relative z-10 font-light tracking-[0.2em] text-sm uppercase">
                Reserve Your Table
              </span>
              <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}