import React from 'react';

const FeatureTable = () => {
    return (
        <div className="w-full max-w-5xl mx-auto mt-20 mb-10 overflow-x-auto hidden md:block border border-white/10 rounded-2xl bg-charcoal/30 backdrop-blur-sm" aria-label="Tier features comparison">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-black/40">
                        <th className="p-6 font-sans text-sm font-semibold text-white/50 w-1/4 border-b border-white/10 align-bottom" rowSpan={2}>Features</th>
                        <th className="pt-4 border-b border-white/5 font-sans text-xs font-bold text-white/40 uppercase tracking-widest text-center" colSpan={3}>Recurring Plans</th>
                        <th className="pt-4 border-b border-white/5 border-l border-white/10 font-sans text-xs font-bold text-teal/60 uppercase tracking-widest text-center" colSpan={1}>One-Shot</th>
                    </tr>
                    <tr className="border-b border-white/10 bg-black/40">
                        <th className="pb-4 pt-2 font-sans text-sm font-bold text-teal w-[18%] text-center">Starter</th>
                        <th className="pb-4 pt-2 font-sans text-sm font-bold text-white w-[18%] text-center">Growth Guard</th>
                        <th className="pb-4 pt-2 font-sans text-sm font-bold text-orange w-[21%] text-center">Institutional</th>
                        <th className="pb-4 pt-2 font-sans text-sm font-bold text-teal w-[18%] text-center border-l border-white/10 bg-black/20">Launch Shield</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-white/80 font-sans">
                    {/* Setup & Onboarding */}
                    <tr className="bg-white/5"><td colSpan="5" className="p-3 pl-6 font-bold text-xs uppercase tracking-widest text-white/40">Setup & Onboarding</td></tr>
                    <tr className="border-b border-white/5">
                        <td className="p-5 pl-6">Implementation</td>
                        <td className="p-5 text-center text-white/50">Self-serve</td>
                        <td className="p-5 text-center text-white/80">Assisted Guided</td>
                        <td className="p-5 text-center text-teal font-medium">White-glove 24/7</td>
                        <td className="p-5 text-center text-teal font-medium border-l border-white/10 bg-black/20">War-room Prep</td>
                    </tr>
                    <tr className="border-b border-white/5">
                        <td className="p-5 pl-6">Custom HAIMDALL Rules</td>
                        <td className="p-5 text-center text-white/50">Standard only</td>
                        <td className="p-5 text-center text-white/80">Up to 10</td>
                        <td className="p-5 text-center text-teal font-medium">Unlimited</td>
                        <td className="p-5 text-center text-teal font-medium border-l border-white/10 bg-black/20">Bespoke TGE set</td>
                    </tr>

                    {/* Operations */}
                    <tr className="bg-white/5"><td colSpan="5" className="p-3 pl-6 font-bold text-xs uppercase tracking-widest text-white/40">Operations & Scale</td></tr>
                    <tr className="border-b border-white/5">
                        <td className="p-5 pl-6">Supported Platforms</td>
                        <td className="p-5 text-center text-white/80">TG</td>
                        <td className="p-5 text-center text-white/80">TG, Discord, X</td>
                        <td className="p-5 text-center text-teal font-medium">All + Custom APIs</td>
                        <td className="p-5 text-center text-white/80 border-l border-white/10 bg-black/20">All platforms</td>
                    </tr>
                    <tr className="border-b border-white/5">
                        <td className="p-5 pl-6">Monthly Messages Processed</td>
                        <td className="p-5 text-center text-white/80">100k</td>
                        <td className="p-5 text-center text-white/80">1M</td>
                        <td className="p-5 text-center text-teal font-medium">Unlimited</td>
                        <td className="p-5 text-center text-teal font-medium border-l border-white/10 bg-black/20">Unlimited (30d)</td>
                    </tr>

                    {/* Support & SLA */}
                    <tr className="bg-white/5"><td colSpan="5" className="p-3 pl-6 font-bold text-xs uppercase tracking-widest text-white/40">Support & SLA</td></tr>
                    <tr className="border-b border-white/5">
                        <td className="p-5 pl-6">Response SLA</td>
                        <td className="p-5 text-center text-white/50">Best effort</td>
                        <td className="p-5 text-center text-white/80">{'< 4 hours'}</td>
                        <td className="p-5 text-center text-teal font-medium">{'< 15 minutes'}</td>
                        <td className="p-5 text-center text-teal font-medium border-l border-white/10 bg-black/20">Instant (Live)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                        <td className="p-5 pl-6">Dedicated Comms Channel</td>
                        <td className="p-5 text-center text-white/20">-</td>
                        <td className="p-5 text-center text-teal">✓</td>
                        <td className="p-5 text-center text-teal">✓</td>
                        <td className="p-5 text-center text-teal border-l border-white/10 bg-black/20">✓</td>
                    </tr>
                    <tr>
                        <td className="p-5 pl-6">Monthly Governance Report</td>
                        <td className="p-5 text-center text-white/20">-</td>
                        <td className="p-5 text-center text-teal">✓</td>
                        <td className="p-5 text-center text-teal">✓</td>
                        <td className="p-5 text-center text-teal border-l border-white/10 bg-black/20">✓ (Weekly)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FeatureTable;
