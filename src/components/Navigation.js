'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal/95 backdrop-blur-lg border-b border-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-serif text-2xl md:text-3xl text-gold cursor-pointer"
          >
            Savora
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center w-full gap-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                className="text-cream/80 hover:text-gold transition-colors duration-300 text-sm tracking-[0.15em] uppercase font-medium px-2 py-1"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold hover:bg-light-gold text-charcoal px-6 py-2 text-sm tracking-[0.1em] uppercase font-medium transition-colors duration-300 inline-block"
            >
              Reserve
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-cream p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden bg-charcoal/95 backdrop-blur-lg border-t border-gold/20"
      >
        <div className="px-8 py-10 space-y-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-cream/80 hover:text-gold transition-colors duration-300 text-lg tracking-[0.1em] uppercase font-light py-2"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
            transition={{ delay: navLinks.length * 0.1 }}
            className="w-full bg-gold hover:bg-light-gold text-charcoal px-6 py-3 text-sm tracking-[0.1em] uppercase font-medium transition-colors duration-300 mt-4 inline-block text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reserve Table
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
}