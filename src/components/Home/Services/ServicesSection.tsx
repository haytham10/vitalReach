import { motion } from 'framer-motion';
import { Globe, Sparkles, PenTool, Wrench, Users, BarChart } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useState } from 'react';

export default function ServicesSection() {
	const [activeCategory, setActiveCategory] = useState<string>('all');
  
	const categories = ['all', 'Design', 'Marketing', 'Support'];
  
  const services = [
    {
      Icon: Globe,
      title: "Customized Web Design",
      description: "Create a professional, inviting website that reflects your unique wellness brand and connects with your ideal clients.",
	  category: "Design",
	  highlight: "Featured"
	},
	{
	  Icon: Sparkles,
	  title: "SEO Optimization",
	  description: "Boost your online visibility and attract more clients with advanced search engine optimization strategies.",
	  category: "Marketing"
	},
	{
	  Icon: PenTool,
	  title: "Content Creation",
	  description: "Engage your audience with high-quality, relevant content that showcases your expertise and builds trust.",
	  category: "Marketing"
	},
	{
	  Icon: Wrench,
	  title: "Technical Support",
	  description: "Ensure your website runs smoothly with ongoing maintenance, updates, and reliable customer support.",
	  category: "Support"
	},
	{
	  Icon: Users,
	  title: "Social Media Management",
	  description: "Grow your online presence and engage with your community through strategic social media campaigns.",
	  category: "Marketing"
	},
	{
	  Icon: BarChart,
	  title: "Analytics & Reporting",
	  description: "Track your website performance, monitor user behavior, and make data-driven decisions to optimize your online presence.",
	  category: "Marketing"
	}
  ];

  const filteredServices = activeCategory === 'all' 
  ? services 
  : services.filter(service => service.category === activeCategory);

  return (
    <section id='services' className="relative py-24 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Animated background pattern */}
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
          className="text-center mb-20"
        >
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Empowering wellness practitioners with the digital tools they need to thrive
          </p>
          
          {/* Category filter */}
          <div className="flex justify-center gap-4 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredServices.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}