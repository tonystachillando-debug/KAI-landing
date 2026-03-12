import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureTable from './FeatureTable';
import PricingFAQ from './PricingFAQ';

const Membership = () => {
    const [isYearly, setIsYearly] = useState(true);
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [socialProfile, setSocialProfile] = useState('');
    const [messages, setMessages] = useState('');
    const [plan, setPlan] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (email.toLowerCase().endsWith('@gmail.com')) {
            setError('Please use a legitimate work email. Gmail addresses are not accepted for pilots.');
            return;
        }

        const urlPattern = /^(https?:\/\/)[^\s]+$/i;
        if (!urlPattern.test(socialProfile)) {
            setError('Please provide a valid URL (must start with http:// or https://).');
            return;
        }

        setIsSubmitting(true);

        try {
            await fetch('https://formsubmit.co/ajax/sales@amazix.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: 'New KAI Pilot Request!',
                    _cc: 'antonio.visceglia@amazix.com',
                    email: email,
                    company: company,
                    socialProfile: socialProfile,
                    messages: messages,
                    planInterest: plan,
                    _template: 'box'
                })
            });

            // Redirect to thank you page after successful submission
            navigate('/thank-you');
        } catch (err) {
            console.error('Submission failed', err);
            setError('There was an error submitting your request. Please try again.');
            setIsSubmitting(false);
        }
    };

    return (
        <section id="scale" className="py-32 px-4 md:px-8 bg-black w-full max-w-[90rem] mx-auto text-white flex flex-col items-center" aria-label="KAI Pricing and Pilot Form">

            {/* Ecosystem Scale Header */}
            <header className="text-center mb-12 max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-sans font-semibold tracking-tighter text-white leading-[0.9] mb-6">
                    Simple, Transparent <span className="text-orange font-normal text-5xl md:text-7xl">Pricing.</span>
                </h2>
                <p className="text-white/70 font-sans md:text-lg mb-8">
                    Deploy KAI universally across Telegram, Discord, and Web3 social layers. Choose the scale that fits your community management needs.
                </p>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-4 text-sm font-sans font-medium text-white/80">
                    <span className={!isYearly ? "text-white" : "text-white/40"} aria-hidden="true">Monthly</span>
                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        aria-pressed={isYearly}
                        aria-label="Toggle Yearly Billing"
                        className="relative w-14 h-7 bg-charcoal rounded-full border border-white/20 transition-colors focus:outline-none"
                    >
                        <div className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full transition-transform duration-300 ${isYearly ? "translate-x-7 bg-orange shadow-[0_0_10px_rgba(247,147,26,0.6)]" : "translate-x-0 bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)]"}`} />
                    </button>
                    <span className={isYearly ? "text-orange" : "text-white/40"} aria-hidden="true">Yearly (Save 20%)</span>
                </div>
            </header>

            {/* Subscription Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16 max-w-6xl mx-auto">
                {/* STARTER TIER (Most Popular) */}
                <article className="bg-teal/10 rounded-2xl p-8 border border-teal/40 flex flex-col justify-between relative shadow-[0_20px_40px_rgba(0,161,159,0.15)]" aria-label="Starter Pricing Plan">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal text-black text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</div>
                    <div>
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-teal">Starter</h3>
                        <p className="text-xs text-white/50 font-sans mb-4 h-8 leading-snug">Small Web3 communities, creators testing safety baseline</p>
                        <div className="mb-6 flex flex-col h-16 justify-center">
                            <div className="text-4xl font-bold font-sans text-white">
                                {isYearly ? '$79' : '$99'}<span className="text-lg text-white/50 font-normal">/mo</span>
                            </div>
                            {isYearly && <span className="text-xs text-teal mt-1">Billed $948 yearly</span>}
                        </div>
                        <ul className="flex flex-col gap-3 text-sm text-white/70 mb-8 font-sans" aria-label="Starter Plan Features">
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5" aria-hidden="true">✓</span> <span>Minimal HAIMDALL rules & anti-flood</span></li>
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5" aria-hidden="true">✓</span> <span>Basic impersonation & spam deletion</span></li>
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5" aria-hidden="true">✓</span> <span>Capped KAI engagement</span></li>
                        </ul>
                    </div>
                    <a href="#demo" onClick={() => setPlan('Starter')} className="w-full py-3 rounded-xl bg-teal text-black font-bold text-sm hover:bg-teal/90 transition-colors text-center block mt-auto" aria-label="Initialize Starter Plan">Initialize Starter</a>
                </article>

                {/* GROWTH GUARD TIER */}
                <article className="bg-charcoal rounded-2xl p-8 border border-white/5 hover:border-teal/20 transition-colors flex flex-col justify-between" aria-label="Growth Guard Pricing Plan">
                    <div>
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-white hover:text-teal transition-colors">Growth Guard</h3>
                        <p className="text-xs text-white/50 font-sans mb-4 h-8 leading-snug">10k–100k communities needing real bot protection</p>
                        <div className="mb-6 flex flex-col h-16 justify-center">
                            <div className="text-4xl font-bold font-sans text-white">
                                {isYearly ? '$799' : '$999'}<span className="text-lg text-white/50 font-normal">/mo</span>
                            </div>
                            {isYearly && <span className="text-xs text-white/50 mt-1">Billed $9,588 yearly</span>}
                        </div>
                        <ul className="flex flex-col gap-3 text-sm text-white/70 mb-8 font-sans" aria-label="Growth Guard Plan Features">
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5" aria-hidden="true">✓</span> <span>KAI + HAIMDALL (TG/Discord/Twitch)</span></li>
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5" aria-hidden="true">✓</span> <span>Governance dashboard & reporting</span></li>
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5" aria-hidden="true">✓</span> <span>Defined escalation windows</span></li>
                        </ul>
                    </div>
                    <a href="#demo" onClick={() => setPlan('Growth Guard')} className="w-full py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors text-center block mt-auto" aria-label="Deploy Growth Guard Plan">Deploy Growth Guard</a>
                </article>

                {/* INSTITUTIONAL TIER */}
                <article className="bg-charcoal rounded-2xl p-8 border border-orange/20 flex flex-col justify-between" aria-label="Institutional Pricing Plan">
                    <div>
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-orange">Institutional</h3>
                        <p className="text-xs text-white/50 font-sans mb-4 h-8 leading-snug">Exchanges, protocols, high-stakes Web3 ecosystems</p>
                        <div className="mb-6 flex flex-col h-16 justify-center">
                            <div className="text-4xl font-bold font-sans text-white">
                                {isYearly ? '$6,000' : '$7,500'}<span className="text-lg text-white/50 font-normal">/mo</span>
                            </div>
                            {isYearly && <span className="text-xs text-orange mt-1">Billed $72,000 yearly</span>}
                        </div>
                        <ul className="flex flex-col gap-3 text-sm text-white/70 mb-8 font-sans" aria-label="Institutional Plan Features">
                            <li className="flex items-start gap-2"><span className="text-orange mt-0.5" aria-hidden="true">✓</span> <span>Full KAI+HAIMDALL across all channels</span></li>
                            <li className="flex items-start gap-2"><span className="text-orange mt-0.5" aria-hidden="true">✓</span> <span>24/7 human coverage & escalation</span></li>
                            <li className="flex items-start gap-2"><span className="text-orange mt-0.5" aria-hidden="true">✓</span> <span>Incident response SOP & monthly review</span></li>
                        </ul>
                    </div>
                    <a href="#demo" onClick={() => setPlan('Institutional')} className="w-full py-3 rounded-xl bg-orange text-white font-bold text-sm hover:bg-orange/90 transition-colors text-center block mt-auto" aria-label="Contact Sales for Institutional Plan">Contact Sales</a>
                </article>
            </div>

            {/* One Shot Tiers Header */}
            <div className="text-center mb-8 max-w-2xl mt-16">
                <h3 className="text-2xl font-sans font-bold tracking-tight text-white/80">
                    Event-Driven Coverage
                </h3>
            </div>

            {/* LAUNCH SHIELD TIER (One Shot) */}
            <div className="grid grid-cols-1 w-full mb-32 max-w-3xl mx-auto">
                <article className="bg-charcoal/50 rounded-2xl p-8 border border-white/10 flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8 relative overflow-hidden group hover:border-teal/30 transition-colors" aria-label="Launch Shield Fixed Plan">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold font-sans tracking-tight mb-2 text-white group-hover:text-teal transition-colors">Launch Shield</h3>
                        <p className="text-xs text-white/60 font-sans mb-6 leading-snug">Projects in the TGE/listing window needing community guardrails</p>
                        <ul className="flex flex-col gap-3 text-sm text-white/80 font-sans" aria-label="Launch Shield Plan Features">
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5" aria-hidden="true">✓</span> <span>Pre-launch hardening + playbook</span></li>
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5" aria-hidden="true">✓</span> <span>Active monitoring hardened</span></li>
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5" aria-hidden="true">✓</span> <span>Launch-day "war room" coverage</span></li>
                            <li className="flex items-start gap-2"><span className="text-teal mt-0.5" aria-hidden="true">✓</span> <span>Post-launch handoff & daily logs</span></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-auto flex flex-col items-center justify-center md:items-end border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                        <div className="mb-6 flex flex-col items-center justify-center text-center">
                            <div className="text-4xl font-bold font-sans text-white">
                                $7,500<span className="text-lg text-white/50 font-normal">/fixed</span>
                            </div>
                            <span className="text-xs text-white/50 mt-1 uppercase tracking-widest font-mono">30-45 Days</span>
                        </div>
                        <a href="#demo" onClick={() => setPlan('Launch Shield')} className="w-full md:w-auto px-8 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors text-center inline-block" aria-label="Secure Launch Shield Plan">Secure Launch Shield</a>
                    </div>
                </article>
            </div>

            {/* Detailed Feature Comparison */}
            <FeatureTable />

            {/* Pricing FAQ */}
            <PricingFAQ />

            {/* Conversion Form */}
            <div id="demo" className="w-full max-w-3xl bg-teal/10 border border-teal/20 backdrop-blur-md text-white rounded-3xl p-10 md:p-14 shadow-[0_30px_60px_rgba(0,161,159,0.2)] flex flex-col gap-8 mx-auto">
                <div className="w-full flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter leading-[1.1] mb-4">
                        Stop pitching bots. <br /><span className="text-orange font-normal text-4xl md:text-5xl">Start your Pilot.</span>
                    </h2>
                    <p className="text-white/70 text-sm md:text-base font-sans mb-6 leading-relaxed max-w-lg">
                        Replace the 5-day sandbox with a 14-Day Live Pilot in your real environment. See the Governance Impact Summary before you commit.
                    </p>
                    <div className="flex items-center justify-center gap-3 text-xs font-mono uppercase tracking-widest text-orange/80">
                        <span className="w-2 h-2 rounded-full bg-orange animate-pulse"></span>
                        Pilot Capacity Limited
                    </div>
                </div>

                <div className="w-full relative mt-4">
                    <form
                        className="flex flex-col gap-4 w-full"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="email"
                            placeholder="WORK EMAIL ADDRESS"
                            aria-label="Work Email Address"
                            className={`w-full bg-charcoal/40 border ${error && error.includes('email') ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-6 py-4 text-sm font-sans text-white focus:outline-none focus:border-orange/50 focus:bg-charcoal transition-colors`}
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <input
                                type="text"
                                placeholder="COMPANY OR PROTOCOL NAME"
                                aria-label="Company or Protocol Name"
                                className="w-full bg-charcoal/40 border border-white/10 rounded-xl px-6 py-4 text-sm font-sans text-white focus:outline-none focus:border-orange/50 focus:bg-charcoal transition-colors"
                                required
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />

                            <input
                                type="url"
                                placeholder="LINKEDIN OR X PROFILE URL"
                                aria-label="LinkedIn or X Profile URL"
                                className={`w-full bg-charcoal/40 border ${error && error.includes('URL') ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-6 py-4 text-sm font-sans text-white focus:outline-none focus:border-orange/50 focus:bg-charcoal transition-colors`}
                                required
                                value={socialProfile}
                                onChange={(e) => setSocialProfile(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <div className="relative w-full">
                                <select
                                    aria-label="Which plan are you interested in?"
                                    className="w-full bg-teal/10 border border-teal/20 rounded-xl px-6 py-4 text-sm font-sans text-white focus:outline-none focus:border-orange/50 transition-colors appearance-none cursor-pointer"
                                    required
                                    value={plan}
                                    onChange={(e) => setPlan(e.target.value)}
                                >
                                    <option value="" disabled className="bg-charcoal text-white/50">WHICH PLAN ARE YOU INTERESTED IN?</option>
                                    <option value="Starter" className="bg-charcoal">Starter ($79/mo)</option>
                                    <option value="Growth Guard" className="bg-charcoal">Growth Guard ($799/mo)</option>
                                    <option value="Institutional" className="bg-charcoal">Institutional ($6k/mo)</option>
                                    <option value="Launch Shield" className="bg-charcoal">Launch Shield (One-Shot)</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-white/50">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>

                            <div className="relative w-full">
                                <select
                                    aria-label="How many messages your community receives daily"
                                    className="w-full bg-teal/10 border border-teal/20 rounded-xl px-6 py-4 text-sm font-sans text-white focus:outline-none focus:border-orange/50 transition-colors appearance-none cursor-pointer"
                                    required
                                    value={messages}
                                    onChange={(e) => setMessages(e.target.value)}
                                >
                                    <option value="" disabled className="bg-charcoal text-white/50">MESSAGES RECEIVED DAILY?</option>
                                    <option value="0-1k" className="bg-charcoal">Under 1,000</option>
                                    <option value="1k-10k" className="bg-charcoal">1,000 - 10,000</option>
                                    <option value="10k-50k" className="bg-charcoal">10,000 - 50,000</option>
                                    <option value="50k+" className="bg-charcoal">50,000+</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-white/50">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                        </div>

                        {error && <div className="text-red-400 text-sm font-sans tracking-tight px-2 py-1 bg-red-500/10 border border-red-500/20 rounded-lg">{error}</div>}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full ${isSubmitting ? 'bg-orange/50 cursor-not-allowed' : 'bg-orange hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(247,147,26,0.3)]'} text-white rounded-xl px-6 py-4 mt-2 text-sm font-sans font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(247,147,26,0.15)]`}
                        >
                            {isSubmitting ? 'INITIALIZING...' : 'STOP YOUR SEARCH, START YOUR PILOT'}
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Membership;
