import { motion } from 'framer-motion';
import PriceCard from './PriceCard';
import { 
  Globe, 
  Shield, 
  MessageSquare, 
  BarChart, 
  Calendar, 
  Users, 
  Settings, 
  Search,
  Mail,
  Clock,
  Database,
  Zap
} from 'lucide-react';

export default function PricingSection() {
  const pricingPlans = [
    {
      title: "Project Package",
      price: "$1,099",
      subtitle: "One-time payment + $50/mo hosting",
      features: [
        { 
          icon: Globe,
          text: "Website Design & Development"
        },
        {
          icon: Shield,
          text: "SSL security certificate included"
        },
        {
          icon: MessageSquare,
          text: "Up to 5 pages with contact forms"
        },
        {
          icon: Clock,
          text: "24/5 email support"
        }
      ],
      addons: [
        { name: "Additional pages", price: "$100/each" },
        { name: "Blog setup", price: "$250" },
        { name: "Unlimited edits", price: "$50/month" }
      ]
    },
    {
      title: "Monthly Subscription",
      price: "$249",
      isMonthly: true,
      subtitle: "All-inclusive growth package",
      features: [
        {
          icon: Globe,
          text: "Website Design & Development"
        },
        {
          icon: Settings,
          text: "Hosting & Domain management"
        },
        {
          icon: Search,
          text: "On-Page SEO optimization"
        },
        {
          icon: Mail,
          text: "Social Media integration"
        },
        {
          icon: BarChart,
          text: "Monthly Performance Reports"
        },
        {
          icon: Clock,
          text: "24/7 Priority Support"
        }
      ],
	  addons: [
        { name: "Additional pages", price: "$100/each" },
        { name: "Blog setup", price: "$250" },
        { name: "Unlimited edits", price: "$50/month" }
      ],
      isPopular: true
    },
    {
      title: "Custom E-commerce",
      price: "$8,000",
      subtitle: "Full-featured online store",
      features: [
        {
          icon: Database,
          text: "Shopify or WooCommerce setup"
        },
        {
          icon: Settings,
          text: "Custom design & development"
        },
        {
          icon: Users,
          text: "Multi-user administration"
        },
        {
          icon: Zap,
          text: "Payment gateway integration"
        },
        {
          icon: Calendar,
          text: "Tutorial & CMS training session"
        }
      ],
      addons: [
        { name: "Monthly edits", price: "$50/month" },
        { name: "24/7 support", price: "Custom quote" }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 font-semibold tracking-wider uppercase text-base mb-6">
            Pricing
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Invest in Your Practice's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Digital Growth
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Customized digital solutions that scale with your practice's success.{' '} 
            <span className="text-gray-900 font-semibold">No hidden fees, just results.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((pricing, index) => (
            <PriceCard 
              key={index} 
              {...pricing} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}