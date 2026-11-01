export interface MenuItem {
  id: string;
  name: string;
  nameAm: string;
  category: "traditional" | "pizza" | "burger" | "juice" | "drinks_cold" | "drinks_hot";
  categoryName: string;
  categoryNameAm: string;
  description: string;
  descriptionAm: string;
  price: number; // in ETB
  priceFormatted: string;
  image: string;
  tags: ("spicy" | "mild" | "fasting" | "meat" | "chef_special" | "ceremony" | "sweet" | "vegetarian" | "popular")[];
  portion: string;
  portionAm: string;
  preparationTime?: string;
  isAvailable: boolean;
  isPopular?: boolean;
}

export const menuCategories = [
  { id: "all", name: "Full Menu", nameAm: "ሙሉ ሜኑ", icon: "UtensilsCrossed" },
  { id: "traditional", name: "Fasting & Traditional", nameAm: "የጾም እና ባህላዊ ምግቦች", icon: "Flame" },
  { id: "pizza", name: "Etege Pizza", nameAm: "እቴጌ ፒዛ", icon: "Pizza" },
  { id: "burger", name: "Etege Burgers", nameAm: "እቴጌ በርገር", icon: "Sandwich" },
  { id: "juice", name: "Fresh Juices", nameAm: "እቴጌ ትኩስ ጁስ", icon: "Citrus" },
  { id: "drinks_cold", name: "Beers, Cold Drinks & Wine", nameAm: "ለስላሳ፣ ቢራ እና ወይን", icon: "Wine" },
  { id: "drinks_hot", name: "Hot Drinks & Buna", nameAm: "ትኩስ መጠጥ እና ቡና", icon: "Coffee" },
] as const;

export const initialMenuItems: MenuItem[] = [
  {
    "id": "menu-ye-tsom-buffet",
    "name": "Ye Tsom Buffet Feast",
    "nameAm": "የጾም ብፌ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Full fasting buffet selection featuring rich lentil wot, simmering shiro, seasoned collard greens, kik alicha, and salad served with fresh teff injera.",
    "descriptionAm": "የተሟላ የጾም ብፌ ማዕድ፣ ልዩ ልዩ ወጦች፣ ሽሮ፣ አልጫና ክክ ወጥ ከጤፍ እንጀራ ጋር።",
    "price": 600,
    "priceFormatted": "600 ETB",
    "image": "/images/etege/etege-photo-7.jpg",
    "tags": [
      "fasting",
      "vegetarian",
      "chef_special"
    ],
    "portion": "Full Buffet Platter",
    "portionAm": "የተሟላ የብፌ ማዕድ",
    "preparationTime": "10-15 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "menu-tegamino",
    "name": "Sizzling Tegamino Shiro",
    "nameAm": "ተጋቢኖ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Sizzling thick chickpea stew cooked in traditional clay pot with garlic, ginger, and Ethiopian berbere peppers.",
    "descriptionAm": "በትኩስ የሸክላ ድስት የሚንተከተክ ወፍራም የድፍን ሽሮ ተጋቢኖ።",
    "price": 300,
    "priceFormatted": "300 ETB",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian",
      "spicy"
    ],
    "portion": "Sizzling Clay Pot",
    "portionAm": "በትኩስ ሸክላ ድስት",
    "preparationTime": "10-12 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "menu-shiro-feses",
    "name": "Shiro Feses",
    "nameAm": "ሽሮ ፈሰስ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Silky, smooth chickpea puree simmered with shallots, garlic, and aromatic Ethiopian spices.",
    "descriptionAm": "በለሰለሰ መልኩ የተዘጋጀ ፈሰስ ያለ ጣፋጭ የሀገር ሽሮ።",
    "price": 300,
    "priceFormatted": "300 ETB",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian"
    ],
    "portion": "Standard Bowl",
    "portionAm": "መካከለኛ ሳህን",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-beyaynetu",
    "name": "Royal Fasting Beyaynetu",
    "nameAm": "በየአይነቱ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Vibrant combination platter of slow-cooked red split lentils, yellow split peas, collard greens, cabbage, and beetroot on teff injera.",
    "descriptionAm": "ህብረ-ቀለማት ያሸበረቀ የተሟላ የጾም በየአይነቱ ማዕድ ከጤፍ እንጀራ ጋር።",
    "price": 400,
    "priceFormatted": "400 ETB",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian",
      "popular"
    ],
    "portion": "Combination Platter",
    "portionAm": "ሙሉ ጥምር ማዕድ",
    "preparationTime": "10-15 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "menu-special-shiro",
    "name": "Etege Special Shiro",
    "nameAm": "ስፔሻል ሽሮ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Chef's signature clay-pot Shiro prepared with caramelized shallots, diced tomatoes, sliced jalapenos, and herbal aromatics.",
    "descriptionAm": "በልዩ ቅመሞች ተዘጋጅቶ በሸክላ የሚቀርብ የእቴጌ ልዩ ስፔሻል ሽሮ።",
    "price": 450,
    "priceFormatted": "450 ETB",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "chef_special",
      "spicy"
    ],
    "portion": "Chef Special Clay Pot",
    "portionAm": "ልዩ የሸክላ ማዕድ",
    "preparationTime": "12-15 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "menu-gomen-tibs",
    "name": "Sautéed Gomen Tibs",
    "nameAm": "ጎመን ጥብስ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Tender highland collard greens flash-sautéed with sliced garlic, onions, and mild green peppers.",
    "descriptionAm": "በነጭ ሽንኩርትና ቃሪያ በጥበብ የተጠበሰ ለስላሳ ጎመን ጥብስ።",
    "price": 300,
    "priceFormatted": "300 ETB",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian"
    ],
    "portion": "Generous Bowl",
    "portionAm": "ሙሉ ሳህን",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-gomen-kitfo",
    "name": "Spiced Gomen Kitfo",
    "nameAm": "ጎመን ክትፎ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Finely minced steamed collard greens infused with fiery Mitmita and herbal seasoned vegetable oil.",
    "descriptionAm": "ደቆ በተከተፈ ጎመን፣ ሚጥሚጣና ቅመሞች የሚዘጋጅ የጾም ጎመን ክትፎ።",
    "price": 330,
    "priceFormatted": "330 ETB",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "spicy",
      "vegetarian"
    ],
    "portion": "Spiced Platter",
    "portionAm": "የቅመም ማዕድ",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-etege-special-mulu",
    "name": "Etege Special Grand Feast (Full)",
    "nameAm": "እቴጌ ስፔሻል ሙሉ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Royal banquet centerpiece: an extensive feast platter loaded with fish specialties, fasting curries, shiro, and traditional accompaniments.",
    "descriptionAm": "ሙሉውን የሆቴሉን ምርጥ ምግቦች ያካተተ የእቴጌ ልዩ የንጉሳዊ ድግስ ሙሉ ማዕድ።",
    "price": 1100,
    "priceFormatted": "1,100 ETB",
    "image": "/images/etege/etege-photo-7.jpg",
    "tags": [
      "chef_special",
      "ceremony",
      "popular"
    ],
    "portion": "Grand Platter (Serves 2-3)",
    "portionAm": "ግዙፍ ማዕድ (ለ2-3 ሰው)",
    "preparationTime": "20-25 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "menu-etege-special-half",
    "name": "Etege Special Feast (Half)",
    "nameAm": "ፖርሽን ግማሽ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "A single to double portion of Etege's royal feast platter with a choice selection of house delicacies.",
    "descriptionAm": "የእቴጌ ልዩ ማዕድ ግማሽ ፖርሽን።",
    "price": 600,
    "priceFormatted": "600 ETB",
    "image": "/images/etege/etege-photo-7.jpg",
    "tags": [
      "chef_special"
    ],
    "portion": "Half Platter (Serves 1-2)",
    "portionAm": "ግማሽ ማዕድ (ለ1-2 ሰው)",
    "preparationTime": "15 min",
    "isAvailable": true
  },
  {
    "id": "menu-shiro-firfir",
    "name": "Savory Shiro Firfir",
    "nameAm": "ሽሮ ፍርፍር",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Teff injera gently tossed and infused into simmering, savory spiced shiro stew.",
    "descriptionAm": "በሽሮ ወጥ የተበጠበጠ ትኩስ የጤፍ እንጀራ ፍርፍር።",
    "price": 250,
    "priceFormatted": "250 ETB",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian"
    ],
    "portion": "Hearty Bowl",
    "portionAm": "የተሟላ ሳህን",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-suf-firfir",
    "name": "Artisanal Suf Firfir",
    "nameAm": "ሱፍ ፍርፍር",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Injera infused with roasted sunflower seed milk broth, fresh green chilies, diced onions, and garlic.",
    "descriptionAm": "በጣፋጭ የተፈጨ ሱፍ ወተትና ቃሪያ የተዘጋጀ የሱፍ ፍርፍር።",
    "price": 250,
    "priceFormatted": "250 ETB",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian",
      "popular"
    ],
    "portion": "Traditional Plate",
    "portionAm": "ባህላዊ ሳህን",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-timatim-lebleb",
    "name": "Pan-Seared Timatim Lebleb",
    "nameAm": "ቲማቲም ለብለብ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Warm seared ripe tomatoes quickly tossed in a hot skillet with onions, jalapenos, and herb seasoning.",
    "descriptionAm": "ለብ ለብ የተደረገ ቲማቲም በሽንኩርትና ቃሪያ።",
    "price": 250,
    "priceFormatted": "250 ETB",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian",
      "mild"
    ],
    "portion": "Skillet Bowl",
    "portionAm": "ትኩስ ሳህን",
    "preparationTime": "8-10 min",
    "isAvailable": true
  },
  {
    "id": "menu-dinch-wot",
    "name": "Spiced Dinch Wot",
    "nameAm": "ድንች",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Tender potatoes simmered in caramelized shallots and authentic Ethiopian berbere sauce.",
    "descriptionAm": "በበርበሬ ቁሌት የተሰራ ጣፋጭ የድንች ወጥ።",
    "price": 260,
    "priceFormatted": "260 ETB",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "spicy",
      "vegetarian"
    ],
    "portion": "Standard Portion",
    "portionAm": "መደበኛ ፖርሽን",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-tsom-firfir",
    "name": "Classic Fasting Firfir",
    "nameAm": "የጾም ፍርፍር",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Traditional shredded teff injera cooked in rich berbere sauce, caramelized red onions, and hot green pepper slices.",
    "descriptionAm": "በልዩ የበርበሬ ቁሌት የተሰራ ተወዳጅ የጾም ፍርፍር።",
    "price": 250,
    "priceFormatted": "250 ETB",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "spicy"
    ],
    "portion": "Full Plate",
    "portionAm": "ሙሉ ሳህን",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-tsom-half-half",
    "name": "Fasting Half & Half Combination",
    "nameAm": "የጾም ሃፍ ሃፍ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Choice pair of two fasting favorites served together side-by-side with injera.",
    "descriptionAm": "ሁለት የተመረጡ የጾም ምግቦች በአንድ ላይ የሚቀርቡበት ሃፍ ሃፍ።",
    "price": 400,
    "priceFormatted": "400 ETB",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian"
    ],
    "portion": "Duo Platter",
    "portionAm": "ድርብ ማዕድ",
    "preparationTime": "10-12 min",
    "isAvailable": true
  },
  {
    "id": "menu-tsom-agelgil-mulu",
    "name": "Traditional Fasting Agelgil (Full)",
    "nameAm": "የጾም አገልግል ሙሉ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Ceremonial leather-wrapped Agelgil filled with rolled injera, assorted fasting wots, shiro, and vegetable dishes.",
    "descriptionAm": "በባህላዊ አገልግል ሙሉ ማዕድ ተሞልቶ የሚቀርብ ድንቅ የጾም ምግብ።",
    "price": 1000,
    "priceFormatted": "1,000 ETB",
    "image": "/images/etege/etege-photo-7.jpg",
    "tags": [
      "fasting",
      "ceremony",
      "popular"
    ],
    "portion": "Full Ceremonial Agelgil (2-3 Pax)",
    "portionAm": "ሙሉ ባህላዊ አገልግል (ለ2-3 ሰው)",
    "preparationTime": "15-20 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "menu-tsom-agelgil-half",
    "name": "Traditional Fasting Agelgil (Half)",
    "nameAm": "የጾም አገልግል ግማሽ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Half-portion authentic Ethiopian Agelgil packed with fasting dishes and injera.",
    "descriptionAm": "በባህላዊ አገልግል የሚቀርብ የጾም ምግብ ግማሽ ማዕድ።",
    "price": 600,
    "priceFormatted": "600 ETB",
    "image": "/images/etege/etege-photo-7.jpg",
    "tags": [
      "fasting",
      "ceremony"
    ],
    "portion": "Half Agelgil (1-2 Pax)",
    "portionAm": "ግማሽ አገልግል (ለ1-2 ሰው)",
    "preparationTime": "12-15 min",
    "isAvailable": true
  },
  {
    "id": "menu-selata",
    "name": "Fresh Etege Garden Salad",
    "nameAm": "ሰላጣ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Crisp local lettuce, sliced vine tomatoes, red onions, and green chilies dressed in house lemon vinaigrette.",
    "descriptionAm": "ትኩስ ሰላጣ፣ ቲማቲም፣ ሽንኩርትና ቃሪያ በሎሚ ድሬሲንግ።",
    "price": 400,
    "priceFormatted": "400 ETB",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian"
    ],
    "portion": "Fresh Salad Bowl",
    "portionAm": "የሰላጣ ሳህን",
    "preparationTime": "5-8 min",
    "isAvailable": true
  },
  {
    "id": "menu-shinkurt-tibs",
    "name": "Sautéed Shinkurt Tibs",
    "nameAm": "ሽንኩርት ጥብስ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Caramelized red onion rings sautéed with fresh rosemary, sliced jalapeños, and fragrant garlic.",
    "descriptionAm": "በዘይትና ቅመሞች የላመ ሽንኩርት ጥብስ ከቃሪያ ጋር።",
    "price": 250,
    "priceFormatted": "250 ETB",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian"
    ],
    "portion": "Skillet Plate",
    "portionAm": "የጥብስ ሳህን",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-asa-goulash",
    "name": "Lake Fish Goulash",
    "nameAm": "አሳ ጉላሽ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Prime cubes of fresh lake fish fillet sautéed in rich garlic-tomato goulash sauce with bell peppers.",
    "descriptionAm": "ከተመረጠ ትኩስ የሀይቅ አሳ በቲማቲምና ነጭ ሽንኩርት ሶስ የተጠበሰ አሳ ጉላሽ።",
    "price": 500,
    "priceFormatted": "500 ETB",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "popular"
    ],
    "portion": "Fish Fillet Skillet",
    "portionAm": "የአሳ ማዕድ",
    "preparationTime": "15 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "menu-asa-lebleb",
    "name": "Pan-Tossed Fish Lebleb",
    "nameAm": "አሳ ለብለብ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Tender lake fish pieces flash-tossed in hot oil with finely sliced onions, garlic, and fresh green chilies.",
    "descriptionAm": "ለስላሳ የአሳ ቅንጣት በሽንኩርትና ቃሪያ ለብ ለብ የተደረገ።",
    "price": 400,
    "priceFormatted": "400 ETB",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting"
    ],
    "portion": "Standard Plate",
    "portionAm": "መደበኛ ሳህን",
    "preparationTime": "12 min",
    "isAvailable": true
  },
  {
    "id": "menu-asa-dulet",
    "name": "Spicy Fish Dulet",
    "nameAm": "አሳ ዱለት",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Finely minced fresh lake fish seasoned with Mitmita, chopped jalapeños, onions, and herbal seasoning.",
    "descriptionAm": "ደቆ በተከተፈ የአሳ ስጋ በቃሪያና ቅመሞች የሚዘጋጅ አሳ ዱለት።",
    "price": 400,
    "priceFormatted": "400 ETB",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "spicy"
    ],
    "portion": "Dulet Plate",
    "portionAm": "የዱለት ሳህን",
    "preparationTime": "12 min",
    "isAvailable": true
  },
  {
    "id": "menu-asa-cutlet",
    "name": "Golden Crispy Fish Cutlet",
    "nameAm": "አሳ ኮትሌት",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Crispy golden breadcrumb-crusted lake fish fillet fried to crunchy perfection, served with lemon wedges.",
    "descriptionAm": "በዳቦ ዱቄት ተለውሶ በዘይት የተጠበሰ ጥርት ያለ አሳ ኮትሌት።",
    "price": 500,
    "priceFormatted": "500 ETB",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "popular"
    ],
    "portion": "Breaded Fillet Platter",
    "portionAm": "የተጠበሰ አሳ ሳህን",
    "preparationTime": "15 min",
    "isAvailable": true
  },
  {
    "id": "menu-macaroni-soce",
    "name": "Macaroni in Spiced Tomato Sauce",
    "nameAm": "መኮረኒ በሶስ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Tender elbow macaroni tossed in rich garlic and herb spiced tomato reduction sauce.",
    "descriptionAm": "በጣፋጭ ቲማቲም ሶስ የበሰለ መኮረኒ።",
    "price": 300,
    "priceFormatted": "300 ETB",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian"
    ],
    "portion": "Pasta Bowl",
    "portionAm": "የፓስታ ሳህን",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-pasta-soce",
    "name": "Spaghetti in Tomato Sauce",
    "nameAm": "ፓስታ በሶስ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Classic spaghetti tossed in savory Ethiopian-Italian seasoned tomato and basil sauce.",
    "descriptionAm": "በቲማቲም ሶስና ነጭ ሽንኩርት የተሰራ ፓስታ።",
    "price": 280,
    "priceFormatted": "280 ETB",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian"
    ],
    "portion": "Pasta Plate",
    "portionAm": "የፓስታ ሳህን",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-rice-soce",
    "name": "Steamed Rice in Tomato Sauce",
    "nameAm": "ሩዝ በሶስ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Fluffy steamed long-grain white rice served with a rich aromatic spiced tomato gravy.",
    "descriptionAm": "በቲማቲም ሶስ የቀረበ ለስላሳ ነጭ ሩዝ።",
    "price": 300,
    "priceFormatted": "300 ETB",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian"
    ],
    "portion": "Rice Plate",
    "portionAm": "የሩዝ ሳህን",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-macaroni-atkilt",
    "name": "Vegetable Stir-Fry Macaroni",
    "nameAm": "መኮረኒ በአትክልት",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Elbow macaroni stir-fried with diced carrots, green peas, onions, and sweet bell peppers.",
    "descriptionAm": "ከተከተፉ ትኩስ አትክልቶች ጋር የተጠበሰ መኮረኒ።",
    "price": 300,
    "priceFormatted": "300 ETB",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian"
    ],
    "portion": "Stir-Fry Bowl",
    "portionAm": "የአትክልት ሳህን",
    "preparationTime": "10-12 min",
    "isAvailable": true
  },
  {
    "id": "menu-pasta-atkilt",
    "name": "Vegetable Stir-Fry Pasta",
    "nameAm": "ፓስታ በአትክልት",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Spaghetti pasta tossed with fresh julienned garden vegetables, garlic, and light olive oil.",
    "descriptionAm": "በአትክልት ቅልቅል የተጠበሰ ጣፋጭ ፓስታ።",
    "price": 300,
    "priceFormatted": "300 ETB",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian"
    ],
    "portion": "Pasta Plate",
    "portionAm": "የፓስታ ሳህን",
    "preparationTime": "10-12 min",
    "isAvailable": true
  },
  {
    "id": "menu-rice-atkilt",
    "name": "Garden Vegetable Fried Rice",
    "nameAm": "ሩዝ በአትክልት",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Aromatic pan-fried rice tossed with sweet carrots, green peas, sweet corn, and mild herbs.",
    "descriptionAm": "በካሮት፣ አተርና ልዩ ልዩ አትክልቶች የተጠበሰ ሩዝ።",
    "price": 300,
    "priceFormatted": "300 ETB",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian"
    ],
    "portion": "Rice Bowl",
    "portionAm": "የሩዝ ሳህን",
    "preparationTime": "10-12 min",
    "isAvailable": true
  },
  {
    "id": "menu-chechebsa",
    "name": "Traditional Chechebsa (Kita Firfir)",
    "nameAm": "ጨጨብሳ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Warm shredded griddle flatbread pan-fried with spicy berbere and seasoned oil or butter.",
    "descriptionAm": "በቅቤ ወይም በዘይትና በርበሬ የሚዘጋጅ ባህላዊ ጨጨብሳ (ቂጣ ፍርፍር)።",
    "price": 270,
    "priceFormatted": "270 ETB",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian",
      "popular"
    ],
    "portion": "Breakfast Plate",
    "portionAm": "የቁርስ ሳህን",
    "preparationTime": "10 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "menu-gebis-chechebsa",
    "name": "Whole Barley Chechebsa",
    "nameAm": "የገብስ ጨጨብሳ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Nutrient-rich toasted barley flatbread pieces tossed with spicy berbere and seasoning.",
    "descriptionAm": "ከጥራት ካለው ገብስ ዱቄት የተዘጋጀ ጤናማ የገብስ ጨጨብሳ።",
    "price": 300,
    "priceFormatted": "300 ETB",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian"
    ],
    "portion": "Barley Plate",
    "portionAm": "የገብስ ሳህን",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-kinche",
    "name": "Cracked Wheat Spiced Kinche",
    "nameAm": "ቂንጬ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Steamed cracked whole wheat porridge cooked tender and tossed with aromatic herbal oil or butter.",
    "descriptionAm": "በቅመማ ቅመም የተሰራ ለስላሳ የሀበሻ ቂንጬ።",
    "price": 260,
    "priceFormatted": "260 ETB",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian",
      "mild"
    ],
    "portion": "Warm Breakfast Bowl",
    "portionAm": "የቁርስ ሳህን",
    "preparationTime": "8-10 min",
    "isAvailable": true
  },
  {
    "id": "menu-atkilt-firfir",
    "name": "Garden Vegetable Firfir",
    "nameAm": "አትክልት ፍርፍር",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Teff injera tossed with a stew of caramelized onions, tomatoes, carrots, cabbage, and peppers.",
    "descriptionAm": "ከተለያዩ አትክልቶች ጋር ተቀላቅሎ የሚዘጋጅ አትክልት ፍርፍር።",
    "price": 350,
    "priceFormatted": "350 ETB",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "vegetarian"
    ],
    "portion": "Full Platter",
    "portionAm": "ሙሉ ሳህን",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-etege-kurkunfo",
    "name": "Etege Heritage Kurkunfo",
    "nameAm": "እቴጌ ኩርኩንፎ",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Etege's signature heritage recipe made from stone-ground toasted grains and spiced butter/oil.",
    "descriptionAm": "የእቴጌ ልዩ ጥንታዊ የኩርኩንፎ አሰራር ማዕድ።",
    "price": 500,
    "priceFormatted": "500 ETB",
    "image": "/images/etege/etege-photo-7.jpg",
    "tags": [
      "fasting",
      "chef_special"
    ],
    "portion": "Heritage Bowl",
    "portionAm": "ልዩ ባህላዊ ሳህን",
    "preparationTime": "15 min",
    "isAvailable": true
  },
  {
    "id": "menu-lowz-firfir",
    "name": "Peanut Sauce Lowz Firfir",
    "nameAm": "ለውዝ ፍርፍር",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Shredded teff injera gently cooked in creamy roasted groundnut/peanut sauce with mild spices.",
    "descriptionAm": "በጣፋጭ የተፈጨ ለውዝ ወጥ የሚዘጋጅ ለውዝ ፍርፍር።",
    "price": 350,
    "priceFormatted": "350 ETB",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "popular"
    ],
    "portion": "Creamy Nut Plate",
    "portionAm": "የለውዝ ሳህን",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-firfir-sugar",
    "name": "Sweetened Firfir Delicacy",
    "nameAm": "ፍርፍር በስኳር",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Traditional comfort dish of lightly crisped injera tossed with cane sugar and fragrant seasoning.",
    "descriptionAm": "ጣፋጭ በሆነ ስኳርና ዘይት የሚዘጋጅ ተወዳጅ ፍርፍር።",
    "price": 400,
    "priceFormatted": "400 ETB",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sweet",
      "fasting"
    ],
    "portion": "Sweet Bowl",
    "portionAm": "ጣፋጭ ሳህን",
    "preparationTime": "10 min",
    "isAvailable": true
  },
  {
    "id": "menu-atkilt-sugar",
    "name": "Sweet Glazed Vegetables",
    "nameAm": "አትክልት በስኳር",
    "category": "traditional",
    "categoryName": "Fasting & Traditional",
    "categoryNameAm": "የጾም እና ባህላዊ ምግቦች",
    "description": "Caramelized seasonal garden root vegetables gently sautéed with natural cane sugar glaze.",
    "descriptionAm": "ጣፋጭ አሰራር ያለው አትክልት በስኳር።",
    "price": 450,
    "priceFormatted": "450 ETB",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sweet",
      "fasting"
    ],
    "portion": "Glazed Vegetable Plate",
    "portionAm": "ጣፋጭ የአትክልት ሳህን",
    "preparationTime": "12 min",
    "isAvailable": true
  },
  {
    "id": "pizza-etege-special",
    "name": "Etege Special Royal Pizza",
    "nameAm": "እቴጌ ስፔሻል ፒዛ",
    "category": "pizza",
    "categoryName": "Etege Pizza",
    "categoryNameAm": "እቴጌ ፒዛ",
    "description": "Signature gourmet crust loaded with spiced prime beef, melted mozzarella, bell peppers, black olives, and fresh herbs.",
    "descriptionAm": "በበሬ ሥጋ፣ በሞዛሬላ ቺዝ፣ በወይራ ፍሬና በቃሪያ የተዘጋጀ የእቴጌ ልዩ ስፔሻል ፒዛ።",
    "price": 700,
    "priceFormatted": "700 ETB",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "chef_special",
      "popular",
      "meat"
    ],
    "portion": "Large 30cm Pizza",
    "portionAm": "ትልቅ 30 ሳ.ሜ ፒዛ",
    "preparationTime": "15-20 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "pizza-baba-beef",
    "name": "Baba Minced Beef Pizza",
    "nameAm": "ባባ / ቢፍ ፒዛ",
    "category": "pizza",
    "categoryName": "Etege Pizza",
    "categoryNameAm": "እቴጌ ፒዛ",
    "description": "Savory seasoned lean minced beef, house marinara tomato sauce, melted mozzarella, and oregano.",
    "descriptionAm": "በጥራት በተዘጋጀ የበሬ ሥጋና ሞዛሬላ ቺዝ የተሰራ ጣፋጭ ፒዛ።",
    "price": 500,
    "priceFormatted": "500 ETB",
    "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "meat"
    ],
    "portion": "Standard 28cm Pizza",
    "portionAm": "መደበኛ 28 ሳ.ሜ ፒዛ",
    "preparationTime": "15 min",
    "isAvailable": true
  },
  {
    "id": "pizza-taytu-chicken",
    "name": "Empress Taytu Chicken Pizza",
    "nameAm": "ጣይቱ ፒዛ / ቺክን ፒዛ",
    "category": "pizza",
    "categoryName": "Etege Pizza",
    "categoryNameAm": "እቴጌ ፒዛ",
    "description": "Named after Empress Taytu Betul — tender grilled chicken breast strips, roasted sweet peppers, garlic, and mozzarella.",
    "descriptionAm": "በእቴጌ ጣይቱ የተሰየመ፣ በዶሮ ሥጋ፣ ቃሪያና ሞዛሬላ የተዘጋጀ ፒዛ።",
    "price": 480,
    "priceFormatted": "480 ETB",
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "meat",
      "popular"
    ],
    "portion": "Standard 28cm Pizza",
    "portionAm": "መደበኛ 28 ሳ.ሜ ፒዛ",
    "preparationTime": "15-18 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "pizza-abdibaga-tuna",
    "name": "Abdibaga Mediterranean Tuna Pizza",
    "nameAm": "አብዲባጋ / ቱና ፒዛ",
    "category": "pizza",
    "categoryName": "Etege Pizza",
    "categoryNameAm": "እቴጌ ፒዛ",
    "description": "Flaked ocean tuna, sliced red onions, capers, fresh tomato sauce, and herb seasonings.",
    "descriptionAm": "በቱና አሳ፣ ቀይ ሽንኩርትና ቅመሞች የሚዘጋጅ አብዲባጋ ፒዛ።",
    "price": 450,
    "priceFormatted": "450 ETB",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting"
    ],
    "portion": "Standard 28cm Pizza",
    "portionAm": "መደበኛ 28 ሳ.ሜ ፒዛ",
    "preparationTime": "15 min",
    "isAvailable": true
  },
  {
    "id": "pizza-lucena-margherita",
    "name": "Lucena Classic Margherita Pizza",
    "nameAm": "ሉሴኔ / ማርጋሪታ ፒዛ",
    "category": "pizza",
    "categoryName": "Etege Pizza",
    "categoryNameAm": "እቴጌ ፒዛ",
    "description": "Classic Italian Margherita with crushed sun-ripened tomatoes, melted mozzarella, extra virgin olive oil, and dried oregano.",
    "descriptionAm": "ክላሲክ ማርጋሪታ በሞዛሬላ ቺዝ፣ በቲማቲም ሶስና በጣሊያን ቅመሞች።",
    "price": 420,
    "priceFormatted": "420 ETB",
    "image": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "vegetarian"
    ],
    "portion": "Standard 28cm Pizza",
    "portionAm": "መደበኛ 28 ሳ.ሜ ፒዛ",
    "preparationTime": "12-15 min",
    "isAvailable": true
  },
  {
    "id": "pizza-lij-eyasu-cheese",
    "name": "Prince Lij Eyasu Golden Cheese Pizza",
    "nameAm": "ልጅ እያሱ / ቺዝ ፒዛ",
    "category": "pizza",
    "categoryName": "Etege Pizza",
    "categoryNameAm": "እቴጌ ፒዛ",
    "description": "Named after Prince Lij Eyasu — layered four-cheese blend bubbling golden over crispy hearth-baked crust.",
    "descriptionAm": "በልጅ እያሱ የተሰየመ፣ በቺዝ ቅልቅል የበለጸገ ፒዛ።",
    "price": 410,
    "priceFormatted": "410 ETB",
    "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "vegetarian"
    ],
    "portion": "Standard 28cm Pizza",
    "portionAm": "መደበኛ 28 ሳ.ሜ ፒዛ",
    "preparationTime": "12-15 min",
    "isAvailable": true
  },
  {
    "id": "pizza-axumawit-vegetable",
    "name": "Axumawit Garden Vegetable Pizza",
    "nameAm": "አክሱማዊት / አትክልት ፒዛ",
    "category": "pizza",
    "categoryName": "Etege Pizza",
    "categoryNameAm": "እቴጌ ፒዛ",
    "description": "Garden feast pizza topped with fresh mushrooms, sweet bell peppers, red onions, sliced tomatoes, and basil.",
    "descriptionAm": "በአክሱማዊት የተሰየመ፣ በልዩ ልዩ አትክልቶችና እንጉዳይ የሚዘጋጅ ፒዛ።",
    "price": 380,
    "priceFormatted": "380 ETB",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "vegetarian",
      "fasting"
    ],
    "portion": "Standard 28cm Pizza",
    "portionAm": "መደበኛ 28 ሳ.ሜ ፒዛ",
    "preparationTime": "12-15 min",
    "isAvailable": true
  },
  {
    "id": "pizza-tewodros",
    "name": "Emperor Tewodros Spicy Pizza",
    "nameAm": "ቴዎድሮስ ፒዛ",
    "category": "pizza",
    "categoryName": "Etege Pizza",
    "categoryNameAm": "እቴጌ ፒዛ",
    "description": "Named after Emperor Tewodros II — fiery jalapeños, spicy berbere pizza sauce, minced prime beef, and mozzarella.",
    "descriptionAm": "በአጼ ቴዎድሮስ የተሰየመ፣ ቃሪያና ቅመማ ቅመም የበዛበት ሀሞተኛ ፒዛ።",
    "price": 410,
    "priceFormatted": "410 ETB",
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "spicy",
      "meat",
      "chef_special"
    ],
    "portion": "Standard 28cm Pizza",
    "portionAm": "መደበኛ 28 ሳ.ሜ ፒዛ",
    "preparationTime": "15 min",
    "isAvailable": true
  },
  {
    "id": "burger-etege-special",
    "name": "Etege Special Royal Burger",
    "nameAm": "እቴጌ ስፔሻል በርገር",
    "category": "burger",
    "categoryName": "Etege Burgers",
    "categoryNameAm": "እቴጌ በርገር",
    "description": "Double thick prime beef patty, melted sharp cheddar cheese, fried sunny egg, crisp lettuce, ripe tomato, and house burger sauce.",
    "descriptionAm": "በድርብ የበሬ ስጋ፣ በቺዝ፣ በእንቁላልና በሰላጣ የተሞላ የእቴጌ ልዩ ስፔሻል በርገር።",
    "price": 480,
    "priceFormatted": "480 ETB",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "chef_special",
      "popular",
      "meat"
    ],
    "portion": "Gourmet Burger with Fries",
    "portionAm": "ልዩ በርገር ከቺፕስ ጋር",
    "preparationTime": "15 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "burger-menelik-chicken",
    "name": "Emperor Menelik Chicken Burger",
    "nameAm": "ሚኒሊክ / ቺክን በርገር",
    "category": "burger",
    "categoryName": "Etege Burgers",
    "categoryNameAm": "እቴጌ በርገር",
    "description": "Named after Emperor Menelik II — seasoned grilled chicken breast fillet, crisp greens, sliced tomato, and creamy herb dressing.",
    "descriptionAm": "በአጼ ሚኒሊክ የተሰየመ፣ በዶሮ ስጋና በሰላጣ የሚዘጋጅ ጣፋጭ በርገር።",
    "price": 330,
    "priceFormatted": "330 ETB",
    "image": "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "meat",
      "popular"
    ],
    "portion": "Chicken Burger",
    "portionAm": "የዶሮ በርገር",
    "preparationTime": "12-15 min",
    "isAvailable": true
  },
  {
    "id": "burger-belay-cheese",
    "name": "General Belay Cheese Burger",
    "nameAm": "በላይ / ቺዝ በርገር",
    "category": "burger",
    "categoryName": "Etege Burgers",
    "categoryNameAm": "እቴጌ በርገር",
    "description": "Named after heroic patriot Belay Zeleke — grilled beef patty topped with a thick slab of melted cheddar cheese and caramelized onions.",
    "descriptionAm": "በጀግናው በላይ ዘለቀ የተሰየመ፣ በቺዝ የቀለጠ የበሬ በርገር።",
    "price": 300,
    "priceFormatted": "300 ETB",
    "image": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "meat"
    ],
    "portion": "Cheeseburger",
    "portionAm": "ቺዝ በርገር",
    "preparationTime": "12 min",
    "isAvailable": true
  },
  {
    "id": "burger-lalibela-double",
    "name": "King Lalibela Double Beef Burger",
    "nameAm": "ላሊበላ / ደብል በርገር",
    "category": "burger",
    "categoryName": "Etege Burgers",
    "categoryNameAm": "እቴጌ በርገር",
    "description": "Named after King Lalibela — towering double prime beef patties, double melted cheese, pickles, and smoky barbecue aioli.",
    "descriptionAm": "በንጉስ ላሊበላ የተሰየመ፣ በሁለት ድርብ የበሬ ስጋና ቺዝ የተሰራ ግዙፍ ደብል በርገር።",
    "price": 450,
    "priceFormatted": "450 ETB",
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "meat",
      "popular"
    ],
    "portion": "Double Patty Burger",
    "portionAm": "ድርብ በርገር",
    "preparationTime": "15 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "burger-normal-beef",
    "name": "Classic Addis Beef Burger",
    "nameAm": "ኖርማል በርገር",
    "category": "burger",
    "categoryName": "Etege Burgers",
    "categoryNameAm": "እቴጌ በርገር",
    "description": "Hand-crafted beef patty seasoned with fresh Ethiopian herbs, sliced tomato, onions, and crisp lettuce on toasted sesame bun.",
    "descriptionAm": "ባህላዊ አሰራር ያለው ጥራት ያለው ክላሲክ የበሬ በርገር።",
    "price": 380,
    "priceFormatted": "380 ETB",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "meat"
    ],
    "portion": "Classic Burger",
    "portionAm": "መደበኛ በርገር",
    "preparationTime": "12 min",
    "isAvailable": true
  },
  {
    "id": "juice-orange",
    "name": "Fresh Pure Orange Juice",
    "nameAm": "ብርቱካን",
    "category": "juice",
    "categoryName": "Fresh Juices",
    "categoryNameAm": "እቴጌ ትኩስ ጁስ",
    "description": "100% freshly hand-squeezed highland sweet Ethiopian oranges, rich in vitamin C.",
    "descriptionAm": "100% ተፈጥሯዊ ትኩስ የብርቱካን ጭማቂ።",
    "price": 300,
    "priceFormatted": "300 ETB",
    "image": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sweet",
      "fasting"
    ],
    "portion": "Tall Glass 400ml",
    "portionAm": "ትልቅ ብርጭቆ 400 ሚሊ",
    "preparationTime": "5 min",
    "isAvailable": true
  },
  {
    "id": "juice-avocado",
    "name": "Creamy Avocado Juice",
    "nameAm": "አቮካዶ",
    "category": "juice",
    "categoryName": "Fresh Juices",
    "categoryNameAm": "እቴጌ ትኩስ ጁስ",
    "description": "Thick, silky blended ripe Ethiopian avocado served with a touch of fresh lime squeeze.",
    "descriptionAm": "በወፍራሙ የተዘጋጀ ለስላሳ የአቮካዶ ጁስ ከሎሚ ጋር።",
    "price": 230,
    "priceFormatted": "230 ETB",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "popular"
    ],
    "portion": "Tall Glass with Lime",
    "portionAm": "ትልቅ ብርጭቆ ከሎሚ ጋር",
    "preparationTime": "5 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "juice-papaya",
    "name": "Sweet Tropical Papaya Juice",
    "nameAm": "ፓፓያ",
    "category": "juice",
    "categoryName": "Fresh Juices",
    "categoryNameAm": "እቴጌ ትኩስ ጁስ",
    "description": "Freshly pureed sweet local papaya, smooth and refreshing.",
    "descriptionAm": "ተፈጥሯዊ ጣፋጭ የፓፓያ ጭማቂ።",
    "price": 230,
    "priceFormatted": "230 ETB",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sweet",
      "fasting"
    ],
    "portion": "Tall Glass",
    "portionAm": "ትልቅ ብርጭቆ",
    "preparationTime": "5 min",
    "isAvailable": true
  },
  {
    "id": "juice-mango",
    "name": "Silky Golden Mango Juice",
    "nameAm": "ማንጎ",
    "category": "juice",
    "categoryName": "Fresh Juices",
    "categoryNameAm": "እቴጌ ትኩስ ጁስ",
    "description": "Luscious golden mango nectar blended from ripe sweet Ethiopian mangoes.",
    "descriptionAm": "በወርቃማ ማንጎ የተዘጋጀ ልዩ ተወዳጅ የማንጎ ጭማቂ።",
    "price": 260,
    "priceFormatted": "260 ETB",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sweet",
      "fasting",
      "popular"
    ],
    "portion": "Tall Glass",
    "portionAm": "ትልቅ ብርጭቆ",
    "preparationTime": "5 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "juice-pineapple",
    "name": "Fresh Pineapple Juice",
    "nameAm": "አናናስ",
    "category": "juice",
    "categoryName": "Fresh Juices",
    "categoryNameAm": "እቴጌ ትኩስ ጁስ",
    "description": "Zesty, tropical sweet pressed pineapple juice served chilled.",
    "descriptionAm": "ቀዝቀዝ ያለ ጣፋጭና መንፈስን የሚያድስ የአናናስ ጭማቂ።",
    "price": 260,
    "priceFormatted": "260 ETB",
    "image": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sweet",
      "fasting"
    ],
    "portion": "Chilled Glass",
    "portionAm": "ቀዝቃዛ ብርጭቆ",
    "preparationTime": "5 min",
    "isAvailable": true
  },
  {
    "id": "juice-habhab",
    "name": "Hydrating Watermelon Juice (Habhab)",
    "nameAm": "ሃባብ",
    "category": "juice",
    "categoryName": "Fresh Juices",
    "categoryNameAm": "እቴጌ ትኩስ ጁስ",
    "description": "Ultra-refreshing freshly blended ruby watermelon juice.",
    "descriptionAm": "ጥምን የሚቆርጥ ትኩስ የቀይ ሃባብ ጭማቂ።",
    "price": 200,
    "priceFormatted": "200 ETB",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sweet",
      "fasting"
    ],
    "portion": "Chilled Tall Glass",
    "portionAm": "ትልቅ ብርጭቆ",
    "preparationTime": "5 min",
    "isAvailable": true
  },
  {
    "id": "juice-enjori",
    "name": "Sweet Strawberry Juice (Enjori)",
    "nameAm": "እንጆሪ",
    "category": "juice",
    "categoryName": "Fresh Juices",
    "categoryNameAm": "እቴጌ ትኩስ ጁስ",
    "description": "Fragrant ripe mountain strawberries pureed sweet and refreshing.",
    "descriptionAm": "በጣፋጭ እንጆሪ የተዘጋጀ ተወዳጅ ጁስ።",
    "price": 200,
    "priceFormatted": "200 ETB",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sweet",
      "fasting"
    ],
    "portion": "Berry Glass",
    "portionAm": "የእንጆሪ ብርጭቆ",
    "preparationTime": "5 min",
    "isAvailable": true
  },
  {
    "id": "juice-spris",
    "name": "Signature Layered Spris Juice",
    "nameAm": "አስፕሪስ",
    "category": "juice",
    "categoryName": "Fresh Juices",
    "categoryNameAm": "እቴጌ ትኩስ ጁስ",
    "description": "Iconic Ethiopian layered glass: rich avocado base, sweet papaya, tropical mango, and strawberry topped with lime syrup.",
    "descriptionAm": "በአቮካዶ፣ ማንጎ፣ ፓፓያና እንጆሪ በጥበብ ተደርድሮ የሚቀርብ ዝነኛው እስፕሪስ ጁስ።",
    "price": 270,
    "priceFormatted": "270 ETB",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sweet",
      "popular",
      "fasting",
      "chef_special"
    ],
    "portion": "Layered Tall Glass",
    "portionAm": "ባለቀለም ድርብ ብርጭቆ",
    "preparationTime": "8 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "drink-local-beer",
    "name": "Chilled Ethiopian Lager Beer",
    "nameAm": "ቢራ",
    "category": "drinks_cold",
    "categoryName": "Beers, Cold Drinks & Wine",
    "categoryNameAm": "ለስላሳ፣ ቢራ እና ወይን",
    "description": "Crisp, icy-cold Ethiopian golden lager served in a chilled glass.",
    "descriptionAm": "ቀዝቃዛ የሀገር ውስጥ ቢራ።",
    "price": 100,
    "priceFormatted": "100 ETB",
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ceremony"
    ],
    "portion": "Bottle 330ml",
    "portionAm": "ጠርሙስ 330 ሚሊ",
    "preparationTime": "2 min",
    "isAvailable": true
  },
  {
    "id": "drink-leslasa",
    "name": "Carbonated Soft Drink",
    "nameAm": "ለስላሳ",
    "category": "drinks_cold",
    "categoryName": "Beers, Cold Drinks & Wine",
    "categoryNameAm": "ለስላሳ፣ ቢራ እና ወይን",
    "description": "Coca-Cola, Fanta Orange, Sprite, or Mirinda served chilled.",
    "descriptionAm": "ኮካ ኮላ፣ ፋንታ፣ ስፕራይትና ሌሎች ለስላሳ መጠጦች።",
    "price": 55,
    "priceFormatted": "55 ETB",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sweet"
    ],
    "portion": "Glass Bottle 300ml",
    "portionAm": "ጠርሙስ 300 ሚሊ",
    "preparationTime": "2 min",
    "isAvailable": true
  },
  {
    "id": "drink-single-spirit",
    "name": "Single Shot Spirit / Aperitif",
    "nameAm": "ሴንገል",
    "category": "drinks_cold",
    "categoryName": "Beers, Cold Drinks & Wine",
    "categoryNameAm": "ለስላሳ፣ ቢራ እና ወይን",
    "description": "Single pour shot of select spirit or aperitif.",
    "descriptionAm": "ሴንገል መጠጥ።",
    "price": 50,
    "priceFormatted": "50 ETB",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ceremony"
    ],
    "portion": "Single Pour (30ml)",
    "portionAm": "ሴንገል ሾት",
    "preparationTime": "2 min",
    "isAvailable": true
  },
  {
    "id": "drink-st-george",
    "name": "St. George Golden Beer (ቅዱስ ጊዮርጊስ)",
    "nameAm": "ጆርጅ",
    "category": "drinks_cold",
    "categoryName": "Beers, Cold Drinks & Wine",
    "categoryNameAm": "ለስላሳ፣ ቢራ እና ወይን",
    "description": "Ethiopia's historic flagship golden lager brewed continuously since 1922.",
    "descriptionAm": "አንጋፋውና ተወዳጁ የቅዱስ ጊዮርጊስ ቢራ።",
    "price": 100,
    "priceFormatted": "100 ETB",
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "popular",
      "ceremony"
    ],
    "portion": "Chilled Bottle 330ml",
    "portionAm": "ቀዝቃዛ ጠርሙስ",
    "preparationTime": "2 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "drink-heineken",
    "name": "Heineken Premium Lager",
    "nameAm": "ሄኒከን",
    "category": "drinks_cold",
    "categoryName": "Beers, Cold Drinks & Wine",
    "categoryNameAm": "ለስላሳ፣ ቢራ እና ወይን",
    "description": "Crisp international premium Dutch pilsner brewed cold.",
    "descriptionAm": "ሄኒከን ቢራ።",
    "price": 100,
    "priceFormatted": "100 ETB",
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ceremony"
    ],
    "portion": "Bottle 330ml",
    "portionAm": "ጠርሙስ 330 ሚሊ",
    "preparationTime": "2 min",
    "isAvailable": true
  },
  {
    "id": "drink-bedele",
    "name": "Bedele Premium Special Beer",
    "nameAm": "በደሌ",
    "category": "drinks_cold",
    "categoryName": "Beers, Cold Drinks & Wine",
    "categoryNameAm": "ለስላሳ፣ ቢራ እና ወይን",
    "description": "Smooth malt character and crisp finish from Bedele highlands.",
    "descriptionAm": "በደሌ ስፔሻል ቢራ።",
    "price": 120,
    "priceFormatted": "120 ETB",
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ceremony"
    ],
    "portion": "Bottle 330ml",
    "portionAm": "ጠርሙስ 330 ሚሊ",
    "preparationTime": "2 min",
    "isAvailable": true
  },
  {
    "id": "drink-arada",
    "name": "Arada Refreshment Drink",
    "nameAm": "አራዳ",
    "category": "drinks_cold",
    "categoryName": "Beers, Cold Drinks & Wine",
    "categoryNameAm": "ለስላሳ፣ ቢራ እና ወይን",
    "description": "Zesty, refreshing bubbly flavored malt refreshment.",
    "descriptionAm": "አራዳ መንፈስን የሚያድስ መጠጥ።",
    "price": 120,
    "priceFormatted": "120 ETB",
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ceremony"
    ],
    "portion": "Bottle 330ml",
    "portionAm": "ጠርሙስ 330 ሚሊ",
    "preparationTime": "2 min",
    "isAvailable": true
  },
  {
    "id": "drink-water-1l",
    "name": "Pure Spring Bottled Water (1L)",
    "nameAm": "1 ሊትር ውሃ",
    "category": "drinks_cold",
    "categoryName": "Beers, Cold Drinks & Wine",
    "categoryNameAm": "ለስላሳ፣ ቢራ እና ወይን",
    "description": "One-liter sealed bottle of fresh Ethiopian mineral spring water.",
    "descriptionAm": "1 ሊትር የታሸገ ንጹህ የተፈጥሮ ምንጭ ውሃ።",
    "price": 40,
    "priceFormatted": "40 ETB",
    "image": "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting"
    ],
    "portion": "1 Liter Sealed Bottle",
    "portionAm": "1 ሊትር ጠርሙስ",
    "preparationTime": "1 min",
    "isAvailable": true
  },
  {
    "id": "drink-water-2l",
    "name": "Pure Spring Bottled Water (2L)",
    "nameAm": "2 ሊትር ውሃ",
    "category": "drinks_cold",
    "categoryName": "Beers, Cold Drinks & Wine",
    "categoryNameAm": "ለስላሳ፣ ቢራ እና ወይን",
    "description": "Two-liter family size pure mineral spring water bottle.",
    "descriptionAm": "2 ሊትር የታሸገ የጠረጴዛ ውሃ።",
    "price": 45,
    "priceFormatted": "45 ETB",
    "image": "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting"
    ],
    "portion": "2 Liter Family Bottle",
    "portionAm": "2 ሊትር ትልቅ ጠርሙስ",
    "preparationTime": "1 min",
    "isAvailable": true
  },
  {
    "id": "drink-water-half-l",
    "name": "Pure Spring Bottled Water (500ml)",
    "nameAm": "1/2 ሊትር ውሃ",
    "category": "drinks_cold",
    "categoryName": "Beers, Cold Drinks & Wine",
    "categoryNameAm": "ለስላሳ፣ ቢራ እና ወይን",
    "description": "Half-liter individual bottle of cold mineral spring water.",
    "descriptionAm": "ግማሽ ሊትር የታሸገ የተፈጥሮ ምንጭ ውሃ።",
    "price": 30,
    "priceFormatted": "30 ETB",
    "image": "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting"
    ],
    "portion": "500ml Bottle",
    "portionAm": "500 ሚሊ ጠርሙስ",
    "preparationTime": "1 min",
    "isAvailable": true
  },
  {
    "id": "drink-awash-wine-large",
    "name": "Awash Dining Wine (Large 750ml)",
    "nameAm": "ትልቁ አዋሽ",
    "category": "drinks_cold",
    "categoryName": "Beers, Cold Drinks & Wine",
    "categoryNameAm": "ለስላሳ፣ ቢራ እና ወይን",
    "description": "Full 750ml bottle of Ethiopia's historic Awash Winery table wine.",
    "descriptionAm": "አንጋፋው ትልቁ አዋሽ ወይን።",
    "price": 550,
    "priceFormatted": "550 ETB",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ceremony",
      "popular"
    ],
    "portion": "Full 750ml Bottle",
    "portionAm": "ሙሉ 750 ሚሊ ጠርሙስ",
    "preparationTime": "2 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "drink-gouder-wine-large",
    "name": "Gouder Red Wine (Large 750ml)",
    "nameAm": "ትልቁ ጉደር",
    "category": "drinks_cold",
    "categoryName": "Beers, Cold Drinks & Wine",
    "categoryNameAm": "ለስላሳ፣ ቢራ እና ወይን",
    "description": "Full 750ml bottle of rich, full-bodied dry red dining wine.",
    "descriptionAm": "ዝነኛው ትልቁ ጉደር ቀይ ወይን።",
    "price": 550,
    "priceFormatted": "550 ETB",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ceremony"
    ],
    "portion": "Full 750ml Bottle",
    "portionAm": "ሙሉ 750 ሚሊ ጠርሙስ",
    "preparationTime": "2 min",
    "isAvailable": true
  },
  {
    "id": "drink-axumite-wine",
    "name": "Axumite Sweet Wine (750ml)",
    "nameAm": "አክሱማዊት",
    "category": "drinks_cold",
    "categoryName": "Beers, Cold Drinks & Wine",
    "categoryNameAm": "ለስላሳ፣ ቢራ እና ወይን",
    "description": "Celebrated Ethiopian sweet red wine, rich in berry aromas.",
    "descriptionAm": "ተወዳጁ አክሱማዊት ጣፋጭ ወይን።",
    "price": 700,
    "priceFormatted": "700 ETB",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ceremony",
      "chef_special",
      "popular"
    ],
    "portion": "Full 750ml Bottle",
    "portionAm": "ሙሉ 750 ሚሊ ጠርሙስ",
    "preparationTime": "2 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "drink-awash-wine-small",
    "name": "Awash Dining Wine (Small 375ml)",
    "nameAm": "ትንሽ አዋሽ",
    "category": "drinks_cold",
    "categoryName": "Beers, Cold Drinks & Wine",
    "categoryNameAm": "ለስላሳ፣ ቢራ እና ወይን",
    "description": "Half-bottle of classic Awash dining table wine.",
    "descriptionAm": "ትንሽ አዋሽ ወይን።",
    "price": 320,
    "priceFormatted": "320 ETB",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ceremony"
    ],
    "portion": "375ml Half Bottle",
    "portionAm": "375 ሚሊ ግማሽ ጠርሙስ",
    "preparationTime": "2 min",
    "isAvailable": true
  },
  {
    "id": "hot-shay",
    "name": "Traditional Spiced Tea (Shay)",
    "nameAm": "ሻይ",
    "category": "drinks_hot",
    "categoryName": "Hot Drinks & Buna",
    "categoryNameAm": "ትኩስ መጠጥ እና ቡና",
    "description": "Brewed black tea infused with fragrant cloves and sweet cinnamon bark.",
    "descriptionAm": "በጥንቃቄ የተቀቀለ የሀገር ፍሬሽ ሻይ ከቀረፋ ጋር።",
    "price": 30,
    "priceFormatted": "30 ETB",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting"
    ],
    "portion": "Hot Glass Cup",
    "portionAm": "ትኩስ ብርጭቆ",
    "preparationTime": "3 min",
    "isAvailable": true
  },
  {
    "id": "hot-buna",
    "name": "Fresh Roasted Jebena Buna",
    "nameAm": "ቡና",
    "category": "drinks_hot",
    "categoryName": "Hot Drinks & Buna",
    "categoryNameAm": "ትኩስ መጠጥ እና ቡና",
    "description": "Authentic Ethiopian Jebena clay-pot coffee brewed fresh from dark roasted highland Arabica beans.",
    "descriptionAm": "በጀበና ተፈልቶ የሚቀርብ ትኩስ የሀበሻ ቡና ከእጣን መዓዛ ጋር።",
    "price": 50,
    "priceFormatted": "50 ETB",
    "image": "/images/etege/etege-photo-8.jpg",
    "tags": [
      "ceremony",
      "popular"
    ],
    "portion": "Sini Cup",
    "portionAm": "ባህላዊ ሲኒ",
    "preparationTime": "5 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "hot-qesher",
    "name": "Spiced Qesher (Cascara Brew)",
    "nameAm": "ቀሸር",
    "category": "drinks_hot",
    "categoryName": "Hot Drinks & Buna",
    "categoryNameAm": "ትኩስ መጠጥ እና ቡና",
    "description": "Ancient herbal brew of dried coffee fruit husks simmered with ginger, cinnamon, and cardamom.",
    "descriptionAm": "ባህላዊ የቡና ቀሸር በዝንጅብልና ቀረፋ ተፈልቶ የሚቀርብ።",
    "price": 40,
    "priceFormatted": "40 ETB",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "ceremony"
    ],
    "portion": "Traditional Cup",
    "portionAm": "ባህላዊ ሲኒ",
    "preparationTime": "5 min",
    "isAvailable": true
  },
  {
    "id": "hot-zinjiwel-shay",
    "name": "Fresh Ginger Herbal Tea",
    "nameAm": "ዝንጅብል ሻይ",
    "category": "drinks_hot",
    "categoryName": "Hot Drinks & Buna",
    "categoryNameAm": "ትኩስ መጠጥ እና ቡና",
    "description": "Zesty, warming tea brewed with freshly crushed root ginger and served with lemon.",
    "descriptionAm": "ትኩስ የተፈጨ ዝንጅብል ሻይ።",
    "price": 55,
    "priceFormatted": "55 ETB",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting"
    ],
    "portion": "Hot Glass Cup",
    "portionAm": "ትኩስ ብርጭቆ",
    "preparationTime": "4 min",
    "isAvailable": true
  },
  {
    "id": "hot-wetet",
    "name": "Steamed Farm Fresh Milk",
    "nameAm": "ወተት",
    "category": "drinks_hot",
    "categoryName": "Hot Drinks & Buna",
    "categoryNameAm": "ትኩስ መጠጥ እና ቡና",
    "description": "Pure farm-fresh whole cow's milk steamed hot.",
    "descriptionAm": "የሞቀ ጥራት ያለው ንጹህ ወተት።",
    "price": 70,
    "priceFormatted": "70 ETB",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "mild"
    ],
    "portion": "Steamed Cup",
    "portionAm": "ትኩስ ኩባያ",
    "preparationTime": "3 min",
    "isAvailable": true
  },
  {
    "id": "hot-tsom-macchiato",
    "name": "Fasting Plant-Based Macchiato",
    "nameAm": "የጾም ማኪያቶ",
    "category": "drinks_hot",
    "categoryName": "Hot Drinks & Buna",
    "categoryNameAm": "ትኩስ መጠጥ እና ቡና",
    "description": "Rich espresso topped with velvety steamed plant-based oat or soy foam.",
    "descriptionAm": "በጾም ወተት የሚዘጋጅ ምርጥ ማኪያቶ።",
    "price": 75,
    "priceFormatted": "75 ETB",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "popular"
    ],
    "portion": "Layered Glass",
    "portionAm": "ባለቀለም ብርጭቆ",
    "preparationTime": "4 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "hot-shay-corenti",
    "name": "Shay Corenti Spiced Hot Tea",
    "nameAm": "ሻይ ኮረንቲ",
    "category": "drinks_hot",
    "categoryName": "Hot Drinks & Buna",
    "categoryNameAm": "ትኩስ መጠጥ እና ቡና",
    "description": "Hot brewed black tea infused with an aromatic dash of herbal anise spirit.",
    "descriptionAm": "በባህላዊ አረቄ ወይም መጠጥ የሚቀመም ሻይ ኮረንቲ።",
    "price": 50,
    "priceFormatted": "50 ETB",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ceremony"
    ],
    "portion": "Hot Glass Cup",
    "portionAm": "ትኩስ ብርጭቆ",
    "preparationTime": "3 min",
    "isAvailable": true
  },
  {
    "id": "hot-special-shay",
    "name": "Etege Special Spiced Herbal Tea",
    "nameAm": "ስፔሻል ሻይ",
    "category": "drinks_hot",
    "categoryName": "Hot Drinks & Buna",
    "categoryNameAm": "ትኩስ መጠጥ እና ቡና",
    "description": "Signature herbal blend of cinnamon, green cardamom, cloves, ginger root, mint, and pure honey.",
    "descriptionAm": "በቀረፋ፣ ቁንዶ በርበሬ፣ ሄልና ማር የሚፈላ የእቴጌ ልዩ ስፔሻል ሻይ።",
    "price": 100,
    "priceFormatted": "100 ETB",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "chef_special",
      "popular"
    ],
    "portion": "Special Pot / Large Mug",
    "portionAm": "ልዩ ትኩስ ኩባያ",
    "preparationTime": "5 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "hot-flavor-shay",
    "name": "Flavored Herbal Infusion Tea",
    "nameAm": "ፍሌቨር ሻይ",
    "category": "drinks_hot",
    "categoryName": "Hot Drinks & Buna",
    "categoryNameAm": "ትኩስ መጠጥ እና ቡና",
    "description": "Steamed aromatic tea infused with subtle fruit or herbal essence.",
    "descriptionAm": "በፍራፍሬ መዓዛ የተዘጋጀ ፍሌቨር ሻይ።",
    "price": 60,
    "priceFormatted": "60 ETB",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting"
    ],
    "portion": "Hot Cup",
    "portionAm": "ትኩስ ኩባያ",
    "preparationTime": "3 min",
    "isAvailable": true
  },
  {
    "id": "hot-machine-buna",
    "name": "Espresso Machine Coffee",
    "nameAm": "የማሽን ቡና",
    "category": "drinks_hot",
    "categoryName": "Hot Drinks & Buna",
    "categoryNameAm": "ትኩስ መጠጥ እና ቡና",
    "description": "Dense, full-bodied espresso pulled fresh from dark roasted Ethiopian Arabica beans.",
    "descriptionAm": "ከጥራት ካለው የሀበሻ ቡና በማሽን የሚወጣ ትኩስ ኤስፕሬሶ ቡና።",
    "price": 55,
    "priceFormatted": "55 ETB",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "popular"
    ],
    "portion": "Espresso Cup",
    "portionAm": "የኤስፕሬሶ ሲኒ",
    "preparationTime": "2 min",
    "isAvailable": true
  },
  {
    "id": "hot-macchiato",
    "name": "Classic Layered Macchiato",
    "nameAm": "ማኪያቶ",
    "category": "drinks_hot",
    "categoryName": "Hot Drinks & Buna",
    "categoryNameAm": "ትኩስ መጠጥ እና ቡና",
    "description": "Artfully layered bold espresso and rich velvety steamed whole milk foam.",
    "descriptionAm": "በስሱ የተዘጋጀ ምርጥ ማኪያቶ።",
    "price": 70,
    "priceFormatted": "70 ETB",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "popular"
    ],
    "portion": "Layered Glass",
    "portionAm": "ባለቀለም ብርጭቆ",
    "preparationTime": "3 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "hot-lowz",
    "name": "Hot Roasted Peanut Drink (Lowz)",
    "nameAm": "ለውዝ",
    "category": "drinks_hot",
    "categoryName": "Hot Drinks & Buna",
    "categoryNameAm": "ትኩስ መጠጥ እና ቡና",
    "description": "Creamy, sweet drink made from freshly crushed roasted peanuts steeped with warm water and sugar.",
    "descriptionAm": "ከተፈጨ ለውዝ የሚዘጋጅ ትኩስና ጣፋጭ የለውዝ መጠጥ።",
    "price": 65,
    "priceFormatted": "65 ETB",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "sweet"
    ],
    "portion": "Hot Glass Cup",
    "portionAm": "ትኩስ ብርጭቆ",
    "preparationTime": "3 min",
    "isAvailable": true
  },
  {
    "id": "hot-lowz-buna",
    "name": "Lowz Infused with Coffee",
    "nameAm": "ለውዝ በቡና",
    "category": "drinks_hot",
    "categoryName": "Hot Drinks & Buna",
    "categoryNameAm": "ትኩስ መጠጥ እና ቡና",
    "description": "Delicious Ethiopian coffee house favorite: warm roasted peanut milk layered with bold freshly pulled espresso.",
    "descriptionAm": "ትኩስ የለውዝ መጠጥ ከቡና ጋር ተቀላቅሎ የሚቀርብ ተወዳጅ መጠጥ።",
    "price": 75,
    "priceFormatted": "75 ETB",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fasting",
      "popular"
    ],
    "portion": "Layered Glass Cup",
    "portionAm": "ድርብ ብርጭቆ",
    "preparationTime": "4 min",
    "isAvailable": true,
    "isPopular": true
  },
  {
    "id": "hot-wetet-zinjiwel",
    "name": "Steamed Milk with Ginger",
    "nameAm": "ወተት በዝንጅብል",
    "category": "drinks_hot",
    "categoryName": "Hot Drinks & Buna",
    "categoryNameAm": "ትኩስ መጠጥ እና ቡና",
    "description": "Steamed fresh whole milk simmered with crushed fresh ginger root and honey.",
    "descriptionAm": "በዝንጅብልና ማር የፈላ ትኩስ ወተት።",
    "price": 75,
    "priceFormatted": "75 ETB",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "mild"
    ],
    "portion": "Steamed Cup",
    "portionAm": "ትኩስ ኩባያ",
    "preparationTime": "4 min",
    "isAvailable": true
  }
];
