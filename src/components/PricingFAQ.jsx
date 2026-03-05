import React, { useState } from 'react';

const faqs = [
    {
        question: "How long does onboarding take?",
        answer: "For Starter and Growth Guard, onboarding is immediate via our self-serve portal. Institutional and Launch Shield tiers involve a kickoff call and typically take 2-4 days to fully map out your custom HAIMDALL rule sets."
    },
    {
        question: "What happens if we exceed our monthly message cap?",
        answer: "We never hard-stop coverage during an attack or viral moment. If you consistently exceed your tier's limits for two consecutive months, your account success manager will reach out to discuss upgrading your plan."
    },
    {
        question: "Can we cancel our subscription at any time?",
        answer: "Yes. All monthly plans are strictly month-to-month. Yearly plans are billed upfront for a 20% discount but come with a 14-day full refund guarantee if the pilot does not meet your expectations."
    },
    {
        question: "How does the Launch Shield handoff work?",
        answer: "After the 30-45 day TGE or launch window, we provide a full post-mortem Governance Report. You can then choose to transition into a standard Growth Guard or Institutional tier without any interruption in service, retaining all historical threat data."
    },
    {
        question: "How does the 14-Day Pilot work?",
        answer: "We offer a 14-day live pilot in your production environment instead of a limited sandbox. Tell us about your community, select the plan you're interested in, and experience the full governance impact on your actual community before making your first ongoing payment. If KAI doesn't scale the trust, you don't pay."
    },
    {
        question: "Is KAI fully autonomous or human-assisted?",
        answer: "KAI handles 98% of basic moderation and threat mitigation autonomously via HAIMDALL. The remaining 2% of nuanced escalations are routed to our human intelligence team (for Institutional and Launch Shield tiers) or escalated to your designated community managers."
    }
];

const PricingFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="w-full max-w-3xl mx-auto mt-12 mb-24 px-4">
            <h3 className="text-2xl font-sans font-bold tracking-tight text-white mb-8 text-center">
                Frequently Asked Questions
            </h3>
            <div className="flex flex-col gap-4">
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className={`border rounded-xl transition-colors duration-300 overflow-hidden ${openIndex === idx ? 'border-teal/30 bg-teal/5' : 'border-white/10 bg-charcoal/30 hover:border-white/20'}`}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                            aria-expanded={openIndex === idx}
                        >
                            <span className="text-left font-bold font-sans text-sm md:text-base text-white/90">
                                {faq.question}
                            </span>
                            <span className={`ml-4 text-teal shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            </span>
                        </button>
                        <div
                            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="text-white/60 text-sm font-sans leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingFAQ;
