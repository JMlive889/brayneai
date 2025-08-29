"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Database, MessageSquare, CheckCircle } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          From cold list to booked call in three steps
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          <PinContainer title="Start here" href="#book">
            <div className="flex flex-col p-6 tracking-tight text-white w-[20rem] h-[20rem] bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-sm border border-white/[0.1] rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
                  <span className="text-black font-bold text-sm">01</span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Connect your leads
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed">
                  CSV or CRM. We scan and prioritise who is worth re engaging first.
                </p>

                <div className="bg-black/30 border border-[#D4AF37]/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#D4AF37]">10K+</div>
                  <div className="text-xs text-white/60">Leads processed</div>
                </div>

                <div className="text-[#D4AF37] text-sm font-medium">
                  Start here →
                </div>
              </div>
            </div>
          </PinContainer>

          <PinContainer title="See the playbook" href="#book">
            <div className="flex flex-col p-6 tracking-tight text-white w-[20rem] h-[20rem] bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-sm border border-white/[0.1] rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
                  <span className="text-black font-bold text-sm">02</span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Conversations begin
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed">
                  Context aware human messages handle friction and qualify intent fast.
                </p>

                <div className="bg-black/30 border border-[#D4AF37]/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#D4AF37]">87%</div>
                  <div className="text-xs text-white/60">Response rate</div>
                </div>

                <div className="text-[#D4AF37] text-sm font-medium">
                  See the playbook →
                </div>
              </div>
            </div>
          </PinContainer>

          <PinContainer title="Get me calls" href="#book">
            <div className="flex flex-col p-6 tracking-tight text-white w-[20rem] h-[20rem] bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-sm border border-white/[0.1] rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
                  <span className="text-black font-bold text-sm">03</span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Sales ready calls
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed">
                  Only motivated prospects make it to you. No time wasters.
                </p>

                <div className="bg-black/30 border border-[#D4AF37]/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#D4AF37]">92%</div>
                  <div className="text-xs text-white/60">Show rate</div>
                </div>

                <div className="text-[#D4AF37] text-sm font-medium">
                  Get me calls →
                </div>
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </section>
  );
}