
import React from 'react';
import DiagnosticShuffler from './features/DiagnosticShuffler';
import TelemetryTypewriter from './features/TelemetryTypewriter';
import AdaptiveRegimen from './features/AdaptiveRegimen';
import { Layers } from 'lucide-react'; // Assuming Layers icon is from lucide-react

const Features = () => {
    return (
        <section id="features" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 w-full text-left">
                <h2 className="text-4xl md:text-6xl font-sans font-semibold tracking-tighter text-white leading-[0.9]">
                    Deterministic <br />
                    <span className="text-orange font-normal">Legitimacy.</span>
                </h2>
                <p className="text-white/70 max-w-sm text-base md:text-sm font-sans mt-4 md:mt-0">
                    A system built for adversarial chat. KAI preserves meaning and de-escalates without censoring. HAIMDALL protects structural boundaries against raids and impersonators.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <DiagnosticShuffler />
                <TelemetryTypewriter />
                {/* Feature 3: Scheduling Engagement */}
                <div className="p-8 md:p-12 bg-charcoal rounded-3xl border border-white/5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 h-full flex flex-col pt-16">
                        <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mb-6 border border-orange/20 mix-blend-screen shadow-[0_0_30px_rgba(247,147,26,0.15)]">
                            <Layers className="text-orange w-8 h-8" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4 tracking-tight">Scheduling engagement</h3>
                        <p className="text-white/60 font-sans leading-relaxed text-sm md:text-base pr-8 max-w-sm">
                            Plan your narrative rhythm. KAI executes scheduled announcements and engagement bursts across your entire ecosystem with precision timing.
                        </p>
                    </div>
                    <div className="absolute top-8 right-8 text-white/5 font-mono text-8xl font-black">03</div>
                </div>
            </div>
        </section>
    );
};

export default Features;
