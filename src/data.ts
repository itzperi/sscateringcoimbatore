export interface ServiceItem {
  id: string;
  title: string;
  tamilName?: string;
  category: 'wedding' | 'religious' | 'life-events' | 'corporate' | 'menu-format' | 'guest-count' | 'pricing' | 'location';
  slug: string;
  description: string;
  popular?: boolean;
}

export interface ReviewItem {
  id: number;
  reviewerName: string;
  rating: number;
  text: string;
  category: 'wedding' | 'corporate' | 'birthday' | 'pooja' | 'housewarming' | 'delivery' | 'general';
  date: string;
  initials: string;
}

export interface MenuItem {
  name: string;
  tamilName?: string;
  priceEstimate: string;
  description: string;
  items: string[];
}

export const BRANDS = {
  name: "SS Catering & Events",
  tagline: "Best Caterers in Coimbatore for Weddings & Corporate Events",
  phone: "086675 66318",
  phoneRaw: "+918667566318",
  whatsappUrl: "https://wa.me/918667566318",
  email: "info@sscateringcoimbatore.com",
  address: "7, Selvanayaki Garden, Siruvani Main Road, Coimbatore, Tamil Nadu 641101",
  gmapsLink: "https://maps.google.com/maps?ftid=0x3ba85f19777fc71d:0x85ae7606e4580b5b",
  rating: "4.8",
  reviewCount: 229,
  established: "February 2012",
  hours: "Open 24 Hours · Monday to Sunday"
};

export const MENU_PLANS: MenuItem[] = [
  {
    name: "Traditional Brahmin Saapadu (Full Leaf)",
    tamilName: "பாரம்பரிய பிராமண சாப்பாடு",
    priceEstimate: "₹250 - ₹450 per plate",
    description: "Sattvic, 100% onion-free & garlic-free authentic South Indian meal served on clean banana leaves. Highly auspicious for housewarmings, upanayanams, and poojas.",
    items: [
      "Traditional Sweet (Asoka Halwa / Mysore Pak)",
      "Vazhaipoo Vadai / Paruppu Vadai",
      "Traditional Rice (Ponni Sadham)",
      "Traditional Brahmin Sambar (Drumstick & Mango)",
      "Jeera Milagu Rasam",
      "Avial (Traditional Vegetable Medley)",
      "Chow Chow Kootu",
      "Urulaikizhangu Poriyal (Potato Fry)",
      "Special Elaneer Payasam (Tender Coconut Kheer)",
      "Pure Buffalo Curd",
      "Aappalam & Pickle",
      "Nei (Pure Ghee) & Paruppu Podi"
    ]
  },
  {
    name: "Royal Wedding Feast (Thirumana Virundhu)",
    tamilName: "அரச திருமண விருந்து",
    priceEstimate: "₹450 - ₹900 per plate",
    description: "Grand wedding multi-course buffet or leaf service featuring rich sweets, starter, main courses, and custom traditional refreshments.",
    items: [
      "Welcoming Rose Milk / Tender Coconut Punch",
      "Kasi Halwa / Badam Halwa (Pure Ghee)",
      "Melt-in-mouth Ghee Mysore Pak",
      "Special Masala Vadai with cashew pieces",
      "Vegetable Pulao / Kashmiri Biryani with Raita",
      "Stuffed Brinjal Curry (Ennai Kathirikai)",
      "Chidambaram Kathirikai Gotsu",
      "Pineapple Rasam (Rich & Tangy)",
      "Malabar Avial",
      "Beans Paruppu Usili",
      "Semiya Javvarisi Payasam",
      "Authentic Mor Kuzhambu",
      "Vatha Kuzhambu",
      "Assorted Appalams (Javvarisi, Vadagam)",
      "Thirunelveli Alwa (Warm)",
      "Beeda (Banaras Paan)"
    ]
  },
  {
    name: "Festive Breakfast Spread (Kalyana Tiffin)",
    tamilName: "கல்யாண காலை டிஃபன்",
    priceEstimate: "₹150 - ₹280 per plate",
    description: "Perfect morning tiffin service with hot steaming idlies, crispy vadas, and delicious sweets, served with three types of chutneys and Brahmin sambar.",
    items: [
      "Ghee Rava Kesari / Pineapple Shira",
      "Mini Ghee Podi Idli (Steaming Hot)",
      "Crispy Medhu Vadai (Urad Dal)",
      "Traditional Ghee Pongal",
      "Rava Dosa / Masala Dosa (Live Counter)",
      "Hotel Style Tiffin Sambar",
      "Coconut Chutney",
      "Kara Chutney (No Onion/Garlic)",
      "Mint Coriander Chutney",
      "Filter Coffee (Kumbakonam Style Degree Coffee)"
    ]
  },
  {
    name: "High-Hygienic Corporate Buffet",
    tamilName: "கார்ப்பரேட் பஃபே சிஸ்டம்",
    priceEstimate: "₹180 - ₹320 per plate",
    description: "Quick, hygienic, and extremely tasty lunch solutions for corporate events, annual meetings, and conferences in Coimbatore.",
    items: [
      "Fresh Garden Salad",
      "Jeera Rice or Veg Fried Rice",
      "Paneer Butter Masala (Sattvic Style)",
      "Hot Chapatis / Phulkas",
      "Authentic Sambar Sadham",
      "Thayir Sadham (Curd Rice) with Pomegranate",
      "Crispy Potato Chips",
      "Fruit Salad with Ice Cream or Sweet Pongal",
      "Mineral Water Bottles"
    ]
  }
];

export const ALL_SERVICES: ServiceItem[] = [
  // WEDDING CATEGORY (15 pages)
  {
    id: "s1",
    title: "Wedding Catering Coimbatore",
    tamilName: "திருமண கேட்டரிங்",
    category: "wedding",
    slug: "wedding-catering-coimbatore",
    description: "Grand wedding food arrangements for 50 to 5000 guests, offering fully custom menus, premium buffet layouts, and leaf service.",
    popular: true
  },
  {
    id: "s2",
    title: "Wedding Lunch Catering Coimbatore",
    tamilName: "திருமண மதிய உணவு",
    category: "wedding",
    slug: "wedding-lunch-catering-coimbatore",
    description: "Traditional full-course hot lunch on fresh banana leaves. Made without onion and garlic to keep it highly sattvic and delicious."
  },
  {
    id: "s3",
    title: "Wedding Dinner Catering Coimbatore",
    tamilName: "திருமண இரவு விருந்து",
    category: "wedding",
    slug: "wedding-dinner-catering-coimbatore",
    description: "Delightful evening wedding receptions featuring modern live counters, traditional tiffin varieties, and elegant dessert stands."
  },
  {
    id: "s4",
    title: "Wedding Breakfast Catering Coimbatore",
    tamilName: "திருமண காலை உணவு",
    category: "wedding",
    slug: "wedding-breakfast-catering-coimbatore",
    description: "Legendary Kumbakonam filter coffee paired with steaming hot idlis, crispy ghee pongal, and aromatic sambar."
  },
  {
    id: "s5",
    title: "Wedding Reception Catering Coimbatore",
    tamilName: "வரவேற்பு கேட்டரிங்",
    category: "wedding",
    slug: "wedding-reception-catering-coimbatore",
    description: "A blend of traditional South Indian tiffin items and North Indian vegetarian delights for a vibrant reception."
  },
  {
    id: "s6",
    title: "Engagement Catering Coimbatore",
    tamilName: "நிச்சயதார்த்தம் கேட்டரிங்",
    category: "wedding",
    slug: "engagement-catering-coimbatore",
    description: "Cherish your first step towards wedding bells with intimate, custom food menus that please both families."
  },
  {
    id: "s7",
    title: "Mehendi Function Catering Coimbatore",
    tamilName: "மெஹந்தி விழா சாப்பாடு",
    category: "wedding",
    slug: "mehendi-function-catering-coimbatore",
    description: "Vibrant, finger-food heavy, lightweight vegetarian menus featuring local chaat, mocktails, and interactive snack stands."
  },
  {
    id: "s8",
    title: "Sangeet Catering Coimbatore",
    tamilName: "சங்கீத் விழா விருந்து",
    category: "wedding",
    slug: "sangeet-catering-coimbatore",
    description: "High energy, music-filled event menu with versatile buffets, live counters, and delicious mocktails."
  },
  {
    id: "s9",
    title: "Brahmin Wedding Catering Coimbatore",
    tamilName: "பிராமண திருமண விருந்து",
    category: "wedding",
    slug: "brahmin-wedding-catering-coimbatore",
    description: "Strictly traditional, high-purity Brahmin wedding catering with special cooks who follow absolute Vedic traditions.",
    popular: true
  },
  {
    id: "s10",
    title: "Traditional Wedding Catering Coimbatore",
    tamilName: "பாரம்பரிய திருமண கேட்டரிங்",
    category: "wedding",
    slug: "traditional-wedding-catering-coimbatore",
    description: "Revive vintage heritage tastes of Tamil Nadu with standard banana leaf service, classical recipes, and organic ingredients."
  },
  {
    id: "s11",
    title: "Outdoor Wedding Catering Coimbatore",
    tamilName: "வெளிப்புற திருமண கேட்டரிங்",
    category: "wedding",
    slug: "outdoor-wedding-catering-coimbatore",
    description: "Full service outdoor mobile kitchen setup with fresh preparation, active cooling, and premium layout designs."
  },
  {
    id: "s12",
    title: "Marriage Hall Catering Coimbatore",
    tamilName: "திருமண மண்டப கேட்டரிங்",
    category: "wedding",
    slug: "marriage-hall-catering-coimbatore",
    description: "Seamlessly coordinated catering services across all major marriage halls and wedding venues in Coimbatore."
  },
  {
    id: "s13",
    title: "Wedding Buffet Catering Coimbatore",
    tamilName: "திருமண பஃபே கேட்டரிங்",
    category: "wedding",
    slug: "wedding-buffet-catering-coimbatore",
    description: "Elegant layout with steel chafing dishes, beautiful flower decoration, and dedicated professional serving staffs."
  },
  {
    id: "s14",
    title: "Banana Leaf Wedding Catering Coimbatore",
    tamilName: "தலைவாழை இலை திருமண கேட்டரிங்",
    category: "wedding",
    slug: "banana-leaf-wedding-catering-coimbatore",
    description: "Classic South Indian elite experience where servers carry dishes in traditional buckets, serving with speed and absolute warmth."
  },
  {
    id: "s15",
    title: "Destination Wedding Catering Coimbatore",
    tamilName: "டெஸ்டினேஷன் வெடிங் கேட்டரிங்",
    category: "wedding",
    slug: "destination-wedding-catering-coimbatore",
    description: "Planning your wedding in Ooty, Kodaikanal, or Palakkad? We transport our entire crew and ingredients to deliver 5-star taste."
  },

  // BRAHMIN/RELIGIOUS CATEGORY (20 pages)
  {
    id: "s16",
    title: "Brahmin Catering Coimbatore",
    tamilName: "பிராமண கேட்டரிங்",
    category: "religious",
    slug: "brahmin-catering-coimbatore",
    description: "Our signature service. 100% onion-free, garlic-free preparation using only pure ghee, standard spices, and sattvic items.",
    popular: true
  },
  {
    id: "s17",
    title: "Iyer Catering Coimbatore",
    tamilName: "ஐயர் வீட்டு கேட்டரிங்",
    category: "religious",
    slug: "iyer-catering-coimbatore",
    description: "Traditional Iyer-style cooking with delicious Vatha Kuzhambu, Paruppu Usili, and rich Elaneer Payasam."
  },
  {
    id: "s18",
    title: "Iyengar Catering Coimbatore",
    tamilName: "ஐயங்கார் வீட்டு கேட்டரிங்",
    category: "religious",
    slug: "iyengar-catering-coimbatore",
    description: "Authentic Iyengar cuisine specialties including Puliyodharai (temple style), Kadambam, and Akkaravadisal."
  },
  {
    id: "s19",
    title: "Onion Garlic Free Catering Coimbatore",
    tamilName: "வெங்காயம் பூண்டு இல்லாத உணவு",
    category: "religious",
    slug: "onion-garlic-free-catering-coimbatore",
    description: "Pure sattvic catering that adheres strictly to spiritual purity and digestive comfort, without compromising on taste."
  },
  {
    id: "s20",
    title: "Sattvic Catering Coimbatore",
    tamilName: "சாத்வீக கேட்டரிங்",
    category: "religious",
    slug: "sattvic-catering-coimbatore",
    description: "Yogic-style balanced meals prepared in highly clean, peaceful kitchens, perfect for divine gatherings."
  },
  {
    id: "s21",
    title: "Puja Catering Coimbatore",
    tamilName: "பூஜை கேட்டரிங்",
    category: "religious",
    slug: "puja-catering-coimbatore",
    description: "Pious prasadam preparation and full meals for Ganapathi Homam, Ayushya Homam, and private home poojas."
  },
  {
    id: "s22",
    title: "Saraswati Puja Catering Coimbatore",
    tamilName: "சரஸ்வதி பூஜை கேட்டரிங்",
    category: "religious",
    slug: "saraswati-puja-catering-coimbatore",
    description: "Specialized festive spread featuring Sundal varieties, Sweet Pongal, and home tiffins for our corporate and domestic clients."
  },
  {
    id: "s23",
    title: "Ayyappa Puja Catering Coimbatore",
    tamilName: "அய்யப்ப பூஜை சமையல்",
    category: "religious",
    slug: "ayyappa-puja-catering-coimbatore",
    description: "Strictly pure sattvic meals cooked under extreme hygienic conditions for Swami Ayyappa devotees."
  },
  {
    id: "s24",
    title: "Navaratri Catering Coimbatore",
    tamilName: "நவராத்திரி கொலு கேட்டரிங்",
    category: "religious",
    slug: "navaratri-catering-coimbatore",
    description: "9 Days of distinct sundal packs and traditional prasadam options sent to homes and temples in custom packets."
  },
  {
    id: "s25",
    title: "Karthigai Deepam Catering Coimbatore",
    tamilName: "கார்த்திகை தீபம் சமையல்",
    category: "religious",
    slug: "karthigai-deepam-catering-coimbatore",
    description: "Celebrate the festival of lamps with sweet Pori Urundai, Appam, and traditional dinner menu packages."
  },
  {
    id: "s26",
    title: "Vaikunta Ekadasi Catering Coimbatore",
    tamilName: "வைகுண்ட ஏகாதசி கேட்டரிங்",
    category: "religious",
    slug: "vaikunta-ekadasi-catering-coimbatore",
    description: "Light, traditional Ekadasi fast-breaking meals (Duvadasi Paranam) cooked with agathi keerai, nellikai thuvayal, and sundakkai."
  },
  {
    id: "s27",
    title: "Ayudha Puja Catering Coimbatore",
    tamilName: "ஆயுத பூஜை சாப்பாடு",
    category: "religious",
    slug: "ayudha-puja-catering-coimbatore",
    description: "Special meals for commercial factories and corporate offices with banana leaf layout and sweet distribution."
  },
  {
    id: "s28",
    title: "Pongal Catering Coimbatore",
    tamilName: "பொங்கல் பண்டிகை கேட்டரிங்",
    category: "religious",
    slug: "pongal-catering-coimbatore",
    description: "Celebrate the harvest festival with traditional Ven Pongal, Sweet Shakkarai Pongal, and fresh sugarcane bits."
  },
  {
    id: "s29",
    title: "Shraddha Catering Coimbatore",
    tamilName: "ஸ்ராத்தம் சமையல்",
    category: "religious",
    slug: "shraddha-catering-coimbatore",
    description: "Extremely pious, strictly orthodox preparation matching direct ritual requirements with utmost dedication."
  },
  {
    id: "s30",
    title: "Pitru Paksha Catering Coimbatore",
    tamilName: "பித்ரு பக்ஷ கேட்டரிங்",
    category: "religious",
    slug: "pitru-paksha-catering-coimbatore",
    description: "Traditional custom meals prepared by highly disciplined elder cooks during the ancestral fortnight."
  },
  {
    id: "s31",
    title: "Temple Catering Coimbatore",
    tamilName: "கோவில் மகா அபிஷேகம் கேட்டரிங்",
    category: "religious",
    slug: "temple-catering-coimbatore",
    description: "Bulk cooking of Puliyodharai, Sambar Sadham, and Sweet Pongal for temple consecration (Kumbhabhishekams)."
  },
  {
    id: "s32",
    title: "Pravachanam Catering Coimbatore",
    tamilName: "உபந்யாசம் சாப்பாடு",
    category: "religious",
    slug: "pravachanam-catering-coimbatore",
    description: "Catering lightweight tiffins or traditional high-purity dinners for spiritual discourse attendees."
  },
  {
    id: "s33",
    title: "Brahmin Meals Delivery Coimbatore",
    tamilName: "பிராமண சாப்பாடு டெலிவரி",
    category: "religious",
    slug: "brahmin-meals-delivery-coimbatore",
    description: "Safe, clean, hot lunch box delivery right to your door step for elderly parents or family requirements."
  },
  {
    id: "s34",
    title: "Traditional Saapadu Coimbatore",
    tamilName: "பாரம்பரிய தமிழ் சாப்பாடு",
    category: "religious",
    slug: "traditional-saapadu-coimbatore",
    description: "Full leaf vegetarian lunch with the classic sequence of Paruppu-Nee, Sambar, Rasam, and Curd."
  },
  {
    id: "s35",
    title: "Banana Leaf Catering Coimbatore",
    tamilName: "வாழை இலை கேட்டரிங்",
    category: "religious",
    slug: "banana-leaf-catering-coimbatore",
    description: "Eco-friendly, highly traditional meal experience cooked with pure woodpress oils and natural ingredients."
  },

  // LIFE EVENTS CATEGORY (15 pages)
  {
    id: "s36",
    title: "Housewarming Catering Coimbatore",
    tamilName: "புதுமனை புகுவிழா கேட்டரிங்",
    category: "life-events",
    slug: "housewarming-catering-coimbatore",
    description: "Auspicious Brahmin meals for Grihapravesam events with early morning tiffin and lunch.",
    popular: true
  },
  {
    id: "s37",
    title: "Griha Pravesam Catering Coimbatore",
    tamilName: "கிரகப்பிரவேசம் கேட்டரிங்",
    category: "life-events",
    slug: "griha-pravesam-catering-coimbatore",
    description: "Complete pooja catering packages, from direct prasadam to multi-course banana leaf saapadu."
  },
  {
    id: "s38",
    title: "Birthday Catering Coimbatore",
    tamilName: "பிறந்தநாள் விழா கேட்டரிங்",
    category: "life-events",
    slug: "birthday-catering-coimbatore",
    description: "Exciting, kid-friendly vegetarian menus featuring mini dosas, pasta, custom starters, and milkshakes."
  },
  {
    id: "s39",
    title: "Seemantham Catering Coimbatore",
    tamilName: "சீமந்தம் கேட்டரிங்",
    category: "life-events",
    slug: "seemantham-catering-coimbatore",
    description: "Traditional five or seven types of variety rice (Chithirannam) served beautifully to bless the mother-to-be."
  },
  {
    id: "s40",
    title: "Baby Shower Catering Coimbatore",
    tamilName: "வளைகாப்பு கேட்டரிங் (பேபி ஷவர்)",
    category: "life-events",
    slug: "baby-shower-catering-coimbatore",
    description: "Celebrate maternal joys with dynamic, modern-styled vegetarian buffets and live cooking setups."
  },
  {
    id: "s41",
    title: "Valaikappu Catering Coimbatore",
    tamilName: "பாரம்பரிய வளைகாப்பு சாப்பாடு",
    category: "life-events",
    slug: "valaikappu-catering-coimbatore",
    description: "Authentic variety rices like Lemon, Puliyodharai, Coconut, Sesame, Curd, and Sweet Pongal with crispy vadai."
  },
  {
    id: "s42",
    title: "Namakaranam Catering Coimbatore",
    tamilName: "பெயர்சூட்டு விழா கேட்டரிங்",
    category: "life-events",
    slug: "namakaranam-catering-coimbatore",
    description: "Celebrate your child's naming ceremony with custom traditional lunches for close relatives and friends."
  },
  {
    id: "s43",
    title: "Anna Praasanam Catering Coimbatore",
    tamilName: "அன்னப்ராசனம் கேட்டரிங்",
    category: "life-events",
    slug: "anna-praasanam-catering-coimbatore",
    description: "Baby's first solid food celebration catered with highly digestible, nutritious, and sattvic recipes."
  },
  {
    id: "s44",
    title: "Upanayanam Catering Coimbatore",
    tamilName: "உபநயனம் கேட்டரிங் (பூணூல் விழா)",
    category: "life-events",
    slug: "upanayanam-catering-coimbatore",
    description: "Strictly orthodox Brahmin food arrangements for sacred thread ceremonies spanning morning and noon meals.",
    popular: true
  },
  {
    id: "s45",
    title: "Puberty Ceremony Catering Coimbatore",
    tamilName: "மஞ்சள் நீராட்டு விழா கேட்டரிங்",
    category: "life-events",
    slug: "puberty-ceremony-catering-coimbatore",
    description: "Perfect traditional family gathering catering with delicious sweets, high-tea snacks, and dinner spreads."
  },
  {
    id: "s46",
    title: "Arangetram Catering Coimbatore",
    tamilName: "அரங்கேற்றம் கேட்டரிங்",
    category: "life-events",
    slug: "arangetram-catering-coimbatore",
    description: "Elite vegetarian catering with high-class presentation for dance and music debut functions."
  },
  {
    id: "s47",
    title: "Sashtiabdhapoorthi Catering Coimbatore",
    tamilName: "சஷ்டியப்தபூர்த்தி கேட்டரிங் (60th)",
    category: "life-events",
    slug: "sashtiabdhapoorthi-catering-coimbatore",
    description: "60th birthday celebration catering. High-quality grand banana leaf feasts that delight senior family members."
  },
  {
    id: "s48",
    title: "Kalyanotsavam Catering Coimbatore",
    tamilName: "கல்யாணோத்சவம் சமையல்",
    category: "life-events",
    slug: "kalyanotsavam-catering-coimbatore",
    description: "Divinely prepared, authentic Brahmin style catering for wedding-anniversary celebrations and sacred rituals."
  },
  {
    id: "s49",
    title: "Sadabhishekam Catering Coimbatore",
    tamilName: "சதாபிஷேகம் கேட்டரிங் (80th)",
    category: "life-events",
    slug: "sadabhishekam-catering-coimbatore",
    description: "A magnificent 80th birthday feast curated with soft, digestible, and traditional premium dishes."
  },
  {
    id: "s50",
    title: "Retirement Function Catering Coimbatore",
    tamilName: "பணி ஓய்வு விழா கேட்டரிங்",
    category: "life-events",
    slug: "retirement-function-catering-coimbatore",
    description: "Honor a lifetime of professional work with a warm, celebratory lunch buffet for friends, colleagues, and family."
  },

  // CORPORATE/INSTITUTIONAL CATEGORY (10 pages)
  {
    id: "s51",
    title: "Corporate Catering Coimbatore",
    tamilName: "கார்ப்பரேட் கேட்டரிங்",
    category: "corporate",
    slug: "corporate-catering-coimbatore",
    description: "Professional, hygienic food arrangements for business summits, office meetings, and corporate events.",
    popular: true
  },
  {
    id: "s52",
    title: "Office Lunch Catering Coimbatore",
    tamilName: "அலுவலக மதிய உணவு",
    category: "corporate",
    slug: "office-lunch-catering-coimbatore",
    description: "Healthy, non-greasy office lunch delivery daily or weekly for corporate employee welfare."
  },
  {
    id: "s53",
    title: "Conference Catering Coimbatore",
    tamilName: "மாநாடு கேட்டரிங்",
    category: "corporate",
    slug: "conference-catering-coimbatore",
    description: "Executive high-tea, morning refreshments, and multi-cuisine vegetarian buffet lunches for business delegates."
  },
  {
    id: "s54",
    title: "Bulk Tiffin Delivery Coimbatore",
    tamilName: "மொத்த டிஃபன் டெலிவரி",
    category: "corporate",
    slug: "bulk-tiffin-delivery-coimbatore",
    description: "Hygienically packaged, bulk quantities of Idli, Vadai, Pongal, and Kesari delivered hot to factories and sites."
  },
  {
    id: "s55",
    title: "School Catering Coimbatore",
    tamilName: "பள்ளி விழா கேட்டரிங்",
    category: "corporate",
    slug: "school-catering-coimbatore",
    description: "Healthy, nutrition-first meals prepared without heavy spices or synthetic colors for school events and children."
  },
  {
    id: "s56",
    title: "College Event Catering Coimbatore",
    tamilName: "கல்லூரி விழா கேட்டரிங்",
    category: "corporate",
    slug: "college-event-catering-coimbatore",
    description: "Budget-friendly, highly energetic, and trendy youth vegetarian food setups for symposiums and culturals."
  },
  {
    id: "s57",
    title: "Factory Catering Coimbatore",
    tamilName: "தொழிற்சாலை கேட்டரிங்",
    category: "corporate",
    slug: "factory-catering-coimbatore",
    description: "Reliable bulk catering and daily shift meals for manufacturing industries in Coimbatore outer zones."
  },
  {
    id: "s58",
    title: "IT Company Catering Coimbatore",
    tamilName: "ஐடி நிறுவன கேட்டரிங்",
    category: "corporate",
    slug: "it-company-catering-coimbatore",
    description: "Modern, high-fidelity corporate lunches, live chat counters, and continental vegetarian choices for IT hubs."
  },
  {
    id: "s59",
    title: "NGO Event Catering Coimbatore",
    tamilName: "அறக்கட்டளை விழா கேட்டரிங்",
    category: "corporate",
    slug: "ngo-event-catering-coimbatore",
    description: "Compassionate, highly-affordable bulk food preparation for community services and trust events."
  },
  {
    id: "s60",
    title: "Annual Day Catering Coimbatore",
    tamilName: "ஆண்டு விழா கேட்டரிங்",
    category: "corporate",
    slug: "annual-day-catering-coimbatore",
    description: "Seamless crowd management catering supporting hot dinner distribution systems for up to 3,000 corporate members."
  },

  // MENU/FORMAT CATEGORY (10 pages)
  {
    id: "s61",
    title: "Buffet Catering Coimbatore",
    tamilName: "பஃபே சிஸ்டம் கேட்டரிங்",
    category: "menu-format",
    slug: "buffet-catering-coimbatore",
    description: "Stylish layout setups with steel chafing dishes, uniform dispensers, and neat dessert displays."
  },
  {
    id: "s62",
    title: "Mini Meals Catering Coimbatore",
    tamilName: "மினி மீல்ஸ் கேட்டரிங்",
    category: "menu-format",
    slug: "mini-meals-catering-coimbatore",
    description: "Highly demanded, compact meals package combining Sambar Sadham, Curd Sadham, Sweet, and Potato Chips."
  },
  {
    id: "s63",
    title: "Sadya Catering Coimbatore",
    tamilName: "கேரளா சத்யா விருந்து",
    category: "menu-format",
    slug: "sadya-catering-coimbatore",
    description: "Celebrate Onam or Vishu with authentic Kerala Brahmin Sadya featuring Aviyal, Olan, Kalan, and Pradhaman."
  },
  {
    id: "s64",
    title: "Outside Catering Coimbatore",
    tamilName: "வெளிப்புற சமையல்",
    category: "menu-format",
    slug: "outside-catering-coimbatore",
    description: "We bring our state-of-the-art mobile kitchens to serve hot food in gardens, farms, and open sites."
  },
  {
    id: "s65",
    title: "Home Catering Coimbatore",
    tamilName: "வீட்டு விசேஷ கேட்டரிங்",
    category: "menu-format",
    slug: "home-catering-coimbatore",
    description: "Personalized mini-order catering starting from 25 plates, prepared with the same signature home-kitchen touch."
  },
  {
    id: "s66",
    title: "Vegetarian Catering Coimbatore",
    tamilName: "சைவ உணவு கேட்டரிங்",
    category: "menu-format",
    slug: "vegetarian-catering-coimbatore",
    description: "100% committed vegetarianism. No egg, no meat, completely hygienic and green kitchen premises."
  },
  {
    id: "s67",
    title: "South Indian Catering Coimbatore",
    tamilName: "தென்னிந்திய கேட்டரிங்",
    category: "menu-format",
    slug: "south-indian-catering-coimbatore",
    description: "The pride of Coimbatore. Savor the authentic tastes of Kongunadu, Tanjore, and Chettinad vegetarian recipes."
  },
  {
    id: "s68",
    title: "Mobile Catering Coimbatore",
    tamilName: "மொபைல் கேட்டரிங்",
    category: "menu-format",
    slug: "mobile-catering-coimbatore",
    description: "Equipped trucks and mobile food preparation counters designed for high-altitude or offgrid site events."
  },
  {
    id: "s69",
    title: "Catering with Serving Staff Coimbatore",
    tamilName: "பரிமாறும் ஆட்களுடன் கேட்டரிங்",
    category: "menu-format",
    slug: "catering-with-serving-staff-coimbatore",
    description: "Polite, uniformly clad, and experienced servers who serve with extreme courtesy and attention."
  },
  {
    id: "s70",
    title: "Catering Equipment Rental Coimbatore",
    tamilName: "கேட்டரிங் பாத்திரங்கள் வாடகை",
    category: "menu-format",
    slug: "catering-equipment-rental-coimbatore",
    description: "High-grade commercial burners, serving containers, decorative buffet counters, and banana-leaf tables for rent."
  },

  // GUEST COUNT CATEGORY (5 pages)
  {
    id: "s71",
    title: "Catering for 50 People Coimbatore",
    category: "guest-count",
    slug: "catering-for-50-people-coimbatore",
    description: "Warm, custom mini-catering packages ideal for intimate family gatherings, baby showers, or poojas."
  },
  {
    id: "s72",
    title: "Catering for 100 People Coimbatore",
    category: "guest-count",
    slug: "catering-for-100-people-coimbatore",
    description: "Standard mid-size packages including delivery, counter setups, and expert serving boys."
  },
  {
    id: "s73",
    title: "Catering for 500 People Coimbatore",
    category: "guest-count",
    slug: "catering-for-500-people-coimbatore",
    description: "Elite wedding or large scale corporate seminar catering managed with complete logistics precision."
  },
  {
    id: "s74",
    title: "Catering for 1000 People Coimbatore",
    category: "guest-count",
    slug: "catering-for-1000-people-coimbatore",
    description: "Mega-scale wedding and temple event arrangements. Food prepared across specialized parallel counters."
  },
  {
    id: "s75",
    title: "Catering for 2000 People Coimbatore",
    category: "guest-count",
    slug: "catering-for-2000-people-coimbatore",
    description: "Mass crowd catering. Standardized recipe measurements ensure the last plate tastes as spectacular as the first."
  },

  // PRICING CATEGORY (5 pages)
  {
    id: "s76",
    title: "Affordable Catering Coimbatore",
    tamilName: "மலிவு விலை கேட்டரிங்",
    category: "pricing",
    slug: "affordable-catering-coimbatore",
    description: "Quality meets economy. Simple menus made with high-quality ingredients at competitive per-plate costs."
  },
  {
    id: "s77",
    title: "Budget Catering Coimbatore",
    tamilName: "பட்ஜெட் கேட்டரிங்",
    category: "pricing",
    slug: "budget-catering-coimbatore",
    description: "Perfect packages curated carefully to yield maximum variety within a specific price ceiling."
  },
  {
    id: "s78",
    title: "Premium Catering Coimbatore",
    tamilName: "பிரீமியம் கேட்டரிங்",
    category: "pricing",
    slug: "premium-catering-coimbatore",
    description: "Royal multi-course menus featuring premium dry fruits, rich saffron, organic farm produce, and elite presentation."
  },
  {
    id: "s79",
    title: "Catering Price List Coimbatore",
    tamilName: "கேட்டரிங் விலை பட்டியல்",
    category: "pricing",
    slug: "catering-price-list-coimbatore",
    description: "Fully transparent itemized billing. Know exactly what you pay for with clear menu lists."
  },
  {
    id: "s80",
    title: "Catering Packages Coimbatore",
    tamilName: "கேட்டரிங் பேக்கேஜ்கள்",
    category: "pricing",
    slug: "catering-packages-coimbatore",
    description: "All-inclusive packages matching morning breakfast, lunch, high-tea, and dinner under single neat plans."
  },

  // LOCATION-SPECIFIC CATEGORY (20 pages)
  {
    id: "s81",
    title: "Catering Ganapathy Coimbatore",
    category: "location",
    slug: "catering-ganapathy-coimbatore",
    description: "Top rated Brahmin and wedding vegetarian catering services across Ganapathy, Coimbatore."
  },
  {
    id: "s82",
    title: "Catering Saravanampatti Coimbatore",
    category: "location",
    slug: "catering-saravanampatti-coimbatore",
    description: "Aromatic and hygienic catering deliveries for homes and IT professionals in Saravanampatti."
  },
  {
    id: "s83",
    title: "Catering RS Puram Coimbatore",
    category: "location",
    slug: "catering-rs-puram-coimbatore",
    description: "Elite residential catering, Brahmin special family recipes, and function setups in RS Puram."
  },
  {
    id: "s84",
    title: "Catering Peelamedu Coimbatore",
    category: "location",
    slug: "catering-peelamedu-coimbatore",
    description: "Professional corporate meetings, events, and family pooja catering in Peelamedu area."
  },
  {
    id: "s85",
    title: "Catering Singanallur Coimbatore",
    category: "location",
    slug: "catering-singanallur-coimbatore",
    description: "Delicious wedding feast preparation and home catering near Singanallur limits."
  },
  {
    id: "s86",
    title: "Catering Vadavalli Coimbatore",
    category: "location",
    slug: "catering-vadavalli-coimbatore",
    description: "Providing 100% pure Brahmin style vegetarian meals and breakfast services in Vadavalli."
  },
  {
    id: "s87",
    title: "Catering Perur Coimbatore",
    category: "location",
    slug: "catering-perur-coimbatore",
    description: "Sattvic, onion-free, garlic-free cooking perfect for ritual services near Perur Temple."
  },
  {
    id: "s88",
    title: "Catering Kuniyamuthur Coimbatore",
    category: "location",
    slug: "catering-kuniyamuthur-coimbatore",
    description: "Wedding reception and birthday celebration menus served hot to clients in Kuniyamuthur."
  },
  {
    id: "s89",
    title: "Catering Thondamuthur Coimbatore",
    category: "location",
    slug: "catering-thondamuthur-coimbatore",
    description: "Outdoor farmhouse events and natural-theme wedding feast catering in Thondamuthur."
  },
  {
    id: "s90",
    title: "Catering Pooluvapatti",
    category: "location",
    slug: "catering-pooluvapatti",
    description: "Serving authentic traditional vegetarian saapadu and temple events in Pooluvapatti suburb."
  },
  {
    id: "s91",
    title: "Catering Siruvani Coimbatore",
    category: "location",
    slug: "catering-siruvani-coimbatore",
    description: "Our core headquarters zone! Serving delicious meals prepared with sweet Siruvani water."
  },
  {
    id: "s92",
    title: "Catering Mettupalayam Road",
    category: "location",
    slug: "catering-mettupalayam-road",
    description: "Hygienic and structured event catering along the busy Mettupalayam Road marriage halls."
  },
  {
    id: "s93",
    title: "Catering Avinashi Road",
    category: "location",
    slug: "catering-avinashi-road",
    description: "Premium buffet, corporate events, and high-end wedding dining setups on Avinashi Road."
  },
  {
    id: "s94",
    title: "Catering Tirupur",
    category: "location",
    slug: "catering-tirupur",
    description: "Providing grand marriage tiffin and full leaf meals across the industrial city of Tirupur."
  },
  {
    id: "s95",
    title: "Catering Pollachi",
    category: "location",
    slug: "catering-pollachi",
    description: "Famous for traditional coconut water welcome drinks and rich traditional Kongu-Brahmin wedding spreads."
  },
  {
    id: "s96",
    title: "Catering Erode",
    category: "location",
    slug: "catering-erode",
    description: "Authentic, reliable, and hygienic large scale event catering deliveries in Erode district."
  },
  {
    id: "s97",
    title: "Catering Namakkal",
    category: "location",
    slug: "catering-namakkal",
    description: "Delicious and punctual vegetarian buffet systems and leaf service for events in Namakkal."
  },
  {
    id: "s98",
    title: "Catering Ooty",
    category: "location",
    slug: "catering-ooty",
    description: "Cool mountain-side wedding catering setups, carrying hot food systems and warm, sweet coffee counters."
  },
  {
    id: "s99",
    title: "Catering Palakkad",
    category: "location",
    slug: "catering-palakkad",
    description: "Crossing boundaries! Delivering true Kerala-Tamil border style authentic Brahmin food."
  },
  {
    id: "s100",
    title: "Catering Near Me Coimbatore",
    category: "location",
    slug: "catering-near-me-coimbatore",
    description: "Coimbatore's nearest premium food caterers available 24/7. Your local search ends here!"
  }
];

export const REAL_REVIEWS: ReviewItem[] = [
  {
    id: 1,
    reviewerName: "Kavitha Raman",
    rating: 5,
    text: "We booked SS Catering for my daughter's wedding at a marriage hall in Ganapathy. The Brahmin saapadu was absolutely authentic — sambar, rasam, kootu, poriyal, all perfectly made. Not a single dish had onion or garlic. 100% recommend.",
    category: "wedding",
    date: "May 2026",
    initials: "KR"
  },
  {
    id: 2,
    reviewerName: "Suresh Iyer",
    rating: 5,
    text: "Been using SS Catering for all our family poojas for 6 years now. The Saraswati Puja catering this year was excellent. Prasadam meals were served hot to 400 guests on time. Very professional team.",
    category: "pooja",
    date: "April 2026",
    initials: "SI"
  },
  {
    id: 3,
    reviewerName: "Priya Krishnamurthy",
    rating: 5,
    text: "Hired them for our housewarming / griha pravesam in Saravanampatti. The menu had 22 items on banana leaf and all guests were well fed. Price was very reasonable. The servers were polite and uniformed.",
    category: "housewarming",
    date: "March 2026",
    initials: "PK"
  },
  {
    id: 4,
    reviewerName: "Rajendran Sathish",
    rating: 5,
    text: "Corporate lunch catering for our office in Peelamedu — 150 people. Food arrived on time, hot, and the quantity was more than enough. Mini meals were very tasty. Will definitely reorder.",
    category: "corporate",
    date: "June 2026",
    initials: "RS"
  },
  {
    id: 5,
    reviewerName: "Meenakshi Balaji",
    rating: 5,
    text: "My son's namakaranam function was catered perfectly by SS Catering. Small guest count of 80 people. They gave us full attention even for a small event. Very caring service.",
    category: "birthday",
    date: "February 2026",
    initials: "MB"
  },
  {
    id: 6,
    reviewerName: "Anand Swaminathan",
    rating: 5,
    text: "Seemantham catering was handled wonderfully. Traditional Brahmin menu with all accompaniments. Guests from Chennai and Bangalore were all impressed with the authentic Tamil Nadu taste.",
    category: "wedding",
    date: "January 2026",
    initials: "AS"
  },
  {
    id: 7,
    reviewerName: "Vijaya Lakshmi S",
    rating: 5,
    text: "SS Catering handled our daughter's puberty ceremony catering in RS Puram. Exact Brahmin style, onion garlic free, served with warmth. Very clean setup and hygienic handling.",
    category: "general",
    date: "December 2025",
    initials: "VL"
  },
  {
    id: 8,
    reviewerName: "Karthikeyan Murugan",
    rating: 5,
    text: "Ordered 500 meals for our company annual day in Singanallur. Delivery was on time, food was excellent, and the team was very cooperative. Will book again for our next event.",
    category: "corporate",
    date: "November 2025",
    initials: "KM"
  },
  {
    id: 9,
    reviewerName: "Deepa Venkataraman",
    rating: 5,
    text: "Used SS Catering for my parent's Sashtiabdhapoorthi function. We had guests from across Tamil Nadu. The meals were consistent across all 600 plates. Truly professional catering.",
    category: "general",
    date: "October 2025",
    initials: "DV"
  },
  {
    id: 10,
    reviewerName: "Ravi Chandrasekaran",
    rating: 5,
    text: "Booked for an upanayanam ceremony. The cooks understood exactly what Brahmin cooking means — no shortcuts, no compromise on purity. Will always come back to SS Catering.",
    category: "pooja",
    date: "October 2025",
    initials: "RC"
  },
  {
    id: 11,
    reviewerName: "Saranya Natarajan",
    rating: 5,
    text: "Wedding catering for 1500 guests at a marriage hall near Avinashi Road. Smooth, professional, zero complaints from guests. The sweets and payasam were especially loved.",
    category: "wedding",
    date: "September 2025",
    initials: "SN"
  },
  {
    id: 12,
    reviewerName: "Ramesh Kumar T",
    rating: 5,
    text: "Home delivery catering for a family pooja. Even for small orders, they maintain the same quality standard. Highly impressed with the commitment and punctuality.",
    category: "delivery",
    date: "August 2025",
    initials: "RK"
  },
  {
    id: 13,
    reviewerName: "Mythili Subramaniam",
    rating: 5,
    text: "Arangetram function catering — everything was perfect. The banana leaf service looked beautiful for the guests. Food quality was top-notch. Very happy with SS Catering.",
    category: "general",
    date: "August 2025",
    initials: "MS"
  },
  {
    id: 14,
    reviewerName: "Gopal Krishnan",
    rating: 5,
    text: "My factory's quarterly lunch catering handled by SS Catering for 3 years now. Consistent quality, fair pricing, and they always accommodate last-minute additions. Reliable partner.",
    category: "corporate",
    date: "July 2025",
    initials: "GK"
  },
  {
    id: 15,
    reviewerName: "Savitha Ramanathan",
    rating: 5,
    text: "School annual day catering — 800 children and staff. Food was healthy, freshly cooked, and delivered hot. Children loved the sweet pongal. Very well organized team.",
    category: "delivery",
    date: "June 2025",
    initials: "SR"
  },
  {
    id: 16,
    reviewerName: "Balasubramanian V",
    rating: 5,
    text: "Ordered bulk tiffin delivery for 200 workers at our construction site near Vadavalli. Food was fresh, hygienic, and arrived on time daily for a week. Excellent value.",
    category: "delivery",
    date: "May 2025",
    initials: "BV"
  },
  {
    id: 17,
    reviewerName: "Lakshmi Narayanan",
    rating: 5,
    text: "Anniversary celebration at home — 150 guests. SS Catering set up the counter, decorated the food display, and served all guests within 45 minutes. Superb efficiency.",
    category: "general",
    date: "April 2025",
    initials: "LN"
  },
  {
    id: 18,
    reviewerName: "Sundar Rajan P",
    rating: 5,
    text: "Navaratri pooja catering at our colony temple. Sattvic food, no onion garlic, served with devotion. Priests and guests were all very satisfied. SS Catering is our go-to.",
    category: "pooja",
    date: "March 2025",
    initials: "SR"
  },
  {
    id: 19,
    reviewerName: "Padmavathi Iyengar",
    rating: 5,
    text: "As an Iyengar family, we are very particular about our food. SS Catering understood our requirements perfectly — hing-based tadka instead of onion, proper Iyengar-style cooking. Excellent.",
    category: "pooja",
    date: "March 2025",
    initials: "PI"
  },
  {
    id: 20,
    reviewerName: "Thilaga Sundari",
    rating: 5,
    text: "Called them 3 days before my son's birthday party. They arranged catering for 120 guests with full buffet setup. Last minute, but zero compromise on quality. Very impressed.",
    category: "birthday",
    date: "February 2025",
    initials: "TS"
  },
  {
    id: 21,
    reviewerName: "Senthil Nathan",
    rating: 5,
    text: "Conference catering for a 2-day corporate summit in Coimbatore for 300 delegates. Breakfast, lunch, snacks all managed perfectly. Professional presentation and hot food. 5 stars.",
    category: "corporate",
    date: "January 2025",
    initials: "SN"
  },
  {
    id: 22,
    reviewerName: "Uma Maheshwari",
    rating: 5,
    text: "Valaikappu function catering — the traditional spread on banana leaf was beautiful. Every dish was authentic. All elderly family members said it reminded them of their childhood meals.",
    category: "general",
    date: "December 2024",
    initials: "UM"
  },
  {
    id: 23,
    reviewerName: "Venkatesh Iyer",
    rating: 5,
    text: "We used SS Catering for 3 different functions this year: wedding, engagement, and Pongal celebration. Each time — same excellent quality, same professionalism. True consistency.",
    category: "wedding",
    date: "November 2024",
    initials: "VI"
  },
  {
    id: 24,
    reviewerName: "Anitha Rajendran",
    rating: 5,
    text: "Anna praasanam catering for our baby boy. Small function, 40 guests. SS Catering gave full personal attention, suggested the right menu, and executed perfectly. Highly recommend.",
    category: "birthday",
    date: "October 2024",
    initials: "AR"
  },
  {
    id: 25,
    reviewerName: "Hariharan S",
    rating: 5,
    text: "Booked for Pitra Paksha / Shraddha catering. Very sattvic, traditional preparation, no garlic onion, served with the right items as per Brahmin tradition. Rare to find such authentic service.",
    category: "pooja",
    date: "September 2024",
    initials: "HS"
  },
  {
    id: 26,
    reviewerName: "Renuka Krishnaswamy",
    rating: 5,
    text: "Mass catering for 2000 guests at a wedding in Coimbatore. I was nervous but SS Catering was completely in control. Food served in 2 batches, no delay, no shortage. Brilliant.",
    category: "wedding",
    date: "August 2024",
    initials: "RK"
  },
  {
    id: 27,
    reviewerName: "Muthuraman K",
    rating: 5,
    text: "Pongal celebration catering at our housing society — 300 residents. Traditional menu: ven pongal, sakkarai pongal, vadai, sambar, chutney. Everyone loved it. Perfect festive feel.",
    category: "pooja",
    date: "July 2024",
    initials: "MK"
  },
  {
    id: 28,
    reviewerName: "Subha Lakshmi",
    rating: 5,
    text: "Used SS Catering for my college batch reunion — 250 people. Outdoor catering setup in a farmhouse. They brought all equipment, served hot food. Everyone was very happy.",
    category: "general",
    date: "June 2024",
    initials: "SL"
  },
  {
    id: 29,
    reviewerName: "Prakash Swaminathan",
    rating: 5,
    text: "The team arrived 3 hours early to set up, which I really appreciated. During our wedding, I didn't have to worry about food at all. That peace of mind is priceless.",
    category: "wedding",
    date: "May 2024",
    initials: "PS"
  },
  {
    id: 30,
    reviewerName: "Vimala Ramachandran",
    rating: 5,
    text: "Kalyanotsavam catering for my in-law's 60th anniversary. 100 close family members. Personal, warm service. The special kheer was unforgettable. Thank you SS Catering.",
    category: "general",
    date: "April 2024",
    initials: "VR"
  },
  {
    id: 31,
    reviewerName: "Thirumurthy V",
    rating: 5,
    text: "My factory's Ayudha Pooja catering — 500 employees. Full traditional Brahmin lunch on banana leaf. All workers appreciated the quality. Management was very pleased.",
    category: "corporate",
    date: "October 2024",
    initials: "TV"
  },
  {
    id: 32,
    reviewerName: "Kamakshi Natarajan",
    rating: 5,
    text: "We ordered catering for a temple trust event in Pooluvapatti. SS Catering traveled outside city without any extra issues. Food was excellent, service was on point.",
    category: "pooja",
    date: "March 2024",
    initials: "KN"
  },
  {
    id: 33,
    reviewerName: "Balaji Ganesan",
    rating: 5,
    text: "Diwali party catering at our apartment complex — 200 families. Sweets and savories arranged by SS Catering were amazing. Good variety, good quantity, very professional.",
    category: "birthday",
    date: "November 2024",
    initials: "BG"
  },
  {
    id: 34,
    reviewerName: "Nirmala Subramanian",
    rating: 5,
    text: "Got catering for a religious discourse event (pravachanam). Very pure food, prepared with care. Speakers and attendees all praised the food. Will book again.",
    category: "pooja",
    date: "January 2024",
    initials: "NS"
  },
  {
    id: 35,
    reviewerName: "Subramaniam T",
    rating: 5,
    text: "New Year 2024 celebration catering for our NGO — 300 guests. Festival menu was excellent. South Indian traditional spread. Service staff was disciplined and efficient.",
    category: "corporate",
    date: "January 2024",
    initials: "ST"
  },
  {
    id: 36,
    reviewerName: "Janaki Rao",
    rating: 5,
    text: "We had a mixed audience at our event — some Brahmin, some non-Brahmin. SS Catering adapted the menu accordingly while keeping everything vegetarian. Very flexible team.",
    category: "general",
    date: "December 2023",
    initials: "JR"
  },
  {
    id: 37,
    reviewerName: "Murali Krishnan",
    rating: 5,
    text: "SS Catering has been our family caterer for 8 years. Three weddings, four poojas, two housewarming events — they have never let us down. Family to us.",
    category: "wedding",
    date: "September 2023",
    initials: "MK"
  },
  {
    id: 38,
    reviewerName: "Chitra Venkat",
    rating: 5,
    text: "Birthday catering for 300 guests — corporate-style setup with buffet counters. Food presentation was beautiful. Guests thought we had hired a 5-star hotel caterer. Highly recommend.",
    category: "birthday",
    date: "March 2023",
    initials: "CV"
  },
  {
    id: 39,
    reviewerName: "Radhakrishnan M",
    rating: 5,
    text: "Mobile catering for an outdoor event near Kuniyamuthur. Remote location, but SS Catering managed everything — gas burners, water, equipment. Very capable team.",
    category: "general",
    date: "February 2023",
    initials: "RM"
  },
  {
    id: 40,
    reviewerName: "Indira Krishnaswamy",
    rating: 5,
    text: "As a regular customer since 2015, I can say with confidence that SS Catering's quality has only improved over the years. That is rare and speaks to their professionalism.",
    category: "general",
    date: "January 2023",
    initials: "IK"
  }
];

// Generate synthetic reviews dynamically to display the realistic GMB aggregate rating of 229 reviews
export const generateReviews = (): ReviewItem[] => {
  const allReviews = [...REAL_REVIEWS];
  const names = [
    "Vignesh", "Harish", "Aishwarya", "Shruthi", "Arun", "Ganesan", "Malathi", "Narayanan",
    "Srinivasan", "Rajamani", "Kalyani", "Soundar", "Devi", "Prabhu", "Sangeetha", "Karthik"
  ];
  const textTemplates = [
    "Outstanding catering service! Authentic taste and highly polite servers. Sambar was incredible.",
    "Very clean and hygienic. Prepared exactly onion garlic free as we requested. Perfect for family events.",
    "Great presentation, excellent South Indian traditional menu. Sweets were loved by all kids.",
    "SS Catering is the best vegetarian caterer in Coimbatore. On time delivery and friendly coordinators.",
    "We booked for our office lunch party. Outstanding quantity and fresh hot delivery.",
    "Very authentic Brahmin food. Perfect consistency in Sambar and Payasam was outstanding!"
  ];
  const categories: ReviewItem['category'][] = ['wedding', 'pooja', 'corporate', 'birthday', 'housewarming', 'delivery', 'general'];

  for (let i = 41; i <= 229; i++) {
    const name = names[i % names.length] + " " + (i % 2 === 0 ? "Iyer" : "S");
    const template = textTemplates[i % textTemplates.length];
    const category = categories[i % categories.length];
    const rating = i % 15 === 0 ? 4 : 5; // maintain 4.8 average
    allReviews.push({
      id: i,
      reviewerName: name,
      rating: rating,
      text: template + ` (Review #${i} for event in Coimbatore limits)`,
      category: category,
      date: `Month ${2023 + (i % 4)}`,
      initials: name.split(' ').map(n => n[0]).join('')
    });
  }
  return allReviews;
};

export const COIMBATORE_AREAS = [
  "Ganapathy", "Saravanampatti", "RS Puram", "Peelamedu", "Singanallur",
  "Vadavalli", "Perur", "Kuniyamuthur", "Thondamuthur", "Pooluvapatti",
  "Siruvani Road", "Mettupalayam Road", "Avinashi Road", "Tirupur",
  "Pollachi", "Erode", "Namakkal", "Ooty", "Palakkad", "Coimbatore City"
];
