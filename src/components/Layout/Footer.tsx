import { Mail, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">VitalReach</h3>
            <p className="text-gray-400">
              Empowering wellness practitioners with beautiful websites and digital solutions.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-400" />
                <a href="mailto:haytham.mkt@gmail.com" className="hover:text-white transition">haytham.mkt@gmail.com</a>
              </li>
            </ul>
            <h4 className="text-white text-sm font-semibold mt-6 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} VitalReach Web Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;