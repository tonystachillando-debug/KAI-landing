import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const [activeVideo, setActiveVideo] = useState(null);
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
                                {splitText("KAI brought it to life.", "word-2 text-white")}
                            </span>
                        </h3>
                    </div>

                    {/* Square Video Carousel */}
                    <div className="w-full max-w-5xl mx-auto mt-8 md:mt-16 overflow-hidden">
                        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-12 pb-8 scrollbar-hide px-4 md:px-0">

                            {/* Video 1 */}
                            <div
                                onClick={() => setActiveVideo('/KAI.mp4')}
                                className="snap-center shrink-0 w-[85vw] md:w-[45%] aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,161,159,0.15)] relative group bg-charcoal/50 flex flex-col justify-center items-center cursor-pointer"
                            >
                                <video
                                    className="w-full h-full object-cover rounded-3xl"
                                    src="/KAI.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/40 xl:opacity-100 xl:bg-transparent">
                                    <div className="w-16 h-16 rounded-full bg-teal/80 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <span className="text-xs font-mono tracking-widest text-teal border border-teal/30 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full">KAI NATIVE</span>
                                </div>
                            </div>

                            {/* Video 2 */}
                            <div
                                onClick={() => setActiveVideo('/KA%20DEF%20STREAMER.mp4')}
                                className="snap-center shrink-0 w-[85vw] md:w-[45%] aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(247,147,26,0.15)] relative group bg-charcoal/50 flex flex-col justify-center items-center cursor-pointer"
                            >
                                <video
                                    className="w-full h-full object-cover rounded-3xl"
                                    src="/KA%20DEF%20STREAMER.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/40 xl:opacity-100 xl:bg-transparent">
                                    <div className="w-16 h-16 rounded-full bg-orange/80 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <span className="text-xs font-mono tracking-widest text-orange border border-orange/30 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full">STREAMER SUPPORT</span>
                                </div>
                            </div>

                            {/* Placeholder for 3rd Video if they add one */}
                            <div className="snap-center shrink-0 w-[85vw] md:w-[45%] aspect-square rounded-3xl overflow-hidden border border-dashed border-white/20 relative group bg-black/20 flex flex-col justify-center items-center">
                                <div className="text-white/30 text-sm font-mono tracking-widest uppercase">Intel Feed Offline</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Full Screen Video Modal */}
            {activeVideo && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-lg"
                    onClick={() => setActiveVideo(null)}
                >
                    <button
                        onClick={() => setActiveVideo(null)}
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-3 rounded-full z-[110]"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div
                        className="relative w-full max-w-5xl aspect-square md:aspect-video px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            className="w-full h-full rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)] bg-black"
                            src={activeVideo}
                            autoPlay
                            controls
                            playsInline
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Philosophy;
