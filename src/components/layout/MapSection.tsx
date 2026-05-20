import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MapSection() {
  const ADDRESS = "Near Shani dev Mandir, Durga Colony, Sohna, Sohna Rural, Haryana 122103";
  // Updated public embed URL with more precise parameters for POWER LAB FITNESS UNISEX GYM
  const PUBLIC_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.841572395618!2d77.06737527610667!3d28.25767667587295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d0016e39951%3A0xc3c907a9e0f6f4f2!2sPOWER%20LAB%20FITNESS%20UNISEX%20GYM!5e0!3m2!1sen!2sin!4v1716245000000!5m2!1sen!2sin";

  return (
    <section id="location" className="py-32 md:py-56 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 space-y-10 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-6">
              <span className="text-orange font-black tracking-[0.5em] uppercase text-[10px] md:text-xs flex items-center gap-4">
                <span className="w-16 h-[2px] bg-orange" />
                FIND THE LAB
              </span>
              <h2 className="text-6xl md:text-8xl font-black italic text-white uppercase tracking-tighter leading-[0.8] drop-shadow-2xl">
                VISIT THE <br />
                <span className="text-orange">HQ</span>
              </h2>
            </div>

            <div className="space-y-8 bg-neutral-900/50 p-10 border border-white/5 backdrop-blur-md rounded-sm">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-orange/10 flex items-center justify-center rounded-sm group-hover:bg-orange transition-all duration-500 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white/20 font-black text-[9px] uppercase tracking-[0.4em] mb-2 text-glow-orange">Physical Coordinates</p>
                  <p className="text-xl font-black text-white italic tracking-tighter leading-tight uppercase">
                    POWER LAB FITNESS UNISEX GYM <br />
                    Near Shani dev Mandir, <br />
                    Durga Colony, Sohna, Sohna Rural, <br />
                    Haryana 122103
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange hover:bg-orange/90 text-white font-black px-10 h-16 rounded-none text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl tracking-tighter">
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=POWER+LAB+FITNESS+UNISEX+GYM+Sohna+Durga+Colony+Haryana+122103" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Navigation className="w-5 h-5 fill-current" />
                    GET DIRECTIONS
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/10 text-white hover:bg-white hover:text-black font-black px-10 h-16 rounded-none text-lg transition-all tracking-tighter">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=POWER+LAB+FITNESS+UNISEX+GYM+Sohna+Durga+Colony+Haryana+122103" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    LAUNCH MAPS
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="lg:col-span-7 relative group animate-in fade-in slide-in-from-right duration-1000">
            <div className="absolute -inset-4 bg-orange/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative w-full h-[450px] md:h-[650px] bg-neutral-900 border border-white/10 rounded-sm overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)]">
              {/* Overlay for Premium Look */}
              <div className="absolute inset-0 z-10 pointer-events-none border-[12px] md:border-[24px] border-black/20" />
              
              <iframe
                src={PUBLIC_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) contrast(1.2) invert(0.9)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Power Lab Gym Location"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              
              {/* Decorative Tech Markers */}
              <div className="absolute top-8 right-8 z-20 flex flex-col items-end gap-2 opacity-30">
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-black text-white uppercase tracking-widest">Tracking Active</span>
                  <div className="w-2 h-2 bg-orange rounded-full animate-pulse" />
                </div>
                <div className="w-24 h-[1px] bg-white/20" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Aesthetic Background Elements */}
      <div className="absolute top-1/2 left-0 w-[1000px] h-[1000px] bg-orange/5 blur-[250px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </section>
  );
}
