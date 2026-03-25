import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { trackPurchase } from '../lib/analytics';

const ThankYou = () => {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const plan = searchParams.get('plan') || 'unknown';
        const value = parseFloat(searchParams.get('value')) || 0;
        trackPurchase(plan, value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative w-full overflow-hidden">
             {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/10 rounded-full blur-[120px] opacity-30"></div>
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[100px] opacity-20"></div>
            </div>

            <div className="z-10 bg-charcoal/40 backdrop-blur-md border border-white/10 p-12 md:p-16 rounded-3xl max-w-2xl w-[90%] text-center shadow-[0_20px_40px_rgba(0,161,159,0.1)]">
                <div className="w-20 h-20 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-teal/40 shadow-[0_0_20px_rgba(0,161,159,0.3)]">
                    <svg className="w-10 h-10 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter mb-4 text-white">
                    Pilot Request <span className="text-teal font-normal">Received.</span>
                </h1>
                
                <p className="text-white/70 text-lg md:text-xl mb-10 font-sans leading-relaxed">
                    Thank you for applying. A KAI deployment specialist will review your community details and contact you shortly.
                </p>
                
                <Link to="/" className="inline-block bg-orange text-white font-bold px-8 py-4 rounded-xl text-sm font-sans tracking-wider uppercase hover:bg-orange/90 transition-colors shadow-[0_0_20px_rgba(247,147,26,0.2)] hover:shadow-[0_0_30px_rgba(247,147,26,0.4)] hover:scale-105 active:scale-95">
                    Return to Mission Control
                </Link>
            </div>
        </main>
    );
};

export default ThankYou;
