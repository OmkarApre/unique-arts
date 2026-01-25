# Design Guidelines for Unique Arts PVT. LTD

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium portfolio platforms like Behance and creative agency websites, with emphasis on visual storytelling and artwork showcase.

## Typography System

**Font Families** (via Google Fonts CDN):
- Primary: 'Inter' - Clean, modern sans-serif for body text and UI elements
- Display: 'Playfair Display' - Elegant serif for headlines and artistic emphasis

**Typography Scale**:
- Hero Headlines: text-5xl to text-7xl, font-bold
- Section Titles: text-3xl to text-4xl, font-semibold
- Category Headers: text-2xl, font-medium
- Body Text: text-base to text-lg, font-normal
- Captions: text-sm, font-light

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6, p-8
- Section spacing: py-16, py-20, py-24
- Grid gaps: gap-6, gap-8
- Margins: m-4, m-6, m-8

**Container Strategy**:
- Full-width sections with max-w-7xl inner containers
- Portfolio grids: max-w-6xl
- Text content: max-w-4xl

## Core Page Structure

### Hero Section (80vh)
Full-screen immersive hero featuring:
- Prominent Unique Arts logo (centered, large scale)
- Elegant tagline: "Crafting Artistic Excellence in Fiber, GRC & Sculpture"
- Large background image showcasing signature artwork (with subtle overlay)
- Primary CTA button with blurred background: "Explore Our Portfolio"
- Scroll indicator for user guidance

### Portfolio Gallery System
**Masonry Grid Layout** (creative alternative to standard hero):
- Desktop: 3-column masonry grid (grid-cols-3)
- Tablet: 2-column (grid-cols-2)
- Mobile: Single column (grid-cols-1)

**Category Organization**:
Six main categories presented as filterable sections:
1. Fiber Art (FRP)
2. GRC Works
3. Sculptures
4. Fountains
5. Artistic Installations
6. CNC & Laser Cutting

**Portfolio Card Design**:
- High-quality artwork images with 4:3 or square aspect ratios
- Overlay appears on hover revealing: project title, category badge, brief description
- Smooth scale transform on hover (scale-105)
- Click to open lightbox/detail view

### Services Overview Section
Three-column grid showcasing service categories:
- Icon representation using Heroicons (Sparkles, Cube, Scissors)
- Service title and 2-3 sentence description
- Each card with subtle border and hover elevation effect

### About Section
Two-column layout (lg:grid-cols-2):
- Left: Compelling brand story and expertise narrative
- Right: Image showcasing the craftsmanship process or team at work
- Statistics bar: Years of Experience, Projects Completed, Happy Clients

### Contact Section
Two-column split layout:
- Left column: Contact form with fields for Name, Email, Phone, Service Interest (dropdown), Message
- Right column: 
  - Contact details (phone, email, Instagram handle)
  - Embedded Google Maps iframe showing business location
  - Business hours information

### Footer
Rich footer with multiple columns:
- Company info with logo
- Quick links (Services, Portfolio, About, Contact)
- Social media links (Instagram prominently featured)
- Contact information
- Copyright notice

## Component Library

### Navigation Bar
Sticky header with:
- Logo (left-aligned, medium size)
- Navigation links (center or right-aligned): Home, Portfolio, Services, About, Contact
- CTA button: "Get Quote"
- Mobile: Hamburger menu with slide-in drawer

### Image Gallery Component
- Lightbox functionality for full-screen image viewing
- Image thumbnails with lazy loading
- Navigation arrows for gallery browsing
- Close button and backdrop click to dismiss

### Category Filter Tabs
Horizontal tab navigation above portfolio grid:
- "All Works" as default active state
- Individual category tabs
- Active state with underline indicator
- Smooth content transition when switching categories

### Artwork Cards
Structured card design:
- Image container with consistent aspect ratio
- Hover overlay with gradient backdrop
- Category badge (top-right corner)
- Project title and brief description
- "View Details" link

### Contact Form Elements
Standard form inputs with consistent styling:
- Text inputs with border and focus states
- Textarea for messages (rows: 6)
- Dropdown select for service interest
- Submit button (primary style)
- Form validation states

## Animations (Minimal & Purposeful)

**Subtle Motion Only**:
- Scroll-triggered fade-in for sections (opacity + translateY)
- Hover scale on portfolio cards (scale-105, duration-300)
- Smooth category filter transitions
- Lightbox open/close animation (fade + scale)

**No Distracting Animations**: Avoid excessive parallax, complex scroll-driven narratives, or continuous motion graphics.

## Images Strategy

### Hero Section Image
Large, striking image showcasing Unique Arts' most impressive work - ideally a dramatic sculpture or fountain installation with professional photography. Image should convey craftsmanship and artistic quality.

### Portfolio Images
30-40 high-quality images across all categories:
- Fiber Art: Colorful fiber sculptures, decorative installations
- GRC: Architectural elements, facade work
- Sculptures: Various artistic sculptures in different settings
- Fountains: Water features in residential/commercial spaces
- Artistic Works: Mixed creative installations
- CNC: Precision-cut designs, laser work examples

### About Section Image
Behind-the-scenes workshop image or team photo showing the craftsmanship process.

### Background Treatments
Subtle textured backgrounds for sections, avoiding solid blocks. Light gradient overlays where needed.

## Accessibility Standards
- Proper heading hierarchy (h1 → h6)
- Alt text for all portfolio images
- Keyboard navigation support
- Focus states on all interactive elements
- ARIA labels for icon buttons
- Sufficient contrast ratios throughout