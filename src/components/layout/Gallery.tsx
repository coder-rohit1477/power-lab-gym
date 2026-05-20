import React from "react";
import Image from "next/image";

export function Gallery() {
  return (
    <section id="gallery" className="py-32 md:py-56 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Branding & Stat Bar - Professional Alignment */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-32 border-y border-white/5 py-12 gap-12 group/strip">
          <div className="flex items-center gap-10">
            <div className="relative w-20 h-20 md:w-24 md:h-24 grayscale group-hover/strip:grayscale-0 transition-all duration-1000 flex-shrink-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <Image 
                src="/Images/logo.png" 
                alt="Power Lab Official Logo" 
                fill 
                className="object-contain scale-90 group-hover/strip:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="h-16 w-px bg-white/10 hidden md:block" />
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-white font-black text-3xl md:text-4xl italic tracking-tighter uppercase leading-none mb-3">
                Elite Performance <span className="text-orange">Center</span>
              </h3>
              <p className="text-white/40 text-[10px] md:text-xs font-black uppercase tracking-[0.6em] leading-none">
                Sohna's Premium Facility
              </p>
            </div>
          </div>
          <div className="flex gap-12 md:gap-20">
            {[
              { label: "Founded", val: "2020" },
              { label: "Community", val: "500+" },
              { label: "Status", val: "Elite" }
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-right flex flex-col justify-center group/stat">
                <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] mb-3 group-hover/stat:text-orange transition-colors">{stat.label}</p>
                <p className="text-white font-black text-2xl md:text-3xl italic tracking-tighter leading-none">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header - Scaling for Impact */}
        <div className="max-w-4xl mb-24 space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <span className="text-orange font-black tracking-[0.5em] uppercase text-[10px] md:text-xs flex items-center gap-5">
            <span className="w-16 h-[2px] bg-orange" />
            PURE STRENGTH. NO FILTERS.
          </span>
          <h2 className="text-7xl md:text-[10rem] font-black italic text-white uppercase tracking-tighter leading-[0.8] drop-shadow-2xl">
            THE <br /><span className="text-orange">LAB VIEW</span>
          </h2>
        </div>

        {/* Single Featured Photo - Ultra Sharp & Cinematic */}
        <div className="relative w-full h-[500px] md:h-[900px] overflow-hidden group bg-neutral-950 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] rounded-sm">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/Images/gym2.png"
              alt="Power Lab Fitness Equipment"
              fill
              quality={100}
              // Professional framing: keeping the focus on equipment while cropping edges
              className="object-cover object-[center_40%] scale-[1.15] transition-all duration-[3s] grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110"
              sizes="100vw"
              priority
            />
          </div>
          
          {/* Enhanced Multi-Layer Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>
      </div>
      
      {/* Dynamic Environment Glow */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-orange/5 blur-[200px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </section>
  );
}
