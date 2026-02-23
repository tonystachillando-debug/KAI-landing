import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Checkout = () => {
    const [searchParams] = useSearchParams();
    const tier = searchParams.get('tier') || 'business';
    const billing = searchParams.get('billing') || 'monthly';
    const [paymentMethod, setPaymentMethod] = useState('crypto');
    const [isProcessing, setIsProcessing] = useState(false);

    const handleCheckout = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            alert('Initialization complete. Welcome to KAI.');
            setIsProcessing(false);
        }, 2000);
    };

    const tierDetails = {
        starter: { name: 'Starter', price: '$0', desc: 'Ad-Supported Experience' },
        pro: { name: 'Pro', price: billing === 'yearly' ? '$468' : '$79', desc: '100% Ad-Free Experience' },
        business: { name: 'Business', price: billing === 'yearly' ? '$948' : '$149', desc: 'Priority HAIMDALL Processing' },
        enterprise: { name: 'Enterprise', price: billing === 'yearly' ? '$5,988' : '$999', desc: 'Custom Training Models' },
    };

    const selectedTier = tierDetails[tier] || tierDetails['business'];
    const displayPeriod = selectedTier.price === '$0' ? '/mo' : (billing === 'yearly' ? '/yr' : '/mo');
    const priceNumber = selectedTier.price.replace('$', '').replace(',', '');

    return (
        <div className="min-h-screen bg-black text-white font-sans flex flex-col md:flex-row">

            {/* Left Column - Order Intel */}
            <div className="w-full md:w-[40%] lg:w-[35%] bg-gradient-to-br from-charcoal to-black border-r border-white/5 p-8 md:p-16 flex flex-col justify-between relative overflow-hidden">
                {/* Background Atmosphere */}
                <div className="absolute top-0 left-0 w-full h-[300px] bg-teal/10 blur-[100px] pointer-events-none" />

                <div className="relative z-10">
                    <a href="/" className="inline-flex items-center gap-2 mb-16 text-white/50 hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        <span className="text-sm font-mono uppercase tracking-widest">Back</span>
                    </a>

                    <div className="mb-8 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center font-bold text-black text-lg shadow-[0_0_20px_rgba(0,161,159,0.5)]">K</div>
                        <span className="font-mono text-xs text-teal uppercase tracking-widest">Initialization Pending</span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-2 text-white">
                        {selectedTier.name}
                    </h1>
                    <div className="text-5xl lg:text-6xl font-bold font-sans text-white mb-12">
                        {selectedTier.price}
                        <span className="text-xl text-white/50 font-normal">{displayPeriod}</span>
                    </div>

                    <ul className="flex flex-col gap-4 text-sm text-white/70 font-sans border-t border-white/10 pt-8">
                        <li className="flex items-center gap-3"><span className="text-teal">✓</span> Deploy on Telegram, Discord, X</li>
                        <li className="flex items-center gap-3"><span className="text-teal">✓</span> HAIMDALL Threat Detection</li>
                        <li className="flex items-center gap-3"><span className="text-orange">✓</span> {selectedTier.desc}</li>
                    </ul>
                </div>

                <div className="relative z-10 mt-16 text-xs font-mono text-white/30 flex items-center justify-between border-t border-white/5 pt-8">
                    <span>Powered by AmaZix</span>
                    <span>Encrypted Connection</span>
                </div>
            </div>

            {/* Right Column - Payment Portal */}
            <div className="w-full md:w-[60%] lg:w-[65%] p-8 md:p-16 lg:px-32 flex flex-col justify-center relative bg-[#050505]">

                <div className="max-w-xl w-full mx-auto">
                    <h2 className="text-2xl font-bold mb-8">Select Payment Method</h2>

                    {/* Native Toggle Widget */}
                    <div className="flex p-1 bg-white/5 rounded-xl mb-12 border border-white/10 relative">
                        <div
                            className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] bg-charcoal rounded-lg shadow-md transition-all duration-300 ease-out z-0 border border-white/10 ${paymentMethod === 'card' ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'}`}
                        />
                        <button
                            onClick={() => setPaymentMethod('crypto')}
                            className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest z-10 transition-colors ${paymentMethod === 'crypto' ? 'text-orange' : 'text-white/50 hover:text-white'}`}
                        >
                            Crypto
                        </button>
                        <button
                            onClick={() => setPaymentMethod('card')}
                            className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest z-10 transition-colors ${paymentMethod === 'card' ? 'text-teal' : 'text-white/50 hover:text-white'}`}
                        >
                            Credit Card
                        </button>
                    </div>

                    <form onSubmit={handleCheckout} className="flex flex-col gap-6">

                        {/* CRYPTO TAB */}
                        {paymentMethod === 'crypto' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="p-6 bg-charcoal border border-white/10 rounded-2xl flex flex-col gap-4 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                    <div className="flex justify-between items-center mb-4">
                                        <span className="font-mono text-xs text-white/50">Supported Networks</span>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/80">ERC20</span>
                                            <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/80">SPL</span>
                                        </div>
                                    </div>

                                    <div className="relative mb-2">
                                        <input type="text" value="0x892a...B3F9" readOnly className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-sm font-mono text-white/80 focus:outline-none" />
                                        <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold transition-colors">Copy</button>
                                    </div>

                                    <p className="text-xs text-white/40 font-mono">Send exactly {priceNumber === '0' ? '0.00' : `${priceNumber}.00`} USDT to initialize.</p>
                                </div>
                            </div>
                        )}

                        {/* CREDIT CARD TAB (Mock Stripe Elements) */}
                        {paymentMethod === 'card' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col gap-4">
                                <div className="text-xs font-mono text-white/30 uppercase tracking-widest flex items-center justify-between mb-2">
                                    Billing Details
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                </div>
                                <div className="relative group">
                                    <input type="email" required placeholder="Email Address" className="peer w-full bg-charcoal border border-white/10 rounded-xl px-4 py-4 text-sm font-sans text-white focus:outline-none focus:border-teal/50 focus:shadow-[0_0_15px_rgba(0,161,159,0.2)] transition-all placeholder-transparent" />
                                    <label className="absolute left-4 top-4 text-sm text-white/40 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-teal peer-focus:bg-[#050505] peer-focus:px-1 peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-[#050505] peer-valid:px-1 cursor-text pointer-events-none">Email Address</label>
                                </div>

                                <div className="p-1 rounded-xl border border-white/10 bg-charcoal focus-within:border-teal/50 focus-within:shadow-[0_0_15px_rgba(0,161,159,0.2)] transition-all overflow-hidden flex flex-col">
                                    <div className="relative border-b border-white/10">
                                        <input type="text" required placeholder="Card Number" className="w-full bg-transparent px-4 py-4 text-sm font-mono text-white focus:outline-none placeholder-white/20 tracking-wider" />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1 h-4">
                                            <div className="w-6 h-full bg-white/20 rounded-sm"></div>
                                            <div className="w-6 h-full bg-white/20 rounded-sm"></div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-1/2 md:w-2/3 border-r border-white/10 relative">
                                            <input type="text" required placeholder="MM / YY" className="w-full bg-transparent px-4 py-4 text-sm font-mono text-white focus:outline-none placeholder-white/20" />
                                        </div>
                                        <div className="w-1/2 md:w-1/3 relative">
                                            <input type="text" required placeholder="CVC" className="w-full bg-transparent px-4 py-4 text-sm font-mono text-white focus:outline-none placeholder-white/20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isProcessing}
                            className="mt-6 w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 relative overflow-hidden group shadow-[0_10px_30px_rgba(247,147,26,0.2)] disabled:opacity-70 disabled:cursor-not-allowed
                                       bg-gradient-to-r from-orange to-[#ffad4d] text-white hover:shadow-[0_10px_40px_rgba(247,147,26,0.4)]"
                        >
                            <span className={`flex justify-center items-center relative z-10 transition-opacity ${isProcessing ? 'opacity-0' : 'opacity-100'}`}>
                                {paymentMethod === 'crypto' ? 'AWAITING DEPOSIT' : `PAY ${selectedTier.price}`}
                            </span>

                            {/* Loading State Spinner */}
                            {isProcessing && (
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                </div>
                            )}

                            {/* Hover effect highlight */}
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity z-0 pointer-events-none" />
                        </button>

                        <div className="text-center md:hidden">
                            <a href="/" className="text-white/40 text-xs font-mono uppercase border-b border-white/20 pb-1">Cancel Checkout</a>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Checkout;
