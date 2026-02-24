import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Hero = () => {
    const containerRef = useRef(null);
    const textRefs = useRef([]);
    const avatarRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Text entrance animation
            gsap.from(textRefs.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power4.out',
                delay: 0.2
            });

            // Cinematic WOW entrance for KAI Avatar
            gsap.fromTo(avatarRef.current,
                { y: 200, opacity: 0, scale: 0.95, filter: 'brightness(0.5) blur(10px)' },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    filter: 'brightness(1) blur(0px)',
                    duration: 2,
                    ease: 'expo.out',
                    delay: 0.6
                }
            );

            // Subtle floating / breathing animation for the avatar
            gsap.to(avatarRef.current, {
                y: -15,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 2.6
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[100dvh] pt-24 pb-8 flex items-center justify-center overflow-hidden bg-black"
        >
            {/* AmaZix Signature Radial Glow Background */}
            <div className="absolute inset-0 bg-black pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-teal/20 rounded-full blur-[150px] pointer-events-none opacity-80 mix-blend-screen" />

            {/* Ambient Avatar Backlight */}
            <div className="absolute right-[10%] top-[40%] w-[30vw] h-[50vw] bg-orange/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen" />

            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20" />

            {/* Content Container Split */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between h-full">

                {/* Left Text Content */}
                <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col justify-center h-full relative z-20 mt-16 md:mt-0">
                    <div className="overflow-hidden mb-[-0.5rem]">
                        <h1 ref={addToRefs} className="text-white text-5xl md:text-6xl lg:text-[5.5rem] font-sans font-bold tracking-tighter leading-[1] pb-2">
                            When crises hit,
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 ref={addToRefs} className="text-orange text-5xl md:text-6xl lg:text-[5.5rem] font-sans font-bold tracking-tighter leading-[1] pr-8 pb-4">
                            communities collapse.
                        </h1>
                    </div>

                    <div className="overflow-hidden mt-6 max-w-2xl">
                        <p ref={addToRefs} className="text-gray text-base md:text-xl font-sans leading-relaxed text-white/70">
                            Most projects don’t die from the exploit—they die from the trust collapse after.<br />
                            <span className="text-white font-medium">KAI stabilizes the story, while HAIMDALL stops the wolves. A unified Governance Guard for TGEs and growing networks.</span>
                        </p>
                    </div>

                    <div className="overflow-hidden mt-10">
                        <div ref={addToRefs} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            <Link to="/checkout" className="px-8 py-4 bg-orange text-white rounded-full font-sans font-bold tracking-wider text-sm transition-transform hover:scale-105 shadow-[0_0_30px_rgba(247,147,26,0.3)] inline-block text-center text-nowrap">
                                START 14-DAY LIVE PILOT
                            </Link>
                            <div className="flex flex-col gap-1 text-xs font-mono text-white/50 uppercase">
                                <span className="flex items-center gap-2"><span className="text-orange">✓</span> Eliminate 99% of spam</span>
                                <span className="flex items-center gap-2"><span className="text-orange">✓</span> Setup in under 5 minutes</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right KAI Avatar Content */}
                <div className="hidden md:flex absolute md:relative right-0 bottom-0 w-full md:w-[45%] lg:w-[40%] h-full justify-center md:justify-end items-end z-10 pointer-events-none">
                    <div className="transform translate-x-4 md:translate-x-8 -translate-y-8 md:-translate-y-12 flex justify-end items-end w-full">
                        <img
                            ref={avatarRef}
                            src="/kai-avatar.png"
                            alt="KAI Avatar"
                            className="w-[90%] max-w-none md:w-[110%] xl:w-[120%] h-auto max-h-[85vh] object-contain object-bottom filter drop-shadow-[0_-20px_60px_rgba(0,161,159,0.3)]"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
