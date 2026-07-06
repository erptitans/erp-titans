"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopIndustriesOpen, setDesktopIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { 
      name: "Industries", 
      href: "/industries",
      dropdown: [
        { name: "Manufacturing", href: "/industries/manufacturing" },
        { name: "Distribution & Logistics", href: "/industries/distribution" },
        { name: "Cannabis Compliance", href: "/industries/cannabis" },
      ]
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed z-50 pointer-events-auto transition-all duration-300 ease-in-out inset-x-0 mx-auto ${
          isScrolled
            ? "top-4 w-[90%] max-w-[1360px] max-w-full rounded-[30px] bg-white/95 backdrop-blur-xl shadow-xl border border-white/60 py-3"
            : "top-0 w-full rounded-none bg-transparent shadow-none border-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="ERP Titans"
                width={180}
                height={42}
                className="h-[36px] md:h-[42px] w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/"));
              
              if (link.dropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative py-1.5"
                    onMouseEnter={() => setDesktopIndustriesOpen(true)}
                    onMouseLeave={() => setDesktopIndustriesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 relative text-sm transition-colors ${
                        isActive
                          ? "text-[#003D82] font-semibold"
                          : "text-[#475569] font-medium hover:text-[#003D82]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${desktopIndustriesOpen ? 'rotate-180' : ''}`} />
                      {isActive && (
                        <motion.div
                          layoutId="desktop-navbar-underline"
                          className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#003D82] rounded-full"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {desktopIndustriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[300px] max-w-full"
                        >
                          <div className="bg-white rounded-[24px] p-6 shadow-xl border border-gray-100 flex flex-col gap-2">
                            {link.dropdown.map((sublink) => (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                className="block px-4 py-3 rounded-xl hover:bg-[#003D82] text-[#475569] hover:text-white font-medium transition-all duration-200 hover:translate-x-1"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm transition-colors py-1.5 ${
                    isActive
                      ? "text-[#003D82] font-semibold"
                      : "text-[#475569] font-medium hover:text-[#003D82]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="desktop-navbar-underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#003D82] rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="rounded-full bg-[#003D82] px-6 py-2.5 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#003D82]"
            >
              Book Free Audit
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F172A] focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full w-full px-6 pt-3 pointer-events-auto"
            >
              <div className="flex flex-col space-y-2 rounded-3xl border border-gray-200 bg-white/95 p-4 shadow-2xl backdrop-blur-2xl">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/"));
                  
                  if (link.dropdown) {
                    return (
                      <div key={link.name} className="flex flex-col">
                        <button
                          onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                          className={`relative rounded-xl px-4 py-3 transition-colors flex items-center justify-between ${
                            isActive
                              ? "bg-[#003D82] text-white font-semibold"
                              : "font-medium text-[#475569] hover:bg-gray-50 hover:text-[#003D82]"
                          }`}
                        >
                          <span className="flex items-center">{link.name}</span>
                          <ChevronDown size={18} className={`transition-transform duration-300 ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                          {isActive && (
                            <motion.div
                              layoutId="mobile-navbar-indicator"
                              className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-[3px] bg-[#003D82] rounded-r-full"
                              transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {mobileIndustriesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col pl-4 pr-2 py-2 space-y-1">
                                {link.dropdown.map((sublink) => (
                                  <Link
                                    key={sublink.name}
                                    href={sublink.href}
                                    className="block px-4 py-3 rounded-xl hover:bg-[#003D82] text-[#475569] hover:text-white font-medium transition-all duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {sublink.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`relative rounded-xl px-4 py-3 transition-colors flex items-center ${
                        isActive
                          ? "bg-[#003D82] text-white font-semibold"
                          : "font-medium text-[#475569] hover:bg-gray-50 hover:text-[#003D82]"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="mobile-navbar-indicator"
                          className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-[3px] bg-[#003D82] rounded-r-full"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
                <div className="mt-2 border-t border-gray-100 pt-4">
                  <Link
                    href="/contact"
                    className="block w-full rounded-full bg-[#003D82] px-4 py-3 text-center font-medium text-white shadow-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Free Audit
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
