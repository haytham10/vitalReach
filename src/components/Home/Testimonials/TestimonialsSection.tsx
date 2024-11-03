import { motion } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "VitalReach didn't just build my website—they helped me connect with clients who value my approach to wellness. My online presence has never been stronger.",
      author: "Sarah L.",
      role: "Holistic Nutritionist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
      rating: 5
    },
    {
      quote: "Since working with VitalReach, my practice has seen a 200% increase in new client inquiries. Their understanding of the wellness industry makes all the difference.",
      author: "Michael R.",
      role: "Acupuncturist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative background */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        animate={{
          backgroundPosition: ['0px 0px', '100px 100px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Wellness Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped practitioners like you transform their online presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}