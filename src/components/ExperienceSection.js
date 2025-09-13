'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function ExperienceSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const experiences = [
    {
      title: "Intimate Ambiance",
      description: "Candlelit tables, soft jazz, and carefully curated lighting create the perfect atmosphere for memorable evenings.",
      icon: "🕯️"
    },
    {
      title: "Exceptional Service",
      description: "Our trained sommelier and attentive staff ensure every moment of your dining experience is flawless.",
      icon: "👨‍🍳"
    },
    {
      title: "Artisan Cuisine",
      description: "Each dish is crafted with locally sourced ingredients and innovative techniques passed down through generations.",
      icon: "🍽️"
    }
  ];

  return (
    <section id="experience" className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-burgundy via-deep-burgundy to-rich-burgundy">
      {/* Parallax Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gold/15 rounded-full blur-2xl" />
      </motion.div>
      
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24 lg:mb-32"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-sm tracking-[0.3em] uppercase text-gold font-medium">Experience</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light mb-8 text-white leading-tight">
            The Savora
            <span className="block text-gold">Experience</span>
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-cream/90 max-w-4xl mx-auto">
            Immerse yourself in an atmosphere where every detail has been carefully considered. 
            From our hand-selected wine collection to the gentle flicker of candlelight, 
            every element conspires to create an evening of pure enchantment.
          </p>
        </motion.div>

        {/* Experience Features */}
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-20 mb-24 lg:mb-32">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Icon */}
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-24 h-24 mx-auto mb-8 bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-full flex items-center justify-center transition-all duration-300 glass-effect animate-float"
              >
                <span className="text-3xl">{experience.icon}</span>
              </motion.div>
              
              {/* Content */}
              <h3 className="font-serif text-2xl md:text-3xl font-light text-accent-gold mb-6 tracking-wide">
                {experience.title}
              </h3>
              <p className="text-cream/85 leading-relaxed text-lg font-light">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          
        >
          {[
            {title: 'Restaurant Interior', src: 'https://images.unsplash.com/photo-1530695801911-f188c516550a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}, 
            {title: 'Wine Collection', src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3'}, 
            {title: 'Chef at Work', src: 'https://images.unsplash.com/photo-1719329466283-aa020a658011?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          ].map((item, index) => (
            <div key={item.title} className="relative group cursor-pointer">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 hover:brightness-105"
                />
              </div>
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-gold text-sm tracking-widest uppercase">View Gallery</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}