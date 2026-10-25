"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";
import { Terminal, Cpu, Bot, CheckCircle2, Sparkles, Activity } from "lucide-react";

export default function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<"ai" | "stack">("ai");

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Background radial gradient glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-indigo-600/20 blur-2xl opacity-75 -z-10" />

      {/* Main Glassmorphic Terminal Card */}
      <div className="overflow-hidden rounded-2xl border border-white/15 bg-dark/90 shadow-2xl backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-navy/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-muted flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-cyan" />
              ixorya-production.env
            </span>
          </div>

          {/* Quick tab toggle */}
          <div className="flex rounded-lg bg-dark/90 p-1 border border-white/10 text-xs">
            <button
              onClick={() => setActiveTab("ai")}
              className={`rounded px-2.5 py-1 transition flex items-center gap-1.5 ${
                activeTab === "ai"
                  ? "bg-brand text-white font-medium shadow-sm"
                  : "text-muted hover:text-silver"
              }`}
            >
              <Bot className="h-3.5 w-3.5" />
              AI Pipeline
            </button>
            <button
              onClick={() => setActiveTab("stack")}
              className={`rounded px-2.5 py-1 transition flex items-center gap-1.5 ${
                activeTab === "stack"
                  ? "bg-brand text-white font-medium shadow-sm"
                  : "text-muted hover:text-silver"
              }`}
            >
              <Cpu className="h-3.5 w-3.5" />
              Full Stack
            </button>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-5 font-mono text-xs sm:text-sm">
          {activeTab === "ai" ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-muted border-b border-white/5 pb-2">
                <span className="flex items-center gap-2 text-cyan">
                  <Activity className="h-4 w-4 animate-pulse" />
                  Autonomous AI Workflows
                </span>
                <span className="text-emerald-400 font-sans text-xs bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  99.99% Uptime
                </span>
              </div>

              <pre className="text-silver/90 leading-relaxed overflow-x-auto p-2 bg-navy/60 rounded-lg border border-white/5">
                <code>
                  <span className="text-cyan">import</span> &#123; IxoryaEngine, AIOrchestrator &#125; <span className="text-cyan">from</span> <span className="text-amber-300">&quot;@ixorya/core&quot;</span>;{"\n\n"}
                  <span className="text-muted">{"// Initialize enterprise AI automation"}</span>{"\n"}
                  <span className="text-cyan">const</span> workflow = <span className="text-cyan">new</span> <span className="text-blue-400">AIOrchestrator</span>(&#123;{"\n"}
                  {"  "}mode: <span className="text-emerald-300">&quot;autonomous-production&quot;</span>,{"\n"}
                  {"  "}integration: [<span className="text-amber-300">&quot;CRM&quot;</span>, <span className="text-amber-300">&quot;API-Gateway&quot;</span>, <span className="text-amber-300">&quot;Databases&quot;</span>],{"\n"}
                  {"  "}optimization: <span className="text-purple-300">&quot;sub-second-latency&quot;</span>,{"\n"}
                  &#125;);{"\n\n"}
                  <span className="text-muted">{"// Auto-scale business operations"}</span>{"\n"}
                  <span className="text-cyan">await</span> workflow.<span className="text-blue-400">deploy</span>(&#123; secure: <span className="text-cyan">true</span> &#125;);
                </code>
              </pre>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="rounded-lg bg-navy/60 p-2.5 border border-white/5">
                  <div className="text-[11px] text-muted">Latency Benchmark</div>
                  <div className="text-sm font-semibold text-cyan font-sans">&lt; 28ms response</div>
                </div>
                <div className="rounded-lg bg-navy/60 p-2.5 border border-white/5">
                  <div className="text-[11px] text-muted">Efficiency Boost</div>
                  <div className="text-sm font-semibold text-emerald-400 font-sans">+74% productivity</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-muted border-b border-white/5 pb-2">
                <span className="flex items-center gap-2 text-cyan">
                  <Sparkles className="h-4 w-4" />
                  Production Next.js Architecture
                </span>
                <span className="text-cyan font-sans text-xs bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20">
                  Modern Tech
                </span>
              </div>

              <pre className="text-silver/90 leading-relaxed overflow-x-auto p-2 bg-navy/60 rounded-lg border border-white/5">
                <code>
                  <span className="text-cyan">const</span> IxoryaStack = &#123;{"\n"}
                  {"  "}frontend: [<span className="text-amber-300">&quot;Next.js 16&quot;</span>, <span className="text-amber-300">&quot;React 19&quot;</span>, <span className="text-amber-300">&quot;Tailwind v4&quot;</span>],{"\n"}
                  {"  "}backend: [<span className="text-emerald-300">&quot;TypeScript&quot;</span>, <span className="text-emerald-300">&quot;Python&quot;</span>, <span className="text-emerald-300">&quot;PostgreSQL&quot;</span>],{"\n"}
                  {"  "}academy: [<span className="text-purple-300">&quot;Hands-on Mentorship&quot;</span>, <span className="text-purple-300">&quot;Zero to Hero&quot;</span>],{"\n"}
                  {"  "}quality: <span className="text-cyan">&quot;Beyond Infinity&quot;</span>,{"\n"}
                  &#125;;
                </code>
              </pre>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="rounded-lg bg-navy/60 p-2.5 border border-white/5">
                  <div className="text-[11px] text-muted">Architecture</div>
                  <div className="text-sm font-semibold text-silver font-sans">Cloud Native</div>
                </div>
                <div className="rounded-lg bg-navy/60 p-2.5 border border-white/5">
                  <div className="text-[11px] text-muted">Academy Success</div>
                  <div className="text-sm font-semibold text-cyan font-sans">100% Practical</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info pill */}
        <div className="flex items-center justify-between border-t border-white/10 bg-navy/90 px-4 py-2.5 text-[11px] text-muted">
          <div className="flex items-center gap-2">
            <Image
              src={site.symbol}
              alt={site.short}
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="text-silver font-sans font-medium">{site.tagline}</span>
          </div>
          <span className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Ready to Deploy
          </span>
        </div>
      </div>
    </div>
  );
}
