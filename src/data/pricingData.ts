export interface VehiclePricing {
  id: string;
  nameKey: string;
  category: 'two_wheeler' | 'commercial' | 'car';
  icon: 'bike' | 'scooter' | 'auto' | 'tempo' | 'car_4_5' | 'car_6_7';
  taglineKey: string;
  fullWashPrice: number;
  bodyWashPrice: number | null; // null for 2-wheelers since they have a single complete wash
  hasBodyWashOption: boolean;
  popularBadge?: boolean;
}

export interface StudioInfo {
  name: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  establishedYear: number;
  baysCount: number;
  address: {
    line1: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  googleShareUrl: string;
  googleEmbedUrl: string;
  workingHours: {
    daysKey: string;
    time: string;
    isOpenSunday: boolean;
  };
  rating: {
    score: number;
    count: number;
  };
}

export const STUDIO_INFO: StudioInfo = {
  name: "Gurukrupa Washing Center and Detailing Studio",
  phone: "+91 9822451532",
  phoneRaw: "+919822451532",
  whatsapp: "+919822451532",
  establishedYear: 2024,
  baysCount: 3,
  address: {
    line1: "Chikhali Akurdi Rd, Swami Samarth Colony, Sharad Nagar",
    area: "Chikhali, Pimpri-Chinchwad",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411062",
    landmark: "Swami Samarth Colony, Chikhali Akurdi Road",
  },
  coordinates: {
    lat: 18.6742336,
    lng: 73.80141,
  },
  googleShareUrl: "https://maps.google.com/?cid=11422750577579455327&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=IN&source=embed",
  googleEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11658.409968635724!2d73.8014099875409!3d18.67423363745825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b7a391304431%3A0x9e85c3214682f35f!2sGurukrupa%20washing%20center%20and%20Detailing%20studio!5e0!3m2!1sen!2sin!4v1786970729150!5m2!1sen!2sin",
  workingHours: {
    daysKey: "working_days_val",
    time: "8:00 AM - 9:00 PM",
    isOpenSunday: true,
  },
  rating: {
    score: 4.9,
    count: 480,
  }
};

export const VEHICLE_PRICING_DATA: VehiclePricing[] = [
  {
    id: "bike",
    nameKey: "vehicle_bike_name",
    category: "two_wheeler",
    icon: "bike",
    taglineKey: "vehicle_bike_desc",
    fullWashPrice: 100,
    bodyWashPrice: null,
    hasBodyWashOption: false,
    popularBadge: true,
  },
  {
    id: "scooter",
    nameKey: "vehicle_scooter_name",
    category: "two_wheeler",
    icon: "scooter",
    taglineKey: "vehicle_scooter_desc",
    fullWashPrice: 80,
    bodyWashPrice: null,
    hasBodyWashOption: false,
  },
  {
    id: "auto",
    nameKey: "vehicle_auto_name",
    category: "commercial",
    icon: "auto",
    taglineKey: "vehicle_auto_desc",
    fullWashPrice: 200,
    bodyWashPrice: 200,
    hasBodyWashOption: true,
  },
  {
    id: "tempo",
    nameKey: "vehicle_tempo_name",
    category: "commercial",
    icon: "tempo",
    taglineKey: "vehicle_tempo_desc",
    fullWashPrice: 500,
    bodyWashPrice: 300,
    hasBodyWashOption: true,
  },
  {
    id: "car_4_5",
    nameKey: "vehicle_car_4_5_name",
    category: "car",
    icon: "car_4_5",
    taglineKey: "vehicle_car_4_5_desc",
    fullWashPrice: 300,
    bodyWashPrice: 200,
    hasBodyWashOption: true,
    popularBadge: true,
  },
  {
    id: "car_6_7",
    nameKey: "vehicle_car_6_7_name",
    category: "car",
    icon: "car_6_7",
    taglineKey: "vehicle_car_6_7_desc",
    fullWashPrice: 400,
    bodyWashPrice: 250,
    hasBodyWashOption: true,
  },
];

// 4-Wheelers & Commercial Vehicles Comparison Features (Full Wash vs Body Wash only)
export const FOUR_WHEELER_FEATURES = [
  { featureKey: "comp_high_pressure", body: true, full: true },
  { featureKey: "comp_snow_foam", body: true, full: true },
  { featureKey: "comp_underbody_wash", body: true, full: true },
  { featureKey: "comp_tyre_dressing", body: true, full: true },
  { featureKey: "comp_glass_cleaning", body: true, full: true },
  { featureKey: "comp_interior_vacuum", body: false, full: true },
  { featureKey: "comp_floor_mat_wash", body: false, full: true },
];

// 2-Wheelers Wash Inclusions (Separate Table)
export const TWO_WHEELER_FEATURES = [
  { featureKey: "comp_tw_pressure", bike: true, scooter: true },
  { featureKey: "comp_tw_foam", bike: true, scooter: true },
  { featureKey: "comp_tw_degrease", bike: true, scooter: true },
  { featureKey: "comp_tw_tyre", bike: true, scooter: true },
  { featureKey: "comp_tw_wipe", bike: true, scooter: true },
];
