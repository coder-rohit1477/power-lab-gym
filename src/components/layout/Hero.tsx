import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917015301877";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden bg-black">
      {/* Background Image with Enhanced Focus */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/gym1.png"
          alt="Power Lab Gym Interior"
          fill
          className="object-cover object-center opacity-60 grayscale-[0.3] contrast-[1.1] scale-105 transition-transform duration-[10s] hover:scale-110"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl space-y-12">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-2">
              <span className="text-orange font-black tracking-[0.4em] uppercase text-xs md:text-sm block mb-4 border-l-4 border-orange pl-4">
                Sohna's Elite Performance Lab
              </span>
              <h1 className="text-6xl md:text-9xl lg:text-[12rem] font-black leading-[0.8] tracking-tighter text-white uppercase italic drop-shadow-2xl">
                POWER <br />
                <span className="text-transparent stroke-text">LAB</span>
              </h1>
            </div>
          </div>

          <p className="text-lg md:text-2xl text-white/80 max-w-2xl font-bold leading-relaxed animate-in fade-in slide-in-from-left duration-1000 delay-300">
            Transformation starts here. Experience elite training with state-of-the-art equipment, 
            expert coaches, and a community built on raw strength.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <Button asChild size="lg" className="w-full sm:w-auto bg-orange hover:bg-orange/90 text-white font-black text-xl h-18 px-14 rounded-none transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,102,0,0.3)]">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">JOIN THE LAB</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white/20 text-white hover:bg-white hover:text-black font-black text-xl h-18 px-14 rounded-none transition-all group backdrop-blur-sm shadow-xl">
              <a href="#services">
                EXPLORE SERVICES
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Info Strip */}
      <div className="absolute left-10 bottom-12 hidden xl:block animate-in fade-in duration-1000 delay-700">
        <div className="flex items-center gap-12">
          <div className="space-y-2">
            <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.3em]">Official Location</p>
            <p className="text-white font-black text-sm tracking-tight">SOHNA, HARYANA</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="space-y-2">
            <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.3em]">Direct Support</p>
            <p className="text-white font-black text-sm tracking-tight">+91 7015301877</p>
          </div>
        </div>
      </div>

      {/* Aesthetic Atmosphere Particles/Glow */}
      <div className="absolute -bottom-48 -left-48 w-[800px] h-[800px] bg-orange/10 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-electric-blue/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
