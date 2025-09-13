'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SignatureDishesSection() {
  const dishes = [
    { 
      name: "Wagyu Tenderloin", 
      description: "Dry-aged perfection with truffle reduction, served with roasted seasonal vegetables",
      price: "$85"
    },
    { 
      name: "Lobster Thermidor", 
      description: "Fresh Maine lobster in cognac cream sauce with gruyère cheese gratin",
      price: "$72"
    },
    { 
      name: "Seared Foie Gras", 
      description: "Pan-seared with cherry gastrique and brioche croutons",
      price: "$48"
    },
    { 
      name: "Duck Confit", 
      description: "24-hour slow-cooked leg with orange glaze and pommes sarladaises",
      price: "$58"
    },
    { 
      name: "Chocolate Soufflé", 
      description: "Dark Belgian chocolate with gold leaf and vanilla bean ice cream",
      price: "$24"
    },
    { 
      name: "Beef Wellington", 
      description: "Premium beef tenderloin wrapped in puff pastry with mushroom duxelles",
      price: "$68"
    }
  ];

  const getDishImage = (index) => {
    const dishImages = [
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3', // Wagyu
      'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3', // Lobster  
      'https://images.unsplash.com/photo-1726947226182-3d12f314d2cc?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Foie Gras - Fixed
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3', // Duck
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3', // Chocolate
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3'  // Beef Wellington
    ];
    return dishImages[index];
  };

  return (
    <section id="menu" className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-charcoal via-background to-charcoal">
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
            <div className="w-12 h-px bg-gold" />
            <span className="text-sm tracking-[0.3em] uppercase text-gold font-medium">Menu</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-cream leading-tight">
            Signature Dishes
          </h2>
          <p className="text-xl text-off-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            Curated selections from our master chef, each dish a testament to culinary artistry and passion for exceptional dining experiences
          </p>
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Dish Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="aspect-[4/3]">
                  <Image
                    src={getDishImage(index)}
                    alt={dish.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-burgundy text-cream px-3 py-1 rounded-full">
                  <span className="text-sm font-light">{dish.price}</span>
                </div>
              </div>

              {/* Dish Info */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-light text-accent-gold group-hover:text-light-gold transition-colors duration-300 tracking-wide">
                  {dish.name}
                </h3>
                <p className="text-off-white/80 leading-relaxed font-light">
                  {dish.description}
                </p>
                
                {/* Order Button */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-transparent border border-gold/30 hover:border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 py-3 px-6 rounded enhanced-shadow hover:shadow-lg"
                >
                  <span className="text-sm tracking-wider uppercase font-light">Add to Order</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#menu" className="group relative bg-transparent border-2 border-gold hover:bg-gold text-gold hover:text-charcoal px-8 py-3 transition-all duration-500 overflow-hidden inline-block">
            <span className="relative z-10 font-light tracking-[0.2em] text-sm uppercase">
              View Full Menu
            </span>
            <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}