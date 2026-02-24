import React from 'react';
import DiagnosticShuffler from './features/DiagnosticShuffler';
import TelemetryTypewriter from './features/TelemetryTypewriter';
import AdaptiveRegimen from './features/AdaptiveRegimen';

const Features = () => {
    return (
        <section id="features" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 w-full text-left">
                <h2 className="text-4xl md:text-6xl font-sans font-semibold tracking-tighter text-white leading-[0.9]">
                    Deterministic <br />
                    <span className="text-orange font-normal">Enforcement.</span>
                </h2>
                <p className="text-white/70 max-w-sm text-base md:text-sm font-sans mt-4 md:mt-0">
                    A system built for adversarial chat. KAI preserves meaning and de-escalates without censoring. HAIMDALL enforces structural boundaries against raids and impersonators.
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
