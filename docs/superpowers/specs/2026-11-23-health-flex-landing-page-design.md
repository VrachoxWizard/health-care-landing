# Technical Design Specification: Health Flex Landing Page

**Date:** 2026-11-23  
**Status:** Approved by User  
**Target:** 1:1 Pixel-Perfect implementation of `ui reference.webp`

---

## 1. Overview & Objective
The objective of this project is to create an identical, pixel-perfect, responsive web implementation of the healthcare clinic landing page pictured in `ui reference.webp` (1024 x 5268 px). The implementation must match the layout, colors, typography, iconography, imagery, and visual hierarchy of the reference design, while providing modern web responsiveness, accessibility, and interactive features.

---

## 2. Technology Stack & Architecture
- **Build Tool:** Vite (vanilla template)
- **Styling:** Tailwind CSS v3 / PostCSS with custom theme tokens
- **Markup:** Semantic HTML5 (`header`, `main`, `section`, `article`, `footer`, `nav`)
- **Scripting:** Clean Vanilla JavaScript (ES6 modules) for interactive components
- **Asset Pipeline:** Python script (`Pillow`) to extract high-resolution cropped assets directly from `ui reference.webp`, complemented by precision inline SVGs for medical badges and iconography.
- **Typography:** Google Fonts: `Plus Jakarta Sans` (400, 500, 600, 700) with fallback to `sans-serif`.

### Directory Structure
```text
health-care-page/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── scripts/
│   └── slice_assets.py
├── src/
│   ├── style.css
│   └── main.js
├── public/
│   └── assets/
│       ├── images/
│       └── icons/
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-11-23-health-flex-landing-page-design.md
```

---

## 3. Design Tokens & Color Palette

### Colors
- **Navy Primary (`brand-navy`):** `#102a4e` (Primary text, main navigation bar, hero heading, card headers)
- **Navy Dark (`brand-navy-dark`):** `#0a1c35` (Footer background, dark accents)
- **Medical Cyan (`brand-cyan`):** `#21b5c6` (Primary CTA buttons, active links, accents, icons)
- **Medical Cyan Hover (`brand-cyan-hover`):** `#1ca0b0`
- **Soft Cyan Background (`brand-cyan-light`):** `#eaf7f9` (Specialty card backgrounds, subtle pill highlights)
- **Vibrant Blue (`brand-blue-emergency`):** `#2080f6` to `#0d6efd` gradient (Emergency 24 banner)
- **Testimonial Teal (`brand-teal-bg`):** `#26b9cc` (Patient testimonials background section)
- **Amber Gold (`brand-gold`):** `#f5a623` ("Request a Callback" button, eyebrow section labels)
- **Text Muted / Gray (`brand-gray-text`):** `#5d7186` (Subheadings, body paragraphs)
- **Border Gray (`brand-border`):** `#e5e9f0` (Dividers, card outlines, form borders)
- **Background Light (`brand-bg-light`):** `#f8fafc` (Alternating section backgrounds)
- **White:** `#ffffff`

### Typography Hierarchy
- **Hero Title:** 46px - 48px, font-bold, line-height ~1.15, text `#102a4e`
- **Section Eyebrow:** 12px - 13px, font-bold, uppercase, letter-spacing wide, text `#f5a623`
- **Section Heading:** 32px - 36px, font-bold, text `#102a4e`
- **Subtitles:** 14px - 15px, font-normal, text `#5d7186`, max-width 640px, centered
- **Card Titles:** 16px - 18px, font-bold, text `#102a4e`
- **Body Text:** 13px - 14px, font-normal, line-height 1.6, text `#5d7186`
- **Button Text:** 13px - 14px, font-semibold

---

## 4. Asset Extraction Pipeline
A Python script (`scripts/slice_assets.py`) will slice the exact pixel regions from `ui reference.webp` (1024 x 5268):
1. `hero-doctor.webp`: Male physician in surgical mask and stethoscope (~(450, 250, 1024, 1100))
2. `about-doctor.webp`: Female physician in doctor's coat with stethoscope (~(90, 1600, 380, 2250))
3. `child-care.webp`: Baby with yellow plush teddy bear (~(100, 2200, 520, 2650))
4. `lab-team.webp`: Scientists with tablet and microscope (~(520, 2800, 920, 3250))
5. `lab-gallery-1.webp` through `4`: Reception desk, MRI scan, X-ray consultation, blood pressure (~y: 3300 to 3480)
6. `patient-avatar.webp`: Karen Levin circular portrait (~(90, 3680, 190, 3780))
7. `doctor-mira.webp`, `doctor-abram.webp`, `doctor-ashlynn.webp`, `doctor-cooper.webp`: Team cards (~y: 4180 to 4420)
8. `footer-map.webp`: Location map snapshot with pin (~(520, 4740, 920, 4920))

---

## 5. Detailed Component & Section Specifications

### Section 1: Top Bar
- Container: full width with centered container (max-w-[1024px])
- Left: text `"Top Doctors, Clinics, and Physicians Providing Expert Care and Healing Touch"` in small font (`#5d7186`).
- Right: Social media icons (Facebook, Twitter, Instagram, LinkedIn) + amber button `"Request a Callback"`.

### Section 2: Main Contact Bar & Branding
- Brand: Logo with cyan medical cross, heartbeat icon, and `"Health Flex"` with subtitle `"Clinic & Hospital"`.
- 3 Info items with cyan rounded icons:
  - Address: `"1025 Division St, NY 10002, USA"`
  - Call Us 24/7: `"+1 0123 456 789"`
  - Hours: `"Mon - Fri: 9:00 - 20:00 / Sat - Sun: 9:00 - 18:00"`

### Section 3: Navigation Bar
- Background: deep navy `#102a4e`
- Links: `Home`, `Blog`, `Portfolio`, `Shop`, `Contact Us` in crisp white text with subtle hover effect.
- Right: Search magnifying glass icon in white.

### Section 4: Hero Section & Floating Consultancy Form
- Background: Subtle clean gradient with high-res doctor photo positioned on the right.
- Left content:
  - Heading: `"Start Caring for Your Health Today"`
  - Subtitle: `"We're revolutionizing renewable energy across with efficient and impactful solar solutions."`
  - Actions: Cyan button `"Find a Doctor"` + `"Book an Appointment >"` text link.
- Floating Card ("Quick Online Consultancy"):
  - Overlaps bottom of hero.
  - Left column: Title `"Quick Online Consultancy Only on Few Minutes"` (`#102a4e`, with `"Few Minutes"` in cyan).
  - Right grid: 4 input fields:
    - `Your Name*` (text input)
    - `Your Email*` (email input)
    - `Choose a Doctor` (select dropdown)
    - `Choose a Platform` (select dropdown)
  - Bottom action: Full-width cyan button `"Get Online Consultancy"`.

### Section 5: About Us & Open Hours
- Left: Doctor photo container with overlapping curved blue badge `"Open Hours"` containing schedule table (Monday through Sunday).
- Right:
  - Eyebrow: `ABOUT US` (amber `#f5a623`)
  - Heading: `"Dedicated To Providing Complete Medical Care"`
  - Paragraphs: Medical care commitment and international standards.
  - Link: `"Read More >"`

### Section 6: Our Specialties
- Header: Eyebrow `OUR SPECIALTIES`, Heading `"High - Quality Service"`, descriptive subtitle.
- 8-Card Grid (4 columns x 2 rows):
  1. Cardiology
  2. Pulmonology
  3. Neurology
  4. Ophthalmology
  5. Gastroenterology
  6. Gynecology
  7. Pediatrics
  8. Immunology
  - Cards feature soft cyan icon container, crisp label, rounded borders, and subtle shadow.
- Bottom CTA: Cyan pill button `"View More"`.

### Section 7: Emergency Service Banner
- Background: Vibrant medical blue (`#2080f6`) with hexagonal geometric background overlay.
- Central Badge: Circular white outline with headset and `"24"`.
- Text: `"Need a Doctor for Check-up? Call for an Emergency Service!"`
- Large Phone Number: `"+1 0123 456 789"` in bold prominent white type.

### Section 8: Care of Kids (Pediatrics)
- Left: Photo of toddler on bed with plush teddy bear.
- Right: Clean white card containing:
  - Eyebrow: `CARE OF KIDS`
  - Heading: `"Expert Child Care"`
  - Description: `"The pediatrician shall conduct an examination using the methods below:"`
  - 5 list items with circular checkmarks.
  - Link: `"Read More >"`

### Section 9: All Kinds Of Lab Tests
- Header: Eyebrow `OUR SERVICE`, Heading `"All Kinds Of Lab Tests"`, subtitle.
- Interactive Tabs:
  - `Chemical Research` (active, amber underline)
  - `Vaccination Services`
  - `Advanced Microscopy`
- Tab Content Card:
  - Left: Title `"Expert Diagnostic Laboratory Testing"`, summary, and two bullet highlights:
    - `RAPID RESULTS`: Turnaround guarantee.
    - `QUALIFIED STUFF`: Certified specialists.
    - Link `"Read More >"`
  - Right: Photo of lab scientists with floating play button overlay.
- Lower Gallery: 4 photo cards (reception, MRI scanner, X-ray review, blood pressure check).

### Section 10: Patient Testimonials
- Background: Teal background (`#26b9cc`) with medical cross icons and heartbeat EKG line graphic.
- Header: Eyebrow `FEEDBACK`, Heading `"Patient Testimonials"`, subtitle in white.
- Testimonial Card:
  - Left: Circular avatar of Karen Levin.
  - Right: White card with review quote, `"KAREN LEVIN"` attribution, and decorative cyan quote marks.
- Navigation: 3 slider pagination dots at the bottom.

### Section 11: Expert Team Of Professionals
- Header: Eyebrow `OUR SERVICE`, Heading `"Expert Team Of Professionals"`, and `"View More"` button.
- 4 Doctor Cards:
  1. `Mira Levin` - Internist, General Practitioner (Working Sinc 1998)
  2. `Abram Philips` - Internist, Emergency Physician (Working Sinc 2007)
  3. `Ashlynn Korsgaard` - Surgeon, Cardiologist (Working Sinc 2003)
  4. `Cooper Dias` - Internist, Orthopedic Surgeon (Working Sinc 2014)
- Each card has an arched photo, specialty badge icon, doctor name, role, and experience label.

### Section 12: CTA Consultancy Bar
- Dual-sided card:
  - Left (Blue): `"Get Free Consultancy or Call:+1 0123 456 789"`
  - Right (Light gray/white): Inline form with `Your Name*`, `Your Email*`, and cyan button `"Get It Now"`.

### Section 13: Footer & Legal
- 3 Columns:
  1. `Contact Us`: Address, 24/7 hotline, operating hours.
  2. `Open Hours`: Detailed daily hours table.
  3. `Location`: Embedded map with clinic pin.
- Bottom Bar:
  - Left: `"© 2024 SolarBloom All rights reserved"`
  - Right: `"Terms & Conditions | Privacy Policy | Sitemap"`

---

## 6. Interactivity & Micro-Interactions
1. **Tabs in Lab Tests:** Switching between Chemical Research, Vaccination Services, and Advanced Microscopy updates active styling and displayed content smoothly.
2. **Testimonial Dots:** Clicking pagination dots switches between patient feedback testimonials.
3. **Form Handling:** Submitting either consultation form displays an in-place success toast or feedback without page reload.
4. **Button Hover States:** Subtle elevation, background shade transitions, and smooth transforms on interactive elements.

---

## 7. Verification & Acceptance Criteria
1. Exact visual alignment with `ui reference.webp` across all 13 sections.
2. High-resolution sliced images and precision vector SVG icons.
3. Responsive design adapting gracefully to smaller viewports without breaking desktop layout fidelity.
4. Clean, modular code structure with zero console errors.
