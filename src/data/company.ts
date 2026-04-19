// Simon Loos - Company Information
// West-Fries familiebedrijf sinds 1938

export const company = {
  name: "Simon Loos",
  tagline: "Vakmanschap geladen met trots",
  description: "Simon Loos hoort bij de top logistiek dienstverleners in Nederland en ontzorgt dagelijks de logistiek van veel aansprekende bedrijven en merken.",
  longDescription: "Een West-Fries familiebedrijf dat in 1938 is begonnen als bodedienst tussen Hoorn en Alkmaar. Nu, bijna 90 jaar later, is Simon Loos dé logistiek dienstverlener van Nederland. Met 1.200 vrachtwagens verspreid over 60 locaties door heel het land ontzorgen we klanten in binnen- en buitenland.",
  mission: "Bij ons draait alles om kwaliteit, veiligheid en vertrouwen. We denken met je mee als een echte partner en leveren praktische oplossingen die direct waarde opleveren.",
  founded: 1938,
  headquarters: "Nederland",
  employees: "1.500+",
  trucks: "1.200",
  locations: "60",
  yearsExperience: "90+",
  website: "https://simonloos.nl",
  email: "info@simonloos.nl",
  phone: "+31 (0)XXX XXX XXX",
};

export const services = [
  {
    id: "transport",
    title: "Transport",
    shortTitle: "Transport",
    description: "Met een veelzijdig transportnetwerk verzorgen we dagelijks leveringen door heel Nederland en Europa. Van winkeldistributie en foodservice tot netwerk- en bulktransport.",
    features: [
      "Winkeldistributie",
      "Foodservice",
      "Netwerktransport",
      "Bulktransport",
    ],
    icon: "Truck",
  },
  {
    id: "warehousing",
    title: "Warehousing",
    shortTitle: "Warehousing",
    description: "Warehousing bij Simon Loos omvat het volledige logistieke proces van opslag en voorraadbeheer tot orderverwerking en verzending.",
    features: [
      "Opslag en voorraadbeheer",
      "Orderverwerking",
      "Verzending",
      "Real-time inzicht via klantenportaal",
    ],
    icon: "Warehouse",
  },
  {
    id: "co-packing",
    title: "Co-packing",
    shortTitle: "Co-packing",
    description: "Onze co-packingdiensten zijn een praktische aanvulling op warehousing en transport. Van ompakken en stickeren tot het samenstellen van actieverpakkingen.",
    features: [
      "Ompakken",
      "Stickeren",
      "Actieverpakkingen samenstellen",
      "Efficiënt en zorgvuldig",
    ],
    icon: "Package",
  },
  {
    id: "consultancy",
    title: "Logistieke Consultancy",
    shortTitle: "Consultancy",
    description: "Met logistieke consultancy ondersteunen we klanten bij het optimaliseren van hun logistieke processen en systemen.",
    features: [
      "Procesoptimalisatie",
      "Systeemintegratie",
      "Data-analyse",
      "Strategisch advies",
    ],
    icon: "Lightbulb",
  },
];

export const stats = [
  { value: 1200, label: "Vrachtwagens", suffix: "" },
  { value: 60, label: "Locaties", suffix: "" },
  { value: 90, label: "Jaar ervaring", suffix: "+" },
  { value: 1500, label: "Medewerkers", suffix: "+" },
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Diensten", href: "#services" },
  { name: "Over ons", href: "#about" },
  { name: "Duurzaamheid", href: "#sustainability" },
  { name: "Werken bij", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/simonloos" },
  { name: "Twitter", href: "https://twitter.com/simonloos" },
  { name: "Facebook", href: "https://facebook.com/simonloos" },
];
