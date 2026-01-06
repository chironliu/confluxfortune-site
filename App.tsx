
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Briefcase, TrendingUp, Cpu, Globe, Mail, MapPin, ChevronRight, Menu, X, ArrowDownRight } from 'lucide-react';
import { translations } from './translations';
import { Language } from './types';

// Updated GoldText props to ensure children are recognized correctly as optional by the compiler
const GoldText = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <span className={`text-gold metallic-glow ${className}`}>{children}</span>
);

const SectionHeading = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-24 space-y-6">
    <motion.h3 
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-[9px] md:text-[11px] tracking-ultra uppercase text-[#D4AF37]/50 font-bold"
    >
      {subtitle}
    </motion.h3>
    <motion.h2 
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="text-5xl md:text-8xl font-serif leading-[1.05] text-balance font-medium"
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-20 py-10 ${isScrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 py-6' : 'bg-transparent'}`}>
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="flex items-center gap-5 group cursor-pointer"
        >
          <div className="w-14 h-14 border border-[#D4AF37]/20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#111] to-[#000] group-hover:border-[#D4AF37]/60 transition-all duration-500 shadow-xl">
            <span className="text-gold font-serif font-bold text-2xl">C</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-tighter leading-none text-white/95">Conflux Fortune</span>
            <span className="text-[10px] tracking-ultra text-[#D4AF37]/60 uppercase leading-none mt-2 font-bold">Privilege • Legacy</span>
          </div>
        </motion.div>

        {/* Desktop Menu - 精细化字体显示 */}
        <div className="hidden lg:flex items-center gap-16 text-[10px] font-bold tracking-ultra uppercase">
          {['about', 'services', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="text-white/40 hover:text-[#D4AF37] transition-all duration-300 relative group overflow-hidden"
            >
              {content.nav[item as keyof typeof content.nav]}
              <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-[#D4AF37] transform translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </a>
          ))}
          
          <div className="flex items-center gap-8 ml-4 border-l border-white/10 pl-16">
            {(['EN', 'TC'] as Language[]).map((l) => (
              <button 
                key={l}
                onClick={() => setLang(l)} 
                className={`transition-all duration-300 font-bold ${lang === l ? 'text-[#D4AF37]' : 'text-white/20 hover:text-white/50'}`}
              >
                {l === 'TC' ? '繁中' : 'EN'}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white/60" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 bg-black z-40 flex flex-col items-center justify-center gap-12 uppercase tracking-ultra text-xs lg:hidden"
          >
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold text-white/60 text-lg">{content.nav.about}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold text-white/60 text-lg">{content.nav.services}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold text-white/60 text-lg">{content.nav.contact}</a>
            <div className="flex gap-12 mt-12 text-[#D4AF37] border-t border-white/10 pt-12">
              <button onClick={() => { setLang('EN'); setMobileMenuOpen(false); }}>EN</button>
              <button onClick={() => { setLang('TC'); setMobileMenuOpen(false); }}>繁中</button>
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
    whileHover={{ y: -20, scale: 1.02 }}
    className="group relative p-12 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-[#D4AF37]/30 transition-all duration-700 overflow-hidden min-h-[480px] flex flex-col justify-between shadow-2xl"
  >
    <div className="absolute -top-12 -right-12 p-16 opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-700 group-hover:scale-125">
      <Icon size={240} />
    </div>
    
    <div className="space-y-10 relative z-10">
      <div className="w-20 h-20 rounded-3xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/40 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <Icon className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-700" size={32} />
      </div>
      <div>
        <h4 className="text-3xl font-serif font-medium mb-6 group-hover:text-white transition-colors duration-500">{title}</h4>
        <p className="text-white/40 text-[15px] leading-relaxed font-light group-hover:text-white/70 transition-colors duration-500">
          {desc}
        </p>
      </div>
    </div>

    <div className="relative z-10 pt-10">
      <button className="flex items-center gap-4 text-[9px] uppercase tracking-ultra text-[#D4AF37] font-black group-hover:gap-6 transition-all duration-500">
        Discover Expertise <ArrowDownRight size={14} />
      </button>
    </div>
  </motion.div>
);

export default function App() {
  const [lang, setLang] = useState<Language>('TC');
  const t = translations[lang];

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });
  
  const heroScale = useTransform(smoothProgress, [0, 0.4], [1, 1.2]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const heroBlur = useTransform(smoothProgress, [0, 0.2], [0, 10]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      <div className="bg-noise fixed inset-0 pointer-events-none z-[100]" />
      
      <Navbar lang={lang} setLang={setLang} content={t} />

      {/* Hero Section - 极致的排版与空间感 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity, filter: `blur(${heroBlur}px)` }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?auto=format&fit=crop&q=80&w=2070" 
            alt="HK Finance Center" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-4 px-8 py-3 border border-white/5 rounded-full backdrop-blur-xl mb-6 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[9px] tracking-ultra uppercase text-[#D4AF37] font-black">Hong Kong • Greater Bay Area</span>
            </div>
            
            <h1 className="text-7xl md:text-[14rem] font-serif tracking-tight leading-[0.85] font-medium">
              <GoldText className="pb-8">{t.hero.title}</GoldText>
            </h1>
            
            <p className="text-xl md:text-3xl text-white/40 font-light max-w-4xl mx-auto leading-relaxed-custom text-balance px-4 text-sharp">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10">
              <motion.button 
                whileHover={{ scale: 1.05, letterSpacing: '0.6em' }}
                whileTap={{ scale: 0.95 }}
                className="group px-16 py-6 border border-[#D4AF37]/50 text-[#D4AF37] rounded-full uppercase tracking-ultra text-[10px] font-black transition-all duration-700 hover:bg-[#D4AF37] hover:text-black shadow-[0_0_50px_rgba(212,175,55,0.1)] flex items-center gap-5"
              >
                {t.hero.cta}
                <ArrowDownRight size={18} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* 装饰线条 */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
          <div className="w-[1px] h-32 bg-gradient-to-b from-[#D4AF37]/40 to-transparent" />
        </div>
      </section>

      {/* About Section - 强化大空间与对比度 */}
      <section id="about" className="py-64 px-8 md:px-24 relative">
        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-12 gap-32 items-center">
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
                alt="Luxury Corporate" 
                className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[3s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>
            <div className="absolute -bottom-16 -right-16 w-96 h-96 border border-[#D4AF37]/20 rounded-[3rem] backdrop-blur-3xl p-16 flex flex-col justify-end bg-black/40 shadow-3xl">
              <Globe className="text-[#D4AF37] mb-8 animate-spin-slow" size={64} strokeWidth={1} />
              <span className="text-[#D4AF37] font-serif text-5xl mb-4 tracking-tighter leading-none">Heritage</span>
              <span className="text-white/30 text-[10px] uppercase tracking-ultra font-black">Global Asset Protection</span>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-14">
            <SectionHeading title={t.nav.about} subtitle="Our Philosophy" />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl text-white/80 leading-tight font-serif italic font-light text-balance"
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
              className="text-xl text-white/40 leading-relaxed-custom font-light body-text text-sharp"
            >
              {lang === 'TC' 
                ? '灣匯財富致力於構建新一代金融+科技生態，我們以深厚的行業底蘊融合先進的數字技術，為大中華區及全球高淨值客戶提供精準的資產配置建議。在瞬息萬變的全球市場中，我們是您最堅實的專業後盾。'
                : 'Conflux Fortune LIMITED is building a new paradigm for wealth and tech convergence. We bridge deep financial expertise with the velocity of innovation to protect and grow your legacy in an ever-shifting global landscape.'}
            </motion.p>
            
            <div className="grid grid-cols-2 gap-20 pt-12 border-t border-white/5">
              <div className="space-y-4">
                <h5 className="text-6xl font-serif text-gold tracking-tighter">A+</h5>
                <p className="text-white/30 text-[9px] uppercase tracking-ultra font-black">Security Rating</p>
              </div>
              <div className="space-y-4">
                <h5 className="text-6xl font-serif text-gold tracking-tighter">∞</h5>
                <p className="text-white/30 text-[9px] uppercase tracking-ultra font-black">Digital Scalability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - 精细化的卡片排版 */}
      <section id="services" className="py-64 px-8 md:px-24 bg-[#030303] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,#D4AF3705_0%,transparent_50%)]" />
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-16">
            <SectionHeading title={t.nav.services} subtitle="Strategic Pillars" />
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-md text-white/20 text-xs leading-relaxed-custom border-l border-[#D4AF37]/20 pl-10 mb-6 font-medium italic"
            >
              Our multidisciplinary approach combines traditional trust with digital efficiency, creating an impenetrable fortress for your family's future.
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
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
      <section id="contact" className="py-64 px-8 md:px-24 relative">
        <div className="max-w-[1500px] mx-auto">
          <div className="relative group p-16 md:p-32 rounded-[5rem] border border-white/5 bg-gradient-to-br from-[#080808] to-black overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)]">
            <div className="absolute inset-0 bg-noise opacity-[0.03]" />
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_100%_0%,#D4AF3708_0%,transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col xl:flex-row items-start justify-between gap-32">
              <div className="space-y-16 flex-1">
                <SectionHeading title={t.nav.contact} subtitle="Join the Elite" />
                <div className="space-y-12">
                  <div className="flex items-center gap-10 group/item cursor-pointer">
                    <div className="w-20 h-20 rounded-[2rem] border border-white/5 flex items-center justify-center group-hover/item:border-[#D4AF37]/40 transition-all duration-700 shadow-3xl bg-black">
                      <Mail className="text-[#D4AF37]" size={28} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-ultra text-white/20 font-black mb-2">Private Direct</span>
                      <a href={`mailto:${t.footer.contact}`} className="text-2xl md:text-4xl text-white/70 hover:text-white transition-all duration-500 font-serif font-light">{t.footer.contact}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-10">
                    <div className="w-20 h-20 rounded-[2rem] border border-white/5 flex items-center justify-center shadow-3xl bg-black">
                      <MapPin className="text-[#D4AF37]" size={28} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-ultra text-white/20 font-black mb-2">Global Headquarters</span>
                      <p className="text-2xl text-white/70 font-serif font-light">{t.footer.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full max-w-xl">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-ultra text-[#D4AF37]/50 ml-6 font-black">Full Name</label>
                      <input type="text" className="w-full bg-white/[0.02] border border-white/5 rounded-3xl px-8 py-6 outline-none focus:border-[#D4AF37]/30 transition-all duration-700 text-white placeholder:text-white/5 shadow-inner" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-ultra text-[#D4AF37]/50 ml-6 font-black">Secure Line</label>
                      <input type="text" className="w-full bg-white/[0.02] border border-white/5 rounded-3xl px-8 py-6 outline-none focus:border-[#D4AF37]/30 transition-all duration-700 text-white placeholder:text-white/5 shadow-inner" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-ultra text-[#D4AF37]/50 ml-6 font-black">Inquiry Specification</label>
                    <textarea rows={4} className="w-full bg-white/[0.02] border border-white/5 rounded-[2rem] px-8 py-6 outline-none focus:border-[#D4AF37]/30 transition-all duration-700 text-white placeholder:text-white/5 shadow-inner" placeholder="Tell us about your strategic vision..." />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02, brightness: 1.2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-8 bg-gradient-to-r from-[#D4AF37] via-[#FFF5B7] to-[#8A6D3B] text-black font-black uppercase tracking-ultra text-[11px] rounded-3xl shadow-[0_20px_60px_rgba(212,175,55,0.2)] transition-all"
                  >
                    Initiate Connection
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - 极简排版结束 */}
      <footer className="py-32 px-8 md:px-24 border-t border-white/5 relative bg-black">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex items-center gap-6 group cursor-pointer opacity-40 hover:opacity-100 transition-all duration-700">
             <div className="w-12 h-12 border border-[#D4AF37]/20 rounded-full flex items-center justify-center bg-zinc-900 shadow-2xl">
               <span className="text-gold font-serif font-bold text-xl">C</span>
             </div>
             <div className="flex flex-col">
              <span className="font-serif text-lg tracking-tight text-white/90">Conflux Fortune</span>
              <span className="text-[9px] tracking-ultra text-[#D4AF37]/60 uppercase font-black">Hong Kong Limited</span>
             </div>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <p className="text-white/20 text-[10px] uppercase tracking-ultra font-bold">{t.footer.rights}</p>
          </div>

          <div className="flex gap-12 text-white/20 text-[10px] uppercase tracking-ultra font-black">
            <a href="#" className="hover:text-[#D4AF37] transition-all">Privacy Strategy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-all">Risk Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
