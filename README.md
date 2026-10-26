# Etege Hotel & Catering — Hospitality & Event Catering Platform

A production-grade, bilingual web application for **Etege Hotel & Catering** (እቴጌ ሆቴል እና ኬተሪንግ), Addis Ababa, Ethiopia.

- **Live Deployment:** [https://etege-hotel.pages.dev](https://etege-hotel.pages.dev)
- **Digital Table QR Menu:** [https://etege-hotel.pages.dev/foodmenu/](https://etege-hotel.pages.dev/foodmenu/)
- **Google Maps Location:** [View on Google Maps](https://maps.app.goo.gl/mstnnHuKdhQCwaDF8)

---

## 🌟 Key Platform Features

### 1. Premier Catering & Banquet Services
* **Curated Event Packages:**
  * Royal Wedding Banquet Package (*የንጉሣዊ ሠርግ ሙሉ የኬተሪንግ ጥቅል*)
  * Traditional Ethiopian Grand Feast (*ባህላዊ የኢትዮጵያ ታላቅ ድግስ*)
  * Executive Corporate Buffet (*የድርጅት ታላቅ የቡፌ መስተንግዶ*)
  * Private Celebrations & Milestone Dinners
  * Traditional Ethiopian Jebena Coffee Ceremony (*የጀበና ቡና ስነስርዓት*)
* **Culinary Specialties:**
  * Etege Royal Kitfo Platter with clarified Niter Kibbeh & Mitmita
  * Free-range slow-simmered Doro Wot with organic eggs
  * Sizzling charcoal clay-burner Shekla Tibs & Awaze Tibs
  * Grand Fasting Beyaynetu Platter (7 vegan delicacies)
  * Artisanal patterned Ayib cheese with herbal butter swirls
  * Celebration cakes, Gateaux, and pastry displays
* **Quotation & Booking Workflow:**
  * Automated WhatsApp direct quotation dispatching with pre-filled event parameters
  * Telegram consultation bridge (`@EtegeCatering`)
  * Tailored inquiry reference generation

### 2. Digital Table Menu & QR Code System (`/foodmenu`)
* **Contactless Table Dining:** Designed specifically for restaurant tables and catered events.
* **Smart URL Table Detection:** Scanning table QR codes (e.g. `/foodmenu?table=4`) automatically detects the guest's table number.
* **Dual Branch Selector:** Guests can toggle between Main Arada Hub and Branch 2.
* **Interactive Table Tray & Stepper:** Guests can add/remove dishes, customize preparation instructions (e.g., *mild spicy, extra awaze, kocho*).
* **One-Tap Waiter & Order Dispatch:**
  * Sends an itemized, priced order with table number directly to the waiter via WhatsApp or Telegram.
  * Dedicated **"Call Server"** button to alert staff to the table.
* **Built-in Table Tent QR Generator:** Staff can generate, download, and print table tent cards with the Etege circular crest and table number.

### 3. Verified Multi-Branch Operations
* **Main Arada Hub:** Arada Sub City, Kebele 01 (Near Mekonenoch Kebeb / Ras Desta Hospital) — Tel: `+251 912 01 17 01`
* **Branch 2 (Etege Hotel 2 | እቴጌ ሆቴል ፪):** Dej Zewdu Aba koran St, 9837 (Plus Code: `2PRR+8W`) — Tel: `+251 960 27 60 90`
* **Google Business Integration:** Verified 4.0 ★ rating badge, authentic local guide reviews, and direct Google Maps navigation links.

### 4. Apple-Inspired Luxury Hospitality Design
* **Brand Palette:**
  * Primary Burgundy: `#571E2C`
  * Champagne Gold: `#C7A76C`
  * Warm Ivory: `#FAF7F2`
  * Charcoal: `#242327`
  * Soft Beige: `#EDE6DC`
* **Typography:** Playfair Display for editorial headings, Inter for UI, and Noto Sans Ethiopic / Nyala for authentic Amharic text.
* **Circular Medallion Crest:** Handcrafted circular badge with royal Ethiopian crown, wings, shield, and Amharic script (*እቴጌ*), transparent outside the boundary.
* **Optimized Social Previews:** OpenGraph & Twitter cards (`og-share.png`, 1200×630) showcasing the circular gold seal, Amharic title, and verified branch numbers.

### 5. Native Bilingual Support (English & Amharic)
* Instant **EN / አማ** language toggle.
* Complete interface translations across all navigation links, cards, forms, and dialogs.

### 6. Administration Suite (`/admin`)
* KPI dashboard monitoring inquiry pipeline, package performance, and customer reviews.
* Content management for catering packages, gallery items, and testimonials.
* Role-based access simulation for General Manager, Catering Director, and Service Staff.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static Export `output: 'export'`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Animation & Motion:** Framer Motion
- **Icons:** Lucide React
- **QR Code Generation:** QRCode
- **Deployment & CDN:** Cloudflare Pages

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/<owner>/etege-hotel-catering.git
cd etege-hotel-catering

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Export

```bash
# Build static site to /out directory
npm run build
```

---

## 📄 License

Proprietary © Etege Hotel & Catering Services, Addis Ababa, Ethiopia. All rights reserved.
