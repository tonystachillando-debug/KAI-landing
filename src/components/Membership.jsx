import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Membership = () => {
    const [isYearly, setIsYearly] = useState(true);

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

            {/* Subscription Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16 max-w-6xl mx-auto">
                {/* STARTER TIER (Most Popular) */}
                <div className="bg-teal/10 rounded-2xl p-8 border border-teal/40 flex flex-col justify-between relative shadow-[0_20px_40px_rgba(0,161,159,0.15)] transform lg:-translate-y-4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal text-black text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</div>
                    <div>
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-teal">Starter</h3>
                        <p className="text-xs text-white/50 font-sans mb-4 h-8 leading-snug">Small communities, creators testing safety baseline</p>
                        <div className="mb-6 flex flex-col h-16 justify-center">
                            <div className="text-4xl font-bold font-sans text-white">
                                {isYearly ? '$79' : '$99'}<span className="text-lg text-white/50 font-normal">/mo</span>
                            </div>
                            {isYearly && <span className="text-xs text-teal mt-1">Billed $948 yearly</span>}
                        </div>
                        <ul className="flex flex-col gap-3 text-sm text-white/70 mb-8 font-sans">
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">✓</span> <span>Minimal HAIMDALL rules & anti-flood</span></li>
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">✓</span> <span>Basic impersonation & spam deletion</span></li>
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">✓</span> <span>Capped KAI engagement</span></li>
                        </ul>
                    </div>
                    <Link to={`/checkout?tier=starter&billing=${isYearly ? 'yearly' : 'monthly'}`} className="w-full py-3 rounded-xl bg-teal text-black font-bold text-sm hover:bg-teal/90 transition-colors text-center block mt-auto">Initialize Starter</Link>
                </div>

                {/* GROWTH GUARD TIER */}
                <div className="bg-charcoal rounded-2xl p-8 border border-white/5 hover:border-teal/20 transition-colors flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-white hover:text-teal transition-colors">Growth Guard</h3>
                        <p className="text-xs text-white/50 font-sans mb-4 h-8 leading-snug">10k–100k communities needing real protection</p>
                        <div className="mb-6 flex flex-col h-16 justify-center">
                            <div className="text-4xl font-bold font-sans text-white">
                                {isYearly ? '$799' : '$999'}<span className="text-lg text-white/50 font-normal">/mo</span>
                            </div>
                            {isYearly && <span className="text-xs text-white/50 mt-1">Billed $9,588 yearly</span>}
                        </div>
                        <ul className="flex flex-col gap-3 text-sm text-white/70 mb-8 font-sans">
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">✓</span> <span>KAI + HAIMDALL (TG/Discord/Twitch)</span></li>
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">✓</span> <span>Governance dashboard & reporting</span></li>
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">✓</span> <span>Defined escalation windows</span></li>
                        </ul>
                    </div>
                    <Link to={`/checkout?tier=growth&billing=${isYearly ? 'yearly' : 'monthly'}`} className="w-full py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors text-center block mt-auto">Deploy Growth Guard</Link>
                </div>

                {/* INSTITUTIONAL TIER */}
                <div className="bg-charcoal rounded-2xl p-8 border border-orange/20 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-orange">Institutional</h3>
                        <p className="text-xs text-white/50 font-sans mb-4 h-8 leading-snug">Exchanges, protocols, high-stakes ecosystems</p>
                        <div className="mb-6 flex flex-col h-16 justify-center">
                            <div className="text-4xl font-bold font-sans text-white">
                                {isYearly ? '$6,000' : '$7,500'}<span className="text-lg text-white/50 font-normal">/mo</span>
                            </div>
                            {isYearly && <span className="text-xs text-orange mt-1">Billed $72,000 yearly</span>}
                        </div>
                        <ul className="flex flex-col gap-3 text-sm text-white/70 mb-8 font-sans">
                            <li className="flex items-start gap-2"><span className="text-orange mt-0.5">✓</span> <span>Full KAI+HAIMDALL across all channels</span></li>
                            <li className="flex items-start gap-2"><span className="text-orange mt-0.5">✓</span> <span>24/7 human coverage & escalation</span></li>
                            <li className="flex items-start gap-2"><span className="text-orange mt-0.5">✓</span> <span>Incident response SOP & monthly review</span></li>
                        </ul>
                    </div>
                    <Link to={`/checkout?tier=institutional&billing=${isYearly ? 'yearly' : 'monthly'}`} className="w-full py-3 rounded-xl bg-orange text-white font-bold text-sm hover:bg-orange/90 transition-colors text-center block mt-auto">Contact Sales</Link>
                </div>
            </div>

            {/* One Shot Tiers Header */}
            <div className="text-center mb-8 max-w-2xl mt-16">
                <h3 className="text-2xl font-sans font-bold tracking-tight text-white/80">
                    Event-Driven Coverage
                </h3>
            </div>

            {/* LAUNCH SHIELD TIER (One Shot) */}
            <div className="grid grid-cols-1 w-full mb-32 max-w-3xl mx-auto">
                <div className="bg-charcoal/50 rounded-2xl p-8 border border-white/10 flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8 relative overflow-hidden group hover:border-teal/30 transition-colors">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-white group-hover:text-teal transition-colors">Launch Shield</h3>
                        <p className="text-xs text-white/60 font-sans mb-6 leading-snug">Projects in the TGE/listing window</p>
                        <ul className="flex flex-col gap-3 text-sm text-white/80 font-sans">
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">✓</span> <span>Pre-launch hardening + playbook</span></li>
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">✓</span> <span>Active monitoring hardened</span></li>
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">✓</span> <span>Launch-day "war room" coverage</span></li>
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5">✓</span> <span>Post-launch handoff & daily logs</span></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-auto flex flex-col items-center justify-center md:items-end border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                        <div className="mb-6 flex flex-col items-center justify-center text-center">
                            <div className="text-4xl font-bold font-sans text-white">
                                $7,500<span className="text-lg text-white/50 font-normal">/fixed</span>
                            </div>
                            <span className="text-xs text-white/50 mt-1 uppercase tracking-widest font-mono">30-45 Days</span>
                        </div>
                        <Link to={`/checkout?tier=launch&billing=fixed`} className="w-full md:w-auto px-8 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors text-center inline-block">Secure Launch Shield</Link>
                    </div>
                </div>
            </div>

            {/* Conversion Form */}
            <div id="demo" className="w-full max-w-4xl bg-teal/10 border border-teal/20 backdrop-blur-md text-white rounded-3xl p-12 md:p-16 shadow-[0_30px_60px_rgba(0,161,159,0.2)] flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tighter leading-[1.1] mb-4">
                        Stop pitching bots. <br /><span className="text-orange font-normal text-4xl md:text-5xl">Start your Pilot.</span>
                    </h2>
                    <p className="text-white/70 text-sm font-sans mb-8 leading-relaxed">
                        Replace the 5-day sandbox with a 14-Day Live Pilot in your real environment. See the Governance Impact Summary before you commit.
                    </p>
                    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-orange/80">
                        <span className="w-2 h-2 rounded-full bg-orange animate-pulse"></span>
                        Pilot Capacity Limited
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
                            stop your search, start your pilot
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Membership;
