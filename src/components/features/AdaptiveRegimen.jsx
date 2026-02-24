import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const AdaptiveRegimen = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const daysRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Sequence: enter, move to day, click (scale down), move to save, click, fade out, repeat
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Cursor enter
            tl.fromTo(cursorRef.current,
                { x: -50, y: 150, opacity: 0 },
                { x: 30, y: 30, opacity: 1, duration: 1, ease: 'power2.out' }
            );

            // Hover over Wednesday (index 3)
            tl.to(cursorRef.current, { x: 145, y: -20, duration: 0.8, ease: 'power2.inOut' });

            // Click Wednesday
            tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
            tl.to(daysRef.current[3], { backgroundColor: '#2E4036', color: '#F2F0E9', duration: 0.2 }, '<');
            tl.to(cursorRef.current, { scale: 1, duration: 0.1 });

            // Hover over Friday (index 5)
            tl.to(cursorRef.current, { x: 230, y: -20, duration: 0.6, ease: 'power2.inOut', delay: 0.2 });

            // Click Friday
            tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
            tl.to(daysRef.current[5], { backgroundColor: '#2E4036', color: '#F2F0E9', duration: 0.2 }, '<');
            tl.to(cursorRef.current, { scale: 1, duration: 0.1 });

            // Move to "Save" button
            tl.to(cursorRef.current, { x: 260, y: 80, duration: 0.8, ease: 'power2.inOut', delay: 0.4 });

            // Click Save
            tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
            tl.to('.save-btn', { scale: 0.95, duration: 0.1 }, '<');
            tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
            tl.to('.save-btn', { scale: 1, backgroundColor: '#CC5833', color: '#fff', duration: 0.2 }, '<');

            // Fade out and reset state for next loop
            tl.to(cursorRef.current, { opacity: 0, duration: 0.5, delay: 0.5 });
            tl.to([daysRef.current[3], daysRef.current[5]], { backgroundColor: 'transparent', color: '#1A1A1A', duration: 0.5 }, '<');
            tl.to('.save-btn', { backgroundColor: 'transparent', color: '#1A1A1A', duration: 0.5 }, '<');

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToDaysRef = (el) => {
        if (el && !daysRef.current.includes(el)) {
            daysRef.current.push(el);
        }
    };

    return (
        <div ref={containerRef} className="relative w-full h-80 bg-black rounded-2xl p-8 overflow-hidden border border-white/10 flex flex-col justify-between">
            <div className="text-xs font-mono text-white/50 uppercase tracking-widest">Scheduling Engagement</div>

            <div className="relative mt-8">
                <div className="text-sm font-sans font-medium text-white/70 mb-4">Plan Narrative Rhythm</div>
                <div className="flex justify-between items-center gap-2 bg-charcoal rounded-2xl p-4 shadow-sm border border-white/5">
                    {DAYS.map((day, i) => (
                        <div
                            key={i}
                            ref={addToDaysRef}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white border border-transparent transition-colors"
                        >
                            {day}
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex justify-end">
                    <button className="save-btn px-6 py-2 rounded-full border border-white/20 text-xs font-semibold font-sans uppercase tracking-wider text-white flex items-center gap-2">
                        Schedule Burst
                    </button>
                </div>

                {/* Mock Cursor */}
                <div
                    ref={cursorRef}
                    className="absolute left-0 top-1/2 w-6 h-6 pointer-events-none z-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.5 3.21V20.8C5.5 21.46 6.3 21.79 6.77 21.32L10.82 17.27C11.01 17.08 11.26 16.98 11.53 16.98H19.09C19.75 16.98 20.08 16.18 19.61 15.71L6.91 3.01C6.52 2.62 5.5 2.76 5.5 3.21Z' fill='%231A1A1A' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        transformOrigin: 'top left'
                    }}
                />
            </div>
        </div>
    );
};

export default AdaptiveRegimen;
