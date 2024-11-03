import { motion } from 'framer-motion';

interface ServiceCardProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  category: string;
  highlight?: string;
  index: number;
}

export default function ServiceCard({ Icon, title, description, category, highlight, index }: ServiceCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white p-8 rounded-3xl shadow-lg border border-emerald-50 hover:border-emerald-200 transition-all duration-300 backdrop-blur-sm bg-white/90"
    >
      {highlight && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg"
        >
          {highlight}
        </motion.span>
      )}
      
      <motion.div
        whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-20 h-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:from-emerald-100 group-hover:to-teal-100 transition-all duration-300"
      >
        <Icon className="w-10 h-10 text-emerald-600" />
      </motion.div>

      <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-full mb-4">
        {category}
      </span>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-emerald-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl" />
    </motion.div>
  );
}