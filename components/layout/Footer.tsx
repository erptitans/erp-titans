import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-bg pt-20 pb-10 border-t border-gray-100" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1 */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="ERP Titans"
                width={140}
                height={70}
                className="h-[55px] md:h-[70px] w-auto object-contain"
              />
            </Link>
            <p className="text-brand-text-muted text-sm leading-relaxed">
              Helping global SMEs recover from failed ERP implementations and unlock true business potential through expert optimization and recovery services.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-brand-text mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-brand-text-muted hover:text-brand-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-brand-text-muted hover:text-brand-primary transition-colors text-sm">Services</Link></li>
              <li><Link href="/about" className="text-brand-text-muted hover:text-brand-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-brand-text-muted hover:text-brand-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-brand-text mb-6">Industries</h4>
            <ul className="space-y-4">
              <li><Link href="/industries/manufacturing" className="text-brand-text-muted hover:text-brand-primary transition-colors text-sm">Manufacturing Solutions</Link></li>
              <li><Link href="/industries/distribution" className="text-brand-text-muted hover:text-brand-primary transition-colors text-sm">Distribution & Logistics</Link></li>
              <li><Link href="/industries/cannabis" className="text-brand-text-muted hover:text-brand-primary transition-colors text-sm">Cannabis</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold text-brand-text mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <span className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Email Support</span>
                <a href="mailto:sales@erptitans.com" className="text-brand-text hover:text-brand-primary transition-colors text-sm font-medium">sales@erptitans.com</a>
              </li>
              <li>
                <span className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Location</span>
                <span className="text-brand-text-muted text-sm">Canada<br />(Serving Globally)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-text-muted text-sm text-center md:text-left">
            &copy; 2026 ERP Titans. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-[#003D82] hover:text-[#003D82]/80 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-[#003D82] hover:text-[#003D82]/80 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
