'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-background via-charcoal to-background py-24 md:py-32 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 lg:gap-20">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="font-serif text-4xl text-gold mb-6">Savora</h3>
            <p className="text-lg text-cream/80 leading-relaxed mb-8 max-w-md">
              Where elegance meets flavor in every carefully crafted experience. 
              Join us for an unforgettable culinary journey that celebrates the art of fine dining.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                <motion.button
                  key={social}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gold/20 hover:bg-gold/40 rounded-full flex items-center justify-center transition-all duration-300 glass-effect"
                >
                  <div className="w-4 h-4 bg-gold rounded-full"></div>
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-light tracking-[0.2em] text-gold mb-6 uppercase text-sm">Contact</h4>
            <div className="space-y-4 text-cream/70">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                </div>
                <div>
                  <p>123 Gourmet Avenue</p>
                  <p>Fine Dining District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                </div>
                <span>(555) 123-DINE</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                </div>
                <span>hello@savora.com</span>
              </div>
            </div>
          </motion.div>
          
          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-light tracking-[0.2em] text-gold mb-6 uppercase text-sm">Hours</h4>
            <div className="space-y-3 text-cream/70">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span>5:30 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span>5:30 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>5:30 PM - 9:00 PM</span>
              </div>
              <div className="flex justify-between border-t border-gold/20 pt-3 mt-4">
                <span className="text-gold">Closed</span>
                <span>Mondays</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gold/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/50 text-sm tracking-wide">
              &copy; 2024 Savora. All rights reserved.
            </p>
            
            <div className="flex space-x-8 text-sm text-cream/50">
              <button className="hover:text-gold transition-colors duration-300">Privacy Policy</button>
              <button className="hover:text-gold transition-colors duration-300">Terms of Service</button>
              <button className="hover:text-gold transition-colors duration-300">Press</button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}