import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CinematicDashboard = () => {
    const containerRef = useRef(null);
    const dashRef = useRef(null);
    const statsRef = useRef([]);
    const progressRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Scroll Reveal Animation for the entire section
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse'
                }
            });

            tl.from('.dash-header', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            })
                .from('.dash-card', {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power4.out'
                }, '-=0.4')
                // Count up animations for stats
                .fromTo(statsRef.current[0],
                    { innerHTML: 0 },
                    { innerHTML: 132, duration: 2, snap: { innerHTML: 1 }, ease: 'power2.out' }, '-=0.5'
                )
                .fromTo(statsRef.current[1],
                    { innerHTML: 0 },
                    { innerHTML: 95, duration: 2, snap: { innerHTML: 1 }, ease: 'power2.out' }, '-=2'
                )
                // Progress Bar Fill
                .fromTo(progressRef.current,
                    { width: '0%' },
                    { width: '75%', duration: 1.5, ease: 'power3.inOut' }, '-=1.5'
                );

            // 2. Cinematic 3D Mouse Parallax (Tilt Effect)
            const handleMouseMove = (e) => {
                if (!dashRef.current) return;

                const rect = dashRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                // Calculate rotation based on mouse position
                const rotateX = -(y / rect.height) * 15; // Max 15 degree tilt
                const rotateY = (x / rect.width) * 15;

                gsap.to(dashRef.current, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformPerspective: 1000,
                    ease: 'power2.out',
                    duration: 0.5
                });

                // Inner layer parallax for deeper 3D effect
                gsap.to('.parallax-layer', {
                    x: (x / rect.width) * 20,
                    y: (y / rect.height) * 20,
                    ease: 'power2.out',
                    duration: 0.5
                });
            };

            const handleMouseLeave = () => {
                if (!dashRef.current) return;
                gsap.to(dashRef.current, {
                    rotateX: 0,
                    rotateY: 0,
                    ease: 'elastic.out(1, 0.3)',
                    duration: 1.5
                });
                gsap.to('.parallax-layer', {
                    x: 0,
                    y: 0,
                    ease: 'elastic.out(1, 0.3)',
                    duration: 1.5
                });
            };

            const dashElement = dashRef.current;
            dashElement.addEventListener('mousemove', handleMouseMove);
            dashElement.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                dashElement.removeEventListener('mousemove', handleMouseMove);
                dashElement.removeEventListener('mouseleave', handleMouseLeave);
            };

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-32 bg-black overflow-hidden flex flex-col items-center justify-center min-h-screen">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opactiy-50">
                <div className="w-[80vw] h-[80vw] bg-teal/10 rounded-full blur-[150px] mix-blend-screen" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">

                {/* Header Phase */}
                <div className="dash-header text-center mb-20 max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-white mb-6">
                        Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-orange">Dashboard</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-sans text-white/50 max-w-2xl mx-auto">
                        One unified intelligence hub. KAI actively engages your community on Telegram, Discord, and X, while HAIMDALL silently neutralizes threats (visible only from this command center).
                    </p>
                </div>

                {/* Main Dashboard Container - 3D Tilt Wrapper */}
                <div
                    ref={dashRef}
                    className="w-full rounded-[2rem] p-px bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_100px_rgba(0,161,159,0.15)] perspective-1000 transform-style-3d will-change-transform"
                >
                    <div className="w-full h-full bg-charcoal/90 backdrop-blur-3xl rounded-[2rem] p-6 md:p-12 border border-white/5 overflow-hidden relative">

                        {/* Inner Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">

                            {/* Card 1: Main Control Node */}
                            <div className="dash-card lg:col-span-2 row-span-2 bg-black/50 border border-white/10 rounded-3xl p-8 flex flex-col justify-between transform-style-3d relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="flex justify-between items-start mb-12 parallax-layer">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center font-bold text-black text-sm">K</div>
                                        <span className="font-mono text-sm tracking-widest text-white/50 uppercase">Dashboard Hub</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                                        <span className="font-mono text-xs text-teal">System Online</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-8 parallax-layer">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                            <span className="font-mono text-xs text-white/50 uppercase">Engagement Boost</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span ref={el => statsRef.current[0] = el} className="text-5xl md:text-7xl font-bold font-sans text-white">0</span>
                                            <span className="text-orange font-mono text-xl">+28%</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                            <span className="font-mono text-xs text-white/50 uppercase">Community Health</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span ref={el => statsRef.current[1] = el} className="text-5xl md:text-7xl font-bold font-sans text-white">0</span>
                                            <span className="text-teal font-mono text-xl">%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: KAI In Action Node */}
                            <div className="dash-card bg-[#0A0A0A] border border-white/5 rounded-3xl p-6 flex flex-col justify-center parallax-layer">
                                <div className="flex items-center gap-3 mb-6">
                                    <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                    <span className="font-sans font-medium text-sm text-white">KAI "In Action"</span>
                                </div>
                                <div className="space-y-4 font-mono text-xs">
                                    <p className="text-white/60">"Is the new update live?"</p>
                                    <div className="bg-teal/10 border border-teal/20 text-teal p-3 rounded-lg">
                                        ✓ Yes, the update was launched today at 14:00 UTC. Check announcements.
                                    </div>
                                    <p className="text-white/40 text-[10px] uppercase mt-4">Context: FAQ Matched</p>
                                </div>
                            </div>

                            {/* Card 3: HAIMDALL Threat Matrix */}
                            <div className="dash-card bg-[#0A0A0A] border border-white/5 rounded-3xl p-6 flex flex-col justify-center parallax-layer">
                                <div className="flex items-center gap-3 mb-6">
                                    <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span className="font-sans font-medium text-sm text-white">HAIMDALL Incident</span>
                                </div>
                                <div className="space-y-3 font-mono text-xs">
                                    <div className="flex justify-between text-white/80">
                                        <span className="text-orange truncate">· Phishing Link Detected</span>
                                    </div>
                                    <div className="flex justify-between text-white/50">
                                        <span>· Link Removed</span>
                                    </div>
                                    <div className="flex justify-between text-white/50">
                                        <span>· User Banned</span>
                                    </div>
                                </div>

                                {/* Progress Bar Container */}
                                <div className="mt-8">
                                    <div className="flex justify-between text-[10px] text-white/40 font-mono mb-2 uppercase">
                                        <span>Threat Analysis</span>
                                        <span>Neutralized</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div ref={progressRef} className="h-full bg-gradient-to-r from-orange to-orange/50 rounded-full shadow-[0_0_10px_#F7931A]"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CinematicDashboard;
