
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { translations } from './translations';
import { Language } from './types';

const GoldText = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
    <span className={`text-gold metallic-glow ${className}`}>{children}</span>
);

export default function Privacy() {
    const [lang, setLang] = useState<Language>('TC');
    const t = translations[lang].privacy;

    // 从URL参数读取语言设置
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang');
        if (urlLang === 'EN' || urlLang === 'TC') {
            setLang(urlLang);
        }
    }, []);

    // 更新URL参数
    const handleLangChange = (newLang: Language) => {
        setLang(newLang);
        const url = new URL(window.location.href);
        url.searchParams.set('lang', newLang);
        window.history.pushState({}, '', url.toString());
    };

    return (
        <div className="relative min-h-screen bg-black overflow-hidden selection:bg-[#D4AF37] selection:text-black">
            {/* 全局噪点纹理 */}
            <div className="bg-noise fixed inset-0 pointer-events-none z-[1]"></div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-2xl border-b border-white/5 px-4 sm:px-6 md:px-20 py-3 md:py-5">
                <div className="max-w-[1920px] mx-auto flex items-center justify-between">
                    <a href="/" className="flex items-center gap-4 sm:gap-6 group cursor-pointer">
                        <img
                            src="/images/cf-favicon.png"
                            alt="Conflux Fortune LIMITED Logo"
                            className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain group-hover:opacity-100 opacity-90 transition-all duration-500"
                            loading="eager"
                        />
                    </a>
                    <div className="flex items-center gap-8">
                        {(['EN', 'TC'] as Language[]).map((l) => (
                            <motion.button
                                key={l}
                                onClick={() => handleLangChange(l)}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-sm transition-all duration-300 font-bold ${lang === l ? 'text-[#D4AF37]' : 'text-white/40 hover:text-white/60'}`}
                            >
                                {l === 'TC' ? '繁中' : 'EN'}
                            </motion.button>
                        ))}
                        <a
                            href="/"
                            className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4AF37]/70 font-black hover:text-[#D4AF37] transition-colors"
                        >
                            Back to Home
                        </a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative pt-32 sm:pt-40 md:pt-48 pb-20 px-4 sm:px-8 md:px-24">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-black to-[#080808] -z-10"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-10 -z-10"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_0%_50%,#D4AF3703_0%,transparent_50%)] -z-10"></div>

                <div className="max-w-[1400px] mx-auto relative z-[20]">
                    {/* Header */}
                    <header className="mb-16 sm:mb-20 md:mb-24 relative z-[20]">
                        <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-3 sm:py-4 border border-[#D4AF37]/30 rounded-full backdrop-blur-xl mb-6 sm:mb-8 shadow-[0_0_40px_rgba(212,175,55,0.1)] bg-black/30">
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#D4AF37]"></span>
                            <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-black">Legal Document</span>
                        </div>
                        <h1 className="font-serif tracking-tight leading-[1.1] font-medium mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>
                            <GoldText>{t.title}</GoldText>
                        </h1>
                        <p className="text-xl sm:text-2xl text-white/70 font-light leading-relaxed max-w-4xl">
                            {t.subtitle}
                        </p>
                    </header>

                    {/* Content */}
                    <article className="prose prose-invert max-w-none">
                        <div className="space-y-12 sm:space-y-16">
                            {/* Effective Date */}
                            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02]">
                                <p className="text-sm sm:text-base text-white/50">
                                    <strong className="text-[#D4AF37]">Effective Date:</strong> {t.effectiveDate}
                                </p>
                                <p className="text-sm sm:text-base text-white/50 mt-2">
                                    <strong className="text-[#D4AF37]">Last Updated:</strong> {t.lastUpdated}
                                </p>
                            </div>

                            {/* Section 1: Introduction */}
                            <section>
                                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-gold mb-6">{t.sections.introduction.title}</h2>
                                <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
                                    <p>{t.sections.introduction.content}</p>
                                </div>
                            </section>

                            {/* Section 2: Information We Collect */}
                            <section>
                                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-gold mb-6">{t.sections.informationWeCollect.title}</h2>
                                <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
                                    <p>{t.sections.informationWeCollect.content}</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        {t.sections.informationWeCollect.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Section 3: How We Use */}
                            <section>
                                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-gold mb-6">{t.sections.howWeUse.title}</h2>
                                <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
                                    <p>{t.sections.howWeUse.content}</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        {t.sections.howWeUse.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Section 4: Data Protection */}
                            <section>
                                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-gold mb-6">{t.sections.dataProtection.title}</h2>
                                <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
                                    <p>{t.sections.dataProtection.content}</p>
                                </div>
                            </section>

                            {/* Section 5: Your Rights */}
                            <section>
                                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-gold mb-6">{t.sections.yourRights.title}</h2>
                                <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
                                    <p>{t.sections.yourRights.content}</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        {t.sections.yourRights.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Section 6: Contact Us */}
                            <section>
                                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-gold mb-6">{t.sections.contactUs.title}</h2>
                                <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
                                    <p>{t.sections.contactUs.content}</p>
                                    <div className="mt-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                        <p><strong className="text-[#D4AF37]">Email:</strong> {t.sections.contactUs.email}</p>
                                        <p><strong className="text-[#D4AF37]">Address:</strong> {t.sections.contactUs.address}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 7: Changes */}
                            <section>
                                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-gold mb-6">{t.sections.changes.title}</h2>
                                <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
                                    <p>{t.sections.changes.content}</p>
                                </div>
                            </section>
                        </div>
                    </article>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-16 sm:py-20 px-4 sm:px-8 md:px-24 border-t border-white/5 relative bg-black">
                <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex items-center gap-6 group opacity-80 hover:opacity-100 transition-all duration-700">
                        <img
                            src="/images/cf-favicon.png"
                            alt="Conflux Fortune LIMITED Logo"
                            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <a href="/" className="text-[#D4AF37]/70 hover:text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-black transition-colors">
                            Back to Home
                        </a>
                        <p className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-bold">
                            © 2026 Conflux Fortune LIMITED. All Rights Reserved.
                        </p>
                    </div>

                    <div className="flex gap-12 text-white/50 text-[10px] uppercase tracking-[0.3em] font-black">
                        <a href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
                        <a href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
