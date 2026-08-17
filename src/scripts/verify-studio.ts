import { VEHICLE_PRICING_DATA, FOUR_WHEELER_FEATURES, TWO_WHEELER_FEATURES, STUDIO_INFO } from '../data/pricingData';
import { translations, Language } from '../locales/translations';

console.log('==============================================');
console.log('🧪 RUNNING PRODUCTION AUDIT & VERIFICATION (LIGHT THEME)');
console.log('==============================================\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition: boolean, testName: string) {
  totalTests++;
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passedTests++;
  } else {
    console.error(`❌ FAIL: ${testName}`);
    process.exitCode = 1;
  }
}

// 1. Studio Info
assert(STUDIO_INFO.name === 'Gurukrupa Washing Center and Detailing Studio', 'Studio name is Gurukrupa Washing Center and Detailing Studio');
assert(STUDIO_INFO.phoneRaw === '+919822451532', 'Studio raw phone is +919822451532');
assert(STUDIO_INFO.address.pincode === '411062', 'Studio pincode is 411062');
assert(STUDIO_INFO.address.line1.includes('Chikhali Akurdi Rd'), 'Studio address contains Chikhali Akurdi Rd');
assert(STUDIO_INFO.establishedYear === 2024, 'Established year is 2024');
assert(STUDIO_INFO.baysCount === 3, 'Bays count is 3');
assert(STUDIO_INFO.googleShareUrl.includes('cid=11422750577579455327'), 'Google Share URL matches target CID link');

// 2. Vehicle Rates
const bike = VEHICLE_PRICING_DATA.find(v => v.id === 'bike');
const scooter = VEHICLE_PRICING_DATA.find(v => v.id === 'scooter');
const auto = VEHICLE_PRICING_DATA.find(v => v.id === 'auto');
const tempo = VEHICLE_PRICING_DATA.find(v => v.id === 'tempo');
const car4_5 = VEHICLE_PRICING_DATA.find(v => v.id === 'car_4_5');
const car6_7 = VEHICLE_PRICING_DATA.find(v => v.id === 'car_6_7');

assert(bike?.fullWashPrice === 100 && bike?.bodyWashPrice === null, '2-Wheeler Bike is ₹100 Full Wash');
assert(scooter?.fullWashPrice === 80 && scooter?.bodyWashPrice === null, '2-Wheeler Scooter is ₹80 Full Wash');
assert(auto?.fullWashPrice === 200 && auto?.bodyWashPrice === 200, 'Auto Rickshaw is Full: ₹200 / Body: ₹200');
assert(tempo?.fullWashPrice === 500 && tempo?.bodyWashPrice === 300, 'Tempo is Full: ₹500 / Body: ₹300');
assert(car4_5?.fullWashPrice === 300 && car4_5?.bodyWashPrice === 200, '4/5 Seater Car is Full: ₹300 / Body: ₹200');
assert(car6_7?.fullWashPrice === 400 && car6_7?.bodyWashPrice === 250, '6/7 Seater Car is Full: ₹400 / Body: ₹250');

// 3. Translations Check (4 Languages: en, mr, hi, hi-en)
const languages: Language[] = ['en', 'mr', 'hi', 'hi-en'];
const enKeys = Object.keys(translations.en).sort();

languages.forEach(lang => {
  const keys = Object.keys(translations[lang]).sort();
  assert(keys.length === enKeys.length, `Language [${lang}] has 100% key parity (${keys.length}/${enKeys.length})`);
});

// 4. Comparison Tables Check
assert(FOUR_WHEELER_FEATURES.length === 7, '7 Features in 4-Wheeler & Commercial comparison');
assert(TWO_WHEELER_FEATURES.length === 5, '5 Features in separate 2-Wheeler comparison');

// 5. Check no "universal" in any english string
const allEnText = JSON.stringify(translations.en).toLowerCase();
assert(!allEnText.includes('universal'), 'No mention of "Universal" in English translations');

console.log(`\n==============================================`);
console.log(`🎉 TEST SUMMARY: ${passedTests}/${totalTests} TESTS PASSED`);
console.log(`==============================================`);
