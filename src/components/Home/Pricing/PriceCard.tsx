import { motion } from 'framer-motion';
import { LucideIcon, Sparkles } from 'lucide-react';

interface PriceCardProps {
  title: string;
  price: string;
  subtitle: string;
  features: { icon: LucideIcon; text: string }[];
  addons?: { name: string; price: string }[];
  isMonthly?: boolean;
  isPopular?: boolean;
  index: number;
}

export default function PriceCard({ 
  title, 
  price, 
  isMonthly,
  subtitle,
  features, 
  addons,
  isPopular = false, 
  index 
}: PriceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative bg-white rounded-2xl shadow-sm ${
        isPopular 
          ? 'border-2 border-emerald-200 ring-2 ring-emerald-600 ring-opacity-20' 
          : 'border border-gray-100'
      } p-8`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            Most Popular
          </motion.div>
        </div>
      )}
      
      <div className={`text-center p-4 -mx-4 rounded-xl mb-6 ${isPopular ? 'bg-emerald-50' : 'bg-gray-50'}`}>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <div className="flex items-center justify-center gap-1">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {isMonthly && <span className="text-gray-600">/month</span>}
        </div>
        <p className="text-sm text-gray-600 mt-2">{subtitle}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center text-gray-600"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 flex-shrink-0">
              <feature.icon className="w-4 h-4 text-emerald-600" />
            </div>
            <span>{feature.text}</span>
          </motion.li>
        ))}
      </ul>

      {addons && addons.length > 0 && (
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Available Add-ons:</h4>
          <ul className="space-y-2">
            {addons.map((addon, index) => (
              <li key={index} className="text-sm text-gray-600">
                {addon.name}: <span className="font-medium text-gray-900">+{addon.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 text-center block ${
          isPopular
            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-500/20'
            : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
        }`}
      >
        Get Started
      </motion.a>
    </motion.div>
  );
}