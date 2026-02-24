
import React, { useState, useEffect } from 'react';
import { Activity, Brain, Dna } from 'lucide-react';

const DiagnosticShuffler = () => {
    const [cards, setCards] = useState([
        { id: 1, label: 'Busy Founder', value: '98% Match', icon: <Brain className="text-white w-6 h-6" />, status: 'Dominant' },
        { id: 2, label: 'Technical Guide', value: 'Sub 10-ms', icon: <Activity className="text-white w-6 h-6" />, status: 'Calibrated' },
        { id: 3, label: 'Degen Trader', value: 'High Alpha', icon: <Dna className="text-white w-6 h-6" />, status: 'Engaged' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards((prev) => {
                const newCards = [...prev];
                const lastCard = newCards.pop();
                newCards.unshift(lastCard);
                return newCards;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-80 flex flex-col items-center justify-center bg-black rounded-2xl p-6 overflow-hidden border border-white/10">
            <div className="absolute top-6 left-6 text-xs font-mono text-white/50 uppercase tracking-widest">
                Tone & Protocol
            </div>
            <div className="relative w-full max-w-sm h-48 mt-8 perspective-[1000px]">
                {cards.map((card, index) => {
                    // index 0 is top card, 1 is middle, 2 is bottom
                    const zIndex = 3 - index;
                    const translateY = index * 16;
                    const scale = 1 - index * 0.05;
                    const opacity = 1 - index * 0.2;

                    return (
                        <div
                            key={card.id}
                            className="absolute top-0 w-full bg-charcoal rounded-3xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-white/5 flex flex-col gap-4 transform transition-all duration-700 pointer-events-none"
                            style={{
                                zIndex,
                                transform: `translateY(${translateY}px) scale(${scale})`,
                                opacity,
                                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}
                        >
                            <div className="flex justify-between items-center">
                                <div className="bg-black p-3 rounded-2xl">{card.icon}</div>
                                <div className="text-[10px] uppercase tracking-wider font-mono text-white/60 bg-teal/10 border border-teal/20 backdrop-blur-md/5 px-2 py-1 rounded-full">
                                    {card.status}
                                </div>
                            </div>
                            <div>
                                <div className="text-sm font-sans font-medium text-white/70">{card.label}</div>
                                <div className="text-2xl font-sans font-bold text-white">{card.value}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DiagnosticShuffler;
