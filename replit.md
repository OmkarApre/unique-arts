# Unique Arts PVT. LTD - Portfolio Website

## Overview
A stunning portfolio website for Unique Arts PVT. LTD, a premium artistic craftsmanship company based in Pune, India. The company specializes in Fiber (FRP), GRC, Sculpture, Fountains, Artistic Works, and CNC & Laser Cutting.

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Fixed navigation with logo and links
│   │   ├── Hero.tsx         # Full-screen hero with background image
│   │   ├── Services.tsx     # 6 service cards grid
│   │   ├── Portfolio.tsx    # Filterable gallery with lightbox
│   │   ├── About.tsx        # Company info and stats
│   │   ├── Contact.tsx      # Contact form + info cards
│   │   └── Footer.tsx       # Site footer
│   ├── pages/
│   │   └── Home.tsx         # Main page assembling all components
│   └── App.tsx              # Router setup
server/
├── routes.ts                # API routes (/api/contact)
├── storage.ts               # In-memory storage for inquiries
shared/
└── schema.ts                # Data types for users and contact inquiries
```

## Key Features
- Responsive design with smooth Framer Motion animations
- Portfolio gallery with category filtering and lightbox viewer
- Working contact form that stores inquiries via API
- Brand colors: Green (#228B22) matching the Unique Arts logo
- Contact info: +91 98220 20949, uniqueinterior155@gmail.com, @uniquearts55

## API Endpoints
- `POST /api/contact` - Submit contact inquiry (name, email, phone, service, message)
- `GET /api/contact` - Retrieve all inquiries

## Running the Project
```bash
npm run dev
```
The app runs on port 5000.

## Business Contact
- Owner: Dnyaneshwar K. Bhokare
- Location: Behind Amanora City, Sade Satara Nali Railway Gate, Hadapsar, Pune - 411028
- Phone: +91 98220 20949
- Email: uniqueinterior155@gmail.com
- Instagram: @uniquearts55
