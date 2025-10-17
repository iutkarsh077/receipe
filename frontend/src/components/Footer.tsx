import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Disclaimer */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-emerald-400">Calorie.org</h2>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-200">Disclaimer:</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                All calorie counts, nutrient estimates, and portion sizes shown on this website are generated using
                artificial intelligence and are intended solely for fun and educational purposes. Accuracy is not
                guaranteed, and the information should not be used as a substitute for professional medical,
                nutritional, or dietary advice. Always consult a qualified healthcare provider before making changes to
                your diet or lifestyle.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Meal Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <a
                href="mailto:info@calorieconscious.com"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                info@calorie.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-slate-800 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button className="w-full bg-emerald-400 hover:bg-emerald-500 text-slate-900 font-semibold py-2 px-4 rounded-lg transition-colors">
                Subscribe
              </button>
              <p className="text-xs text-gray-400">
                Subscribe to our newsletter for the latest updates and nutrition tips.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-sm text-gray-400">© 2025 calorie.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
