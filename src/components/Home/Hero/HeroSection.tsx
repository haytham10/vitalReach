import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Users, Trophy } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-8 relative overflow-hidden bg-gradient-to-br from-white via-emerald-50/50 to-teal-100/50">
      {/* Enhanced grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMzRkMzk5IiBzdHJva2Utb3BhY2l0eT0iLjIiLz48L2c+PC9zdmc+')] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 mb-8 shadow-sm"
            >
              <Shield className="w-4 h-4 mr-2 text-emerald-600" />
              <span className="text-sm font-medium">Trusted by 500+ Wellness Practitioners</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6"
            >
              Transform Your 
              <span className="relative mx-3 whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">
                  Wellness Practice
                </span>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C3 9 40 3 150 3C260 3 297 9 297 9"
                    stroke="#10B981"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
              Online
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
            >
              Expert web design and digital solutions crafted specifically for holistic health providers. Grow your practice with a powerful online presence.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6 mb-10"
            >
              {[
                { icon: Trophy, text: "Industry Leading Design" },
                { icon: Users, text: "98% Client Satisfaction" },
                { icon: Shield, text: "HIPAA Compliant" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <item.icon className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl text-lg font-medium shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 rounded-xl text-lg font-medium border-2 border-emerald-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-300"
              >
                View Services
                <Sparkles className="w-5 h-5 ml-2" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Featured Image & Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-visible shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=2400&q=80"
                alt="Modern wellness workspace"
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-xl p-4 shadow-lg border border-emerald-100 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-8 -right-8 bg-white rounded-xl p-4 shadow-lg border border-emerald-100 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">#1</div>
                    <div className="text-sm text-gray-600">In Wellness Web Design</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Client Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-100"
            >
              <div className="text-sm text-gray-500 text-center mb-4">Trusted by leading wellness brands</div>
              <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
                {[...Array(3)].map((_, i) => (
				  <img
					key={i}
					src={`/sponsors/${i + 1}.png`}
					alt={`Logo ${i + 1}`}
					className="h-12 w-fit filter grayscale hover:grayscale-0 transition-all duration-300"
				  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}