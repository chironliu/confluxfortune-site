

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Briefcase, TrendingUp, Cpu, Globe, Mail, MapPin, Menu, X, ArrowDownRight, MessageCircle, Linkedin, Facebook } from 'lucide-react';
import { translations } from './translations';
import { Language } from './types';

// Updated GoldText props to ensure children are recognized correctly as optional by the compiler
const GoldText = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <span className={`text-gold metallic-glow ${className}`}>{children}</span>
);

const SectionHeading = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-16 sm:mb-20 md:mb-24 space-y-4 sm:space-y-6">
    <motion.h3
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-[10px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-ultra uppercase text-[#D4AF37]/70 font-bold text-glow"
    >
      {subtitle}
    </motion.h3>
    <motion.h2
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-serif leading-[1.05] text-balance font-medium"
    >
      <GoldText>{title}</GoldText>
    </motion.h2>
  </div>
);

const Navbar = ({ lang, setLang, content }: { lang: Language, setLang: (l: Language) => void, content: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-4 sm:px-6 md:px-20 py-3 md:py-5 ${isScrolled ? 'bg-black/90 backdrop-blur-2xl border-b border-white/5 py-2 md:py-3' : 'bg-transparent'}`}>
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-6 sm:gap-8 group cursor-pointer"
        >
          <img
            src="/images/cf-favicon.png"
            alt="Conflux Fortune LIMITED Logo"
            className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain group-hover:opacity-100 opacity-90 transition-all duration-500"
            loading="eager"
          />
        </motion.div>

        {/* Desktop Menu - 精细化字体显示 */}
        <div className="hidden lg:flex items-center gap-16 text-xs font-bold tracking-ultra uppercase">
          {['about', 'services', 'contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="text-white/60 hover:text-[#D4AF37] transition-all duration-300 relative group overflow-hidden"
            >
              {content.nav[item as keyof typeof content.nav]}
              <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-[#D4AF37] transform translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="absolute inset-0 bg-[#D4AF37]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </motion.a>
          ))}

          <div className="flex items-center gap-8 ml-4 border-l border-white/10 pl-16">
            {(['EN', 'TC'] as Language[]).map((l) => (
              <motion.button
                key={l}
                onClick={() => setLang(l)}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm transition-all duration-300 font-bold ${lang === l ? 'text-[#D4AF37]' : 'text-white/40 hover:text-white/60'}`}
              >
                {l === 'TC' ? '繁中' : 'EN'}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white/70 p-2 -mr-2 active:scale-95 transition-transform"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 sm:gap-12 uppercase tracking-ultra text-xs lg:hidden px-4"
          >
            <div className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-sm">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl sm:text-3xl font-serif text-white/80 hover:text-[#D4AF37] transition-colors duration-300 py-3 text-center w-full border-b border-white/10 hover:border-[#D4AF37]/30"
              >
                {content.nav.about}
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl sm:text-3xl font-serif text-white/80 hover:text-[#D4AF37] transition-colors duration-300 py-3 text-center w-full border-b border-white/10 hover:border-[#D4AF37]/30"
              >
                {content.nav.services}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl sm:text-3xl font-serif text-white/80 hover:text-[#D4AF37] transition-colors duration-300 py-3 text-center w-full border-b border-white/10 hover:border-[#D4AF37]/30"
              >
                {content.nav.contact}
              </a>
              <div className="flex gap-12 sm:gap-16 mt-8 sm:mt-12 pt-6 border-t border-white/10 w-full justify-center">
                <button onClick={() => { setLang('EN'); setMobileMenuOpen(false); }} className={`text-lg sm:text-xl font-bold transition-all duration-300 ${lang === 'EN' ? 'text-[#D4AF37]' : 'text-white/50 hover:text-white/80'}`}>EN</button>
                <button onClick={() => { setLang('TC'); setMobileMenuOpen(false); }} className={`text-lg sm:text-xl font-bold transition-all duration-300 ${lang === 'TC' ? 'text-[#D4AF37]' : 'text-white/50 hover:text-white/80'}`}>繁中</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Updated ServiceCard props to include key in the type definition to satisfy strict TS checks when mapping
const ServiceCard = ({ icon: Icon, title, desc, index }: { icon: any, title: string, desc: string, index: number, key?: string | number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 60px rgba(212, 175, 55, 0.25)' }}
    className="group relative p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/[0.06] to-transparent hover:border-[#D4AF37]/60 transition-all duration-700 overflow-hidden min-h-[360px] sm:min-h-[420px] md:min-h-[480px] flex flex-col justify-between shadow-2xl"
  >
    {/* 装饰性背景网格 */}
    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(212,175,55,0.04)_50%,transparent_60%)] bg-[length:10px_10px] sm:bg-[length:12px_12px] group-hover:opacity-150 transition-opacity duration-700" />
    <motion.div
      initial={{ scale: 1, opacity: 0.03 }}
      whileHover={{ scale: 1.2, opacity: 0.12 }}
      transition={{ duration: 0.7 }}
      className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12 p-8 sm:p-16"
    >
      <Icon size={160} sm:size={200} md:size={240} />
    </motion.div>

    <div className="space-y-6 sm:space-y-8 md:space-y-10 relative z-10">
      <motion.div
        whileHover={{ scale: 1.05, rotate: 3 }}
        transition={{ duration: 0.5 }}
        className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/60 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.3)]"
      >
        <Icon className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-700" size={24} sm:size={28} md:size={32} />
      </motion.div>
      <div>
        <h4 className="text-2xl sm:text-2xl md:text-3xl font-serif font-medium mb-4 sm:mb-5 md:mb-6 group-hover:text-white transition-colors duration-500 text-balance hyphens-none text-white/90">{title}</h4>
        <p className="text-white/70 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500 text-balance">
          {desc}
        </p>
      </div>
    </div>

    <div className="relative z-10 pt-6 sm:pt-8 md:pt-10">
      <motion.button
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs uppercase tracking-[0.4em] sm:tracking-ultra text-[#D4AF37] font-black group-hover:gap-4 sm:group-hover:gap-6 transition-all duration-500 relative overflow-hidden"
      >
        <span className="absolute inset-0 bg-[#D4AF37]/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <span className="relative z-10 flex items-center gap-3 sm:gap-4">
          Discover Expertise <ArrowDownRight size={12} sm:size={14} className="group-hover:translate-x-0.5 sm:group-hover:translate-x-1 group-hover:translate-y-0.5 sm:group-hover:translate-y-1 transition-transform duration-500" />
        </span>
      </motion.button>
    </div>
  </motion.div>
);

export default function App() {
  const [lang, setLang] = useState<Language>('TC');
  const t = translations[lang];

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });

  const heroBlur = useTransform(smoothProgress, [0, 0.2], [0, 10]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      {/* 全局噪点纹理 - 降低透明度以减少干扰 */}
      <div className="bg-noise fixed inset-0 pointer-events-none z-[100]" style={{ opacity: '0.02' }} />

      {/* 装饰性渐变网格 - 仅在 Hero Section 之后显示 */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#D4AF37]/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#D4AF37]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-[#D4AF37]/20 to-transparent" />
      </div>

      <Navbar lang={lang} setLang={setLang} content={t} />

      {/* Hero Section - 极致的排版与空间感 */}
      <section className="relative h-screen flex flex-col items-center overflow-hidden">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <motion.div
            style={{
              scale: useTransform(smoothProgress, [0, 0.4], [1.1, 1]),
              opacity: useTransform(smoothProgress, [0, 0.3], [1, 0.8]),
              filter: `blur(${heroBlur}px)`
            }}
            className="absolute inset-0 z-0"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="/images/phone_video_poster.CZl_dEt9.jpg"
            >
              <source src="/media/cg_hk_bg.mp4" type="video/mp4" />
              {/* 备用图片 */}
              <img
                src="/images/phone_video_poster.CZl_dEt9.jpg"
                alt="Metropolitan skyline at dusk, representing the global reach and sophisticated vision of Conflux Fortune"
                className="w-full h-full object-cover"
                width="2070"
                height="1380"
                loading="eager"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
          </motion.div>

          <div className="relative z-10 w-full h-full flex items-center justify-center pt-16 sm:pt-20">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12 sm:space-y-16"
              >
                <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-3 sm:py-4 border border-[#D4AF37]/30 rounded-full backdrop-blur-xl mb-6 sm:mb-8 shadow-[0_0_40px_rgba(212,175,55,0.1)] bg-black/30">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#D4AF37]"
                  />
                  <span className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-ultra uppercase text-[#D4AF37] font-black text-balance">Hong Kong • Greater Bay Area</span>
                </div>

                <h1 className="font-serif tracking-tight leading-[0.9] sm:leading-[0.85] font-medium" style={{ fontSize: 'clamp(1.75rem, 9vw, 11rem)' }}>
                  <GoldText className="pb-6 sm:pb-8">{t.hero.title}</GoldText>
                </h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/80 font-light max-w-4xl sm:max-w-5xl mx-auto leading-relaxed-custom text-balance px-4 sm:px-6 text-sharp"
                >
                  {t.hero.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 pt-10 sm:pt-16"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, letterSpacing: '0.55em', boxShadow: '0 0 80px rgba(212, 175, 55, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-12 sm:px-16 md:px-20 py-5 sm:py-7 border border-[#D4AF37]/70 text-[#D4AF37] rounded-full uppercase tracking-[0.4em] sm:tracking-ultra text-[10px] sm:text-xs font-black transition-all duration-700 hover:bg-[#D4AF37] hover:text-black shadow-[0_0_60px_rgba(212,175,55,0.25)] flex items-center gap-4 sm:gap-6 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
                    <span className="relative z-10 flex items-center gap-4 sm:gap-6">
                      {t.hero.cta}
                      <ArrowDownRight size={16} className="group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-500" />
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* 装饰线条 */}
          <div className="absolute bottom-8 sm:bottom-0 left-0 right-0 flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-[300px] sm:max-w-[400px]"
            >
              {/* 双线装饰 - 金色主题 */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#D4AF37]"
                />
                <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
              </div>
              {/* 辅助细线 */}
              <div className="w-full h-[1px] bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37]/5 to-transparent mt-2" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - 强化大空间与对比度 */}
      <section id="about" className="py-32 px-8 md:px-24 relative">
        {/* 装饰性背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-black to-[#080808]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_0%_50%,#D4AF3703_0%,transparent_50%)]" />

        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-40 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative group">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
                alt="Modern corporate office interior representing Conflux Fortune's sophisticated approach to wealth management and fintech innovation in Hong Kong"
                className="w-full h-full object-cover opacity-35 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[3s]"
                width="800"
                height="1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>
            <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] border border-[#D4AF37]/50 rounded-[3.5rem] backdrop-blur-3xl p-20 flex flex-col justify-end bg-gradient-to-br from-black/50 via-black/40 to-transparent shadow-[0_25px_80px_rgba(212,175,55,0.2)]">
              <Globe className="text-[#D4AF37] mb-10 animate-spin-slow" size={72} strokeWidth={1} />
              <span className="text-[#D4AF37] font-serif text-6xl mb-5 tracking-tighter leading-none">Heritage</span>
              <span className="text-white/60 text-xs uppercase tracking-ultra font-black">Global Asset Protection</span>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-16">
            <SectionHeading title={t.nav.about} subtitle="Our Philosophy" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl text-white/90 leading-tight font-serif italic font-light text-balance"
            >
              {lang === 'TC'
                ? '以香港之名，匯聚大灣區財富與科技的未來。'
                : 'In the name of Hong Kong, converging the future of wealth and technology in the GBA.'}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70 leading-relaxed-custom font-light body-text text-sharp hyphens-none"
            >
              {lang === 'TC'
                ? '灣匯財富致力於構建新一代金融+科技生態，我們以深厚的行業底蘊融合先進的數字技術，為大中華區及全球高淨值客戶提供精準的資產配置建議。在瞬息萬變的全球市場中，我們是您最堅實的專業後盾。'
                : 'Conflux Fortune LIMITED is building a new paradigm for wealth and tech convergence. We bridge deep financial expertise with the velocity of innovation to protect and grow your legacy in an ever-shifting global landscape.'}
            </motion.p>

            <div className="grid grid-cols-2 gap-20 pt-12 border-t border-white/5">
              <div className="space-y-4">
                <h5 className="text-6xl font-serif text-gold tracking-tighter">A+</h5>
                <p className="text-white/50 text-xs uppercase tracking-ultra font-black">Security Rating</p>
              </div>
              <div className="space-y-4">
                <h5 className="text-6xl font-serif text-gold tracking-tighter">∞</h5>
                <p className="text-white/50 text-xs uppercase tracking-ultra font-black">Digital Scalability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - 精细化的卡片排版 */}
      <section id="services" className="py-64 px-8 md:px-24 bg-gradient-to-b from-[#080808] via-[#060606] to-[#040404] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,#D4AF3710_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,#D4AF3708_0%,transparent_50%)]" />
        <div className="max-w-[1800px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-40 gap-20">
            <SectionHeading title={t.nav.services} subtitle="Strategic Pillars" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-md text-white/50 text-xs leading-relaxed-custom border-l border-[#D4AF37]/30 pl-12 mb-6 font-medium italic text-balance"
            >
              Our multidisciplinary approach combines traditional trust with digital efficiency, creating an impenetrable fortress for your family's future.
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Shield, id: 'insurance' },
              { icon: Briefcase, id: 'familyOffice' },
              { icon: TrendingUp, id: 'funds' },
              { icon: Cpu, id: 'fintech' }
            ].map((service, idx) => (
              <ServiceCard
                key={service.id}
                index={idx}
                icon={service.icon}
                title={t.segments[service.id as keyof typeof t.segments].title}
                desc={t.segments[service.id as keyof typeof t.segments].desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - 增强沉浸感 */}
      <section id="contact" className="py-32 sm:py-48 md:py-64 px-4 sm:px-8 md:px-24 relative">
        {/* 装饰性背景 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606] to-black" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-[1700px] mx-auto relative z-10">
          <div className="relative group p-8 sm:p-16 md:p-24 lg:p-40 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] lg:rounded-[5rem] border border-white/8 bg-gradient-to-br from-[#0a0a0a] via-black to-[#050505] overflow-hidden shadow-[0_0_80px_sm:shadow-[0_0_120px_rgba(0,0,0,1)]">
            <div className="absolute inset-0 bg-noise opacity-[0.04]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/4 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_100%_0%,#D4AF3712_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col xl:flex-row items-start justify-between gap-20 sm:gap-30 md:gap-40">
              <div className="space-y-12 sm:space-y-16 md:space-y-20 flex-1">
                <SectionHeading title={t.nav.contact} subtitle="Join the Elite" />
                <div className="space-y-10 sm:space-y-12 md:space-y-14">
                  <div className="flex items-center gap-6 sm:gap-8 md:gap-10 group/item cursor-pointer">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 flex items-center justify-center group-hover/item:border-[#D4AF37]/50 transition-all duration-700 shadow-2xl md:shadow-3xl bg-black"
                    >
                      <Mail className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" size={20} sm:size={24} md:size={28} />
                    </motion.div>
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-ultra text-white/50 font-black mb-1.5 sm:mb-2">Private Direct</span>
                      <a href={`mailto:${t.footer.contact}`} className="text-lg sm:text-xl md:text-2xl lg:text-3xl md:text-4xl text-white/90 hover:text-[#D4AF37] transition-all duration-500 font-serif font-light relative group-hover:tracking-wider">{t.footer.contact}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 flex items-center justify-center shadow-2xl md:shadow-3xl bg-black">
                      <MapPin className="text-[#D4AF37]" size={20} sm:size={24} md:size={28} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-ultra text-white/50 font-black mb-1.5 sm:mb-2">Global Headquarters</span>
                      <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-serif font-light">{t.footer.address}</p>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="pt-6 sm:pt-8 md:pt-10 border-t border-white/5">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-ultra text-[#D4AF37]/70 font-black mb-6 sm:mb-8">Connect With Us</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                      {/* WeChat */}
                      <motion.a
                        href="javascript:void(0)"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all duration-300 flex flex-col items-center gap-3 sm:gap-4 shadow-lg cursor-pointer"
                        aria-label="Connect via WeChat"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/8 to-white/4 flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/40 group-hover:from-[#D4AF37]/10 group-hover:to-[#D4AF37]/5 transition-all duration-300">
                          <svg viewBox="0 0 24 24" className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:text-[#D4AF37] transition-colors duration-300" fill="currentColor">
                            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.036 2.905c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
                          </svg>
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-white/60 group-hover:text-[#D4AF37] transition-colors duration-300">WeChat</span>
                      </motion.a>

                      {/* WeChat Official Account */}
                      <motion.a
                        href="javascript:void(0)"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all duration-300 flex flex-col items-center gap-3 sm:gap-4 shadow-lg cursor-pointer"
                        aria-label="Follow our WeChat Official Account"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/8 to-white/4 flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/40 group-hover:from-[#D4AF37]/10 group-hover:to-[#D4AF37]/5 transition-all duration-300">
                          <svg viewBox="0 0 24 24" className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:text-[#D4AF37] transition-colors duration-300" fill="currentColor">
                            <path d="M4.5 12c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5-4.5-2.02-4.5-4.5zm9.5 1.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zM9 12c0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5-4.5 2.02-4.5 4.5z" />
                            <path d="M11 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm9-2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                          </svg>
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-white/60 group-hover:text-[#D4AF37] transition-colors duration-300">公众号</span>
                      </motion.a>

                      {/* LinkedIn */}
                      <motion.a
                        href="https://www.linkedin.com/company/conflux-fortune"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all duration-300 flex flex-col items-center gap-3 sm:gap-4 shadow-lg cursor-pointer"
                        aria-label="Connect on LinkedIn"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/8 to-white/4 flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/40 group-hover:from-[#D4AF37]/10 group-hover:to-[#D4AF37]/5 transition-all duration-300">
                          <Linkedin className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:text-[#D4AF37] transition-colors duration-300" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-white/60 group-hover:text-[#D4AF37] transition-colors duration-300">LinkedIn</span>
                      </motion.a>

                      {/* Facebook */}
                      <motion.a
                        href="javascript:void(0)"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all duration-300 flex flex-col items-center gap-3 sm:gap-4 shadow-lg cursor-pointer"
                        aria-label="Follow on Facebook"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/8 to-white/4 flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/40 group-hover:from-[#D4AF37]/10 group-hover:to-[#D4AF37]/5 transition-all duration-300">
                          <Facebook className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:text-[#D4AF37] transition-colors duration-300" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-white/60 group-hover:text-[#D4AF37] transition-colors duration-300">Facebook</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <form className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-ultra text-[#D4AF37]/70 ml-4 sm:ml-6 font-black">Full Name</label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text" className="w-full bg-white/[0.03] border border-white/8 rounded-2xl sm:rounded-2xl md:rounded-3xl px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base outline-none focus:border-[#D4AF37]/50 focus:ring-2 focus:ring-[#D4AF37]/30 transition-all duration-300 text-white placeholder:text-white/8 shadow-inner" aria-label="Full Name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-ultra text-[#D4AF37]/70 ml-4 sm:ml-6 font-black">Secure Line</label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text" className="w-full bg-white/[0.03] border border-white/8 rounded-2xl sm:rounded-2xl md:rounded-3xl px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base outline-none focus:border-[#D4AF37]/50 focus:ring-2 focus:ring-[#D4AF37]/30 transition-all duration-300 text-white placeholder:text-white/8 shadow-inner" aria-label="Secure Line" placeholder="Enter your contact number" />
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-ultra text-[#D4AF37]/70 ml-4 sm:ml-6 font-black">Inquiry Specification</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      rows={4} className="w-full bg-white/[0.03] border border-white/8 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2rem] px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base outline-none focus:border-[#D4AF37]/50 focus:ring-2 focus:ring-[#D4AF37]/30 transition-all duration-300 text-white placeholder:text-white/8 shadow-inner" aria-label="Inquiry Specification" placeholder="Tell us about your strategic vision..." />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02, brightness: 1.15, boxShadow: '0 15px 40px sm:shadow-[0_20px_60px_rgba(212, 175, 55, 0.4)]' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 sm:py-6 md:py-8 bg-gradient-to-r from-[#D4AF37] via-[#FFF5B7] to-[#8A6D3B] text-black font-black uppercase tracking-[0.4em] sm:tracking-ultra text-xs sm:text-sm rounded-2xl sm:rounded-3xl md:rounded-3xl shadow-[0_15px_40px_rgba(212,175,55,0.3)] transition-all relative overflow-hidden group"
                    type="submit"
                    aria-label="Submit form to initiate connection"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 text-sm sm:text-base">Initiate Connection</span>
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - 极简排版结束 */}
      <footer className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-8 md:px-24 border-t border-white/5 relative bg-black">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12 sm:gap-14 md:gap-16">
          <div className="flex items-center gap-4 sm:gap-6 group cursor-pointer opacity-80 hover:opacity-100 transition-all duration-700">
            <img
              src="/images/cf-favicon.png"
              alt="Conflux Fortune LIMITED Logo"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-shadow duration-500"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <p className="text-white/50 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-ultra font-bold">{t.footer.rights}</p>
          </div>

          <div className="flex gap-6 sm:gap-10 md:gap-12 text-white/50 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-ultra font-black">
            <a href="/privacy" className="hover:text-[#D4AF37] transition-all" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#D4AF37] transition-all" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          </div>
        </div>
      </footer>
      {/* TradingView Ticker Tape - Fixed Bottom Right */}
      <div className="fixed bottom-6 right-6 z-[9999] w-[700px] h-[100px] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] border border-[#D4AF37]/20 bg-black/90 backdrop-blur-xl">
        <tv-ticker-tape
          symbols="FX:USDHKD,AUDHKD"
          hide-chart
          item-size="compact"
          locale="zh_TW"
          theme="dark"
        ></tv-ticker-tape>
      </div>
    </div>
  );
}
