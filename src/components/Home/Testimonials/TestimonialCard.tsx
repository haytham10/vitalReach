import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
  rating: number;
  index: number;
}

export function TestimonialCard({ quote, author, role, image, rating, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
    >
      <Quote className="absolute text-emerald-100 w-16 h-16 -top-6 -left-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
      
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      <p className="text-gray-700 text-lg italic mb-6 relative z-10">
        {quote}
      </p>

      <div className="flex items-center">
        <div className="relative">
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4 ring-4 ring-emerald-50 transition-all duration-300 group-hover:ring-emerald-100"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-emerald-600 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}