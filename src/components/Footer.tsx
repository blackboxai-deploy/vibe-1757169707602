import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BI</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Business</span>
                <span className="text-xl font-bold text-blue-400">Intel</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              The leading platform connecting chemical suppliers, traders, and logistics providers worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                <span className="text-xs">L</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                <span className="text-xs">T</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                <span className="text-xs">F</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/suppliers" className="text-sm hover:text-blue-400 transition-colors">
                  Suppliers & Traders
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm hover:text-blue-400 transition-colors">
                  News & Reports
                </Link>
              </li>
              <li>
                <Link href="/trade" className="text-sm hover:text-blue-400 transition-colors">
                  Trade & Logistics
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm hover:text-blue-400 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Industry Resources */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/market-reports" className="text-sm hover:text-blue-400 transition-colors">
                  Market Reports
                </Link>
              </li>
              <li>
                <Link href="/regulatory-updates" className="text-sm hover:text-blue-400 transition-colors">
                  Regulatory Updates
                </Link>
              </li>
              <li>
                <Link href="/price-index" className="text-sm hover:text-blue-400 transition-colors">
                  Chemical Price Index
                </Link>
              </li>
              <li>
                <Link href="/industry-events" className="text-sm hover:text-blue-400 transition-colors">
                  Industry Events
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-sm hover:text-blue-400 transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-sm hover:text-blue-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-sm hover:text-blue-400 transition-colors">
                  API Access
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-sm hover:text-blue-400 transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-white font-medium mb-2">Contact Info</h4>
              <p className="text-sm text-gray-400">
                Email: info@businessintel.com
              </p>
              <p className="text-sm text-gray-400">
                Phone: +1-800-CHEM-INTEL
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-400">
              <span>&copy; 2024 BusinessIntel. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-blue-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            
            <div className="text-sm text-gray-400 mt-4 md:mt-0">
              Serving the global chemical industry since 2020
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}