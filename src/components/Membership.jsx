import React from 'react';



const Membership = () => {
    return (
        <section id="scale" className="py-32 px-4 md:px-8 bg-black w-full max-w-7xl mx-auto text-white flex flex-col items-center">

            {/* Ecosystem Scale Header */}
            <div className="text-center mb-16 max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-sans font-semibold tracking-tighter text-white leading-[0.9] mb-6">
                    Simple, Transparent <span className="text-orange font-normal text-5xl md:text-7xl">Pricing.</span>
                </h2>
                <p className="text-white/70 font-sans md:text-lg">
                    Deploy KAI universally across Telegram, Discord, and X. Choose the scale that fits your community.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-32 max-w-5xl mx-auto">
                {/* FREE TIER */}
                <div className="bg-charcoal rounded-2xl p-8 border border-white/5 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-white">Starter (Free)</h3>
                        <div className="text-4xl font-bold font-sans text-white mb-6">$0<span className="text-lg text-white/50 font-normal">/mo</span></div>
                        <ul className="flex flex-col gap-3 text-sm text-white/70 mb-8 font-sans">
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> Supports Telegram, Discord & X</li>
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> Standard KAI AI Agent</li>
                            <li className="flex items-center gap-2"><span className="text-orange">~</span> Ad-Supported Experience</li>
                        </ul>
                    </div>
                    <a href="/checkout?tier=starter" className="w-full py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors text-center block">Secure Free Tier</a>
                </div>

                {/* PRO TIER */}
                <div className="bg-teal/10 rounded-2xl p-8 border border-teal/30 flex flex-col justify-between relative shadow-[0_20px_40px_rgba(0,161,159,0.15)] transform md:-translate-y-4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal text-black text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</div>
                    <div>
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-teal">Pro</h3>
                        <div className="text-4xl font-bold font-sans text-white mb-6">$30<span className="text-lg text-white/50 font-normal">/mo</span></div>
                        <ul className="flex flex-col gap-3 text-sm text-white/80 mb-8 font-sans">
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> Supports Telegram, Discord & X</li>
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> Advanced KAI AI Agent</li>
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> 100% Ad-Free Experience</li>
                        </ul>
                    </div>
                    <a href="/checkout?tier=pro" className="w-full py-3 rounded-xl bg-teal text-black font-bold text-sm hover:bg-teal/90 transition-colors text-center block">Initialize Pro</a>
                </div>

                {/* ENTERPRISE TIER */}
                <div className="bg-charcoal rounded-2xl p-8 border border-orange/20 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-orange">Enterprise</h3>
                        <div className="text-4xl font-bold font-sans text-white mb-6">$1,000<span className="text-lg text-white/50 font-normal">/mo</span></div>
                        <ul className="flex flex-col gap-3 text-sm text-white/70 mb-8 font-sans">
                            <li className="flex items-center gap-2"><span className="text-orange">✓</span> Supports Telegram, Discord & X</li>
                            <li className="flex items-center gap-2"><span className="text-orange">✓</span> Custom KAI Training Models</li>
                            <li className="flex items-center gap-2"><span className="text-orange">✓</span> Dedicated Human Support Agent</li>
                            <li className="flex items-center gap-2"><span className="text-orange">✓</span> 100% Ad-Free Experience</li>
                        </ul>
                    </div>
                    <a href="/checkout?tier=enterprise" className="w-full py-3 rounded-xl bg-orange text-white font-bold text-sm hover:bg-orange/90 transition-colors text-center block">Secure Enterprise Setup</a>
                </div>
            </div>

            {/* Conversion Form */}
            <div id="demo" className="w-full max-w-4xl bg-teal/10 border border-teal/20 backdrop-blur-md text-white rounded-3xl p-12 md:p-16 shadow-[0_30px_60px_rgba(0,161,159,0.2)] flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter leading-[0.9] mb-4">
                        Don't get <br /><span className="text-orange font-normal text-5xl md:text-6xl">left behind.</span>
                    </h2>
                    <p className="text-white/70 text-sm font-sans mb-8">
                        Book a free 60-minute strategic consultation with Mitchell Mahaffey.
                    </p>
                    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-orange/80">
                        <span className="w-2 h-2 rounded-full bg-orange animate-pulse"></span>
                        Only 4 slots remaining
                    </div>
                </div>

                <div className="flex-1 w-full relative">
                    <form
                        className="flex flex-col gap-4 w-full"
                        onSubmit={(e) => { e.preventDefault(); alert("Initialization sequence started."); }}
                    >
                        <input
                            type="email"
                            placeholder="ENTER WORK EMAIL"
                            className="w-full bg-charcoal/5 border border-white/10 rounded-full px-6 py-4 text-sm font-sans text-white focus:outline-none focus:border-orange/50 transition-colors"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-orange text-white rounded-full px-6 py-4 text-sm font-sans font-bold uppercase tracking-wider transition-transform hover:scale-105 active:scale-95"
                        >
                            Secure Your Spot
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Membership;
