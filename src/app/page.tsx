import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Testimonials } from "@/components/layout/Testimonials";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { Gallery } from "@/components/layout/Gallery";
import { MapSection } from "@/components/layout/MapSection";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Zap, 
  Target, 
  Users, 
  ShieldCheck,
  Dumbbell,
  Clock,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Heart,
  Bike,
  Activity,
  Apple,
  Trophy,
  ExternalLink,
  ArrowUpRight
} from "lucide-react";

const services = [
  { name: "HIIT classes", icon: Zap, desc: "High-intensity interval training for maximum calorie burn and metabolic boost." },
  { name: "Aerobics", icon: Activity, desc: "Energetic rhythmic exercises to improve cardiovascular health and coordination." },
  { name: "Crossfit", icon: Trophy, desc: "Functional movements performed at high intensity for total body power." },
  { name: "Personal training", icon: Users, desc: "One-on-one elite coaching tailored to your specific physiological goals." },
  { name: "Weight training", icon: Dumbbell, desc: "Build explosive strength and muscle mass with our pro-grade equipment." },
  { name: "Pilates classes", icon: Heart, desc: "Enhance core stability, flexibility, and mind-body connection." },
  { name: "Nutrition consulting", icon: Apple, desc: "Evidence-based dietary guidance to optimize your metabolic transformation." },
  { name: "Cycling", icon: Bike, desc: "High-energy indoor cycling sessions for ultimate endurance and stamina." },
  { name: "Private lessons", icon: Target, desc: "Highly focused individual sessions for rapid skill mastery." },
  { name: "Adult sports", icon: Activity, desc: "Dynamic team-based sports activities for athletic conditioning." },
  { name: "Child care", icon: ShieldCheck, desc: "Safe, monitored environment for your children while you focus on training." },
];

const memberships = [
  {
    name: "1 Month Plan",
    price: "1000",
    period: "/month",
    features: ["Full Gym Access", "Elite Equipment", "Locker Room", "General Guidance", "Hydration Station"],
    isPopular: false
  },
  {
    name: "3 Month Plan",
    price: "2400",
    period: "/3 months",
    features: ["Cost Effective", "Fitness Assessment", "Progress Tracking", "Supportive Staff", "Priority Access"],
    isPopular: false
  },
  {
    name: "1 Year Plan",
    price: "6500",
    period: "/year",
    features: ["Best Value", "Full Year Access", "Free Power Lab Tee", "Priority Support", "Diet Consultation"],
    isPopular: true
  }
];

const WHATSAPP_LINK = "https://wa.me/917015301877";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden selection:bg-orange selection:text-white">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-32 md:py-56 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative space-y-12 z-10 animate-in fade-in slide-in-from-left duration-1000">
              <div className="space-y-6">
                <span className="text-orange font-black tracking-[0.4em] uppercase text-[10px] md:text-xs flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-orange" />
                  THE POWER LAB PHILOSOPHY
                </span>
                <h2 className="text-6xl md:text-8xl font-black italic text-white leading-[0.85] uppercase tracking-tighter">
                  EVOLVE <br />
                  <span className="text-orange">BEYOND</span> <br />
                  LIMITS
                </h2>
              </div>
              
              <p className="text-white/60 text-lg md:text-xl leading-relaxed font-medium max-w-xl">
                POWER LAB FITNESS UNISEX GYM is Sohna's premier destination for high-performance fitness. 
                We've built a scientific laboratory where human potential is tested, pushed, and redefined daily.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                {[
                  "Pro-Grade Equipment",
                  "Elite Level Trainers",
                  "Hygienic Bio-Zone",
                  "Supportive Tribe",
                  "Scalable Pricing",
                  "Modern Atmosphere"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-sm bg-orange/10 flex items-center justify-center group-hover:bg-orange transition-all duration-300 rotate-45 group-hover:rotate-0">
                      <CheckCircle2 className="w-4 h-4 text-orange group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                    </div>
                    <span className="text-white font-black uppercase tracking-widest text-xs">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Button asChild size="lg" className="bg-white hover:bg-orange hover:text-white text-black font-black px-14 h-18 rounded-none transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter">
                  <a href={WHATSAPP_LINK}>START YOUR JOURNEY</a>
                </Button>
              </div>
            </div>

            <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden group border border-white/5 bg-neutral-900 shadow-[0_0_100px_rgba(255,102,0,0.1)]">
               <Image
                src="/Images/gym3 (1).png"
                alt="Power Lab Training Facility"
                fill
                className="object-cover object-center grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s] opacity-80"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 border-l-4 border-orange pl-8 py-2">
                <p className="text-white font-black italic text-3xl md:text-4xl uppercase tracking-tighter leading-tight drop-shadow-xl">
                  ELITE <br /><span className="text-orange text-xl md:text-2xl">ENVIRONMENT</span>
                </p>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em] mt-4">Built for high performance</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle Background Markings */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 opacity-5 pointer-events-none hidden lg:block">
          <p className="text-[30rem] font-black italic uppercase text-white leading-none rotate-90">POWER</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 md:py-56 bg-neutral-950 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-28">
            <div className="space-y-6 max-w-3xl">
              <span className="text-orange font-black tracking-[0.4em] uppercase text-[10px] md:text-xs">THE LAB SERVICES</span>
              <h2 className="text-6xl md:text-9xl font-black italic text-white uppercase tracking-tighter leading-[0.8] drop-shadow-2xl">
                ELITE <br />
                <span className="text-orange">DISCIPLINES</span>
              </h2>
            </div>
            <p className="text-white/40 text-lg md:text-2xl font-bold max-w-md text-right leading-relaxed">
              Specialized training systems architected for rapid physiological evolution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/5 border border-white/5 shadow-2xl">
            {services.map((service) => (
              <div 
                key={service.name} 
                className="group p-10 md:p-12 bg-black hover:bg-neutral-900 transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-orange group-hover:h-full transition-all duration-700" />
                <div className="w-16 h-16 bg-orange/5 flex items-center justify-center mb-12 group-hover:bg-orange group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <service.icon className="w-8 h-8 text-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tighter group-hover:text-orange transition-colors italic">
                  {service.name}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed font-bold group-hover:text-white/70 transition-colors uppercase tracking-tight">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      {/* Membership Section */}
      <section id="membership" className="py-32 md:py-56 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-8 mb-32">
            <span className="text-orange font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">ELITE ADMISSION</span>
            <h2 className="text-7xl md:text-[10rem] font-black italic text-white uppercase tracking-tighter leading-[0.8] drop-shadow-2xl">
              CHOOSE <br />
              <span className="text-orange text-6xl md:text-[8rem]">YOUR RANK</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {memberships.map((plan) => (
              <div 
                key={plan.name}
                className={`group relative p-14 flex flex-col border transition-all duration-700 hover:scale-[1.05] ${
                  plan.isPopular 
                    ? "border-orange bg-neutral-900 shadow-[0_0_100px_rgba(255,102,0,0.15)] z-10 scale-[1.03]" 
                    : "border-white/5 bg-black hover:border-orange/30"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                    <div className="bg-orange text-white text-[10px] font-black px-10 py-3 uppercase tracking-[0.4em] shadow-2xl whitespace-nowrap">
                      Most Popular
                    </div>
                    <div className="bg-white text-black text-[9px] font-black px-6 py-2 uppercase tracking-[0.3em] shadow-xl whitespace-nowrap italic">
                      Best Value
                    </div>
                  </div>
                )}
                <div className="mb-12 text-center">
                  <h3 className="text-2xl font-black text-white uppercase mb-6 italic tracking-[0.2em]">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-7xl font-black text-white italic tracking-tighter">₹{plan.price}</span>
                    <span className="text-white/20 text-sm font-black uppercase tracking-[0.2em]">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-6 mb-16 flex-grow">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-5 group/item">
                      <div className="w-2 h-2 bg-orange transition-all duration-300 group-hover:w-4 group-hover/item:rotate-45" />
                      <span className="text-white/80 text-[11px] font-black uppercase tracking-widest">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className={`w-full h-18 font-black rounded-none uppercase transition-all text-xl tracking-tighter shadow-2xl ${
                  plan.isPopular ? "bg-orange hover:bg-orange/90 text-white" : "bg-white hover:bg-orange hover:text-white text-black"
                }`}>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">SECURE ACCESS</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Glow Overlay */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-orange/5 blur-[150px] pointer-events-none rounded-full" />
      </section>

      <MapSection />
      <Testimonials />

      {/* Contact Section */}
      <section id="contact" className="py-32 md:py-56 bg-neutral-950 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="space-y-20">
              <div className="space-y-8">
                <span className="text-orange font-black tracking-[0.5em] uppercase text-[10px] md:text-xs flex items-center gap-4">
                  <span className="w-16 h-[2px] bg-orange" />
                  THE HEADQUARTERS
                </span>
                <h2 className="text-7xl md:text-9xl font-black italic text-white uppercase tracking-tighter leading-[0.8] drop-shadow-2xl">
                  READY FOR <br />
                  <span className="text-orange">EVOLUTION?</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <a href="tel:7015301877" className="group space-y-6 block p-10 bg-black border border-white/5 hover:border-orange/40 transition-all duration-500 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-orange/5 flex items-center justify-center group-hover:bg-orange transition-all duration-500 rounded-sm">
                    <Phone className="w-6 h-6 text-orange group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-white/20 font-black text-[9px] uppercase tracking-[0.4em] mb-2">Direct Voice</p>
                    <p className="text-2xl font-black text-white group-hover:text-orange transition-colors italic tracking-tighter">7015301877</p>
                  </div>
                </a>
                
                <a href="mailto:vinit.kaushik123@gmail.com" className="group space-y-6 block p-10 bg-black border border-white/5 hover:border-orange/40 transition-all duration-500 shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-orange/5 flex items-center justify-center group-hover:bg-orange transition-all duration-500 rounded-sm">
                    <Mail className="w-6 h-6 text-orange group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-white/20 font-black text-[9px] uppercase tracking-[0.4em] mb-2">Transmission</p>
                    <p className="text-sm font-black text-white group-hover:text-orange transition-colors break-all tracking-tight">vinit.kaushik123@gmail.com</p>
                  </div>
                </a>

                <div className="sm:col-span-2 group space-y-8 p-12 bg-black border border-white/5 hover:border-orange/40 transition-all duration-500 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 bg-orange/5 flex items-center justify-center group-hover:bg-orange transition-all duration-500 rounded-sm">
                      <MapPin className="w-6 h-6 text-orange group-hover:text-white" />
                    </div>
                    <div className="flex gap-4">
                      {["HQ", "SOHNA", "HR"].map(tag => (
                        <span key={tag} className="text-[8px] font-black text-white/10 group-hover:text-orange/40 border border-white/5 px-3 py-1 tracking-widest">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-white/20 font-black text-[9px] uppercase tracking-[0.4em] mb-2">Physical Coordinates</p>
                    <p className="text-2xl md:text-3xl font-black text-white group-hover:text-orange transition-colors italic tracking-tighter leading-tight max-w-md">
                      POWER LAB FITNESS UNISEX GYM, Near Shani dev Mandir, Durga Colony, Sohna, Sohna Rural, Haryana 122103
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group lg:mt-24">
              <div className="absolute inset-0 bg-orange/10 blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]" />
              <div className="relative w-full h-full min-h-[600px] border border-white/5 bg-neutral-900 shadow-2xl overflow-hidden rounded-sm">
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-16 space-y-12">
                    <div className="relative">
                       <div className="absolute inset-0 bg-orange/20 blur-2xl animate-pulse rounded-full" />
                       <div className="relative w-32 h-32 bg-orange/10 flex items-center justify-center rounded-full border border-orange/20">
                        <MapPin className="w-12 h-12 text-orange" />
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-white font-black text-4xl md:text-5xl uppercase italic tracking-tighter leading-none">LAUNCH THE LAB</h3>
                      <p className="text-white/40 text-lg md:text-xl max-w-sm font-bold leading-relaxed uppercase tracking-tighter italic">Near Shani dev Mandir, Durga Colony, Sohna Rural, Haryana 122103</p>
                    </div>
                    <Button asChild size="lg" className="bg-orange hover:bg-orange/90 text-white font-black px-16 h-20 rounded-none text-2xl transition-all hover:scale-110 active:scale-95 shadow-[0_20px_60px_rgba(255,102,0,0.4)] tracking-tighter">
                      <a href="https://www.google.com/maps/dir/?api=1&destination=POWER+LAB+FITNESS+UNISEX+GYM+Sohna+Durga+Colony+Haryana+122103" target="_blank" rel="noopener noreferrer">
                        NAVIGATE NOW
                      </a>
                    </Button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-32 border-t border-white/5 bg-black relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-24">
            <div className="space-y-10">
               <div className="flex flex-col -space-y-3">
                <span className="text-6xl md:text-7xl font-black tracking-tighter text-white italic drop-shadow-2xl">
                  POWER <span className="text-orange">LAB</span>
                </span>
                <span className="text-[14px] tracking-[0.6em] font-black text-white/20 uppercase">Fitness Unisex Gym</span>
              </div>
              <p className="text-white/30 max-w-md text-lg font-bold leading-relaxed uppercase italic tracking-tighter">
                The ultimate fitness laboratory for performance and transformation. We architect strength.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-x-40 gap-y-16">
              <div className="space-y-8">
                <p className="text-white font-black text-xs uppercase tracking-[0.4em] border-b border-orange/50 pb-2 inline-block">NAVIGATE</p>
                <ul className="space-y-4">
                  {["About", "Services", "Gallery", "Membership", "Reviews", "Contact"].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-white/30 hover:text-orange transition-all duration-300 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2 group/nav">
                        <span className="w-0 h-[1px] bg-orange group-hover/nav:w-4 transition-all" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8">
                <p className="text-white font-black text-xs uppercase tracking-[0.4em] border-b border-orange/50 pb-2 inline-block">CONNECT</p>
                <ul className="space-y-4">
                  <li><a href={WHATSAPP_LINK} className="text-white/30 hover:text-orange transition-all duration-300 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2 group/nav"><span className="w-0 h-[1px] bg-orange group-hover/nav:w-4 transition-all" />WhatsApp</a></li>
                  <li><a href="#" className="text-white/30 hover:text-orange transition-all duration-300 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2 group/nav"><span className="w-0 h-[1px] bg-orange group-hover/nav:w-4 transition-all" />Instagram</a></li>
                  <li><a href="#" className="text-white/30 hover:text-orange transition-all duration-300 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2 group/nav"><span className="w-0 h-[1px] bg-orange group-hover/nav:w-4 transition-all" />Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-10 text-[11px] font-black uppercase tracking-[0.4em] text-white/10">
            <p>© 2026 POWER LAB FITNESS UNISEX GYM. ARCHITECTED FOR THE ELITE.</p>
            <div className="flex gap-16">
              <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Global Branding Glow */}
        <div className="absolute bottom-0 left-0 w-[1000px] h-[500px] bg-orange/5 blur-[200px] rounded-full pointer-events-none -translate-x-1/2" />
      </footer>

      <WhatsAppFab />
    </main>
  );
}
