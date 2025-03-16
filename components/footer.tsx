import Link from "next/link"
import { Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">SS Catering</h3>
            <p className="text-gray-400 mb-4">Deliciously Crafted | Expertly Served – Best Catering in Coimbatore</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/ss_catering_and_events?igsh=OW5iNzlzN2MzaTNi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="mailto:younghands55@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="tel:+918667566318" className="text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
                <span className="sr-only">Phone</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-gray-400 hover:text-white transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Wedding Catering</li>
              <li className="text-gray-400">Corporate Events</li>
              <li className="text-gray-400">Birthday Parties</li>
              <li className="text-gray-400">Family Functions</li>
              <li className="text-gray-400">Outdoor Catering</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-primary mr-2 mt-1" />
                <span className="text-gray-400">+91 86675 66318</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-primary mr-2 mt-1" />
                <span className="text-gray-400">younghands55@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary mr-2 mt-1"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0z" />
                </svg>
                <span className="text-gray-400">
                  7, Selvanayaki Garden, Siruvani Main Road, Pooluvapatti, Coimbatore, Tamil Nadu
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">&copy; {currentYear} SS Catering and Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

