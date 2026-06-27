import { ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, Menu, X, Star, MapPin, Mail, ChevronRight } from "lucide-react";
import logoImg from "../assets/images/ss_catering_logo_1782548645161.jpg";
import { BRANDS } from "../data";
import { META_IMAGE } from "../galleryAssets";

const NAV_TABS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "menus", label: "Menus" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

interface HeritageHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function HeritageHeader({
  activeTab,
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeritageHeaderProps) {
  return (
    <>
      <div className="hidden md:block bg-secondary text-on-secondary text-xs py-2 px-4">
        <div className="heritage-container flex justify-between items-center">
          <span className="flex items-center gap-2 font-ui font-semibold tracking-wide">
            <Star className="w-3.5 h-3.5 fill-primary-fixed-dim text-primary-fixed-dim" />
            Coimbatore&apos;s Premier Brahmin Caterer · Since 2012
          </span>
          <div className="flex items-center gap-4">
            <a href={`tel:${BRANDS.phoneRaw}`} className="hover:text-primary-fixed transition font-bold">
              {BRANDS.phone}
            </a>
            <span className="opacity-40">|</span>
            <a href={BRANDS.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-primary-fixed transition">
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-surface-container-lowest border-b border-outline-variant shadow-sm h-16 md:h-20">
        <div className="heritage-container h-full flex justify-between items-center">
          <button
            type="button"
            onClick={() => setActiveTab("home")}
            className="flex items-center gap-3 text-left group"
          >
            <img
              src={logoImg}
              alt="SS Catering Logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-border-gold shadow-sm object-cover group-hover:scale-105 transition-transform"
            />
            <div>
              <div className="font-serif text-lg md:text-xl font-bold text-primary leading-tight">
                SS Catering & Events
              </div>
              <div className="hidden sm:block font-ui text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                Pure Brahmin Vegetarian
              </div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={activeTab === tab.id ? "heritage-nav-link-active" : "heritage-nav-link"}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab("quote")}
              className="heritage-btn-outline !py-2.5 !px-5 !text-xs"
            >
              Get Quote
            </button>
            <a href={`tel:${BRANDS.phoneRaw}`} className="heritage-btn-secondary !py-2.5 !px-5 !text-xs">
              Call Now
            </a>
            <a href={BRANDS.whatsappUrl} target="_blank" rel="noreferrer" className="heritage-btn-whatsapp !py-2.5 !px-5 !text-xs">
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-primary p-2 rounded-full hover:bg-surface-container-low transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-outline-variant bg-surface-bright overflow-hidden"
            >
              <div className="heritage-container py-4 space-y-1">
                {NAV_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl font-ui text-sm font-semibold transition ${
                      activeTab === tab.id
                        ? "bg-primary text-on-primary"
                        : "hover:bg-surface-container-low text-on-surface"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
                <div className="pt-3 grid grid-cols-2 gap-2">
                  <a href={`tel:${BRANDS.phoneRaw}`} className="heritage-btn-secondary !text-xs !py-3">
                    Call
                  </a>
                  <a href={BRANDS.whatsappUrl} target="_blank" rel="noreferrer" className="heritage-btn-whatsapp !text-xs !py-3">
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export function HeritageBananaDivider() {
  return (
    <div className="flex items-center justify-center py-10 px-4">
      <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary opacity-40" />
      <span className="material-symbols-outlined text-primary-container text-4xl mx-4 opacity-70">eco</span>
      <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary opacity-40" />
    </div>
  );
}

interface HeritageFooterProps {
  setActiveTab: (tab: string) => void;
  setServiceCategoryFilter: (filter: string) => void;
  setServiceSearch: (search: string) => void;
}

export function HeritageFooter({
  setActiveTab,
  setServiceCategoryFilter,
  setServiceSearch,
}: HeritageFooterProps) {
  return (
    <footer
      className="bg-charcoal text-turmeric-light pt-16 pb-28 md:pb-16 font-sans relative"
      itemScope
      itemType="https://schema.org/CateringBusiness"
    >
      <meta itemProp="url" content="https://www.sscateringcoimbatore.com/" />
      <meta itemProp="image" content={META_IMAGE} />
      <span itemProp="foundingDate" className="hidden">
        2012-02
      </span>

      <div className="heritage-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        <div className="space-y-4">
          <div className="font-serif text-2xl font-bold text-primary-fixed">SS Catering & Events</div>
          <p className="text-turmeric-light/80 leading-relaxed" itemProp="description">
            Premium Brahmin Vegetarian Catering in Coimbatore. Traditional tastes, modern hygiene standards.
          </p>
          <div className="veg-badge">
            <span className="veg-badge-icon">
              <span className="veg-badge-dot" />
            </span>
            <span className="font-ui text-xs uppercase tracking-widest text-white">Pure Brahmin Vegetarian</span>
          </div>
        </div>

        <div>
          <h4 className="font-ui font-bold text-white mb-5 uppercase tracking-wider text-xs">Services</h4>
          <ul className="space-y-3 text-turmeric-light/80">
            {[
              { label: "Wedding Catering", filter: "wedding" },
              { label: "Corporate Events", filter: "corporate" },
              { label: "Brahmin Traditional", filter: "religious" },
              { label: "Service Areas", filter: "location" },
            ].map((lnk) => (
              <li key={lnk.label}>
                <button
                  type="button"
                  onClick={() => {
                    setServiceCategoryFilter(lnk.filter);
                    setActiveTab("services");
                  }}
                  className="hover:text-primary-fixed transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-primary-fixed shrink-0" />
                  {lnk.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-ui font-bold text-white mb-5 uppercase tracking-wider text-xs">Contact Us</h4>
          <ul className="space-y-3 text-turmeric-light/80" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-fixed shrink-0" />
              <a href={`tel:${BRANDS.phoneRaw}`} className="hover:text-primary-fixed font-bold" itemProp="telephone">
                {BRANDS.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-fixed shrink-0" />
              <a href={`mailto:${BRANDS.email}`} className="hover:text-primary-fixed" itemProp="email">
                {BRANDS.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary-fixed shrink-0 mt-0.5" />
              <span itemProp="streetAddress">{BRANDS.address}</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl overflow-hidden border border-outline/30 h-48 grayscale contrast-125">
          <iframe
            src="https://maps.google.com/maps?q=selvanayaki+garden,+7,+Siruvani+Main+Rd,+Coimbatore,+Tamil+Nadu+641101&output=embed&z=15"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SS Catering Location"
          />
        </div>
      </div>

      <div className="heritage-container mt-12 pt-6 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-turmeric-light/50">
        <p>© 2012–2026 SS Catering & Events · Coimbatore · Tamil Nadu · 641101</p>
        <div className="flex gap-6">
          <button type="button" className="hover:text-primary-fixed transition-colors">
            Privacy Policy
          </button>
          <button type="button" className="hover:text-primary-fixed transition-colors">
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
}

interface HeritageHeroProps {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  onWhatsApp: () => void;
  onExplore?: () => void;
  exploreLabel?: string;
  children?: ReactNode;
}

export function HeritageHero({
  image,
  badge,
  title,
  subtitle,
  onWhatsApp,
  onExplore,
  exploreLabel,
  children,
}: HeritageHeroProps) {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={image} alt="" className="w-full h-full object-cover hero-ken-burns" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 heritage-container py-24 md:py-32 text-white w-full">
        <div className="max-w-3xl space-y-6">
          <div className="heritage-badge-glass animate-pulse">
            <Star className="w-4 h-4 fill-primary-fixed-dim text-primary-fixed-dim" />
            <span>{badge}</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1]">{title}</h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href={`tel:${BRANDS.phoneRaw}`} className="heritage-btn-primary shadow-xl">
              <Phone className="w-5 h-5" />
              Call {BRANDS.phone}
            </a>
            <button type="button" onClick={onWhatsApp} className="heritage-btn-whatsapp shadow-xl">
              <MessageSquare className="w-5 h-5 fill-current" />
              WhatsApp Us
            </button>
            {onExplore && exploreLabel && (
              <button type="button" onClick={onExplore} className="heritage-btn-outline !text-white !border-white/30 hover:!bg-white/10">
                {exploreLabel}
              </button>
            )}
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}

export function HeritageMobileBar() {
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-50 h-16 bg-surface-container-lowest border-t border-border-gold flex shadow-2xl">
      <a
        href={`tel:${BRANDS.phoneRaw}`}
        className="flex flex-1 items-center justify-center bg-secondary text-on-secondary font-ui font-bold text-xs uppercase tracking-wider gap-2"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <a
        href={BRANDS.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 items-center justify-center text-on-surface font-ui font-bold text-xs uppercase tracking-wider gap-2 hover:bg-surface-container-low transition"
      >
        <MessageSquare className="w-4 h-4" />
        WhatsApp
      </a>
    </nav>
  );
}

export function HeritageRatingBadge({ rating, count }: { rating: string; count: number }) {
  return (
    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20">
      <div className="flex text-primary-fixed-dim">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <span className="font-ui text-xs font-semibold uppercase tracking-wider">
        {rating}/5 ({count}+ Reviews)
      </span>
    </div>
  );
}

export function HeritageSectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`${align === "center" ? "mb-12" : "mb-6"} ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && <div className="heritage-badge mb-4">{eyebrow}</div>}
      <h2 className="heritage-heading-lg mb-3">{title}</h2>
      {subtitle && <p className="heritage-body">{subtitle}</p>}
    </div>
  );
}
