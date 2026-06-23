import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footerpart() {
  return (
    <footer className="bg-[#0B2341] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-[#D4AF37]">YAMA</h2>
              <p className="text-lg font-medium">CONSTRUCTION</p>
            </div>

            <p className="max-w-xs text-slate-300 leading-8">
              Building the future with quality, integrity, and excellence.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#D4AF37] hover:text-[#0B2341]"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#D4AF37] hover:text-[#0B2341]"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#D4AF37] hover:text-[#0B2341]"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#D4AF37] hover:text-[#0B2341]"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Quick Links</h3>

            <ul className="space-y-4 text-slate-300">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Our Services</h3>

            <ul className="space-y-4 text-slate-300">
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Renovation & Remodeling</li>
              <li>Project Management</li>
              <li>Turnkey Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Contact Info</h3>

            <div className="space-y-6 text-slate-300">
              <div className="flex gap-4">
                <MapPin
                  className="mt-1 shrink-0 text-[#D4AF37]"
                  size={20}
                />
                <p>
                  Kolhapur, Maharashtra,
                  <br />
                  India
                </p>
              </div>

              <div className="flex gap-4">
                <Phone
                  className="shrink-0 text-[#D4AF37]"
                  size={20}
                />
                <p>+91 XXXXX XXXXX</p>
              </div>

              <div className="flex gap-4">
                <Mail
                  className="shrink-0 text-[#D4AF37]"
                  size={20}
                />
                <p>info@yamaconstruction.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Copyright */}
        <div className="text-center text-slate-400">
          © {new Date().getFullYear()} Yama Construction.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footerpart;