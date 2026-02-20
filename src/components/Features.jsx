import React from 'react';
import DiagnosticShuffler from './features/DiagnosticShuffler';
import TelemetryTypewriter from './features/TelemetryTypewriter';
import AdaptiveRegimen from './features/AdaptiveRegimen';

const Features = () => {
    return (
        <section id="features" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                <h2 className="text-4xl md:text-6xl font-sans font-semibold tracking-tighter text-white leading-[0.9]">
                    Total <br />
                    <span className="text-orange font-normal">Narrative Control</span>
                </h2>
                <p className="text-white/70 max-w-sm text-sm font-sans">
                    Every unmanaged crisis costs you community members. KAI scales your voice effortlessly, while HAIMDALL ruthlessly eliminates structural threats before they ever spread.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <DiagnosticShuffler />
                <TelemetryTypewriter />
                <AdaptiveRegimen />
            </div>
        </section>
    );
};

export default Features;
