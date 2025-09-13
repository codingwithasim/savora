'use client';

import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "Food Critic, NY Times",
      quote: "An extraordinary culinary journey that exceeded every expectation. The attention to detail and flavor combinations are simply sublime.",
      rating: 5,
      image: "SM"
    },
    {
      name: "James Rodriguez",
      title: "Michelin Guide Inspector",
      quote: "The perfect blend of innovation and tradition. Chef Marie's vision creates an unforgettable dining experience that deserves recognition.",
      rating: 5,
      image: "JR"
    },
    {
      name: "Emily Chen",
      title: "Celebrity Chef",
      quote: "Every course was a masterpiece. The technical execution paired with creative presentation sets Savora apart from any fine dining establishment.",
      rating: 5,
      image: "EC"
    }
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-cream via-warm-cream to-off-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24 lg:mb-32"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-burgundy" />
            <span className="text-sm tracking-[0.3em] uppercase text-burgundy font-medium">Testimonials</span>
            <div className="w-12 h-px bg-burgundy" />
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-charcoal leading-tight tracking-tight drop-shadow-sm">
            Guest Experiences
          </h2>
          <p className="text-xl text-charcoal/85 max-w-3xl mx-auto leading-relaxed font-light">
            Discover what culinary experts and discerning diners say about their memorable evenings at Savora
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 mb-20 lg:mb-24 items-stretch">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-8 md:p-10 rounded-xl enhanced-shadow hover:shadow-2xl transition-all duration-300 relative group h-full flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-burgundy rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-cream" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,17H17L19,13V7H13V13H16L14,17M6,17H9L11,13V7H5V13H8L6,17Z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg leading-relaxed mb-8 text-charcoal/85 italic flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center mt-auto">
                {/* Avatar */}
                <div className="w-12 h-12 bg-burgundy text-cream rounded-full flex items-center justify-center mr-4">
                  <span className="font-medium text-sm">{testimonial.image}</span>
                </div>
                
                {/* Name and Title */}
                <div>
                  <p className="font-serif text-lg font-medium text-charcoal tracking-wide">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-rich-burgundy/80 tracking-wide font-medium">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="grid md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { award: "Michelin Guide", status: "⭐⭐⭐" },
              { award: "James Beard Award", status: "Winner 2023" },
              { award: "Wine Spectator", status: "Best of Award" },
              { award: "Travel + Leisure", status: "Top 50 Restaurants" }
            ].map((recognition, index) => (
              <motion.div
                key={recognition.award}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm"
              >
                <div className="font-serif text-lg font-light text-charcoal mb-2">
                  {recognition.award}
                </div>
                <div className="text-burgundy text-sm font-medium">
                  {recognition.status}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}