import { useState, useMemo, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Check,
  Coffee,
  Search,
  Award,
  Clock,
  ChevronRight,
  Star,
  Sparkles,
  Calculator,
  MessageSquare,
  Menu,
  X,
  Utensils,
  BookOpen,
  Heart,
  Filter,
  ArrowRight,
  ExternalLink,
  ThumbsUp,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

import {
  BRANDS,
  MENU_PLANS,
  ALL_SERVICES,
  generateReviews,
  COIMBATORE_AREAS,
  ServiceItem,
  ReviewItem
} from "./data";

import {
  GALLERY_ITEMS,
  GALLERY_IMAGES,
  HERO_IMAGE,
  FEATURE_IMAGE,
  BANNER_IMAGE,
} from "./galleryAssets";
import {
  HeritageHeader,
  HeritageFooter,
  HeritageBananaDivider,
  HeritageHero,
  HeritageMobileBar,
  HeritageSectionHeader,
  HeritageRatingBadge,
} from "./components/HeritageLayout";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Search and filter states for Services Page
  const [serviceSearch, setServiceSearch] = useState<string>("");
  const [serviceCategoryFilter, setServiceCategoryFilter] = useState<string>("all");

  // Search and filter states for Reviews Page
  const [reviewSearch, setReviewSearch] = useState<string>("");
  const [reviewCategoryFilter, setReviewCategoryFilter] = useState<string>("all");
  const [reviewSort, setReviewSort] = useState<string>("recent");
  const [visibleReviewsCount, setVisibleReviewsCount] = useState<number>(12);

  // Gallery filter state
  const [galleryFilter, setGalleryFilter] = useState<string>("all");

  // Quotation engine states
  const [calcEventType, setCalcEventType] = useState<string>("Wedding");
  const [calcGuests, setCalcGuests] = useState<number>(250);
  const [calcMenuPlan, setCalcMenuPlan] = useState<string>("Traditional Brahmin Saapadu (Full Leaf)");
  const [calcAddons, setCalcAddons] = useState<string[]>(["Uniformed Serving Staff", "Welcome Beverages"]);

  // Contact form state
  const [contactName, setContactName] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");
  const [contactDate, setContactDate] = useState<string>("");
  const [contactGuests, setContactGuests] = useState<string>("");
  const [contactMsg, setContactMsg] = useState<string>("");
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  // Master generated reviews list
  const allReviewsList = useMemo(() => generateReviews(), []);

  // WhatsApp click handler
  const handleWhatsAppChat = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918667566318?text=${encoded}`, "_blank");
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  // Filter 100 Services based on category and search query
  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter(service => {
      const matchesSearch =
        service.title.toLowerCase().includes(serviceSearch.toLowerCase()) ||
        (service.tamilName && service.tamilName.includes(serviceSearch)) ||
        service.description.toLowerCase().includes(serviceSearch.toLowerCase());
      const matchesCategory =
        serviceCategoryFilter === "all" || service.category === serviceCategoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [serviceSearch, serviceCategoryFilter]);

  // Filter Reviews based on search, category filter, and sort option
  const filteredReviews = useMemo(() => {
    let result = allReviewsList.filter(rev => {
      const matchesSearch =
        rev.reviewerName.toLowerCase().includes(reviewSearch.toLowerCase()) ||
        rev.text.toLowerCase().includes(reviewSearch.toLowerCase());
      const matchesCategory =
        reviewCategoryFilter === "all" || rev.category === reviewCategoryFilter;
      return matchesSearch && matchesCategory;
    });

    if (reviewSort === "highest") {
      result = result.sort((a, b) => b.rating - a.rating);
    } else {
      // Recent / default sorting
      result = result.sort((a, b) => b.id - a.id);
    }
    return result;
  }, [allReviewsList, reviewSearch, reviewCategoryFilter, reviewSort]);

  const filteredGallery = useMemo(() => {
    if (galleryFilter === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === galleryFilter);
  }, [galleryFilter]);

  // Quote Calculator Core Computation
  const calculatedPrice = useMemo(() => {
    let basePricePerGuest = 250; // Default for Traditional Saapadu
    if (calcMenuPlan.includes("Royal Wedding Feast")) {
      basePricePerGuest = 550;
    } else if (calcMenuPlan.includes("Festive Breakfast Spread")) {
      basePricePerGuest = 180;
    } else if (calcMenuPlan.includes("Corporate Buffet")) {
      basePricePerGuest = 220;
    }

    let addonPricePerGuest = 0;
    if (calcAddons.includes("Uniformed Serving Staff")) addonPricePerGuest += 40;
    if (calcAddons.includes("Welcome Beverages")) addonPricePerGuest += 30;
    if (calcAddons.includes("Live Counter Filter Coffee")) addonPricePerGuest += 35;
    if (calcAddons.includes("Floral Table Setup")) addonPricePerGuest += 25;

    // Bulk discount modifier
    let discountMultiplier = 1.0;
    if (calcGuests >= 1000) discountMultiplier = 0.85; // 15% off for massive crowds
    else if (calcGuests >= 500) discountMultiplier = 0.90; // 10% off
    else if (calcGuests >= 200) discountMultiplier = 0.95; // 5% off

    const totalPerPlate = Math.round((basePricePerGuest + addonPricePerGuest) * discountMultiplier);
    const grandTotal = totalPerPlate * calcGuests;

    return {
      perPlate: totalPerPlate,
      total: grandTotal
    };
  }, [calcGuests, calcMenuPlan, calcAddons]);

  // Quick Action Buttons Custom WhatsApp Message Generative String
  const getWhatsAppMessageStringForCalculator = () => {
    return `Namaskaram! I was visiting your SS Catering website and wanted to inquire about a custom quote:
• Event Type: ${calcEventType}
• Expected Guests: ${calcGuests}
• Chosen Plan: ${calcMenuPlan}
• Add-ons Selected: ${calcAddons.join(", ") || "None"}
• Estimated Budget: ₹${calculatedPrice.total.toLocaleString("en-IN")}
Please guide me with the available dates and custom menu options. Thank you!`;
  };

  // Contact form submission
  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) {
      alert("Please enter both your Name and Contact Phone Number to proceed.");
      return;
    }
    const msg = `Namaskaram SS Catering! I would like to book a service:
• Name: ${contactName}
• Phone: ${contactPhone}
• Date of Event: ${contactDate || "To be decided"}
• Guest Count: ${contactGuests || "Not sure"}
• My Message: ${contactMsg || "Requesting full menu package details"}`;
    
    setIsSubmitSuccess(true);
    setTimeout(() => {
      handleWhatsAppChat(msg);
      setIsSubmitSuccess(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary-fixed selection:text-on-primary-fixed bg-surface-bright">
      <HeritageHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* 3. MAIN TAB CONTENT CONTROLLER */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {/* ==================== HOME SCREEN TAB ==================== */}
            {activeTab === "home" && (
              <div>
                <HeritageHero
                  image={HERO_IMAGE}
                  badge="12 Years of Traditional Excellence"
                  title="Pure Vegetarian Catering for Weddings, Poojas & Corporate Events in Coimbatore"
                  subtitle="Experience the golden standard of Brahmin tradition. Serving 10,000+ successful events since 2012 with uncompromising quality, hygiene, and authentic sattvic cooking."
                  onWhatsApp={() => handleWhatsAppChat("Namaskaram! I would like to inquire about wedding/event catering services in Coimbatore.")}
                  onExplore={() => setActiveTab("services")}
                  exploreLabel="Explore Services"
                >
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <HeritageRatingBadge rating={BRANDS.rating} count={BRANDS.reviewCount} />
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-2 h-2 rounded-full bg-leaf-green animate-pulse" />
                      Open 24 Hours · Pure Veg · No Onion/Garlic
                    </div>
                  </div>
                </HeritageHero>

                {/* TRUST BAR */}
                <div className="bg-surface-container-low border-y border-outline-variant py-6">
                  <div className="heritage-container flex flex-wrap justify-around items-center gap-6 text-on-surface font-ui font-semibold text-sm">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-on-primary p-2 rounded-full"><Award className="w-5 h-5" /></div>
                      <span>12+ Years of Culinary Perfection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-on-primary p-2 rounded-full"><Coffee className="w-5 h-5" /></div>
                      <span>Filter Coffee Live Counter</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-on-primary p-2 rounded-full"><ShieldCheck className="w-5 h-5" /></div>
                      <span>100% Sattvic · No Onion/Garlic</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-on-primary p-2 rounded-full"><Clock className="w-5 h-5" /></div>
                      <span>24/7 Booking & Dispatch</span>
                    </div>
                  </div>
                </div>

                <HeritageBananaDivider />

                {/* ABOUT + STATS */}
                <section className="heritage-section heritage-container">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                      <HeritageSectionHeader
                        align="left"
                        eyebrow="Premium Catering Excellence"
                        title="The Art of Brahmin Saapadu"
                        subtitle="At SS Catering & Events, food is a sacred ritual. Our authentic Brahmin wedding catering brings centuries-old recipes to life with professional hygiene and ritualistic precision."
                      />
                      <p className="heritage-body-sm mb-6">
                        Whether you are hosting 50 close relatives or a grand gala for 5,000 guests, our team manages every detail with effortless grace — from banana leaf sequencing to live filter coffee counters.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="veg-badge-icon"><div className="veg-badge-dot" /></div>
                        <span className="font-serif text-xl font-semibold text-leaf-green">Pure Brahmin Vegetarian</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="heritage-card-hover">
                        <span className="material-symbols-outlined text-primary text-3xl mb-3">history_edu</span>
                        <h3 className="font-ui text-xs uppercase tracking-widest text-primary mb-1">12+ Years</h3>
                        <p className="heritage-body-sm">Culinary legacy in Coimbatore</p>
                      </div>
                      <div className="heritage-card-hover translate-y-6">
                        <span className="material-symbols-outlined text-primary text-3xl mb-3">groups</span>
                        <h3 className="font-ui text-xs uppercase tracking-widest text-primary mb-1">50 – 5000</h3>
                        <p className="heritage-body-sm">Guest capacity management</p>
                      </div>
                    </div>
                  </div>
                </section>

                <HeritageBananaDivider />

                {/* GOLDEN STANDARDS BENTO */}
                <section className="bg-surface-container py-16 md:py-20">
                  <div className="heritage-container">
                    <HeritageSectionHeader
                      title="The Golden Standards of Service"
                      subtitle="Every detail refined to perfection for your auspicious day."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl overflow-hidden border border-border-gold review-card-shadow group">
                        <div className="h-52 overflow-hidden">
                          <img src={GALLERY_IMAGES[0]?.url ?? HERO_IMAGE} alt="Banana leaf service" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-8">
                          <h3 className="heritage-heading-md mb-2">Banana Leaf Service</h3>
                          <p className="heritage-body-sm">Classic ritualistic service following the proper sequence of dishes as per tradition.</p>
                        </div>
                      </div>
                      <div className="heritage-card-hover flex flex-col justify-between">
                        <div>
                          <span className="material-symbols-outlined text-secondary text-4xl mb-4">restaurant_menu</span>
                          <h3 className="heritage-heading-md !text-on-surface mb-2">Traditional Menu</h3>
                          <p className="heritage-body-sm">Heirloom recipes passed through generations of master cooks.</p>
                        </div>
                      </div>
                      <div className="heritage-card-hover flex flex-col justify-between">
                        <div>
                          <span className="material-symbols-outlined text-primary text-4xl mb-4">badge</span>
                          <h3 className="heritage-heading-md !text-on-surface mb-2">Uniformed Servers</h3>
                          <p className="heritage-body-sm">Professional staff trained in traditional hospitality etiquette.</p>
                        </div>
                      </div>
                      <div className="md:col-span-4 bg-primary text-on-primary rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2">
                          <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-fixed mb-4">On-Site Cooking Excellence</h3>
                          <p className="text-primary-fixed/90 leading-relaxed">Our mobile kitchen brings the freshness of home-cooked meals to your venue with the strictest hygiene and madi (purity) standards.</p>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
                          {["100% Fresh Produce", "Hygiene Certified", "Live Counters", "Punctual Delivery"].map((item) => (
                            <div key={item} className="bg-white/10 p-4 rounded-xl backdrop-blur-sm flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-primary-fixed shrink-0" />
                              <p className="text-sm font-ui font-bold">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* MENU PREVIEW */}
                <section className="heritage-section heritage-container">
                  <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                      <h2 className="heritage-heading-lg text-primary mb-3">A Taste of Tradition</h2>
                      <p className="heritage-body">A sneak peek into our signature wedding feast offerings.</p>
                    </div>
                    <button type="button" onClick={() => setActiveTab("menus")} className="heritage-nav-link-active flex items-center gap-2 !border-0">
                      View Full Menu <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {MENU_PLANS.slice(0, 3).map((plan, i) => (
                      <div key={plan.name} className="heritage-glass-card group">
                        <div className="h-64 overflow-hidden relative">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                          <img
                            src={GALLERY_IMAGES[i + 1]?.url ?? FEATURE_IMAGE}
                            alt={plan.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute bottom-4 left-6 z-20">
                            <h4 className="font-serif text-xl font-semibold text-white">{plan.name.split("(")[0].trim()}</h4>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="heritage-body-sm italic">{plan.description.slice(0, 100)}…</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <HeritageBananaDivider />

                {/* SEO WHAT WE DO PARAGRAPH BLOCK */}
                <section className="heritage-container pb-12 text-center space-y-6 max-w-4xl mx-auto">
                  <h3 className="heritage-heading-md !text-on-surface">
                    Best Catering Services in Coimbatore — For Every Auspicious Occasion
                  </h3>
                  <p className="text-charcoal-text/80 leading-relaxed font-sans text-sm md:text-base">
                    SS Catering & Events is Coimbatore's most trusted Brahmin vegetarian catering service, proudly serving Tamil Hindu families, corporate organizations, and local institutions since February 2012. We specialize in 100% pure vegetarian, onion-free, garlic-free authentic South Indian Brahmin cooking — the kind of divine, sattvic food that belongs on sacred occasions and grand family milestones.
                  </p>
                  <p className="text-charcoal-text/80 leading-relaxed font-sans text-sm md:text-base">
                    We cater for traditional marriage ceremonies, grihapravesams (housewarmings), namakaranam functions, upanayanams (sacred thread ceremonies), seemanthams, annual corporate lunch parties, NGO meets, and intimate home poojas. Every meal is prepared fresh, served hot, and delivered with flawless punctuality — whether you are hosting 50 close relatives or a grand wedding assembly of 5,000 guests. We serve all areas in and around Coimbatore city and across Tamil Nadu.
                  </p>
                </section>

                <HeritageBananaDivider />

                {/* 6 FEATURED CORE SERVICES */}
                <section className="heritage-section bg-surface-container-low">
                  <div className="heritage-container">
                    <HeritageSectionHeader
                      title="Our Core Specialties"
                      subtitle="Six generations of catering heritage, optimized for perfect hygiene and elite local hospitality."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {[
                        {
                          title: "Wedding Catering",
                          tamilName: "திருமண கேட்டரிங்",
                          desc: "Grand Brahmin saapadu, designer buffet layouts, live counters and flawless service for weddings.",
                          icon: "🎊",
                          tabLink: "services",
                          filterVal: "wedding"
                        },
                        {
                          title: "Brahmin Catering",
                          tamilName: "பிராமண சாப்பாடு",
                          desc: "Authentic, traditional no-onion, no-garlic preparation cooked under strict religious hygiene standards.",
                          icon: "🙏",
                          tabLink: "services",
                          filterVal: "religious"
                        },
                        {
                          title: "Corporate Event Catering",
                          tamilName: "அலுவலக விழா விருந்து",
                          desc: "Hygienically packaged hot tiffins, conference meals, and customized office lunch boxes for tech parks.",
                          icon: "🏢",
                          tabLink: "services",
                          filterVal: "corporate"
                        },
                        {
                          title: "Birthday & Private Functions",
                          tamilName: "பிறந்தநாள் விழா கேட்டரிங்",
                          desc: "Customized menus, delicious vegetarian starters, dessert counters, and beautiful presentations.",
                          icon: "🎂",
                          tabLink: "services",
                          filterVal: "life-events"
                        },
                        {
                          title: "Housewarming (Griha Pravesam)",
                          tamilName: "கிரகப்பிரவேசம் கேட்டரிங்",
                          desc: "Complete auspicious morning breakfast, welcoming drinks, and elaborate afternoon lunch spreads.",
                          icon: "🏠",
                          tabLink: "services",
                          filterVal: "life-events"
                        },
                        {
                          title: "Pooja & Temple Catering",
                          tamilName: "கோவில் பிரசாத சமையல்",
                          desc: "Strictly sattvic Prasadam packets, Sundals, Sweet Pongal, and temple consecration bulk meals.",
                          icon: "🏛️",
                          tabLink: "services",
                          filterVal: "religious"
                        }
                      ].map((serv, index) => (
                        <div
                          key={index}
                          className="heritage-card-hover group flex flex-col justify-between"
                        >
                          <div>
                            <div className="text-4xl mb-4">{serv.icon}</div>
                            <h4 className="text-lg font-serif font-bold text-primary group-hover:text-primary-container transition flex items-center justify-between">
                              <span>{serv.title}</span>
                              <span className="text-xs text-gold-primary font-sans font-normal">{serv.tamilName}</span>
                            </h4>
                            <p className="text-xs text-charcoal-text/80 mt-2 leading-relaxed">{serv.desc}</p>
                          </div>
                          <button
                            onClick={() => {
                              setServiceCategoryFilter(serv.filterVal);
                              setActiveTab("services");
                            }}
                            className="w-full mt-5 bg-cream-bg text-maroon-deep hover:bg-gold-primary hover:text-white border border-border-warm py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1"
                          >
                            <span>Explore Menus & Packages</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="text-center mt-10">
                      <button
                        onClick={() => {
                          setServiceCategoryFilter("all");
                          setActiveTab("services");
                        }}
                        className="heritage-btn-primary mx-auto mt-10"
                      >
                        <span>View All 100 Specialized Catering Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </section>

                <HeritageBananaDivider />

                {/* WHY CHOOSE US */}
                <section className="py-12 px-4 bg-gold-light/25 rounded-2xl max-w-7xl mx-auto">
                  <div className="text-center max-w-3xl mx-auto mb-10">
                    <h3 className="text-2xl md:text-3xl font-serif font-black text-maroon-deep mb-2">Why 10,000+ Coimbatore Families Trust Us</h3>
                    <p className="text-xs text-charcoal-text/70">Our golden standards of traditional hospitality make us the undisputed local favorite.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        title: "Authentic Brahmin Cookery",
                        desc: "Authentic generational recipes, exact spices, and hinge-based tadka instead of garlic.",
                        icon: "📜"
                      },
                      {
                        title: "100% Onion-Garlic Free",
                        desc: "Our kitchens maintain absolute purity. Perfect for all Vedic rituals, temple poojas, and elders.",
                        icon: "🧄"
                      },
                      {
                        title: "Superior Kitchen Hygiene",
                        desc: "Stainless steel apparatus, filtered sweet water preparation, and fully sanitised uniforms.",
                        icon: "🧼"
                      },
                      {
                        title: "Punctuality & Reliability",
                        desc: "12 years and thousands of successful dispatches. We have never delayed an order or wedding breakfast.",
                        icon: "⏰"
                      },
                      {
                        title: "Polite Uniformed Servers",
                        desc: "Expertly trained serving personnel who serve our clients with genuine smile, love, and care.",
                        icon: "👥"
                      },
                      {
                        title: "Transparent Budgets",
                        desc: "Clear itemized package billing. No hidden service charges, VAT, or transport surprises.",
                        icon: "💰"
                      },
                      {
                        title: "Siruvani Water Tastes",
                        desc: "Prepared meticulously using the delicious Siruvani water, doubling the sweetness of payasams.",
                        icon: "💧"
                      },
                      {
                        title: "24/7 Availability",
                        desc: "Our booking managers are always on standby. Call or message us anytime of day or night.",
                        icon: "📞"
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white-card p-5 rounded-xl border border-border-warm/60">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <h4 className="text-sm font-bold text-maroon-deep mb-1">{item.title}</h4>
                        <p className="text-[11px] text-charcoal-text/80 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <HeritageBananaDivider />

                {/* FEATURED GMB REVIEWS SECTION */}
                <section className="heritage-section heritage-container">
                  <HeritageSectionHeader
                    eyebrow="Trust & Excellence"
                    title="What Families Say"
                    subtitle={`Trusted by ${BRANDS.reviewCount}+ families in Coimbatore · ${BRANDS.rating}★ Google rating`}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                    {[
                      {
                        text: "We hired them for a corporate event, and they exceeded expectations. The menu was diverse, the food was hot and fresh, and the service was impeccable.",
                        author: "Sathish Kumar",
                        role: "Corporate Manager",
                        initials: "SK",
                      },
                      {
                        text: "SS Catering exceeded our expectations for our wedding. Our guests kept raving about how delicious the authentic Brahmin wedding saapadu was.",
                        author: "Venkatesh Iyer",
                        role: "Wedding Event",
                        initials: "VI",
                      },
                      {
                        text: "The catering service provided excellent taste and quality. The staff was courteous and ensured smooth service throughout the event.",
                        author: "Priya Chandran",
                        role: "Housewarming Host",
                        initials: "PC",
                      },
                    ].map((hero) => (
                      <div key={hero.author} className="heritage-card relative">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-on-primary">
                          <span className="material-symbols-outlined">format_quote</span>
                        </div>
                        <p className="heritage-body-sm italic mb-6 pt-4 leading-relaxed">&ldquo;{hero.text}&rdquo;</p>
                        <div className="flex items-center gap-4 border-t border-outline-variant pt-4">
                          <div className="w-11 h-11 rounded-full bg-turmeric-light flex items-center justify-center text-primary font-ui font-bold text-sm">
                            {hero.initials}
                          </div>
                          <div>
                            <h5 className="font-ui text-sm font-bold text-on-surface">{hero.author}</h5>
                            <p className="text-xs text-on-surface-variant">{hero.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <button type="button" onClick={() => setActiveTab("reviews")} className="heritage-btn-primary">
                      Show All {BRANDS.reviewCount} Reviews
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </section>

                <HeritageBananaDivider />

                {/* GOOGLE MAPS DIRECT LOCATION SECTION */}
                <section className="bg-white-card py-12 px-4 border-t border-b border-border-warm">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-4 space-y-5">
                      <h3 className="text-2xl md:text-3xl font-serif font-black text-maroon-deep">Visit or Contact Our Kitchens</h3>
                      <p className="text-xs text-charcoal-text/80 leading-relaxed">
                        We are headquartered on Siruvani Main Road, Coimbatore. We maintain strict food safety standards, with automated packaging systems.
                      </p>

                      <div className="space-y-3 text-xs font-medium text-charcoal-text">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                          <span>📍 7, Selvanayaki Garden, Siruvani Main Rd, Coimbatore, Tamil Nadu 641101</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-5 h-5 text-gold-primary shrink-0" />
                          <span>📞 086675 66318 / tel:+918667566318</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-5 h-5 text-gold-primary shrink-0" />
                          <span>📧 info@sscateringcoimbatore.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-gold-primary shrink-0" />
                          <span>🕐 Open 24 Hours · Monday to Sunday</span>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-wrap gap-2">
                        <a
                          href="https://maps.google.com/maps?ftid=0x3ba85f19777fc71d:0x85ae7606e4580b5b"
                          target="_blank"
                          rel="noreferrer"
                          className="bg-maroon-deep hover:bg-red-950 text-white font-bold py-2 px-4 rounded-lg text-xs transition inline-flex items-center gap-1 shadow-sm"
                        >
                          🗺️ Open in Google Maps
                        </a>
                        <a
                          href="tel:+918667566318"
                          className="bg-gold-primary hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg text-xs transition inline-flex items-center gap-1 shadow-sm"
                        >
                          📞 Call Our Kitchen
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-8">
                      {/* PRIMARY MAP EMBED — Selvanayaki Garden, 7, Siruvani Main Rd, Coimbatore 641101 */}
                      <div className="map-container relative" style={{ width: "100%", height: "350px", borderRadius: "12px", overflow: "hidden" }}>
                        <iframe
                          src="https://maps.google.com/maps?q=selvanayaki+garden,+7,+Siruvani+Main+Rd,+Coimbatore,+Tamil+Nadu+641101&output=embed&z=15"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="SS Catering & Events Location — 7 Selvanayaki Garden, Siruvani Main Rd, Coimbatore 641101"
                        ></iframe>
                      </div>
                      <div className="bg-cream-bg py-2.5 px-4 rounded-b-xl border-b border-l border-r border-border-warm flex flex-wrap justify-between items-center text-[11px] font-semibold text-charcoal-text">
                        <span>📍 Siruvani Main Road Office Hub</span>
                        <a href="https://maps.google.com/maps?ftid=0x3ba85f19777fc71d:0x85ae7606e4580b5b" target="_blank" rel="noreferrer" className="text-gold-primary hover:underline">
                          ⭐ Google Map Business Location Listing →
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <HeritageBananaDivider />

                {/* SERVICE AREAS GRID CHIPS */}
                <section className="py-8 px-4 max-w-7xl mx-auto">
                  <div className="text-center mb-8">
                    <h3 className="text-xl md:text-2xl font-serif font-black text-maroon-deep">Catering Services Available Across Coimbatore & Tamil Nadu</h3>
                    <p className="text-xs text-charcoal-text/70 mt-1">Select your area below to query focused services directly in our directory.</p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {COIMBATORE_AREAS.map((area, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setServiceCategoryFilter("location");
                          setServiceSearch(area);
                          setActiveTab("services");
                        }}
                        className="bg-white-card hover:bg-gold-primary hover:text-white border border-border-warm text-charcoal-text font-medium px-3.5 py-1.5 rounded-full text-xs transition"
                      >
                        📍 {area}
                      </button>
                    ))}
                  </div>
                </section>

                <HeritageBananaDivider />

                {/* GMB BANNER BLOCK */}
                <section className="relative py-20 md:py-24 text-center overflow-hidden mb-16 mx-4 md:mx-8 rounded-2xl">
                  <img src={BANNER_IMAGE} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-charcoal/75" />
                  <div className="relative z-10 max-w-2xl mx-auto space-y-6 px-4 text-white">
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary-fixed">Plan Your Perfect Wedding Feast</h3>
                    <p className="heritage-body-sm !text-white/85">
                      Serving Coimbatore&apos;s families and businesses since February 2012. Call, WhatsApp, or use our interactive budget tool today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a href={`tel:${BRANDS.phoneRaw}`} className="heritage-btn-secondary">Call {BRANDS.phone}</a>
                      <button type="button" onClick={() => setActiveTab("quote")} className="heritage-btn-primary">Get Catering Quote</button>
                      <button type="button" onClick={() => handleWhatsAppChat("Namaskaram! I'm interested in booking SS Catering.")} className="heritage-btn-whatsapp">WhatsApp Us</button>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* ==================== 100 SERVICES EXPLORER ==================== */}
            {activeTab === "services" && (
              <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-5xl font-serif font-black text-maroon-deep mb-3">100 Specialized Catering Services</h2>
                  <p className="text-sm text-charcoal-text/80">
                    Filter across weddings, traditional Brahmin poojas, corporate layouts, locations, and pricing options. Click any service to view specialized local menus and request an instant WhatsApp quotation.
                  </p>
                </div>

                {/* SEARCH AND FILTER UTILITY */}
                <div className="bg-white-card p-4 rounded-xl border border-border-warm shadow-sm mb-8 grid grid-cols-1 lg:grid-cols-12 gap-4">
                  {/* Search input */}
                  <div className="lg:col-span-5 relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gold-primary" />
                    <input
                      type="text"
                      placeholder="Search across 100 services (e.g. Ganapathy, Vatha Kuzhambu, Wedding, Seemantham)..."
                      value={serviceSearch}
                      onChange={(e) => setServiceSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-cream-bg/40 border border-border-warm rounded-lg text-sm text-charcoal-text placeholder-charcoal-text/50 focus:outline-none focus:ring-1 focus:ring-gold-primary"
                    />
                    {serviceSearch && (
                      <button onClick={() => setServiceSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-text/50 hover:text-charcoal-text">
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Category Filter tabs */}
                  <div className="lg:col-span-7 flex flex-wrap gap-1.5 items-center justify-start lg:justify-end">
                    {[
                      { id: "all", label: "All (100)" },
                      { id: "wedding", label: "Weddings" },
                      { id: "religious", label: "Brahmin/Religious" },
                      { id: "life-events", label: "Life Events" },
                      { id: "corporate", label: "Corporate" },
                      { id: "menu-format", label: "Formats" },
                      { id: "guest-count", label: "Guest Counts" },
                      { id: "pricing", label: "Pricing" },
                      { id: "location", label: "Locations" }
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setServiceCategoryFilter(cat.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition ${
                          serviceCategoryFilter === cat.id
                            ? "bg-maroon-deep text-white shadow-sm"
                            : "bg-cream-bg text-charcoal-text hover:bg-gold-light/40"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* RESULTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredServices.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className="bg-white-card p-5 rounded-xl border border-border-warm hover:border-gold-primary hover:shadow-md transition duration-200 cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <span className="bg-gold-light text-maroon-deep text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border border-gold-primary/20">
                            {service.category}
                          </span>
                          {service.popular && (
                            <span className="bg-amber-500 text-white text-[9px] uppercase font-black px-2 py-0.5 rounded-md flex items-center gap-0.5">
                              <Star className="w-2.5 h-2.5 fill-current" /> Popular
                            </span>
                          )}
                        </div>
                        <h4 className="text-base font-serif font-black text-maroon-deep flex items-baseline justify-between mb-2">
                          <span>{service.title}</span>
                        </h4>
                        {service.tamilName && (
                          <div className="text-xs text-gold-primary font-sans font-semibold mb-2">
                            {service.tamilName}
                          </div>
                        )}
                        <p className="text-xs text-charcoal-text/75 line-clamp-3 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-border-warm/60 flex items-center justify-between text-xs text-gold-primary font-bold">
                        <span>View Pricing & Details</span>
                        <ChevronRight className="w-4 h-4 text-gold-primary transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  ))}
                </div>

                {filteredServices.length === 0 && (
                  <div className="text-center py-16 bg-white-card rounded-2xl border border-border-warm">
                    <Utensils className="w-12 h-12 text-gold-primary mx-auto mb-3 stroke-[1.5]" />
                    <p className="text-base font-serif font-semibold text-maroon-deep">No services found matching your query.</p>
                    <p className="text-xs text-charcoal-text/60 mt-1">Try resetting the filters or typing a different keyword.</p>
                    <button
                      onClick={() => {
                        setServiceSearch("");
                        setServiceCategoryFilter("all");
                      }}
                      className="mt-4 text-xs font-bold text-white bg-gold-primary px-4 py-2 rounded-lg"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}

                {/* MODAL / SHEET FOR SELECTED SERVICE DETAIL */}
                <AnimatePresence>
                  {selectedService && (
                    <div className="fixed inset-0 bg-charcoal-text/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="bg-white-card text-charcoal-text max-w-lg w-full rounded-2xl shadow-2xl border border-gold-primary overflow-hidden"
                      >
                        <div className="bg-maroon-deep text-cream-bg p-6 relative">
                          <button
                            onClick={() => setSelectedService(null)}
                            className="absolute right-4 top-4 text-cream-bg/70 hover:text-white"
                          >
                            <X className="w-6 h-6" />
                          </button>
                          <span className="text-[10px] bg-gold-primary text-white-card font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-gold-primary/40">
                            Service Category: {selectedService.category}
                          </span>
                          <h3 className="text-2xl font-serif font-black text-white mt-2 leading-tight">
                            {selectedService.title}
                          </h3>
                          {selectedService.tamilName && (
                            <p className="text-sm text-gold-primary font-semibold mt-1">
                              {selectedService.tamilName}
                            </p>
                          )}
                        </div>

                        <div className="p-6 space-y-4">
                          <p className="text-xs text-charcoal-text/80 leading-relaxed">
                            {selectedService.description}
                          </p>

                          <div className="bg-cream-bg p-4 rounded-xl border border-border-warm space-y-2">
                            <h5 className="text-xs font-bold text-maroon-deep uppercase tracking-wider">Estimated local pricing</h5>
                            <p className="text-xs text-charcoal-text font-semibold">
                              🌿 Starting from <span className="text-gold-primary text-base font-bold">₹150 to ₹450 per plate</span> (depending on finalized menu configuration & expected guest count)
                            </p>
                            <div className="text-[10px] text-charcoal-text/70 mt-1 flex items-center gap-1">
                              <Check className="w-3 h-3 text-gold-primary" /> On-site cooking setup / leaf service available across Coimbatore.
                            </div>
                          </div>

                          <div className="space-y-1.5 text-xs text-charcoal-text/80">
                            <p className="font-bold text-maroon-deep">Why choose this service with SS Catering:</p>
                            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0" /> Generational traditional Brahmin cooks</div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0" /> 100% onion-free & garlic-free option guaranteed</div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-primary shrink-0" /> Hygienic transit vessels and warm-keeping systems</div>
                          </div>

                          <div className="pt-4 flex gap-3">
                            <button
                              onClick={() => {
                                handleWhatsAppChat(`Namaskaram! I would like to query package detail and menu for: "${selectedService.title}" (${selectedService.tamilName || ""}) in Coimbatore.`);
                                setSelectedService(null);
                              }}
                              className="flex-grow bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg text-center text-xs transition flex items-center justify-center gap-1.5 shadow"
                            >
                              <MessageSquare className="w-4.5 h-4.5 fill-current" />
                              <span>Inquire on WhatsApp</span>
                            </button>
                            <button
                              onClick={() => {
                                setSelectedService(null);
                                setActiveTab("quote");
                              }}
                              className="bg-gold-primary hover:bg-amber-600 text-white font-bold px-4 rounded-lg text-xs transition"
                            >
                              Budget Calculator
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* ==================== TRADITIONAL MENUS TAB ==================== */}
            {activeTab === "menus" && (
              <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-5xl font-serif font-black text-maroon-deep mb-3">Authentic Traditional Menus</h2>
                  <p className="text-sm text-charcoal-text/80">
                    Carefully preserved South Indian Tamil Brahmin vegetarian recipes prepared with pure woodpress oil, freshly ground spices, and sweet Siruvani water.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {MENU_PLANS.map((plan, idx) => (
                    <div key={idx} className="bg-white-card rounded-2xl border border-border-warm overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
                      <div className="bg-maroon-deep p-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-serif font-black text-white">{plan.name}</h3>
                          {plan.tamilName && (
                            <span className="bg-gold-primary text-maroon-deep text-xs font-bold py-1 px-3 rounded-full">
                              {plan.tamilName}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gold-light mt-2">{plan.description}</p>
                        <div className="text-white font-sans font-bold text-sm mt-3 bg-gold-primary/20 inline-block px-3 py-1 rounded-md border border-gold-primary/30">
                          {plan.priceEstimate}
                        </div>
                      </div>

                      <div className="p-6 flex-grow">
                        <h4 className="text-xs font-bold text-maroon-deep uppercase tracking-wider mb-3">Included Dishes:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-text">
                          {plan.items.map((dish, dIdx) => (
                            <div key={dIdx} className="flex items-start space-x-2">
                              <span className="text-gold-primary font-bold">🌿</span>
                              <span>{dish}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 bg-cream-bg/40 border-t border-border-warm flex flex-wrap gap-3 items-center justify-between">
                        <span className="text-[11px] text-charcoal-text/60 italic">🧅 Prepared strictly Onion-free & Garlic-free</span>
                        <button
                          onClick={() => {
                            setCalcMenuPlan(plan.name);
                            setActiveTab("quote");
                          }}
                          className="bg-gold-primary hover:bg-amber-600 text-white font-sans font-bold py-2 px-4 rounded-lg text-xs transition shadow-sm"
                        >
                          Customize & Calculate Budget →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Live Order Notice Box */}
                <div className="mt-12 bg-gold-light/30 border border-gold-primary/40 rounded-xl p-6 text-center max-w-4xl mx-auto space-y-4">
                  <h4 className="text-lg font-serif font-bold text-maroon-deep flex items-center justify-center gap-1">
                    <Sparkles className="w-5 h-5 text-gold-primary" /> Customized Menu Planning
                  </h4>
                  <p className="text-xs text-charcoal-text/80 leading-relaxed max-w-2xl mx-auto">
                    Do you wish to swap Elaneer Payasam with Semiya? Or add traditional Aviyal to your breakfast spread? Our master cooks can craft customized traditional and contemporary menus to absolute perfection.
                  </p>
                  <button
                    onClick={() => handleWhatsAppChat("Namaskaram! I'm planning an event and want to customize a traditional Brahmin menu list. Please send the full item list.")}
                    className="bg-green-600 hover:bg-green-700 text-white font-sans font-black py-2 px-6 rounded-lg text-xs transition shadow"
                  >
                    💬 Custom Menu Consultation on WhatsApp
                  </button>
                </div>
              </div>
            )}

            {/* ==================== INTERACTIVE QUOTE BUILDER ==================== */}
            {activeTab === "quote" && (
              <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-5xl font-serif font-black text-maroon-deep mb-3">Interactive Budget Calculator</h2>
                  <p className="text-sm text-charcoal-text/80">
                    Adjust the guest counter, select food plans and addon options to receive an instant, transparent cost estimation, then export directly to WhatsApp for calendar booking.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Side: Parameters Form */}
                  <div className="lg:col-span-7 bg-white-card p-6 rounded-2xl border border-border-warm space-y-6">
                    {/* Event type */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-maroon-deep uppercase tracking-wider block">1. Select Event Type</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {["Wedding", "Housewarming", "Pooja/Temple", "Birthday", "Corporate", "Tiffin Delivery"].map((type) => (
                          <button
                            key={type}
                            onClick={() => setCalcEventType(type)}
                            className={`py-2 px-3 rounded-lg text-xs font-bold text-center border transition ${
                              calcEventType === type
                                ? "bg-maroon-deep text-white border-maroon-deep shadow-sm"
                                : "bg-cream-bg/40 text-charcoal-text border-border-warm hover:bg-gold-light/20"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Guest Counter Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-maroon-deep uppercase tracking-wider">2. Expected Guest Count</label>
                        <span className="bg-gold-primary text-white text-xs font-black px-3 py-1 rounded-md">
                          {calcGuests} Guests
                        </span>
                      </div>
                      <input
                        type="range"
                        min="25"
                        max="3000"
                        step="25"
                        value={calcGuests}
                        onChange={(e) => setCalcGuests(parseInt(e.target.value))}
                        className="w-full h-2 bg-cream-bg rounded-lg appearance-none cursor-pointer accent-gold-primary"
                      />
                      <div className="flex justify-between text-[10px] text-charcoal-text/60">
                        <span>Min: 25 Guests</span>
                        <span className="font-semibold text-gold-primary">Bulk discounts applied above 200 guests!</span>
                        <span>Max: 3000+ Guests</span>
                      </div>
                    </div>

                    {/* Menu plans selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-maroon-deep uppercase tracking-wider block">3. Primary Menu Selection</label>
                      <div className="space-y-2">
                        {MENU_PLANS.map((plan, idx) => (
                          <div
                            key={idx}
                            onClick={() => setCalcMenuPlan(plan.name)}
                            className={`p-4 rounded-xl border-2 transition cursor-pointer flex flex-col justify-between ${
                              calcMenuPlan === plan.name
                                ? "border-gold-primary bg-gold-light/10"
                                : "border-border-warm/60 bg-cream-bg/20 hover:border-border-warm"
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-bold text-maroon-deep">{plan.name}</span>
                              <span className="text-xs text-gold-primary font-bold">{plan.priceEstimate}</span>
                            </div>
                            <p className="text-[10px] text-charcoal-text/70 mt-1 leading-relaxed">
                              {plan.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Add-on selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-maroon-deep uppercase tracking-wider block">4. Service Add-ons (Optional)</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { name: "Uniformed Serving Staff", price: "₹40/plate", icon: "👥" },
                          { name: "Welcome Beverages", price: "₹30/plate", icon: "🍹" },
                          { name: "Live Counter Filter Coffee", price: "₹35/plate", icon: "☕" },
                          { name: "Floral Table Setup", price: "₹25/plate", icon: "🌸" }
                        ].map((addon) => {
                          const isSelected = calcAddons.includes(addon.name);
                          return (
                            <div
                              key={addon.name}
                              onClick={() => {
                                if (isSelected) {
                                  setCalcAddons(calcAddons.filter(a => a !== addon.name));
                                } else {
                                  setCalcAddons([...calcAddons, addon.name]);
                                }
                              }}
                              className={`p-3 rounded-lg border text-xs cursor-pointer flex justify-between items-center transition ${
                                isSelected
                                  ? "border-gold-primary bg-gold-light/20 font-semibold text-maroon-deep"
                                  : "border-border-warm bg-cream-bg/30 text-charcoal-text/80 hover:bg-gold-light/10"
                              }`}
                            >
                              <div className="flex items-center space-x-2">
                                <span>{addon.icon}</span>
                                <span>{addon.name}</span>
                              </div>
                              <span className="text-[10px] text-gold-primary font-bold">{addon.price}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Bill Breakdown Preview */}
                  <div className="lg:col-span-5 bg-maroon-deep text-white-card p-6 rounded-2xl border border-gold-primary shadow-xl space-y-6 sticky top-28">
                    <div className="text-center pb-4 border-b border-white-card/15">
                      <span className="text-[10px] uppercase font-black tracking-widest text-gold-light">Live Quotation Estimation</span>
                      <h3 className="text-xl font-serif font-bold text-white mt-1">SS Catering & Events</h3>
                    </div>

                    <div className="space-y-3.5 text-xs">
                      <div className="flex justify-between">
                        <span className="text-cream-bg/70">Selected Event:</span>
                        <span className="font-bold text-gold-light">{calcEventType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-cream-bg/70">Expected Guest Count:</span>
                        <span className="font-bold text-gold-light">{calcGuests} Plates</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-cream-bg/70">Menu Choice:</span>
                        <span className="font-bold text-gold-light text-right max-w-[200px] line-clamp-1">{calcMenuPlan}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-cream-bg/70">Service Add-ons:</span>
                        <span className="font-bold text-gold-light text-right max-w-[200px] line-clamp-1">
                          {calcAddons.join(", ") || "None"}
                        </span>
                      </div>

                      {calcGuests >= 200 && (
                        <div className="flex justify-between bg-white-card/10 p-2.5 rounded-lg border border-gold-primary/30 text-[11px]">
                          <span className="text-gold-light font-bold">⭐ Bulk Discount Activated!</span>
                          <span className="font-black text-green-400">
                            {calcGuests >= 1000 ? "15% OFF" : calcGuests >= 500 ? "10% OFF" : "5% OFF"}
                          </span>
                        </div>
                      )}

                      <div className="h-[1px] bg-white-card/15 my-4"></div>

                      <div className="flex justify-between items-baseline">
                        <span className="text-cream-bg/80 text-sm">Estimated Per Plate:</span>
                        <span className="text-2xl font-black text-gold-light">₹{calculatedPrice.perPlate} <span className="text-xs font-normal text-cream-bg/70">/ plate</span></span>
                      </div>

                      <div className="flex justify-between items-baseline pt-2">
                        <span className="text-cream-bg/80 text-sm">Total Estimated Budget:</span>
                        <span className="text-3xl font-black text-white">₹{calculatedPrice.total.toLocaleString("en-IN")}</span>
                      </div>
                    </div>

                    <div className="bg-white-card/5 p-3 rounded-xl border border-white-card/10 text-[10px] text-cream-bg/70 leading-relaxed text-center">
                      *Note: This is an active ballpark budget tool estimation. Exact tax, customizable dish additions and travel transport variables are computed on final direct consultation.
                    </div>

                    <button
                      onClick={() => handleWhatsAppChat(getWhatsAppMessageStringForCalculator())}
                      className="w-full bg-gold-primary hover:bg-amber-600 text-white font-sans font-black py-4 rounded-xl text-center text-sm transition shadow-lg flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-5 h-5 fill-current" />
                      <span>Request Live Booking Dates on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== CLIENT REVIEWS TAB (229 TOTAL) ==================== */}
            {activeTab === "reviews" && (
              <div className="heritage-container py-12 md:py-16">
                <div className="text-center mb-10">
                  <div className="heritage-badge mx-auto mb-4">Trust & Excellence</div>
                  <h2 className="heritage-heading-xl mb-4">SS Catering & Events — Customer Reviews</h2>
                </div>

                <div className="heritage-card max-w-2xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary leading-none mb-2">{BRANDS.rating}</div>
                    <div className="flex justify-center text-primary-container mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <p className="heritage-body-sm">Based on {BRANDS.reviewCount}+ Google Reviews</p>
                  </div>
                  <div className="hidden md:block w-px h-24 bg-outline-variant mx-auto" />
                  <div className="text-center md:text-left">
                    <p className="heritage-body italic">&ldquo;The gold standard for Brahmin wedding catering in Coimbatore. Hygiene, taste, and tradition at its finest.&rdquo;</p>
                    <p className="font-ui text-xs uppercase tracking-widest text-secondary mt-4">Coimbatore&apos;s Preferred Choice Since 2012</p>
                  </div>
                </div>

                {/* SEARCH & FILTERS */}
                <div className="bg-white-card p-4 rounded-xl border border-border-warm shadow-sm mb-8 grid grid-cols-1 lg:grid-cols-12 gap-4">
                  {/* Search input */}
                  <div className="lg:col-span-4 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-primary" />
                    <input
                      type="text"
                      placeholder="Search reviews (e.g. Sambar, Wedding, Iyer)..."
                      value={reviewSearch}
                      onChange={(e) => setReviewSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-cream-bg/40 border border-border-warm rounded-lg text-xs"
                    />
                  </div>

                  {/* Filter tabs */}
                  <div className="lg:col-span-5 flex flex-wrap gap-1">
                    {[
                      { id: "all", label: "All Reviews (229)" },
                      { id: "wedding", label: "Weddings" },
                      { id: "pooja", label: "Poojas/Temple" },
                      { id: "corporate", label: "Corporate" },
                      { id: "birthday", label: "Birthday" },
                      { id: "housewarming", label: "Housewarmings" },
                      { id: "delivery", label: "Meals Box" }
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setReviewCategoryFilter(cat.id);
                          setVisibleReviewsCount(12);
                        }}
                        className={`px-5 py-2 rounded-full font-ui text-xs font-semibold uppercase tracking-wider transition ${
                          reviewCategoryFilter === cat.id
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container-high text-on-surface-variant hover:bg-turmeric-light"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Sort options */}
                  <div className="lg:col-span-3 flex justify-end">
                    <select
                      value={reviewSort}
                      onChange={(e) => setReviewSort(e.target.value)}
                      className="bg-cream-bg border border-border-warm text-xs font-semibold rounded-lg px-2 py-1.5 focus:outline-none"
                    >
                      <option value="recent">Sort: Most Recent</option>
                      <option value="highest">Sort: Highest Rated</option>
                    </select>
                  </div>
                </div>

                {/* REVIEWS GRID (LOAD MORE SYSTEM) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredReviews.slice(0, visibleReviewsCount).map((rev) => (
                    <div
                      key={rev.id}
                      className="heritage-card flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex text-primary-container">
                            {Array.from({ length: rev.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <span className="font-ui text-[10px] text-outline uppercase">{rev.date}</span>
                        </div>
                        <p className="heritage-body-sm italic mb-4">&ldquo;{rev.text}&rdquo;</p>
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-outline-variant">
                        <div className="w-10 h-10 bg-secondary-fixed text-secondary font-ui font-bold rounded-full flex items-center justify-center text-sm uppercase">
                          {rev.initials}
                        </div>
                        <div>
                          <h5 className="font-ui text-sm font-bold text-on-surface">{rev.reviewerName}</h5>
                          <p className="text-xs text-outline capitalize">{rev.category} Event</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredReviews.length > visibleReviewsCount && (
                  <div className="text-center mt-10">
                    <button
                      type="button"
                      onClick={() => setVisibleReviewsCount(prev => prev + 12)}
                      className="heritage-btn-primary"
                    >
                      Load More Reviews
                    </button>
                  </div>
                )}

                <HeritageBananaDivider />
                <div className="text-center pb-8">
                  <p className="heritage-heading-md !text-on-surface mb-6">Had a great experience?</p>
                  <a
                    href={BRANDS.gmapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="heritage-btn-primary mx-auto"
                  >
                    Leave a Google Review
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {/* ==================== PHOTO GALLERY TAB ==================== */}
            {activeTab === "gallery" && (
              <div className="heritage-container py-12 md:py-16">
                <HeritageSectionHeader
                  title="Our Event Gallery"
                  subtitle="Authentic visual memories of wedding feasts, tiffin layouts, corporate events and traditional Brahmin setups across Coimbatore."
                />

                {/* Filter Controls */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-10">
                  {[
                    { id: "all", label: "All Photos" },
                    { id: "wedding", label: "Wedding Feasts" },
                    { id: "dishes", label: "Signature Dishes" },
                    { id: "religious", label: "Sattvic Poojas" },
                    { id: "corporate", label: "Corporate Buffets" },
                    { id: "setup", label: "Decorative Setups" },
                    { id: "videos", label: "Videos & Reels 🎥" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setGalleryFilter(tab.id)}
                      className={`px-5 py-2 rounded-full font-ui text-xs font-semibold uppercase tracking-wider transition ${
                        galleryFilter === tab.id
                          ? "bg-primary text-on-primary"
                          : "bg-surface-container-high text-on-surface-variant hover:bg-turmeric-light border border-border-gold"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredGallery.map((img) => (
                    <div key={img.id} className="heritage-glass-card overflow-hidden group review-card-shadow">
                      <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => img.videoUrl && setActiveVideoUrl(img.videoUrl)}>
                        <img
                          src={img.url}
                          alt={img.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {img.videoUrl && (
                          <div className="absolute inset-0 bg-black/45 flex items-center justify-center group-hover:bg-black/55 transition-colors">
                            <div className="bg-gold-primary text-white p-3 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-200">
                              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        )}
                        <span className="absolute left-3 bottom-3 bg-primary text-on-primary text-[9px] uppercase font-ui font-bold py-1 px-2.5 rounded-full shadow">
                          {img.category}
                        </span>
                      </div>
                      <div className="p-4 space-y-1">
                        <h4 className="text-sm font-serif font-bold text-maroon-deep">{img.title}</h4>
                        <p className="text-[11px] text-charcoal-text/75">{img.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Video Player Modal */}
                {activeVideoUrl && (
                  <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setActiveVideoUrl(null)}>
                    <div className="bg-white-card rounded-2xl overflow-hidden max-w-2xl w-full relative border border-gold-primary/30" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => setActiveVideoUrl(null)}
                        className="absolute top-4 right-4 bg-maroon-deep text-white p-1.5 rounded-full hover:bg-gold-primary transition z-10"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <div className="p-3 bg-maroon-deep text-white text-center text-xs font-bold font-serif tracking-widest uppercase">
                        🎥 Event Reel & Traditional Cooking Demonstration
                      </div>
                      <div className="aspect-video w-full bg-black">
                        <video
                          src={activeVideoUrl}
                          className="w-full h-full object-contain"
                          controls
                          autoPlay
                          loop
                        />
                      </div>
                      <div className="p-4 bg-cream-bg flex justify-between items-center text-xs text-charcoal-text font-semibold border-t border-border-warm">
                        <span>SS Catering & Events — Traditional Excellence</span>
                        <button
                          onClick={() => setActiveVideoUrl(null)}
                          className="text-maroon-deep hover:text-gold-primary font-bold"
                        >
                          Close Player
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Quote Button */}
                <div className="text-center mt-12">
                  <button
                    onClick={() => setActiveTab("quote")}
                    className="bg-gold-primary hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg text-xs transition shadow flex items-center gap-1.5 mx-auto"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Estimate Budget For Your Upcoming Event</span>
                  </button>
                </div>
              </div>
            )}

            {/* ==================== HERITAGE / ABOUT TAB ==================== */}
            {activeTab === "about" && (
              <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                  <div className="lg:col-span-6 space-y-6">
                    <span className="text-gold-primary text-xs font-bold uppercase tracking-wider">Culinary Heritage Since 2012</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-maroon-deep leading-tight">
                      Preserving True Brahmin Vegetarian Values
                    </h2>
                    <p className="text-xs md:text-sm text-charcoal-text/80 leading-relaxed">
                      Established in February 2012 in Coimbatore, SS Catering & Events was born out of a simple, beautiful mission: to deliver authentic, pious, and extremely tasty Brahmin-style vegetarian catering that traditional Tamil families can count on with peace of mind.
                    </p>
                    <p className="text-xs md:text-sm text-charcoal-text/80 leading-relaxed">
                      To us, cooking is not just a business — it is a holy service (Seva). We understand that sacred functions like grihapravesams, upanayanams, and marriages are spiritual milestones. That is why our kitchen maintains absolute purity: strictly no meat, no eggs, and optional completely onion-free, garlic-free (Sattvic) preparation methods.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-border-warm p-4 rounded-xl">
                        <div className="text-2xl font-black text-gold-primary">14+ Years</div>
                        <div className="text-[10px] uppercase font-bold text-charcoal-text/50">Generational Taste Experience</div>
                      </div>
                      <div className="border border-border-warm p-4 rounded-xl">
                        <div className="text-2xl font-black text-gold-primary">100% Sattvic</div>
                        <div className="text-[10px] uppercase font-bold text-charcoal-text/50">Strict Ingredient Auditing</div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <img
                      src={FEATURE_IMAGE}
                      alt="SS Catering Kitchen Setup"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg border border-gold-primary"
                    />
                  </div>
                </div>

                {/* Key values block */}
                <div className="bg-maroon-deep text-white-card p-8 rounded-2xl border border-gold-primary mb-12">
                  <div className="text-center max-w-3xl mx-auto mb-8">
                    <h3 className="text-2xl font-serif font-bold text-gold-light">Our Triple-Purity Pledge</h3>
                    <p className="text-xs text-cream-bg/70 mt-1">Every plate we serve is built upon three pillars of local excellence.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="space-y-2">
                      <div className="text-4xl">💧</div>
                      <h4 className="text-base font-serif font-bold text-gold-light">Pure Siruvani Water Tastes</h4>
                      <p className="text-[11px] text-cream-bg/80 leading-relaxed">
                        We prepare all of our signature rasams, gravies, and delicious payasams using the pristine Siruvani waters of Coimbatore, unlocking the true native sweetness.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-4xl">🌿</div>
                      <h4 className="text-base font-serif font-bold text-gold-light">Zero Onion, Zero Garlic</h4>
                      <p className="text-[11px] text-cream-bg/80 leading-relaxed">
                        No shortcuts. Our Brahmin saapadu is strictly sattvic, completely omitting tamasic elements to keep the digestives healthy and auspiciously clean.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-4xl">🤝</div>
                      <h4 className="text-base font-serif font-bold text-gold-light">Polite Traditional Manners</h4>
                      <p className="text-[11px] text-cream-bg/80 leading-relaxed">
                        Our servers receive expert training in ancient banana leaf sequence guidelines. Every guest is treated with divine respect and infinite warm requests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== CONTACT US TAB ==================== */}
            {activeTab === "contact" && (
              <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-5xl font-serif font-black text-maroon-deep mb-3">Get in Touch With Us</h2>
                  <p className="text-sm text-charcoal-text/80">
                    We operate 24 hours a day, 7 days a week. Use our rapid form below to book your date or call us directly for an immediate menu consultation.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Contact Form */}
                  <div className="lg:col-span-6 bg-white-card p-6 rounded-2xl border border-border-warm shadow-sm">
                    <h3 className="text-xl font-serif font-bold text-maroon-deep mb-4 flex items-center gap-1.5">
                      <Mail className="w-5 h-5 text-gold-primary" /> Book Your Auspicious Catering Date
                    </h3>

                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase text-charcoal-text/60">Your Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Suresh Iyer"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            className="w-full p-2.5 bg-cream-bg/30 border border-border-warm rounded-lg text-xs"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase text-charcoal-text/60">Contact Phone Number *</label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 086675 66318"
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                            className="w-full p-2.5 bg-cream-bg/30 border border-border-warm rounded-lg text-xs"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase text-charcoal-text/60">Date of Event</label>
                          <input
                            type="date"
                            value={contactDate}
                            onChange={(e) => setContactDate(e.target.value)}
                            className="w-full p-2.5 bg-cream-bg/30 border border-border-warm rounded-lg text-xs"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase text-charcoal-text/60">Approx. Guests count</label>
                          <input
                            type="number"
                            placeholder="e.g. 250"
                            value={contactGuests}
                            onChange={(e) => setContactGuests(e.target.value)}
                            className="w-full p-2.5 bg-cream-bg/30 border border-border-warm rounded-lg text-xs"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-charcoal-text/60">Custom Instructions / Special menu requests</label>
                        <textarea
                          rows={4}
                          placeholder="Please type custom details (e.g. Traditional banana leaf, we want Elaneer Payasam, no onion no garlic for 2 days puja)."
                          value={contactMsg}
                          onChange={(e) => setContactMsg(e.target.value)}
                          className="w-full p-2.5 bg-cream-bg/30 border border-border-warm rounded-lg text-xs"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-maroon-deep hover:bg-red-950 text-white font-sans font-bold py-3 rounded-lg text-xs transition shadow flex items-center justify-center gap-1.5"
                      >
                        {isSubmitSuccess ? (
                          <>
                            <Check className="w-4.5 h-4.5 text-green-400" />
                            <span>Routing to WhatsApp Chat Box...</span>
                          </>
                        ) : (
                          <>
                            <MessageSquare className="w-4.5 h-4.5 fill-current" />
                            <span>Send Query via Direct WhatsApp Msg</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Direct Contact Details */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="bg-white-card p-6 rounded-2xl border border-border-warm shadow-sm space-y-4">
                      <h4 className="text-lg font-serif font-bold text-maroon-deep">Direct Quick Actions</h4>
                      <p className="text-xs text-charcoal-text/80 leading-relaxed">
                        Skip forms completely! Click below to phone us or initiate an instant live chat on our business accounts.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a
                          href="tel:+918667566318"
                          className="flex items-center space-x-3 p-3 bg-gold-light/20 border border-gold-primary/30 rounded-xl hover:bg-gold-light/40 transition"
                        >
                          <Phone className="w-5 h-5 text-gold-primary" />
                          <div>
                            <div className="text-[10px] text-charcoal-text/50 uppercase font-bold">Call Now 24/7</div>
                            <div className="text-xs font-black text-maroon-deep">086675 66318</div>
                          </div>
                        </a>

                        <a
                          href="https://wa.me/918667566318"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center space-x-3 p-3 bg-green-500/10 border border-green-500/30 rounded-xl hover:bg-green-500/20 transition"
                        >
                          <MessageSquare className="w-5 h-5 text-green-600 fill-current" />
                          <div>
                            <div className="text-[10px] text-charcoal-text/50 uppercase font-bold">Instant Chat</div>
                            <div className="text-xs font-black text-green-700">918667566318</div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Google maps embed block */}
                    <div className="bg-white-card p-4 rounded-2xl border border-border-warm shadow-sm">
                      <div className="map-container relative" style={{ width: "100%", height: "220px", borderRadius: "12px", overflow: "hidden" }}>
                        <iframe
                          src="https://maps.google.com/maps?q=selvanayaki+garden,+7,+Siruvani+Main+Rd,+Coimbatore,+Tamil+Nadu+641101&output=embed&z=15"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="SS Catering & Events Location"
                        ></iframe>
                      </div>
                      <div className="text-[10px] text-charcoal-text/60 text-center mt-2 font-medium">
                        📍 Selvanayaki Garden, 7, Siruvani Main Rd, Coimbatore, Tamil Nadu 641101
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <HeritageFooter
        setActiveTab={setActiveTab}
        setServiceCategoryFilter={setServiceCategoryFilter}
        setServiceSearch={setServiceSearch}
      />

      {/* Floating WhatsApp FAB */}
      <a
        href={BRANDS.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 lg:bottom-6 right-6 z-50 bg-leaf-green hover:opacity-90 text-white p-4 rounded-full shadow-2xl transition hover:scale-110 flex items-center justify-center border-2 border-white/30"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>

      <HeritageMobileBar />
    </div>
  );
}
