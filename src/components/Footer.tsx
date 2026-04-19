"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { company, navigation, socialLinks } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SL</span>
              </div>
              <span className="text-xl font-bold text-white">Simon Loos</span>
            </div>
            <p className="text-gray-400 mb-6">
              {company.tagline}. Dé logistiek dienstverlener van Nederland sinds 1938.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500/20 transition-all"
                  aria-label={social.name}
                >
                  {social.name === "LinkedIn" && <span className="text-sm font-bold">in</span>}
                  {social.name === "Twitter" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  )}
                  {social.name === "Facebook" && <span className="text-sm font-bold">f</span>}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-6">Snelle links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-6">Diensten</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Transport</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Warehousing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Co-packing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Consultancy</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Simon Loosweg 1<br />
                  1234 AB Hoorn<br />
                  Nederland
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-cyan-400 flex-shrink-0" />
                <a href={`tel:${company.phone}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {company.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {company.name}. Alle rechten voorbehouden.
          </p>
          <p className="text-gray-500 text-sm">
            Vakmanschap geladen met trots
          </p>
        </div>
      </div>
    </footer>
  );
}
