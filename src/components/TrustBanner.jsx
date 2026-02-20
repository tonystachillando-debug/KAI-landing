import React from 'react';

const TrustBanner = () => {
    const logos = [
        "TRUSTSWAP", "CASPER LABS", "ECOMI", "BANCOR", "AVA STARTUP"
    ];

    return (
        <section className="w-full bg-black py-10 overflow-hidden border-b border-white/5 relative z-10 -mt-1">
            <div className="max-w-7xl mx-auto px-8 mb-6 flex justify-center">
                <p className="text-[10px] font-mono tracking-[0.2em] text-white/60 uppercase">
                    Secured by the best in Web3
                </p>
            </div>

            <div className="relative w-full flex overflow-hidden group">
                {/* We double the content to allow infinite CSS scrolling */}
                <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap min-w-full justify-around items-center">
                    {logos.map((logo, i) => (
                        <h3 key={i} className="text-white/30 text-2xl md:text-3xl font-sans font-bold tracking-tighter mx-8 md:mx-16 flex-shrink-0">
                            [ {logo} ]
                        </h3>
                    ))}
                </div>
                <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap min-w-full justify-around items-center absolute top-0 left-full">
                    {logos.map((logo, i) => (
                        <h3 key={`dup-${i}`} className="text-white/30 text-2xl md:text-3xl font-sans font-bold tracking-tighter mx-8 md:mx-16 flex-shrink-0">
                            [ {logo} ]
                        </h3>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBanner;
