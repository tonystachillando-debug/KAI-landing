import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 mix-blend-normal">
            <nav
                ref={navRef}
                className={`transition-all duration-500 ease-out flex items-center justify-between px-8 py-4 rounded-2xl w-full max-w-5xl ${isScrolled
                    ? 'bg-charcoal/60 backdrop-blur-md text-white shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/20'
                    : 'bg-transparent text-white border border-transparent'
                    }`}
            >
                <div className="flex items-center gap-3">
                    <span className="text-xl font-sans font-bold tracking-tight">KAI</span>
                    <span className="text-[10px] font-mono tracking-widest text-orange border border-orange/30 px-2 py-0.5 rounded-full">AMAZIX</span>
                </div>
                <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide">
                    <a href="#features" className="hover:text-teal transition-colors">Features</a>
                    <a href="#integrations" className="hover:text-teal transition-colors">Integrations</a>
                    <a href="#protocol" className="hover:text-teal transition-colors">Protocol</a>
                    <a href="#scale" className="hover:text-teal transition-colors">Pricing</a>
                </div>
                <a
                    href="#scale"
                    className="px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 bg-orange text-white"
                >
                    Initialize KAI
                </a>
            </nav>
        </div>
    );
};

export default Navbar;
