"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Dumbbell, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Membership", href: "#membership" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const WHATSAPP_LINK = "https://wa.me/917015301877";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-orange p-2 rounded-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(255,102,0,0.3)]">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white italic">
              POWER <span className="text-orange">LAB</span>
            </span>
            <span className="text-[8px] md:text-[9px] tracking-[0.4em] font-black text-white/40 uppercase">Fitness Unisex Gym</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-orange transition-all duration-300 relative group/link"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover/link:w-full" />
            </Link>
          ))}
          <div className="h-6 w-px bg-white/10 mx-2" />
          <a href="tel:+917015301877" className="flex items-center gap-3 text-white/90 hover:text-orange transition-all duration-300 group/phone">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/phone:bg-orange/20 transition-colors">
              <Phone className="w-4 h-4 text-orange" />
            </div>
            <span className="text-sm font-black tracking-tight">7015301877</span>
          </a>
          <Button asChild className="bg-orange hover:bg-orange/90 text-white font-black rounded-none px-8 h-12 tracking-tight transition-transform hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,102,0,0.2)]">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">JOIN NOW</a>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center gap-2">
           <a href="tel:+917015301877" className="text-orange p-3 hover:bg-white/5 rounded-full transition-colors">
            <Phone className="w-5 h-5" />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/5 h-12 w-12">
                <Menu className="w-8 h-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-white/5 p-0 w-full sm:w-[400px]">
              <div className="flex flex-col h-full pt-24 px-10 gap-8">
                <div className="flex flex-col -space-y-1 mb-10">
                  <span className="text-4xl font-black tracking-tighter text-white italic">
                    POWER <span className="text-orange">LAB</span>
                  </span>
                  <span className="text-xs tracking-[0.5em] font-black text-white/30 uppercase">Fitness Unisex Gym</span>
                </div>
                
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <Link
                      href={link.href}
                      className="text-3xl font-black uppercase tracking-tighter text-white/80 hover:text-orange transition-all duration-300 flex items-center justify-between group"
                    >
                      {link.name}
                      <Dumbbell className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-orange" />
                    </Link>
                  </SheetClose>
                ))}

                <div className="mt-auto mb-16 space-y-6">
                  <p className="text-white/20 text-xs font-black uppercase tracking-[0.4em]">Get In Touch</p>
                  <a href="tel:7015301877" className="text-2xl font-black text-white block">7015301877</a>
                  <Button asChild size="lg" className="w-full bg-orange hover:bg-orange/90 text-white font-black h-16 text-xl rounded-none shadow-2xl">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">WHATSAPP US</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
