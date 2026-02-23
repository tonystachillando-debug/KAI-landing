import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Membership = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="scale" className="py-32 px-4 md:px-8 bg-black w-full max-w-[90rem] mx-auto text-white flex flex-col items-center">

            {/* Ecosystem Scale Header */}
            <div className="text-center mb-12 max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-sans font-semibold tracking-tighter text-white leading-[0.9] mb-6">
                    Simple, Transparent <span className="text-orange font-normal text-5xl md:text-7xl">Pricing.</span>
                </h2>
                <p className="text-white/70 font-sans md:text-lg mb-8">
                    Deploy KAI universally across Telegram, Discord, and X. Choose the scale that fits your community.
                </p>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-4 text-sm font-sans font-medium text-white/80">
                    <span className={!isYearly ? "text-white" : "text-white/40"}>Monthly</span>
                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        className="relative w-14 h-7 bg-charcoal rounded-full border border-white/20 transition-colors focus:outline-none"
                    >
                        <div className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full transition-transform duration-300 ${isYearly ? "translate-x-7 bg-orange shadow-[0_0_10px_rgba(247,147,26,0.6)]" : "translate-x-0 bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)]"}`} />
                    </button>
                    <span className={isYearly ? "text-orange" : "text-white/40"}>Yearly (Save 20%)</span>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-32 max-w-7xl mx-auto">
                {/* PRO TIER */}
                <div className="bg-charcoal rounded-2xl p-8 border border-white/5 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-white">Pro</h3>
                        <div className="mb-6 flex flex-col h-16 justify-center">
                            <div className="text-4xl font-bold font-sans text-white">
                                {isYearly ? '$39' : '$79'}<span className="text-lg text-white/50 font-normal">/mo</span>
                            </div>
                            {isYearly && <span className="text-xs text-white/50 mt-1">Billed $468 yearly</span>}
                        </div>
                        <ul className="flex flex-col gap-3 text-sm text-white/70 mb-8 font-sans">
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> Supports Telegram, Discord & X</li>
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> Standard KAI AI Agent</li>
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> Standard Support</li>
                        </ul>
                    </div>
                    <Link to={`/checkout?tier=pro&billing=${isYearly ? 'yearly' : 'monthly'}`} className="w-full py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors text-center block mt-auto">Initialize Pro</Link>
                </div>

                {/* BUSINESS TIER */}
                <div className="bg-charcoal rounded-2xl p-8 border border-teal/20 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-teal">Business</h3>
                        <div className="mb-6 flex flex-col h-16 justify-center">
                            <div className="text-4xl font-bold font-sans text-white">
                                {isYearly ? '$79' : '$149'}<span className="text-lg text-white/50 font-normal">/mo</span>
                            </div>
                            {isYearly && <span className="text-xs text-teal mt-1">Billed $948 yearly</span>}
                        </div>
                        <ul className="flex flex-col gap-3 text-sm text-white/70 mb-8 font-sans">
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> Everything in Pro</li>
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> Advanced KAI AI Agent</li>
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> Priority Support</li>
                        </ul>
                    </div>
                    <Link to={`/checkout?tier=business&billing=${isYearly ? 'yearly' : 'monthly'}`} className="w-full py-3 rounded-xl border border-teal text-white font-bold text-sm hover:bg-teal/20 transition-colors text-center block mt-auto">Deploy Business</Link>
                </div>

                {/* SCALE TIER (Most Popular) */}
                <div className="bg-teal/10 rounded-2xl p-8 border border-teal/40 flex flex-col justify-between relative shadow-[0_20px_40px_rgba(0,161,159,0.15)] transform lg:-translate-y-4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal text-black text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</div>
                    <div>
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-teal">Scale</h3>
                        <div className="mb-6 flex flex-col h-16 justify-center">
                            <div className="text-4xl font-bold font-sans text-white">
                                {isYearly ? '$249' : '$499'}<span className="text-lg text-white/50 font-normal">/mo</span>
                            </div>
                            {isYearly && <span className="text-xs text-teal mt-1">Billed $2,988 yearly</span>}
                        </div>
                        <ul className="flex flex-col gap-3 text-sm text-white/80 mb-8 font-sans">
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> Everything in Business</li>
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> Priority HAIMDALL Processing</li>
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> Custom Brand Persona</li>
                            <li className="flex items-center gap-2"><span className="text-teal">✓</span> API Access</li>
                        </ul>
                    </div>
                    <Link to={`/checkout?tier=scale&billing=${isYearly ? 'yearly' : 'monthly'}`} className="w-full py-3 rounded-xl bg-teal text-black font-bold text-sm hover:bg-teal/90 transition-colors text-center block mt-auto">Deploy Scale</Link>
                </div>

                {/* ENTERPRISE TIER */}
                <div className="bg-charcoal rounded-2xl p-8 border border-orange/20 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-orange">Enterprise</h3>
                        <div className="mb-6 flex flex-col h-16 justify-center">
                            <div className="text-4xl font-bold font-sans text-white">
                                {isYearly ? '$499' : '$999'}<span className="text-lg text-white/50 font-normal">/mo</span>
                            </div>
                            {isYearly && <span className="text-xs text-orange mt-1">Billed $5,988 yearly</span>}
                        </div>
                        <ul className="flex flex-col gap-3 text-sm text-white/70 mb-8 font-sans">
                            <li className="flex items-center gap-2"><span className="text-orange">✓</span> Sub-second Reaction Times</li>
                            <li className="flex items-center gap-2"><span className="text-orange">✓</span> Custom Training Models</li>
                            <li className="flex items-center gap-2"><span className="text-orange">✓</span> Dedicated Human Support</li>
                            <li className="flex items-center gap-2"><span className="text-orange">✓</span> SLA Guarantee</li>
                        </ul>
                    </div>
                    <Link to={`/checkout?tier=enterprise&billing=${isYearly ? 'yearly' : 'monthly'}`} className="w-full py-3 rounded-xl bg-orange text-white font-bold text-sm hover:bg-orange/90 transition-colors text-center block mt-auto">Secure Setup</Link>
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
