import React from 'react';

const TrustBanner = () => {
    const logos = [
        { name: "BANCOR", src: "/BANCOR.svg", alt: "Bancor Logo" },
        { name: "TRUSTSWAP", src: "/TRUSTSWAP.svg", alt: "TrustSwap Logo" },
        { name: "OLAS", src: "/OLAS.svg", alt: "Olas Logo" },
        { name: "Trac Network", src: "/TracLogo.svg", alt: "Trac Network Logo" }
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
                        <img
                            key={i}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-8 md:h-10 mx-8 md:mx-16 flex-shrink-0 object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity"
                        />
                    ))}
                </div>
                <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap min-w-full justify-around items-center absolute top-0 left-full">
                    {logos.map((logo, i) => (
                        <img
                            key={`dup-${i}`}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-8 md:h-10 mx-8 md:mx-16 flex-shrink-0 object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBanner;
