# Health Flex Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 1:1 pixel-perfect, responsive medical landing page based on `ui reference.webp` using Vite, Tailwind CSS, semantic HTML5, and Vanilla JavaScript.

**Architecture:** A static Vite-powered single-page application configured with custom Tailwind tokens matching the original design. High-fidelity visual assets are extracted directly from the reference image via an automated Python slicing script to ensure exact photographic match. Micro-interactions (tabs, testimonial switching, form feedback) are handled by modular vanilla JS.

**Tech Stack:** HTML5, Tailwind CSS v3, PostCSS, Vite, Vanilla JavaScript (ES6), Python (Pillow) for asset extraction.

**Spec:** [docs/superpowers/specs/2026-11-23-health-flex-landing-page-design.md](file:///c:/Users/vrachox/Downloads/health-care-page-gemini/docs/superpowers/specs/2026-11-23-health-flex-landing-page-design.md)

## Global Constraints
- Must accurately reproduce all 13 sections shown in `ui reference.webp`.
- Exact color codes: Navy `#102a4e`, Cyan `#21b5c6`, Soft Cyan `#eaf7f9`, Gold/Amber `#f5a623`, Emergency Blue `#2080f6`, Teal `#26b9cc`.
- Typography: `Plus Jakarta Sans` Google Font with correct weights (400, 500, 600, 700).
- Zero console errors; clean semantic HTML5 markup.
- All extracted assets must reside in `public/assets/images/`.

## Review Focus
1. Asset resolution and slicing coordinates: Extracted images must not be stretched, distorted, or cropped off-center.
2. Overlay cards: The "Quick Online Consultancy" and "Open Hours" floating cards must accurately overlap their parent sections on desktop.
3. Tab switching: Switching tabs in "All Kinds Of Lab Tests" must update active tab indicator and content smoothly.
4. Mobile/Tablet adaptability: Desktop width (~1024px reference) must remain pristine while stacking cleanly on narrower screens without horizontal overflow.
5. Form usability: Interactive form fields must respond to focus and submit events gracefully.

---

### Task 1: Scaffolding, Tooling & Asset Extraction Pipeline

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `src/style.css`
- Create: `scripts/slice_assets.py`
- Output: `public/assets/images/*`

**Interfaces:**
- Produces: Vite development server, Tailwind utility classes with custom theme colors, sliced image files in `public/assets/images/`.

- [ ] **Step 1: Create package.json and install dependencies**
  Configure Vite, Tailwind CSS, PostCSS, and Autoprefixer.
  Run `npm install` or setup script.

- [ ] **Step 2: Configure Tailwind with custom brand tokens**
  Set colors: `brand-navy` (`#102a4e`), `brand-cyan` (`#21b5c6`), `brand-gold` (`#f5a623`), `brand-emergency` (`#2080f6`), `brand-teal` (`#26b9cc`), `brand-cyan-light` (`#eaf7f9`).
  Add `Plus Jakarta Sans` font family.

- [ ] **Step 3: Implement Python asset slicing script (`scripts/slice_assets.py`)**
  Use `Pillow` to extract:
  - `hero-doctor.webp`
  - `about-doctor.webp`
  - `child-care.webp`
  - `lab-team.webp`
  - `lab-gallery-1.webp` through `lab-gallery-4.webp`
  - `patient-avatar.webp`
  - `doctor-mira.webp`, `doctor-abram.webp`, `doctor-ashlynn.webp`, `doctor-cooper.webp`
  - `footer-map.webp`

- [ ] **Step 4: Execute asset extraction and verify files exist**
  Run `python scripts/slice_assets.py`
  Verify that all images exist in `public/assets/images/` and are non-empty.

- [ ] **Step 5: Commit**
  `git add package.json vite.config.js tailwind.config.js postcss.config.js src/style.css scripts/ public/assets/`
  `git commit -m "chore: scaffold vite tailwind setup and extract assets from reference"`

---

### Task 2: Top Bar, Header & Navigation Bar

**Files:**
- Create: `index.html` (skeleton + Header)
- Modify: `src/style.css`

**Interfaces:**
- Consumes: Tailwind classes, Google Fonts (`Plus Jakarta Sans`), SVGs for icons.
- Produces: Sticky/fixed or top header layout matching `ui reference.webp`.

- [ ] **Step 1: Add HTML markup for Top Bar**
  - Left slogan: "Top Doctors, Clinics, and Physicians Providing Expert Care and Healing Touch"
  - Right: Social icons (FB, Twitter, IG, LinkedIn) and Amber button "Request a Callback" (`#f5a623`).

- [ ] **Step 2: Add Main Contact Header**
  - Brand Logo: Cyan cross with heart + "Health Flex" (Clinic & Hospital).
  - 3 Info items: Address ("1025 Division St, NY 10002, USA"), Hotline ("+1 0123 456 789"), Working Hours.

- [ ] **Step 3: Add Deep Navy Navbar**
  - Links: Home, Blog, Portfolio, Shop, Contact Us.
  - Search magnifying glass icon.

- [ ] **Step 4: Verify Header Layout**
  Run Vite build / preview test to confirm header renders cleanly without visual defects.

- [ ] **Step 5: Commit**
  `git add index.html src/style.css`
  `git commit -m "feat: implement top bar, main branding header and navbar"`

---

### Task 3: Hero Section & Quick Online Consultancy Card

**Files:**
- Modify: `index.html`
- Modify: `src/style.css`

**Interfaces:**
- Consumes: `public/assets/images/hero-doctor.webp`, form styles.
- Produces: Hero section with overlapping consultancy form.

- [ ] **Step 1: Mark up Hero container and physician visual**
  - Heading: "Start Caring for Your Health Today" (`text-brand-navy`).
  - Subtitle: "We're revolutionizing renewable energy across with efficient and impactful solar solutions."
  - Buttons: Cyan "Find a Doctor" button and "Book an Appointment >" link.
  - Background image: Sliced physician in surgical gear on the right.

- [ ] **Step 2: Mark up Quick Online Consultancy overlapping card**
  - Left side: "Quick Online Consultancy Only on Few Minutes".
  - Right grid: Inputs for Name, Email, Doctor select, Platform select, and full-width "Get Online Consultancy" button.

- [ ] **Step 3: Verify alignment and overlap**
  Confirm card overlap matches the reference position precisely.

- [ ] **Step 4: Commit**
  `git add index.html src/style.css`
  `git commit -m "feat: implement hero section and quick consultancy card"`

---

### Task 4: About Us & Our Specialties Grid

**Files:**
- Modify: `index.html`
- Modify: `src/style.css`

**Interfaces:**
- Consumes: `about-doctor.webp`, specialty SVG icons.
- Produces: About Us two-column layout and 8-card specialty grid.

- [ ] **Step 1: Implement About Us section**
  - Left: Female physician image + overlapping "Open Hours" schedule card.
  - Right: `ABOUT US` eyebrow, "Dedicated To Providing Complete Medical Care" heading, copy, and "Read More >" link.

- [ ] **Step 2: Implement Our Specialties section**
  - Header: `OUR SPECIALTIES` eyebrow, "High - Quality Service" heading, subtitle.
  - 8 Cards (4x2 grid): Cardiology, Pulmonology, Neurology, Ophthalmology, Gastroenterology, Gynecology, Pediatrics, Immunology.
  - Button: "View More" pill button.

- [ ] **Step 3: Verify styling and card hover interactions**
  Verify card padding, border radius, background color (`#ffffff` on `#f8fafc`), and icons.

- [ ] **Step 4: Commit**
  `git add index.html src/style.css`
  `git commit -m "feat: implement about us and specialties grid"`

---

### Task 5: Emergency Service Banner & Care of Kids Section

**Files:**
- Modify: `index.html`
- Modify: `src/style.css`

**Interfaces:**
- Consumes: `child-care.webp`, checkmark icons, hex background pattern.
- Produces: Vibrant blue emergency banner and pediatric care card.

- [ ] **Step 1: Implement Emergency Callout Banner**
  - Vibrant blue background with hex grid decoration.
  - Circular "24" badge with headset.
  - "Need a Doctor for Check-up? Call for an Emergency Service!"
  - Huge phone number: "+1 0123 456 789".

- [ ] **Step 2: Implement Care of Kids section**
  - Left: Baby with yellow teddy bear photo.
  - Right: White card with `CARE OF KIDS`, "Expert Child Care" heading, intro text, and 5 bullet items with blue checkmarks.
  - Link: "Read More >".

- [ ] **Step 3: Verify visual alignment**
  Ensure section padding and responsive wrapping match the reference.

- [ ] **Step 4: Commit**
  `git add index.html src/style.css`
  `git commit -m "feat: implement emergency banner and child care section"`

---

### Task 6: All Kinds Of Lab Tests & Photo Gallery

**Files:**
- Modify: `index.html`
- Modify: `src/style.css`
- Create/Modify: `src/main.js`

**Interfaces:**
- Consumes: `lab-team.webp`, `lab-gallery-1.webp` to `4.webp`.
- Produces: Interactive tabbed lab section with video play button and 4-image gallery.

- [ ] **Step 1: Implement Lab Tests markup and tabs**
  - Eyebrow `OUR SERVICE`, heading "All Kinds Of Lab Tests".
  - Tab navigation: Chemical Research, Vaccination Services, Advanced Microscopy.

- [ ] **Step 2: Implement active tab content**
  - Left: "Expert Diagnostic Laboratory Testing", RAPID RESULTS and QUALIFIED STUFF feature blocks.
  - Right: Laboratory team image with circular video play icon overlay.

- [ ] **Step 3: Implement 4-item photo gallery row**
  - 4 cards: Reception, MRI scanner, X-ray consultation, Blood pressure check.

- [ ] **Step 4: Add Vanilla JS tab switcher in `src/main.js`**
  Handle tab click events, active underline class toggle, and content switching.

- [ ] **Step 5: Verify tab switching behavior**
  Verify clicking tabs updates the active state and content smoothly.

- [ ] **Step 6: Commit**
  `git add index.html src/style.css src/main.js`
  `git commit -m "feat: implement lab tests section with tabs, gallery, and js switcher"`

---

### Task 7: Patient Testimonials & Expert Team Of Professionals

**Files:**
- Modify: `index.html`
- Modify: `src/style.css`
- Modify: `src/main.js`

**Interfaces:**
- Consumes: `patient-avatar.webp`, `doctor-mira.webp`, `doctor-abram.webp`, `doctor-ashlynn.webp`, `doctor-cooper.webp`.
- Produces: Teal testimonial section with pagination dots and 4-doctor profile cards.

- [ ] **Step 1: Implement Patient Testimonials section**
  - Full teal background (`#26b9cc`) with medical crosses and EKG heartbeat line.
  - Karen Levin avatar, testimonial quote card with cyan quotes icon.
  - 3 pagination dots at the bottom.

- [ ] **Step 2: Implement Expert Team Of Professionals section**
  - Eyebrow `OUR SERVICE`, heading "Expert Team Of Professionals", "View More" button.
  - 4 Cards: Mira Levin, Abram Philips, Ashlynn Korsgaard, Cooper Dias.
  - Arched photo frames, badge icon, doctor name, specialty, and experience label.

- [ ] **Step 3: Add Testimonial pagination logic in `src/main.js`**
  Allow clicking pagination dots to cycle or activate testimonial slides.

- [ ] **Step 4: Commit**
  `git add index.html src/style.css src/main.js`
  `git commit -m "feat: implement testimonials section and expert team cards"`

---

### Task 8: Free Consultancy CTA, Footer & End-to-End Verification

**Files:**
- Modify: `index.html`
- Modify: `src/style.css`
- Modify: `src/main.js`

**Interfaces:**
- Consumes: `footer-map.webp`, form handlers.
- Produces: Bottom CTA bar, 3-column footer, and verified pixel-perfect page.

- [ ] **Step 1: Implement Free Consultancy CTA bar**
  - Left blue panel: "Get Free Consultancy or Call:+1 0123 456 789".
  - Right panel: Inline form with Name, Email, and "Get It Now" button.

- [ ] **Step 2: Implement Footer and Sub-footer**
  - 3 Columns: Contact Us, Open Hours table, Map snapshot with pin.
  - Bottom bar: "© 2024 SolarBloom All rights reserved" and legal links.

- [ ] **Step 3: Connect form submit events in `src/main.js`**
  Add feedback toast/alert on form submission preventing full-page reload.

- [ ] **Step 4: Run Vite build and preview**
  Execute `npm run build` to confirm zero build errors or broken paths.

- [ ] **Step 5: Visual verification against `ui reference.webp`**
  Compare generated page layout, colors, font styling, and spacing directly against the reference image.

- [ ] **Step 6: Commit**
  `git add index.html src/style.css src/main.js`
  `git commit -m "feat: implement footer, bottom cta and complete landing page"`
