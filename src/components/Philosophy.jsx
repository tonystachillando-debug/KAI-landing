import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const containerRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax background
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Split text reveal effect (simulated since SplitText requires Club GreenSock)
            // We wrap words manually in the render, then animate them
            const words1 = gsap.utils.toArray('.word-1');
            const words2 = gsap.utils.toArray('.word-2');

            // Timeline for scroll reveal
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse'
                }
            });

            tl.from(words1, {
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out'
            })
                .from(words2, {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out'
                }, '-=0.4');

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Helper to split text into words for animation
    const splitText = (text, className) => {
        return text.split(' ').map((word, i) => (
            <span key={i} className={`inline-block overflow-hidden mr-3 md:mr-5`}>
                <span className={`inline-block ${className}`}>{word}</span>
            </span>
        ));
    };

    return (
        <section
            id="philosophy"
            ref={containerRef}
            className="relative w-full min-h-[80vh] bg-black text-white flex items-center justify-center overflow-hidden py-32"
        >
            {/* Background Paralax Texture */}
            <div
                ref={bgRef}
                className="absolute inset-0 w-full h-[130%] -top-[15%] opacity-20 bg-cover bg-center mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop")'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-12 flex flex-col items-center text-center">
                <div className="text-xs font-mono text-white/50 uppercase tracking-widest mb-16 px-4 py-2 border border-white/20 rounded-full inline-block">
                    Absolute ROI
                </div>

                <div className="flex flex-col gap-12 md:gap-24 w-full">
                    {/* Question 1 */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-3xl md:text-5xl lg:text-7xl font-sans font-medium text-white/40 tracking-tight leading-tight max-w-5xl text-balance">
                            {splitText("KAI didn't just manage our community...", "word-1")}
                        </h3>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-teal to-transparent mx-auto opacity-50"></div>

                    {/* Question 2 */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-4xl md:text-6xl lg:text-8xl font-sans font-bold text-wrap leading-tight max-w-5xl text-center">
                            <span className="text-white text-balance block my-2 md:my-4">
                                {splitText("It brought it to life.", "word-2 text-white")}
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
