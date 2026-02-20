import React, { useState, useEffect } from 'react';

const MESSAGES = [
    "Ingesting GitBook Documentation...",
    "Learning Whitepaper Tokenomics...",
    "Syncing Twitter/X Sentiment...",
    "Scanning AMA Transcripts...",
    "Analyzing Past Governance Votes..."
];

const TelemetryTypewriter = () => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentMsg = MESSAGES[currentMessageIndex];
        let typingSpeed = isDeleting ? 30 : 60; // Base speed

        if (!isDeleting && displayedText === currentMsg) {
            // Pause at the end of typing
            typingSpeed = 2000;
            setIsDeleting(true);
        } else if (isDeleting && displayedText === '') {
            // Pause before starting new word
            setIsDeleting(false);
            setCurrentMessageIndex((prev) => (prev + 1) % MESSAGES.length);
            typingSpeed = 500;
        } else {
            // Normal typing/deleting
            const timeout = setTimeout(() => {
                setDisplayedText(currentMsg.substring(0, displayedText.length + (isDeleting ? -1 : 1)));
            }, typingSpeed);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setDisplayedText(currentMsg.substring(0, displayedText.length + (isDeleting ? -1 : 1)));
        }, typingSpeed);

        return () => clearTimeout(timeout);

    }, [displayedText, isDeleting, currentMessageIndex]);

    return (
        <div className="relative w-full h-80 flex flex-col bg-black rounded-2xl p-8 overflow-hidden font-mono shadow-inner border border-white/5">
            <div className="flex justify-between items-center mb-12">
                <div className="text-xs text-white/40 uppercase tracking-widest">Z-Knowledge Base</div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange animate-pulse"></div>
                    <span className="text-[10px] text-orange uppercase tracking-widest">Training.Live</span>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-end gap-2 pb-4">
                {/* Fake previous logs */}
                <div className="text-white/20 text-xs truncate">Database connection established.</div>
                <div className="text-white/30 text-xs truncate">Retrieving historical chat logs...</div>
                <div className="text-white/40 text-xs truncate">Persona synchronization complete.</div>

                {/* Active typing line */}
                <div className="text-white text-lg md:text-xl font-semibold mt-4 flex items-center h-8">
                    <span className="text-white mr-2">{'>'}</span>
                    <span className="text-white">{displayedText}</span>
                    <span className="inline-block w-2.5 h-5 bg-orange ml-1 animate-[blink_1s_step-end_infinite]"></span>
                </div>
            </div>
        </div>
    );
};

export default TelemetryTypewriter;
