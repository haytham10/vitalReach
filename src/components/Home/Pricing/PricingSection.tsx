import PriceCard from './PriceCard'
import { motion } from 'framer-motion'

function PricingSection() {
  return (
	<section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="text-center mb-20"
				>
				<motion.span
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 font-semibold tracking-wider uppercase text-base mb-6"
				>
					Pricing
				</motion.span>
				
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
				title: "Essential",
				price: "$499",
				subtitle: "Perfect for practitioners just starting their digital journey",
				features: [
				  "Custom-designed responsive website",
				  "Local SEO optimization",
				  "Monthly content updates",
				  "24/5 email support",
				  "SSL security & mobile optimization",
				  "Basic analytics dashboard",
				  "Social media integration",
				  "Contact form"
				]
			  },
			  {
				title: "Professional",
				price: "$899",
				subtitle: "For established practices ready to expand their reach",
				isPopular: true,
				features: [
				  "Everything in Essential",
				  "Advanced SEO strategy",
				  "Blog content creation (2/month)",
				  "Email marketing setup",
				  "Priority support response",
				  "Advanced analytics & reporting",
				  "Online booking system",
				  "Patient portal integration"
				]
			  },
			  {
				title: "Premium",
				price: "$1,499",
				subtitle: "Comprehensive solution for multi-provider practices",
				features: [
				  "Everything in Professional",
				  "Custom website features & integrations",
				  "Weekly content updates",
				  "Marketing automation setup",
				  "24/7 priority support",
				  "Custom reporting dashboard",
				  "Virtual consultation system",
				  "Multi-location SEO optimization"
				]
			  }
            ].map((pricing, index) => (
              <PriceCard key={index} {...pricing} index={index} />
            ))}
          </div>
        </div>
    </section>
  )
}

export default PricingSection