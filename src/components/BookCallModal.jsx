import React, { useState } from 'react';
import { X } from 'lucide-react';

const BookCallModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1); // 1: form, 2: thank you
    const [formData, setFormData] = useState({
        workEmail: '',
        fullName: '',
        companyName: '',
        companyLink: ''
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const validateEmail = (email) => {
        const lowerEmail = email.toLowerCase();
        if (lowerEmail.endsWith('@gmail.com') || lowerEmail.endsWith('@yahoo.com') || lowerEmail.endsWith('@proton.me') || lowerEmail.endsWith('@protonmail.com')) {
            return false;
        }
        return true;
    };

    const validateUrl = (url) => {
        const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/i;
        if (!urlPattern.test(url)) return false;

        const lowerUrl = url.toLowerCase();
        return lowerUrl.includes('linkedin.com') || lowerUrl.includes('x.com') || lowerUrl.includes('twitter.com');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!validateEmail(formData.workEmail)) {
            setError('Please use a legitimate work email. Generic domains (Gmail, Yahoo, Proton) are not accepted.');
            return;
        }

        if (!validateUrl(formData.companyLink)) {
            setError('Please provide a valid LinkedIn or X (Twitter) URL.');
            return;
        }

        setIsSubmitting(true);

        const autoresponseMessage = `Hello,

Thank you for showing interest in KAI.

We have received your message and our team will review it shortly. If your inquiry relates to a potential partnership, project collaboration, or community management services, the relevant member of our team will follow up with you in due course.

In the meantime, you may learn more about AmaZix at:
- https://amazix.com

Kind regards,
AmaZix Team`;

        try {
            const response = await fetch('/api/send_mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: 'New Book a Call Request',
                    _cc: 'antonio.visceglia@amazix.com',
                    _autoresponse: autoresponseMessage,
                    email: formData.workEmail,
                    workEmail: formData.workEmail,
                    fullName: formData.fullName,
                    companyName: formData.companyName,
                    companyLink: formData.companyLink,
                    _template: 'box'
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setIsSubmitting(false);
            setStep(2); // Go to thank you step
        } catch (err) {
            console.error('Submission failed', err);
            setError('There was an error submitting your request. Please try again.');
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setStep(1);
        setFormData({ workEmail: '', fullName: '', companyName: '', companyLink: '' });
        setError('');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 shadow-[0_30px_60px_rgba(0,161,159,0.15)] rounded-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full z-10"
                    aria-label="Close Modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {step === 1 ? (
                    <div className="p-8 md:p-12">
                        <h2 className="text-3xl font-sans font-bold tracking-tight mb-2 text-white">
                            Book a <span className="text-teal">Call.</span>
                        </h2>
                        <p className="text-white/60 text-sm font-sans mb-8">
                            Let's discover how KAI can scale trust in your community.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-mono uppercase tracking-widest text-white/50 ml-2">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-charcoal/40 border border-white/10 rounded-xl px-5 py-4 text-sm font-sans text-white focus:outline-none focus:border-teal/50 focus:bg-charcoal transition-colors"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-mono uppercase tracking-widest text-white/50 ml-2">Work Email</label>
                                <input
                                    type="email"
                                    required
                                    className={`w-full bg-charcoal/40 border ${error && error.includes('email') ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-5 py-4 text-sm font-sans text-white focus:outline-none focus:border-teal/50 focus:bg-charcoal transition-colors`}
                                    value={formData.workEmail}
                                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-mono uppercase tracking-widest text-white/50 ml-2">Company Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-charcoal/40 border border-white/10 rounded-xl px-5 py-4 text-sm font-sans text-white focus:outline-none focus:border-teal/50 focus:bg-charcoal transition-colors"
                                    value={formData.companyName}
                                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-mono uppercase tracking-widest text-white/50 ml-2">LinkedIn or X URL</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="www.linkedin.com/in/..."
                                    className={`w-full bg-charcoal/40 border ${error && error.includes('URL') ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-5 py-4 text-sm font-sans text-white focus:outline-none focus:border-teal/50 focus:bg-charcoal transition-colors`}
                                    value={formData.companyLink}
                                    onChange={(e) => setFormData({ ...formData, companyLink: e.target.value })}
                                />
                            </div>

                            {error && (
                                <div className="text-red-400 text-sm font-sans tracking-tight px-3 py-2 bg-red-500/10 border border-red-500/20 rounded-lg mt-2">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full mt-4 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 relative overflow-hidden shadow-[0_0_20px_rgba(0,161,159,0.2)] ${isSubmitting ? 'bg-teal/50 cursor-not-allowed' : 'bg-teal text-black hover:scale-[1.02] active:scale-[0.98]'}`}
                            >
                                {isSubmitting ? 'Processing...' : 'Schedule Call'}
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="p-8 md:p-16 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-teal/20 rounded-full flex items-center justify-center mb-6">
                            <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,161,159,0.5)]">
                                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-3xl font-sans font-bold tracking-tight mb-4 text-white">
                            Request <span className="text-teal">Received</span>
                        </h2>
                        <p className="text-white/70 text-base font-sans leading-relaxed mb-8">
                            Thank you for reaching out. We have successfully received your details and one of our experts will contact you shortly to schedule the call.
                        </p>
                        <button
                            onClick={handleClose}
                            className="px-8 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
                        >
                            Return to Site
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookCallModal;
