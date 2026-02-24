import React from 'react';

const Integrations = () => {
    return (
        <section id="integrations" className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
            {/* Subtle Core Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[300px] bg-teal/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-white mb-4">
                        Omnichannel <span className="text-orange">Presence.</span>
                    </h2>
                    <p className="text-white/60 font-sans max-w-2xl mx-auto">
                        KAI acts as your scalable voice across social layers, actively engaging your community wherever they are.
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    {/* KAI Platforms */}
                    <div className="p-8 rounded-3xl bg-charcoal border border-white/10 hover:border-teal/30 transition-colors shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                            <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center border border-teal/30">
                                <span className="font-bold text-teal text-xl">K</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white tracking-tight">KAI Intelligence</h3>
                                <p className="text-xs font-mono text-teal uppercase tracking-widest mt-1">Community Management</p>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-between">
                                <span className="text-white/80 font-sans font-medium flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-teal animate-pulse" /> Discord
                                </span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/50 border border-white/10">Active</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-white/80 font-sans font-medium flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-teal animate-pulse" /> Telegram
                                </span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/50 border border-white/10">Active</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-white/80 font-sans font-medium flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-teal animate-pulse" /> Twitch
                                </span>
                                <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/50 border border-white/10">Active</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-white/80 font-sans font-medium flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-teal" /> X (Twitter)
                                </span>
                                <span className="text-xs bg-orange/10 text-orange px-2 py-1 rounded border border-orange/20">Answers Only</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
