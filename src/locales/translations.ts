export type Language = 'en' | 'mr' | 'hi' | 'hi-en';

export interface TranslationDict {
  // Navigation & Meta
  nav_services: string;
  nav_pricing: string;
  nav_calculator: string;
  nav_location: string;
  nav_reviews: string;
  nav_faq: string;
  nav_call_now: string;
  nav_open_badge: string;
  
  // Language Modal
  lang_modal_title: string;
  lang_modal_subtitle: string;
  lang_modal_confirm: string;
  lang_modal_note: string;
  
  // Hero Section
  hero_tag: string;
  hero_title_1: string;
  hero_title_accent: string;
  hero_title_2: string;
  hero_subtitle: string;
  hero_cta_calculate: string;
  hero_cta_call: string;
  hero_stat_ratings: string;
  hero_stat_cars_washed: string;
  hero_stat_satisfaction: string;
  hero_badge_ro_water: string;
  hero_badge_ph_neutral: string;
  hero_badge_pressure: string;

  // Price Estimator Widget
  calc_section_badge: string;
  calc_title: string;
  calc_subtitle: string;
  calc_select_vehicle: string;
  calc_wash_type_label: string;
  calc_full_wash: string;
  calc_full_wash_desc: string;
  calc_body_wash: string;
  calc_body_wash_desc: string;
  calc_two_wheeler_note: string;
  calc_total_estimate: string;
  calc_fixed_rate_badge: string;
  calc_inclusions_heading: string;
  calc_book_call_btn: string;
  calc_book_whatsapp_btn: string;

  // Vehicle names & taglines
  vehicle_bike_name: string;
  vehicle_bike_desc: string;
  vehicle_scooter_name: string;
  vehicle_scooter_desc: string;
  vehicle_auto_name: string;
  vehicle_auto_desc: string;
  vehicle_tempo_name: string;
  vehicle_tempo_desc: string;
  vehicle_car_4_5_name: string;
  vehicle_car_4_5_desc: string;
  vehicle_car_6_7_name: string;
  vehicle_car_6_7_desc: string;

  // Pricing Matrix & Comparison
  matrix_badge: string;
  matrix_title: string;
  matrix_subtitle: string;
  matrix_col_category: string;
  matrix_col_full: string;
  matrix_col_body: string;
  matrix_col_action: string;
  matrix_two_wheeler_single: string;
  
  // 4-Wheeler & Commercial Comparison
  matrix_4w_comp_title: string;
  matrix_4w_comp_subtitle: string;
  matrix_feature_head: string;
  matrix_body_head: string;
  matrix_full_head: string;

  // 2-Wheeler Comparison
  matrix_2w_comp_title: string;
  matrix_2w_comp_subtitle: string;
  matrix_tw_bike_col: string;
  matrix_tw_scooter_col: string;

  // Comparison items
  comp_snow_foam: string;
  comp_high_pressure: string;
  comp_underbody_wash: string;
  comp_tyre_dressing: string;
  comp_interior_vacuum: string;
  comp_floor_mat_wash: string;
  comp_glass_cleaning: string;

  // 2-Wheeler items
  comp_tw_pressure: string;
  comp_tw_foam: string;
  comp_tw_degrease: string;
  comp_tw_tyre: string;
  comp_tw_wipe: string;

  // Location & Geolocation
  location_badge: string;
  location_title: string;
  location_subtitle: string;
  geo_btn_find: string;
  geo_btn_locating: string;
  geo_btn_recheck: string;
  geo_status_ready: string;
  geo_status_success: string;
  geo_status_error: string;
  geo_distance_approx: string;
  geo_drive_time: string;
  geo_btn_directions: string;
  geo_btn_share_link: string;
  geo_address_heading: string;
  geo_hours_heading: string;
  working_days_val: string;

  // Reviews
  reviews_badge: string;
  reviews_title: string;
  reviews_subtitle: string;
  reviews_overall_rating: string;
  reviews_based_on: string;
  reviews_google_verified: string;

  // Amenities
  amenities_badge: string;
  amenities_title: string;
  amenities_subtitle: string;
  amenity_ro_title: string;
  amenity_ro_desc: string;
  amenity_pressure_title: string;
  amenity_pressure_desc: string;
  amenity_crew_title: string;
  amenity_crew_desc: string;
  amenity_chemicals_title: string;
  amenity_chemicals_desc: string;

  // FAQs
  faq_badge: string;
  faq_title: string;
  faq_subtitle: string;

  // Sticky Bar & Modals
  sticky_call: string;
  sticky_directions: string;
  sticky_estimate: string;
  modal_booking_title: string;
  modal_booking_subtitle: string;
  modal_name_label: string;
  modal_phone_label: string;
  modal_vehicle_label: string;
  modal_submit_call: string;
  modal_submit_whatsapp: string;
  modal_close: string;

  // Footer
  footer_tagline: string;
  footer_quick_links: string;
  footer_services_list: string;
  footer_contact_info: string;
  footer_copyright: string;
  footer_privacy: string;
  footer_terms: string;
  footer_built_with: string;
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    nav_services: "Comparison",
    nav_pricing: "Rate Card",
    nav_calculator: "Calculator",
    nav_location: "Find Us",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    nav_call_now: "Call Studio",
    nav_open_badge: "Open Today • 8 AM - 9 PM",

    lang_modal_title: "Choose Your Language",
    lang_modal_subtitle: "Select your preferred language. You can change this anytime from the header.",
    lang_modal_confirm: "Continue",
    lang_modal_note: "Clean, transparent vehicle wash pricing",

    hero_tag: "Professional Vehicle Washing Studio",
    hero_title_1: "Quality Wash Care For",
    hero_title_accent: "Every Vehicle",
    hero_title_2: "In Pune",
    hero_subtitle: "TDS-controlled soft RO water, rich active foam bath, and calibrated high pressure washing. Clear, fixed rates with no hidden charges.",
    hero_cta_calculate: "Estimate Price",
    hero_cta_call: "Call +91 9822451532",
    hero_stat_ratings: "4.9/5 Rating (480+ Reviews)",
    hero_stat_cars_washed: "Clean & Scratch-Safe",
    hero_stat_satisfaction: "Fixed Honest Rates",
    hero_badge_ro_water: "100% RO Soft Water",
    hero_badge_ph_neutral: "pH Neutral Foam",
    hero_badge_pressure: "150-Bar High Pressure",

    calc_section_badge: "Price Estimator",
    calc_title: "Interactive Wash Price Calculator",
    calc_subtitle: "Select your vehicle category and wash preference to see the exact price.",
    calc_select_vehicle: "1. Select Vehicle",
    calc_wash_type_label: "2. Select Wash Type",
    calc_full_wash: "Full Wash",
    calc_full_wash_desc: "Exterior foam wash + underbody wash + deep cabin & boot vacuuming + floor mat wash",
    calc_body_wash: "Body Wash",
    calc_body_wash_desc: "Exterior foam wash + underbody chassis jet wash + tyre dressing & glass wipe (No interior)",
    calc_two_wheeler_note: "2-Wheelers have a single complete wash package (Foam + Degreasing + Tyre Polish).",
    calc_total_estimate: "Total Wash Price",
    calc_fixed_rate_badge: "Official Studio Rate",
    calc_inclusions_heading: "Inclusions for this vehicle:",
    calc_book_call_btn: "Call Studio (+91 9822451532)",
    calc_book_whatsapp_btn: "Book via WhatsApp",

    vehicle_bike_name: "2-Wheeler Bike",
    vehicle_bike_desc: "Motorcycles & Sports Bikes",
    vehicle_scooter_name: "2-Wheeler Scooter",
    vehicle_scooter_desc: "Activa, Jupiter, EV Scooters",
    vehicle_auto_name: "Auto Rickshaw",
    vehicle_auto_desc: "3-Wheeler Passenger & Goods Autos",
    vehicle_tempo_name: "Tempo / Commercial",
    vehicle_tempo_desc: "Tata Ace, Bolero Pickup, Small Commercials",
    vehicle_car_4_5_name: "4/5 Seater Car",
    vehicle_car_4_5_desc: "Hatchbacks, Sedans & 5-Seaters (Swift, i20, Dzire, City, Creta, Brezza)",
    vehicle_car_6_7_name: "6/7 Seater Car",
    vehicle_car_6_7_desc: "7-Seater SUVs & MUVs (Innova, Ertiga, Scorpio, XUV700, Safari)",

    matrix_badge: "Rates",
    matrix_title: "Official Rate Card",
    matrix_subtitle: "Fixed, transparent rates for all vehicle types. All taxes included.",
    matrix_col_category: "Vehicle Category",
    matrix_col_full: "Full Wash",
    matrix_col_body: "Body Wash",
    matrix_col_action: "Action",
    matrix_two_wheeler_single: "Full Wash Only",

    matrix_4w_comp_title: "4-Wheeler & Commercial Wash Comparison",
    matrix_4w_comp_subtitle: "Features included in Full Wash vs Body Wash.",
    matrix_feature_head: "Wash Inclusions",
    matrix_body_head: "Body Wash",
    matrix_full_head: "Full Wash",

    matrix_2w_comp_title: "2-Wheeler Wash Details",
    matrix_2w_comp_subtitle: "Complete deep wash features for bikes and scooters.",
    matrix_tw_bike_col: "Bike (₹100)",
    matrix_tw_scooter_col: "Scooter (₹80)",

    comp_snow_foam: "Active Snow Foam Bath",
    comp_high_pressure: "150-Bar High Pressure RO Water Rinse",
    comp_underbody_wash: "Underbody Chassis Jet Wash",
    comp_tyre_dressing: "Tyre & Rim Cleaning & Dressing",
    comp_interior_vacuum: "Cabin & Boot Deep Vacuuming",
    comp_floor_mat_wash: "Floor Mat Wash & Cleaning",
    comp_glass_cleaning: "Exterior Windshield & Glass Wipe",

    comp_tw_pressure: "High Pressure RO Water Wash",
    comp_tw_foam: "Thick Snow Foam Bath",
    comp_tw_degrease: "Engine & Body Mud Degreasing",
    comp_tw_tyre: "Tyre Cleaning & Dressing",
    comp_tw_wipe: "Mirror & Meter Glass Wipe",

    location_badge: "Studio Location",
    location_title: "Find Us & Check Distance",
    location_subtitle: "Located on the service road near highway junction with easy access and 3 wash bays.",
    geo_btn_find: "Find Distance From Me (GPS)",
    geo_btn_locating: "Finding Your Location...",
    geo_btn_recheck: "Recalculate Distance",
    geo_status_ready: "Tap to find driving distance and estimated time from your current location.",
    geo_status_success: "Location detected! Here is your distance from our wash center:",
    geo_status_error: "GPS could not be accessed. You can open directions directly on Google Maps.",
    geo_distance_approx: "Driving Distance",
    geo_drive_time: "Approx. Time",
    geo_btn_directions: "Open Google Maps Directions",
    geo_btn_share_link: "Open Studio Location Pin",
    geo_address_heading: "Studio Address",
    geo_hours_heading: "Studio Timings",
    working_days_val: "Monday to Sunday (All 7 Days)",

    reviews_badge: "Customer Feedback",
    reviews_title: "Reviews From Vehicle Owners",
    reviews_subtitle: "Rated 4.9 out of 5 based on 480+ customer visits.",
    reviews_overall_rating: "Overall Studio Rating",
    reviews_based_on: "Based on 480+ customer reviews",
    reviews_google_verified: "Verified Customer",

    amenities_badge: "Studio Standards",
    amenities_title: "Our Washing Standards",
    amenities_subtitle: "We prioritize pure water, safe pressure, and careful hand washing.",
    amenity_ro_title: "100% RO Purified Water",
    amenity_ro_desc: "TDS-controlled soft water prevents hard water stains and white residue on paint and glass.",
    amenity_pressure_title: "150-Bar Pressure Wash",
    amenity_pressure_desc: "Calibrated pressure to safely remove stubborn mud without paint damage.",
    amenity_crew_title: "Experienced Crew",
    amenity_crew_desc: "Trained staff using clean microfiber towels and scratch-safe methods.",
    amenity_chemicals_title: "pH Neutral Shampoos",
    amenity_chemicals_desc: "Safe foam cleaners that protect vehicle paint, wax, and clear coat.",

    faq_badge: "Help & FAQ",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Clear answers to common questions about our wash services and payments.",

    sticky_call: "Call +91 9822451532",
    sticky_directions: "Directions",
    sticky_estimate: "Estimate Price",
    modal_booking_title: "Book a Wash Slot",
    modal_booking_subtitle: "Reach out to check bay availability and reserve your time.",
    modal_name_label: "Your Name",
    modal_phone_label: "Phone Number",
    modal_vehicle_label: "Vehicle Type",
    modal_submit_call: "Call Studio",
    modal_submit_whatsapp: "Book on WhatsApp",
    modal_close: "Close",

    footer_tagline: "Pune's reliable vehicle foam wash center. Delivering clean vehicle wash care since 2024.",
    footer_quick_links: "Quick Links",
    footer_services_list: "Rate Summary",
    footer_contact_info: "Contact & Address",
    footer_copyright: "© 2026 Gurukrupa Washing Center and Detailing Studio. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_built_with: "Simple, Fast & Responsive",
  },

  mr: {
    nav_services: "तुलना",
    nav_pricing: "दर पत्रक",
    nav_calculator: "कॅल्क्युलेटर",
    nav_location: "पत्ता व अंतर",
    nav_reviews: "अभिप्राय",
    nav_faq: "प्रश्न",
    nav_call_now: "कॉल करा",
    nav_open_badge: "आज चालू • सकाळी ८ ते रात्री ९",

    lang_modal_title: "भाषा निवडा",
    lang_modal_subtitle: "तुमची सोयीची भाषा निवडा. तुम्ही ही वरून कधीही बदलू शकता.",
    lang_modal_confirm: "पुढे चला",
    lang_modal_note: "गाडी वॉशिंगचे स्पष्ट आणि फिक्स दर",

    hero_tag: "प्रोफेशनल व्हेईकल वॉशिंग स्टुडिओ",
    hero_title_1: "प्रत्येक वाहनासाठी",
    hero_title_accent: "दर्जेदार वॉश आणि स्वच्छता",
    hero_title_2: "पुण्यात",
    hero_subtitle: "क्षार नसलेले RO मऊ पाणी, दाट स्नो फोम आणि हाय प्रेशर वॉश. कोणतेही छुपे खर्च नसलेले स्पष्ट व फिक्स दर.",
    hero_cta_calculate: "दर तपासा",
    hero_cta_call: "कॉल करा +91 9822451532",
    hero_stat_ratings: "४.९/५ रेटिंग (४८०+ ग्राहक)",
    hero_stat_cars_washed: "स्क्रॅच-फ्री सुरक्षित वॉश",
    hero_stat_satisfaction: "फिक्स प्रामाणिक दर",
    hero_badge_ro_water: "१००% RO शुद्ध पाणी",
    hero_badge_ph_neutral: "pH न्यूट्रल फोम",
    hero_badge_pressure: "१५०-बार हाय प्रेशर",

    calc_section_badge: "दर कॅल्क्युलेटर",
    calc_title: "वॉशिंग दर कॅल्क्युलेटर",
    calc_subtitle: "तुमचे वाहन आणि वॉशचा प्रकार निवडून नक्की दर पहा.",
    calc_select_vehicle: "१. वाहन निवडा",
    calc_wash_type_label: "२. वॉशचा प्रकार निवडा",
    calc_full_wash: "फुल वॉश",
    calc_full_wash_desc: "बाहेरून फोम वॉश + अंडरबॉडी वॉश + केबिन व डिकी डीप व्हॅक्यूमिंग + मॅट क्लिनिंग",
    calc_body_wash: "बॉडी वॉश",
    calc_body_wash_desc: "बाहेरून फोम वॉश + अंडरबॉडी जेट वॉश + टायर पॉलिश व काचांची पुसणी (नो इंटिरिअर)",
    calc_two_wheeler_note: "२-चाकी वाहनांसाठी संपूर्ण वॉश पॅकेज (फोम + डिग्रेसिंग + टायर पॉलिश) उपलब्ध आहे.",
    calc_total_estimate: "एकूण वॉश दर",
    calc_fixed_rate_badge: "अधिकृत स्टुडिओ दर",
    calc_inclusions_heading: "या वाहनासाठी काय मिळते:",
    calc_book_call_btn: "कॉल करा (+91 9822451532)",
    calc_book_whatsapp_btn: "व्हॉट्सॲपवर बुक करा",

    vehicle_bike_name: "२-चाकी बाईक",
    vehicle_bike_desc: "सर्व मोटारसायकली",
    vehicle_scooter_name: "२-चाकी स्कूटर",
    vehicle_scooter_desc: "ॲक्टिव्हा, ज्युपिटर, ईव्ही स्कूटर",
    vehicle_auto_name: "ऑटो रिक्षा",
    vehicle_auto_desc: "३-चाकी पॅसेंजर व लोडिंग रिक्षा",
    vehicle_tempo_name: "टेम्पो / कमर्शियल",
    vehicle_tempo_desc: "टाटा ॲस, बोलेरो पिकअप, लहान टेम्पो",
    vehicle_car_4_5_name: "४/५ सीटर कार",
    vehicle_car_4_5_desc: "हॅचबॅक, सेडान व ५-सीटर कार (स्विफ्ट, i20, डिझायर, सिटी, क्रेटा, ब्रेझा)",
    vehicle_car_6_7_name: "६/७ सीटर कार",
    vehicle_car_6_7_desc: "७-सीटर एसयूव्ही व एमयूव्ही (इनोव्हा, एर्टिगा, स्कॉर्पिओ, XUV700, सफारी)",

    matrix_badge: "दर पत्रक",
    matrix_title: "अधिकृत वॉशिंग दर",
    matrix_subtitle: "सर्व वाहनांसाठी निश्चित व पारदर्शक दर. सर्व कर समाविष्ट.",
    matrix_col_category: "वाहनाचा प्रकार",
    matrix_col_full: "फुल वॉश",
    matrix_col_body: "बॉडी वॉश",
    matrix_col_action: "कृती",
    matrix_two_wheeler_single: "फक्त फुल वॉश",

    matrix_4w_comp_title: "४-चाकी व कमर्शियल वाहने तुलना",
    matrix_4w_comp_subtitle: "फुल वॉश आणि बॉडी वॉशमधील फरक.",
    matrix_feature_head: "वॉश तपशील",
    matrix_body_head: "बॉडी वॉश",
    matrix_full_head: "फुल वॉश",

    matrix_2w_comp_title: "२-चाकी वाहने वॉश तपशील",
    matrix_2w_comp_subtitle: "बाईक आणि स्कूटरसाठी संपूर्ण वॉश सुविधा.",
    matrix_tw_bike_col: "बाईक (₹१००)",
    matrix_tw_scooter_col: "स्कूटर (₹८०)",

    comp_snow_foam: "दाट ॲक्टिव्ह स्नो फोम बाथ",
    comp_high_pressure: "१५०-बार हाय प्रेशर RO पाणी वॉश",
    comp_underbody_wash: "अंडरबॉडी चेसिस जेट वॉश",
    comp_tyre_dressing: "टायर व रिम क्लिनिंग व पॉलिश",
    comp_interior_vacuum: "केबिन व डिकी डीप व्हॅक्यूमिंग",
    comp_floor_mat_wash: "फ्लोअर मॅट धुणे व स्वच्छता",
    comp_glass_cleaning: "काचांची स्वच्छ पुसणी",

    comp_tw_pressure: "हाय प्रेशर RO पाणी वॉश",
    comp_tw_foam: "दाट स्नो फोम बाथ",
    comp_tw_degrease: "इंजिन व बॉडीची माती साफ करणे",
    comp_tw_tyre: "टायर क्लिनिंग व पॉलिश",
    comp_tw_wipe: "काचा व मीटर पुसणी",

    location_badge: "स्टुडिओ पत्ता",
    location_title: "पत्ता आणि अंतर तपासा",
    location_subtitle: "हायवेलगत सोयीस्कर पत्ता, ३ वॉशिंग बे आणि सोपी एन्ट्री.",
    geo_btn_find: "माझ्या स्थानावरून अंतर शोधा (GPS)",
    geo_btn_locating: "स्थान शोधत आहे...",
    geo_btn_recheck: "अंतर पुन्हा मोजा",
    geo_status_ready: "तुमच्या ठिकाणावरून अंतर आणि वेळ पाहण्यासाठी बटण दाबा.",
    geo_status_success: "स्थान मिळाले! आमच्या वॉश सेंटरपासून तुमचे अंतर:",
    geo_status_error: "GPS सुरू करता आले नाही. तुम्ही थेट गुगल मॅप्सवर दिशा पाहू शकता.",
    geo_distance_approx: "ड्रायव्हिंग अंतर",
    geo_drive_time: "अंदाजे वेळ",
    geo_btn_directions: "गुगल मॅप्सवर रस्ता पहा",
    geo_btn_share_link: "लोकेशन पिन उघडा",
    geo_address_heading: "स्टुडिओ पत्ता",
    geo_hours_heading: "कामाचे तास",
    working_days_val: "सोमवार ते रविवार (आठवड्याचे ७ दिवस)",

    reviews_badge: "ग्राहकांचे मत",
    reviews_title: "गाडी मालकांचे अभिप्राय",
    reviews_subtitle: "४८०+ ग्राहकांच्या अनुभवांवर आधारित ४.९ रेटिंग.",
    reviews_overall_rating: "एकूण रेटिंग",
    reviews_based_on: "४८०+ ग्राहकांच्या अभिप्रायांवर आधारित",
    reviews_google_verified: "व्हेरिफाइड ग्राहक",

    amenities_badge: "स्टुडिओ मानके",
    amenities_title: "आमची वॉशिंग वैशिष्ट्ये",
    amenities_subtitle: "शुद्ध पाणी, योग्य प्रेशर आणि काळजीपूर्वक हातकाम.",
    amenity_ro_title: "१००% RO शुद्ध पाणी",
    amenity_ro_desc: "TDS नियंत्रित मऊ पाण्यामुळे गाडीच्या रंगावर आणि काचेवर पांढरे डाग पडत नाहीत.",
    amenity_pressure_title: "१५०-बार प्रेशर वॉश",
    amenity_pressure_desc: "योग्य दाबाने माती निघते आणि गाडीचा ओरिजिनल रंग सुरक्षित राहतो.",
    amenity_crew_title: "अनुभवी कर्मचारी",
    amenity_crew_desc: "स्वच्छ मायक्रोफायबर कापड वापरून स्क्रॅच-फ्री वॉश देणारे कामगार.",
    amenity_chemicals_title: "pH न्यूट्रल शाम्पू",
    amenity_chemicals_desc: "गाडीच्या रंगाचे आणि चमकचे रक्षण करणारे सुरक्षित शाम्पू.",

    faq_badge: "नेहमीचे प्रश्न",
    faq_title: "वारंवार विचारले जाणारे प्रश्न",
    faq_subtitle: "वॉश पद्धती आणि पेमेंटबद्दल स्पष्ट उत्तरे.",

    sticky_call: "कॉल करा +91 9822451532",
    sticky_directions: "दिशा पहा",
    sticky_estimate: "दर तपासा",
    modal_booking_title: "वॉश स्लॉट बुक करा",
    modal_booking_subtitle: "बे उपलब्ध आहे का ते पाहण्यासाठी संपर्क करा.",
    modal_name_label: "नाव",
    modal_phone_label: "मोबाईल नंबर",
    modal_vehicle_label: "वाहनाचा प्रकार",
    modal_submit_call: "कॉल करा",
    modal_submit_whatsapp: "व्हॉट्सॲपवर बुक करा",
    modal_close: "बंद करा",

    footer_tagline: "पुण्यातील विश्वासार्ह व्हेईकल वॉश सेंटर. २०२४ पासून ग्राहकांच्या सेवेत.",
    footer_quick_links: "द्रुत लिंक्स",
    footer_services_list: "दर सारांश",
    footer_contact_info: "संपर्क आणि पत्ता",
    footer_copyright: "© २०२६ गुरुकृपा वॉशिंग सेंटर आणि डिटेलिंग स्टुडिओ. सर्व हक्क राखीव.",
    footer_privacy: "गोपनीयता धोरण",
    footer_terms: "अटी व शर्ती",
    footer_built_with: "साधा, जलद व रिस्पॉन्सिव्ह डिझाइन",
  },

  hi: {
    nav_services: "तुलना",
    nav_pricing: "रेट कार्ड",
    nav_calculator: "कैलकुलेटर",
    nav_location: "पता व दूरी",
    nav_reviews: "समीक्षाएं",
    nav_faq: "सवाल-जवाब",
    nav_call_now: "कॉल करें",
    nav_open_badge: "आज खुला है • सुबह 8 से रात 9",

    lang_modal_title: "अपनी भाषा चुनें",
    lang_modal_subtitle: "अपनी पसंदीदा भाषा चुनें। इसे आप कभी भी ऊपर से बदल सकते हैं।",
    lang_modal_confirm: "आगे बढ़ें",
    lang_modal_note: "गाड़ी वॉश के साफ और फिक्स रेट",

    hero_tag: "प्रोफेशनल व्हीकल वॉशिंग स्टूडियो",
    hero_title_1: "हर गाड़ी के लिए",
    hero_title_accent: "बेहतरीन वॉश और सफाई",
    hero_title_2: "पुणे में",
    hero_subtitle: "TDS-कंट्रोल्ड सॉफ्ट RO पानी, गाढ़ा स्नो फोम और सही प्रेशर वॉश। बिना किसी छिपे चार्ज के फिक्स और ईमानदार रेट्स।",
    hero_cta_calculate: "रेट देखें",
    hero_cta_call: "कॉल करें +91 9822451532",
    hero_stat_ratings: "4.9/5 रेटिंग (480+ ग्राहक)",
    hero_stat_cars_washed: "स्क्रैच-फ्री सुरक्षित वॉश",
    hero_stat_satisfaction: "फिक्स ईमानदार रेट्स",
    hero_badge_ro_water: "100% RO शुद्ध पानी",
    hero_badge_ph_neutral: "pH न्यूट्रल फोम",
    hero_badge_pressure: "150-बार हाई प्रेशर",

    calc_section_badge: "रेट कैलकुलेटर",
    calc_title: "इंटरएक्टिव वॉश प्राइस कैलकुलेटर",
    calc_subtitle: "अपनी गाड़ी और वॉश का प्रकार चुनें और तुरंत सही रेट जानें।",
    calc_select_vehicle: "1. गाड़ी चुनें",
    calc_wash_type_label: "2. वॉश का प्रकार चुनें",
    calc_full_wash: "फुल वॉश",
    calc_full_wash_desc: "बाहरी फोम वॉश + अंडरबॉडी वॉश + केबिन व डिक्की डीप वैक्यूमिंग + फ्लोर मैट वॉश",
    calc_body_wash: "बॉडी वॉश",
    calc_body_wash_desc: "बाहरी फोम वॉश + अंडरबॉडी चेसिस जेट वॉश + टायर ड्रेसिंग और शीशों की सफाई (नो इंटीरियर)",
    calc_two_wheeler_note: "2-व्हीलर के लिए कंप्लीट वॉश पैकेज (फोम + डिग्रीसिंग + टायर पॉलिश) उपलब्ध है।",
    calc_total_estimate: "कुल वॉश रेट",
    calc_fixed_rate_badge: "ऑफिशियल स्टूडियो रेट",
    calc_inclusions_heading: "इस गाड़ी के लिए शामिल सुविधाएं:",
    calc_book_call_btn: "कॉल करें (+91 9822451532)",
    calc_book_whatsapp_btn: "व्हाट्सएप पर बुक करें",

    vehicle_bike_name: "2-व्हीलर बाइक",
    vehicle_bike_desc: "सभी मोटरसाइकिलें",
    vehicle_scooter_name: "2-व्हीलर स्कूटर",
    vehicle_scooter_desc: "एक्टिवा, जुपिटर, ईवी स्कूटर",
    vehicle_auto_name: "ऑटो रिक्शा",
    vehicle_auto_desc: "3-व्हीलर पैसेंजर व लोडिंग ऑटो",
    vehicle_tempo_name: "टेंपो / कमर्शियल",
    vehicle_tempo_desc: "टाटा ऐस, बोलेरो पिकअप, छोटे कमर्शियल",
    vehicle_car_4_5_name: "4/5 सीटर कार",
    vehicle_car_4_5_desc: "हैचबैक, सेडान व 5-सीटर गाड़ियां (स्विफ्ट, i20, डिजायर, सिटी, क्रेटा, ब्रेजा)",
    vehicle_car_6_7_name: "6/7 सीटर कार",
    vehicle_car_6_7_desc: "7-सीटर एसयूवी व एमयूवी (इनोवा, अर्टिगा, स्कॉर्पियो, XUV700, सफारी)",

    matrix_badge: "रेट कार्ड",
    matrix_title: "ऑफिशियल वॉशिंग रेट्स",
    matrix_subtitle: "सभी गाड़ियों के लिए तय और पारदर्शी रेट्स। सभी टैक्स शामिल।",
    matrix_col_category: "गाड़ी की श्रेणी",
    matrix_col_full: "फुल वॉश",
    matrix_col_body: "बॉडी वॉश",
    matrix_col_action: "एक्शन",
    matrix_two_wheeler_single: "सिर्फ फुल वॉश",

    matrix_4w_comp_title: "4-व्हीलर व कमर्शियल वॉश तुलना",
    matrix_4w_comp_subtitle: "फुल वॉश और बॉडी वॉश में क्या शामिल है।",
    matrix_feature_head: "वॉश सुविधाएं",
    matrix_body_head: "बॉडी वॉश",
    matrix_full_head: "फुल वॉश",

    matrix_2w_comp_title: "2-व्हीलर वॉश विवरण",
    matrix_2w_comp_subtitle: "बाइक और स्कूटर के लिए पूरी वॉश सुविधाएं।",
    matrix_tw_bike_col: "बाइक (₹100)",
    matrix_tw_scooter_col: "स्कूटर (₹80)",

    comp_snow_foam: "गाढ़ा एक्टिव स्नो फोम बाथ",
    comp_high_pressure: "150-बार हाई प्रेशर RO पानी वॉश",
    comp_underbody_wash: "अंडरबॉडी चेसिस जेट वॉश",
    comp_tyre_dressing: "टायर व रिम क्लीनिंग व पॉलिश",
    comp_interior_vacuum: "केबिन व डिक्की डीप वैक्यूमिंग",
    comp_floor_mat_wash: "फ्लोर मैट धोना और सफाई",
    comp_glass_cleaning: "शीशों की साफ पोछाई",

    comp_tw_pressure: "हाई प्रेशर RO पानी वॉश",
    comp_tw_foam: "गाढ़ा स्नो फोम बाथ",
    comp_tw_degrease: "इंजन व बॉडी की मिट्टी साफ करना",
    comp_tw_tyre: "टायर क्लीनिंग व पॉलिश",
    comp_tw_wipe: "मिरर व मीटर ग्लास पोछाई",

    location_badge: "स्टूडियो लोकेशन",
    location_title: "हमारा पता और दूरी देखें",
    location_subtitle: "हाईवे सर्विस रोड के पास आसान पता, 3 वॉश बे और आसान पार्किंग।",
    geo_btn_find: "मेरी लोकेशन से दूरी देखें (GPS)",
    geo_btn_locating: "लोकेशन खोजी जा रही है...",
    geo_btn_recheck: "दूरी फिर से जांचें",
    geo_status_ready: "अपनी वर्तमान लोकेशन से ड्राइविंग दूरी और समय देखने के लिए बटन दबाएं।",
    geo_status_success: "लोकेशन मिल गई! हमारे वॉश सेंटर से आपकी दूरी:",
    geo_status_error: "GPS कनेक्ट नहीं हो सका। आप सीधे गूगल मैप्स पर रास्ता देख सकते हैं।",
    geo_distance_approx: "ड्राइविंग दूरी",
    geo_drive_time: "अनुमानित समय",
    geo_btn_directions: "गूगल मैप्स पर रास्ता देखें",
    geo_btn_share_link: "लोकेशन पिन खोलें",
    geo_address_heading: "स्टूडियो पता",
    geo_hours_heading: "स्टूडियो समय",
    working_days_val: "सोमवार से रविवार (सातों दिन खुला)",

    reviews_badge: "ग्राहकों की राय",
    reviews_title: "गाड़ी मालिकों के अनुभव",
    reviews_subtitle: "480+ ग्राहकों के अनुभवों के आधार पर 4.9 रेटिंग।",
    reviews_overall_rating: "ओवरऑल रेटिंग",
    reviews_based_on: "480+ कस्टमर रिव्यू के आधार पर",
    reviews_google_verified: "वेरिफाइड कस्टमर",

    amenities_badge: "स्टूडियो मानक",
    amenities_title: "हमारे वॉशिंग मानक",
    amenities_subtitle: "शुद्ध पानी, सुरक्षित प्रेशर और सावधानीपूर्वक सफाई।",
    amenity_ro_title: "100% RO शुद्ध पानी",
    amenity_ro_desc: "TDS कंट्रोल्ड सॉफ्ट पानी से गाड़ी के पेंट और ग्लास पर कोई सफेद दाग नहीं पड़ते।",
    amenity_pressure_title: "150-बार प्रेशर वॉश",
    amenity_pressure_desc: "सही प्रेशर जिससे पेंट को नुकसान पहुंचाए बिना मिट्टी साफ होती है।",
    amenity_crew_title: "अनुभवी स्टाफ",
    amenity_crew_desc: "साफ माइक्रोफाइबर कपड़े से स्क्रैच-फ्री वॉश देने वाले ट्रेंड कर्मचारी।",
    amenity_chemicals_title: "pH न्यूट्रल शैम्पू",
    amenity_chemicals_desc: "गाड़ी के पेंट और चमक को सुरक्षित रखने वाले क्लीनर।",

    faq_badge: "मदद व सवाल",
    faq_title: "अक्सर पूछे जाने वाले सवाल",
    faq_subtitle: "वॉश सर्विस और पेमेंट से जुड़े सभी सवालों के जवाब।",

    sticky_call: "कॉल करें +91 9822451532",
    sticky_directions: "दिशा देखें",
    sticky_estimate: "रेट देखें",
    modal_booking_title: "वॉश स्लॉट बुक करें",
    modal_booking_subtitle: "बे उपलब्धता जानने के लिए संपर्क करें।",
    modal_name_label: "नाम",
    modal_phone_label: "फोन नंबर",
    modal_vehicle_label: "गाड़ी का प्रकार",
    modal_submit_call: "कॉल करें",
    modal_submit_whatsapp: "व्हाट्सएप पर बुक करें",
    modal_close: "बंद करें",

    footer_tagline: "पुणे का भरोसेमंद व्हीकल वॉश सेंटर। 2024 से लगातार सेवा में।",
    footer_quick_links: "क्विक लिंक्स",
    footer_services_list: "रेट सारांश",
    footer_contact_info: "संपर्क और पता",
    footer_copyright: "© 2026 गुरुकृपा वॉशिंग सेंटर और डिटेलिंग स्टूडियो. सर्वाधिकार सुरक्षित।",
    footer_privacy: "प्राइवेसी पॉलिसी",
    footer_terms: "नियम व शर्तें",
    footer_built_with: "सरल, तेज और रेस्पॉन्सिव डिजाइन",
  },

  "hi-en": {
    nav_services: "Comparison",
    nav_pricing: "Rate Card",
    nav_calculator: "Calculator",
    nav_location: "Location",
    nav_reviews: "Reviews",
    nav_faq: "FAQs",
    nav_call_now: "Call Karein",
    nav_open_badge: "Open Today • 8 AM - 9 PM",

    lang_modal_title: "Apni Bhasha Select Karein",
    lang_modal_subtitle: "Neeche diye options me se language choose karein. Isko aap upar se kabhi bhi badal sakte hain.",
    lang_modal_confirm: "Aage Badhein",
    lang_modal_note: "Transparent aur fixed vehicle wash rates",

    hero_tag: "Professional Vehicle Washing Studio",
    hero_title_1: "Har Gaadi Ke Liye",
    hero_title_accent: "Quality Wash Aur Safai",
    hero_title_2: "Pune Mein",
    hero_subtitle: "TDS-controlled soft RO water, thick snow foam bath aur calibrated high pressure wash. Zero hidden charges ke sath fixed aur transparent rates.",
    hero_cta_calculate: "Price Check Karein",
    hero_cta_call: "Call Karein +91 9822451532",
    hero_stat_ratings: "4.9/5 Rating (480+ Reviews)",
    hero_stat_cars_washed: "Scratch-Safe Clean Wash",
    hero_stat_satisfaction: "Fixed Honest Rates",
    hero_badge_ro_water: "100% RO Soft Water",
    hero_badge_ph_neutral: "pH Neutral Foam",
    hero_badge_pressure: "150-Bar High Pressure",

    calc_section_badge: "Rate Calculator",
    calc_title: "Interactive Wash Price Calculator",
    calc_subtitle: "Apni gaadi aur wash type select karke exact rate dekhein.",
    calc_select_vehicle: "1. Gaadi Select Karein",
    calc_wash_type_label: "2. Wash Type Chunein",
    calc_full_wash: "Full Wash",
    calc_full_wash_desc: "Outer foam wash + underbody wash + cabin & boot deep vacuuming + floor mat wash",
    calc_body_wash: "Body Wash",
    calc_body_wash_desc: "Outer foam wash + underbody chassis jet wash + tyre dressing & glass wipe (No interior)",
    calc_two_wheeler_note: "2-Wheeler ke liye complete wash package (Foam + Degreasing + Tyre Polish) available hai.",
    calc_total_estimate: "Total Wash Price",
    calc_fixed_rate_badge: "Official Studio Rate",
    calc_inclusions_heading: "Is vehicle ke sath kya milta hai:",
    calc_book_call_btn: "Call Studio (+91 9822451532)",
    calc_book_whatsapp_btn: "WhatsApp Par Book Karein",

    vehicle_bike_name: "2-Wheeler Bike",
    vehicle_bike_desc: "Motorcycles & Sports Bikes",
    vehicle_scooter_name: "2-Wheeler Scooter",
    vehicle_scooter_desc: "Activa, Jupiter, EV Scooters",
    vehicle_auto_name: "Auto Rickshaw",
    vehicle_auto_desc: "3-Wheeler Passenger & Goods Autos",
    vehicle_tempo_name: "Tempo / Commercial",
    vehicle_tempo_desc: "Tata Ace, Bolero Pickup, Small Commercials",
    vehicle_car_4_5_name: "4/5 Seater Car",
    vehicle_car_4_5_desc: "Hatchback, Sedan & 5-Seaters (Swift, i20, Dzire, City, Creta, Brezza)",
    vehicle_car_6_7_name: "6/7 Seater Car",
    vehicle_car_6_7_desc: "7-Seater SUVs & MUVs (Innova, Ertiga, Scorpio, XUV700, Safari)",

    matrix_badge: "Rate Card",
    matrix_title: "Official Studio Rates",
    matrix_subtitle: "Sabhi vehicles ke liye fixed aur transparent rates. Sabhi taxes included.",
    matrix_col_category: "Vehicle Category",
    matrix_col_full: "Full Wash",
    matrix_col_body: "Body Wash",
    matrix_col_action: "Action",
    matrix_two_wheeler_single: "Sirf Full Wash",

    matrix_4w_comp_title: "4-Wheeler & Commercial Wash Comparison",
    matrix_4w_comp_subtitle: "Check karein Full Wash aur Body Wash mein kya difference hai.",
    matrix_feature_head: "Wash Inclusions",
    matrix_body_head: "Body Wash",
    matrix_full_head: "Full Wash",

    matrix_2w_comp_title: "2-Wheeler Wash Details",
    matrix_2w_comp_subtitle: "Bikes aur scooters ke liye complete wash details.",
    matrix_tw_bike_col: "Bike (₹100)",
    matrix_tw_scooter_col: "Scooter (₹80)",

    comp_snow_foam: "Thick Snow Foam Bath",
    comp_high_pressure: "150-Bar High Pressure RO Water Rinse",
    comp_underbody_wash: "Underbody Chassis Jet Wash",
    comp_tyre_dressing: "Tyre & Rim Cleaning & Dressing",
    comp_interior_vacuum: "Cabin & Boot Deep Vacuuming",
    comp_floor_mat_wash: "Floor Mat Wash & Clean",
    comp_glass_cleaning: "Exterior Glass & Windshield Wipe",

    comp_tw_pressure: "High Pressure RO Water Wash",
    comp_tw_foam: "Thick Snow Foam Bath",
    comp_tw_degrease: "Engine & Body Mud Degreasing",
    comp_tw_tyre: "Tyre Cleaning & Dressing",
    comp_tw_wipe: "Mirror & Meter Glass Wipe",

    location_badge: "Studio Location",
    location_title: "Studio Address Aur Distance Dekhein",
    location_subtitle: "Highway service road par easy access, 3 wash bays aur parking ke sath.",
    geo_btn_find: "Current Location Se Distance Check Karein (GPS)",
    geo_btn_locating: "Location check ho rahi hai...",
    geo_btn_recheck: "Dobara Distance Check Karein",
    geo_status_ready: "Apni location se exact driving distance aur time dekhne ke liye click karein.",
    geo_status_success: "Location mil gayi! Wash center se aapki doori:",
    geo_status_error: "GPS access nahi hua. Aap direct Google Maps par directions dekh sakte hain.",
    geo_distance_approx: "Driving Distance",
    geo_drive_time: "Approx. Time",
    geo_btn_directions: "Google Maps Par Directions Kholein",
    geo_btn_share_link: "Studio Pin Kholein",
    geo_address_heading: "Studio Ka Address",
    geo_hours_heading: "Studio Timings",
    working_days_val: "Monday se Sunday (7 Din Open)",

    reviews_badge: "Customer Feedback",
    reviews_title: "Vehicle Owners Ke Reviews",
    reviews_subtitle: "480+ satisfied customer visits ke basis par 4.9 rating.",
    reviews_overall_rating: "Overall Rating",
    reviews_based_on: "480+ customer reviews ke basis par",
    reviews_google_verified: "Verified Customer",

    amenities_badge: "Studio Standards",
    amenities_title: "Hamari Washing Quality",
    amenities_subtitle: "Saaf RO paani, safe pressure aur careful washing technique.",
    amenity_ro_title: "100% RO Purified Water",
    amenity_ro_desc: "TDS controlled soft water se paint aur glass par safed daag nahi aate.",
    amenity_pressure_title: "150-Bar Pressure Wash",
    amenity_pressure_desc: "Sahi pressure jo ziddi mitti nikaalta hai bina paint ko damage kiye.",
    amenity_crew_title: "Experienced Crew",
    amenity_crew_desc: "Microfiber cloth se scratch-safe cleaning karne wale trained workers.",
    amenity_chemicals_title: "pH Neutral Shampoos",
    amenity_chemicals_desc: "Gaadi ke paint aur shine ko safe rakhne wale quality foam shampoos.",

    faq_badge: "Help & FAQs",
    faq_title: "Aksar Pooche Jaane Wale Sawaal",
    faq_subtitle: "Washing aur payment se judi zaroori baatein.",

    sticky_call: "Call Karein +91 9822451532",
    sticky_directions: "Directions",
    sticky_estimate: "Estimate Price",
    modal_booking_title: "Wash Slot Book Karein",
    modal_booking_subtitle: "Bay availability check karne ke liye contact karein.",
    modal_name_label: "Aapka Naam",
    modal_phone_label: "Phone Number",
    modal_vehicle_label: "Gaadi Ka Type",
    modal_submit_call: "Call Karein",
    modal_submit_whatsapp: "WhatsApp Par Book Karein",
    modal_close: "Close",

    footer_tagline: "Pune ka reliable vehicle wash center. 2024 se aapki service mein.",
    footer_quick_links: "Quick Links",
    footer_services_list: "Rate Summary",
    footer_contact_info: "Contact & Address",
    footer_copyright: "© 2026 Gurukrupa Washing Center and Detailing Studio. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_built_with: "Simple, Fast & Clean Design",
  }
};
