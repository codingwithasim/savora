'use client';

import { motion } from 'framer-motion';
import { User, Mail, Calendar, Clock, Users, Star, Phone, MapPin, ChevronDown, Utensils } from 'lucide-react';

export default function ReservationSection() {
  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-charcoal via-light-charcoal to-charcoal">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-sm tracking-[0.3em] uppercase text-gold font-medium">Reservation</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-tight">
              Reserve Your
              <span className="block text-gold">Perfect Evening</span>
            </h2>
            
            <p className="text-xl leading-relaxed text-cream/80">
              Embark on a culinary journey that will awaken your senses and create lasting memories. 
              Our intimate dining room accommodates only 40 guests each evening, ensuring personalized attention.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 pt-6">
              <div className="flex items-center space-x-4 text-cream/70">
                <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center">
                  <Phone className="w-3 h-3 text-gold" />
                </div>
                <span className="tracking-wide">(555) 123-DINE</span>
              </div>
              
              <div className="flex items-center space-x-4 text-cream/70">
                <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-gold" />
                </div>
                <span className="tracking-wide">123 Gourmet Avenue, NYC</span>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white/95 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-gold/20 overflow-hidden"
          >
            {/* Decorative Background */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-gold/10 to-burgundy/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-burgundy/10 to-gold/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
              >
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="w-8 h-px bg-gold"></div>
                  <Utensils className="w-6 h-6 text-gold" />
                  <div className="w-8 h-px bg-gold"></div>
                </div>
                <h3 className="font-serif text-4xl font-light text-charcoal mb-3">
                  Reserve Your Experience
                </h3>
                <p className="text-charcoal/70 font-light">
                  Secure your table for an unforgettable evening
                </p>
              </motion.div>

            <form className="space-y-8 relative z-10">
              {/* Personal Details */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <h4 className="font-serif text-xl text-charcoal/80 border-b border-gold/20 pb-2 mb-6">Personal Details</h4>
                <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <label className="block text-sm font-semibold text-charcoal/80 mb-3 tracking-wide">
                      FULL NAME
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full bg-white/80 backdrop-blur-sm border-2 border-gold/30 rounded-2xl px-6 py-4 pl-12 text-charcoal placeholder-charcoal/50 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg"
                        placeholder="Enter your full name"
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <User className="w-5 h-5 text-gold/60" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <label className="block text-sm font-semibold text-charcoal/80 mb-3 tracking-wide">
                      EMAIL ADDRESS
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        className="w-full bg-white/80 backdrop-blur-sm border-2 border-gold/30 rounded-2xl px-6 py-4 pl-12 text-charcoal placeholder-charcoal/50 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg"
                        placeholder="your@email.com"
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <Mail className="w-5 h-5 text-gold/60" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                </div>
              </motion.div>

              {/* Reservation Details */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h4 className="font-serif text-xl text-charcoal/80 border-b border-gold/20 pb-2 mb-6">Reservation Details</h4>
                <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <label className="block text-sm font-semibold text-charcoal/80 mb-3 tracking-wide">
                      PREFERRED DATE
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full bg-white/80 backdrop-blur-sm border-2 border-gold/30 rounded-2xl px-6 py-4 pl-12 text-charcoal focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg"
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <Calendar className="w-5 h-5 text-gold/60" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <label className="block text-sm font-semibold text-charcoal/80 mb-3 tracking-wide">
                      PREFERRED TIME
                    </label>
                    <div className="relative">
                      <select className="w-full bg-white/80 backdrop-blur-sm border-2 border-gold/30 rounded-2xl px-6 py-4 pl-12 text-charcoal focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg appearance-none">
                        <option>Select time</option>
                        <option>6:00 PM</option>
                        <option>6:30 PM</option>
                        <option>7:00 PM</option>
                        <option>7:30 PM</option>
                        <option>8:00 PM</option>
                        <option>8:30 PM</option>
                        <option>9:00 PM</option>
                      </select>
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <Clock className="w-5 h-5 text-gold/60" />
                      </div>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <ChevronDown className="w-5 h-5 text-gold/60" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <label className="block text-sm font-semibold text-charcoal/80 mb-3 tracking-wide">
                        PARTY SIZE
                      </label>
                      <div className="relative">
                        <select className="w-full bg-white/80 backdrop-blur-sm border-2 border-gold/30 rounded-2xl px-6 py-4 pl-12 text-charcoal focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg appearance-none">
                          <option>Select party size</option>
                          <option>2 Guests</option>
                          <option>3 Guests</option>
                          <option>4 Guests</option>
                          <option>5 Guests</option>
                          <option>6 Guests</option>
                          <option>7+ Guests</option>
                        </select>
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <Users className="w-5 h-5 text-gold/60" />
                        </div>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <ChevronDown className="w-5 h-5 text-gold/60" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <label className="block text-sm font-semibold text-charcoal/80 mb-3 tracking-wide">
                        OCCASION <span className="text-charcoal/50">(Optional)</span>
                      </label>
                      <div className="relative">
                        <select className="w-full bg-white/80 backdrop-blur-sm border-2 border-gold/30 rounded-2xl px-6 py-4 pl-12 text-charcoal focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg appearance-none">
                          <option>Select occasion</option>
                          <option>Anniversary</option>
                          <option>Birthday</option>
                          <option>Business Dinner</option>
                          <option>Date Night</option>
                          <option>Special Celebration</option>
                        </select>
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <Star className="w-5 h-5 text-gold/60" />
                        </div>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <ChevronDown className="w-5 h-5 text-gold/60" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Submit Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-4"
              >
                <div className="text-center space-y-6">
                  <p className="text-charcoal/60 text-sm">
                    By submitting, you agree to our reservation policies
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-burgundy via-rich-burgundy to-deep-burgundy hover:from-gold hover:via-light-gold hover:to-gold text-white hover:text-charcoal py-6 rounded-2xl font-semibold tracking-[0.2em] text-base uppercase transition-all duration-500 shadow-2xl hover:shadow-gold/25 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      <Utensils className="w-5 h-5" />
                      <span>Confirm Your Reservation</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-light-gold/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </motion.button>
                  
                  <p className="text-charcoal/50 text-xs leading-relaxed">
                    You&apos;ll receive a confirmation email within 15 minutes. For same-day reservations, please call us directly.
                  </p>
                </div>
              </motion.div>
            
            </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}