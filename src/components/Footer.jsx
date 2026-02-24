import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white pt-24 pb-12 px-8 rounded-t-3xl flex flex-col justify-between mt-24 border-t border-white/5 shadow-[0_-50px_100px_rgba(0,161,159,0.05)]">
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
                <div className="max-w-sm">
                    <a href="https://amazix.com" target="_blank" rel="noopener noreferrer" className="inline-block mb-6">
                        <img src="https://amazix.com/assets/images/logo/amazix-logo.webp" alt="AmaZix Logo" className="h-10 opacity-90 hover:opacity-100 transition-opacity" />
                    </a>
                    <h2 className="mb-6 flex items-center gap-4">
                        <img src="/KAI.png" alt="KAI Logo" className="h-[102px] w-auto object-contain" />
                        <span className="text-[10px] font-mono tracking-widest text-orange border border-orange/30 px-2 py-0.5 rounded-full">AMAZIX</span>
                    </h2>
                    <p className="text-white/50 text-sm font-sans leading-relaxed">
                        The definitive AI manager for Web3 communities. Built by AmaZix to scale trust, engagement, and retention across every platform.
                    </p>
                </div>

                <div className="flex gap-16">
                    <div className="flex flex-col gap-4 text-sm font-sans">
                        <h4 className="font-semibold text-white/50 mb-2 uppercase tracking-widest text-[10px] font-mono">Platform</h4>
                        <a href="#integrations" className="hover:text-orange transition-colors">Integrations</a>
                        <a href="#features" className="hover:text-orange transition-colors">Features</a>
                        <a href="#protocol" className="hover:text-orange transition-colors">Protocol</a>
                        <a href="#scale" className="hover:text-orange transition-colors">Pricing</a>
                    </div>
                    <div className="flex flex-col gap-4 text-sm font-sans">
                        <h4 className="font-semibold text-white/50 mb-2 uppercase tracking-widest text-[10px] font-mono">Connect</h4>
                        <a href="#" className="hover:text-orange transition-colors">Twitter / X</a>
                        <a href="#" className="hover:text-orange transition-colors">Telegram Support</a>
                        <a href="#" className="hover:text-orange transition-colors">AmaZix Website</a>
                        <a href="#" className="hover:text-orange transition-colors">GitBook Docs</a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-xs text-white/40 font-mono">
                    &copy; {new Date().getFullYear()} AmaZix. All algorithms reserved.
                </div>

                <div className="flex items-center gap-3 bg-charcoal/5 px-4 py-2 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] text-white/70 font-mono uppercase tracking-widest">KAI Fleet Operational</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
