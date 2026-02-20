import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
    {
        id: 1,
        title: 'KAI: The Voice That Scales',
        desc: 'Silence leaves room for FUD. KAI provides instant, brand-safe reassurance 24/7, turning moments of doubt into lasting ecosystem loyalty.',
        type: 'voice'
    },
    {
        id: 2,
        title: 'HAIMDALL: The Unseen Guardian',
        desc: 'A single phishing link can destroy a project. HAIMDALL proactively neutralizes scams, bots, and impersonators before your community even sees them.',
        type: 'radar'
    },
    {
        id: 3,
        title: 'The Trust Loop Philosophy',
        desc: 'Threat Blocked → KAI Reassures → Community Calmed. Stop putting out fires manually. Contain harm instantly and let your community grow on autopilot.',
        type: 'loop'
    }
];

const ProtocolCard = ({ protocol, index, cardsRef }) => {
    const isVoice = protocol.type === 'voice';
    const isRadar = protocol.type === 'radar';
    const isLoop = protocol.type === 'loop';

    const animRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            if (isVoice) {
                // Audio Wave Animation
                gsap.to('.audio-bar', {
                    height: (i) => {
                        // Create a wave pattern: taller in middle, shorter on edges
                        const heights = [30, 60, 100, 140, 180, 140, 100, 60, 30];
                        // Random addition for organic feel
                        return heights[i] + Math.random() * 40;
                    },
                    duration: 0.6,
                    yoyo: true,
                    repeat: -1,
                    stagger: {
                        amount: 0.8,
                        yoyo: true,
                        repeat: -1,
                        ease: "sine.inOut"
                    },
                    ease: "sine.inOut"
                });
            }
            if (isRadar) {
                gsap.to('.radar-sweep', {
                    rotate: 360,
                    duration: 3,
                    repeat: -1,
                    ease: 'none',
                    transformOrigin: 'center center'
                });

                // Threat dots pulsating red then disappearing
                gsap.to('.threat-dot', {
                    scale: 0,
                    opacity: 0,
                    duration: 0.4,
                    stagger: {
                        each: 1,
                        repeat: -1,
                        repeatDelay: 0.2
                    },
                    ease: 'power1.in'
                });
            }
            if (isLoop) {
                const tl = gsap.timeline({ repeat: -1 });
                tl.to('.loop-node-1', { opacity: 1, scale: 1.3, borderColor: '#F7931A', boxShadow: '0 0 20px rgba(247,147,26,0.6)', duration: 0.5 })
                    .to('.loop-node-1', { opacity: 0.3, scale: 1, borderColor: '#333', boxShadow: 'none', duration: 0.5 })
                    .to('.loop-node-2', { opacity: 1, scale: 1.3, borderColor: '#00A19F', boxShadow: '0 0 20px rgba(0,161,159,0.6)', duration: 0.5 }, "-=0.2")
                    .to('.loop-node-2', { opacity: 0.3, scale: 1, borderColor: '#333', boxShadow: 'none', duration: 0.5 })
                    .to('.loop-node-3', { opacity: 1, scale: 1.3, borderColor: '#FFFFFF', boxShadow: '0 0 20px rgba(255,255,255,0.6)', duration: 0.5 }, "-=0.2")
                    .to('.loop-node-3', { opacity: 0.3, scale: 1, borderColor: '#333', boxShadow: 'none', duration: 0.5 });
            }
        }, animRef);
        return () => ctx.revert();
    }, [isVoice, isRadar, isLoop]);

    return (
        <div
            ref={(el) => (cardsRef.current[index] = el)}
            className="sticky hover-container w-full h-[100vh] flex items-center justify-center p-4 md:p-12 mb-24 last:mb-0"
            // style={{ top: 0, paddingTop: `${index * 2}rem` }} // Slight offset if desired
            style={{ top: '0vh' }}
        >
            <div className="w-full max-w-6xl h-auto md:h-[80vh] min-h-[80vh] bg-black rounded-3xl p-6 md:p-16 flex flex-col md:flex-row shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-white/10 overflow-hidden transform-gpu origin-top">
                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center h-full z-10 pr-0 md:pr-8">
                    <div className="text-xs font-mono text-white/50 uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                        Phase 0{protocol.id} // {protocol.type.toUpperCase()}
                    </div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight leading-[1] mb-6">
                        {protocol.title}
                    </h3>
                    <p className="text-white/70 md:text-lg max-w-md font-sans">
                        {protocol.desc}
                    </p>
                </div>

                {/* Animation Container */}
                <div
                    ref={animRef}
                    className="flex-1 w-full h-full min-h-[35vh] md:min-h-[40vh] bg-charcoal rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center relative perspective-[1000px] mt-8 md:mt-0"
                >
                    {isVoice && (
                        <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black to-charcoal">
                            {/* Audio Waveform Effect */}
                            <div className="flex items-center gap-2 z-20">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-3 md:w-4 rounded-full bg-gradient-to-t from-teal/30 to-teal shadow-[0_0_15px_rgba(0,161,159,0.8)] audio-bar audio-bar-${i}`}
                                        style={{ height: '30px' }}
                                    ></div>
                                ))}
                            </div>

                            {/* Ambient Glow */}
                            <div className="absolute w-64 h-64 bg-teal/10 rounded-full blur-[80px] z-10"></div>
                        </div>
                    )}

                    {isRadar && (
                        <div className="w-full h-full flex items-center justify-center relative bg-black/20 overflow-hidden">
                            {/* Radar Circles */}
                            <div className="absolute w-64 h-64 border border-teal/20 rounded-full"></div>
                            <div className="absolute w-40 h-40 border border-teal/20 rounded-full"></div>
                            <div className="absolute w-16 h-16 border border-teal/50 rounded-full bg-teal/10 z-10 flex text-teal items-center justify-center">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                </svg>
                            </div>

                            {/* Radar Sweep */}
                            <div className="absolute w-64 h-64 rounded-full radar-sweep z-20" style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(0, 161, 159, 0.4) 100%)' }}></div>

                            {/* Threat Dots */}
                            <div className="absolute w-4 h-4 bg-orange rounded-full threat-dot shadow-[0_0_15px_#F7931A] z-30" style={{ top: '30%', left: '65%' }}></div>
                            <div className="absolute w-4 h-4 bg-orange rounded-full threat-dot shadow-[0_0_15px_#F7931A] z-30" style={{ top: '65%', left: '35%' }}></div>
                            <div className="absolute w-4 h-4 bg-orange rounded-full threat-dot shadow-[0_0_15px_#F7931A] z-30" style={{ top: '40%', left: '25%' }}></div>

                            {/* Crosshairs */}
                            <div className="absolute w-64 h-[1px] bg-teal/20"></div>
                            <div className="absolute h-64 w-[1px] bg-teal/20"></div>
                        </div>
                    )}

                    {isLoop && (
                        <div className="w-full h-full flex items-center justify-center relative">
                            {/* Background track */}
                            <div className="relative w-72 h-72 rounded-full border border-white/5 flex items-center justify-center">
                                {/* Center text */}
                                <div className="text-white/30 font-mono text-xs text-center flex flex-col items-center gap-2">
                                    <svg className="w-6 h-6 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    TRUST LOOP
                                </div>

                                {/* Node 1: Block */}
                                <div className="absolute top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-charcoal border border-[#333] rounded-full flex justify-center items-center loop-node-1 opacity-30 z-10 transition-colors">
                                    <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                </div>

                                {/* Node 2: Reassure */}
                                <div className="absolute top-[80%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-charcoal border border-[#333] rounded-full flex justify-center items-center loop-node-2 opacity-30 z-10 transition-colors">
                                    <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                </div>

                                {/* Node 3: Calm */}
                                <div className="absolute top-[80%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-charcoal border border-[#333] rounded-full flex justify-center items-center loop-node-3 opacity-30 z-10 transition-colors">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Protocol = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Loop through all cards except the last one
            cardsRef.current.forEach((card, i) => {
                if (i === cardsRef.current.length - 1) return; // Don't animate the last card out

                // Target specifically the inner rounded container (the actual visual card)
                const innerCard = card.querySelector('.bg-black');

                ScrollTrigger.create({
                    trigger: card,
                    start: "top top", // When this card hits the top
                    endTrigger: cardsRef.current[i + 1], // Until the next card
                    end: "top top", // hits the top
                    pin: true,
                    pinSpacing: false, // Don't add spacing, let them stack
                    id: `card-${i}`
                });

                // The animation for shrinking the card as the NEXT card comes up
                gsap.to(innerCard, {
                    scale: 0.9,
                    filter: 'blur(20px)',
                    opacity: 0.5,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: cardsRef.current[i + 1],
                        start: "top bottom", // As soon as the next card enters the bottom of viewport
                        end: "top top", // Until the next card reaches the top
                        scrub: true,
                    }
                });
            });

            // Pin the last card too so it stays while we scroll past
            ScrollTrigger.create({
                trigger: cardsRef.current[cardsRef.current.length - 1],
                start: "top top",
                end: "+=100%", // Hold for a bit
                pin: true,
                pinSpacing: true
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" className="relative w-full bg-black py-24">
            <div className="max-w-6xl mx-auto px-8 md:px-12 mb-16 h-[20vh] flex items-end">
                <h2 className="text-4xl md:text-6xl font-sans font-semibold tracking-tighter text-white leading-[0.9]">
                    Every <span className="drama-text text-orange font-normal">Conversation</span> <br />
                    Counts.
                </h2>
            </div>

            <div ref={containerRef} className="relative w-full">
                {protocols.map((protocol, i) => (
                    <ProtocolCard
                        key={protocol.id}
                        protocol={protocol}
                        index={i}
                        cardsRef={cardsRef}
                    />
                ))}
            </div>
        </section>
    );
};

export default Protocol;
