import React from "react";
import { Star, Quote, ShieldCheck } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Elite Member",
    content: "The trainers here are incredibly experienced and supportive. They actually care about your progress. Best gym atmosphere in Sohna!",
    rating: 5
  },
  {
    name: "Priya Verma",
    role: "Regular Member",
    content: "Most hygienic gym I've ever visited. The equipment is modern and very well-maintained. The atmosphere is powerful and motivating.",
    rating: 5
  },
  {
    name: "Amit Kaushik",
    role: "Athlete",
    content: "Affordable pricing with world-class facilities. The owners are very friendly and the overall workout experience is excellent.",
    rating: 5
  },
  {
    name: "Sonia Singh",
    role: "Fitness Enthusiast",
    content: "Great environment for women. The supportive staff makes you feel comfortable and focused on your transformation journey.",
    rating: 5
  },
  {
    name: "Deepak Yadav",
    role: "Bodybuilder",
    content: "Powerful gym atmosphere with all the modern equipment you need for heavy lifting. Clean, energetic, and highly professional.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-32 md:py-56 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-28">
          <div className="space-y-6">
            <span className="text-orange font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">TRIBE TRANSMISSIONS</span>
            <h2 className="text-6xl md:text-9xl font-black italic text-white uppercase tracking-tighter leading-[0.8] drop-shadow-2xl">
              SUCCESS <br />
              <span className="text-orange">STORIES</span>
            </h2>
          </div>
          <p className="text-white/40 text-lg md:text-2xl font-bold max-w-sm text-right leading-tight uppercase italic tracking-tighter">
            Authentic feedback from our laboratory of strength.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div 
              key={review.name}
              className="group p-12 bg-neutral-900/40 border border-white/5 hover:border-orange/30 transition-all duration-700 relative overflow-hidden shadow-2xl"
            >
              <Quote className="absolute top-10 right-10 w-16 h-16 text-white/[0.02] group-hover:text-orange/5 transition-all duration-700 rotate-12 group-hover:rotate-0" />
              
              <div className="flex gap-1.5 mb-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange text-orange drop-shadow-[0_0_8px_rgba(255,102,0,0.5)]" />
                ))}
              </div>

              <p className="text-white/80 text-xl font-bold leading-relaxed mb-12 italic uppercase tracking-tight">
                "{review.content}"
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                <div className="w-14 h-14 bg-orange p-[2px] rounded-sm rotate-45 group-hover:rotate-0 transition-all duration-500">
                   <div className="w-full h-full bg-black flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
                    <span className="text-orange font-black text-xl italic">{review.name.charAt(0)}</span>
                   </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-white font-black uppercase text-sm tracking-widest">{review.name}</h4>
                    <ShieldCheck className="w-3 h-3 text-orange opacity-50" />
                  </div>
                  <p className="text-orange text-[9px] font-black uppercase tracking-[0.3em]">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Background Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,102,0,0.03)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
}
