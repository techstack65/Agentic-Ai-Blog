# Design Guidelines: The Autonomous Intelligence Era

## Design Approach
**Modern Tech Aesthetic** - Drawing inspiration from Linear's sophisticated typography, Vercel's minimalist precision, and Stripe's restrained elegance. This creates a premium educational experience that balances technical authority with visual sophistication.

## Typography System

**Font Families:**
- Headings: 'Space Grotesk' (bold, modern, technical feel)
- Body: 'Inter' (exceptional readability for dense content)
- Code/Technical: 'JetBrains Mono' (for keywords, technical terms)

**Hierarchy:**
- Hero Title: 3xl-5xl, bold weight
- Section Headers (H2): 2xl-3xl, semibold
- Subsection Headers (H3): xl-2xl, medium
- Body Text: base-lg, normal weight
- Technical Keywords: sm-base, mono font, subtle background highlight
- Table Headers: sm-base, uppercase tracking-wide

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24
- Component gaps: gap-6 to gap-12
- Card padding: p-6 to p-8
- Inline spacing: px-4, px-6

**Container Strategy:**
- Hero: Full-width with max-w-6xl inner content
- Content sections: max-w-5xl
- Tables: max-w-6xl for breathing room
- Diagrams: max-w-4xl centered

## Component Library

**Hero Section:**
- Full-width gradient background (subtle, sophisticated)
- Large hero image: Abstract AI/neural network visualization, positioned right side or as background overlay
- Title + subtitle with staggered fade-in
- Dual CTA buttons (primary + secondary outline)
- Scroll indicator

**Navigation:**
- Sticky header with blur backdrop
- Logo/title left, section links center, CTA right
- Smooth scroll to anchors
- Mobile: hamburger menu

**Content Cards:**
- Analogy cards (Student/Assistant/Manager) - 3-column grid on desktop
- White/subtle background with border
- Icon top-left (graduation cap, briefcase, building icons)
- Title + keyword badge + description
- Hover: subtle lift shadow

**Tables:**
- Clean borders with subtle shadows
- Sticky headers on scroll
- Alternating row backgrounds
- Responsive: stack to cards on mobile

**Diagram Section (ORA Cycle):**
- Centered flowchart visualization
- Use Mermaid.js rendering
- Legend/key below diagram
- Subtle container with rounded corners

**Technical Keyword Callouts:**
- Inline highlighted terms with subtle background
- Tooltip-ready (hover reveals definition)
- Consistent mono font treatment

**Architecture Visualization (Section V):**
- Component breakdown cards in 2x2 grid
- Icon + title + description format
- Connection lines between cards (subtle)

**Comparison Section:**
- Side-by-side comparison cards (LLM vs Agent vs Agentic AI)
- Visual icons distinguishing each
- Feature checkmarks/indicators
- Gradient accent borders

**Footer:**
- Newsletter signup (centered, prominent)
- Social links + quick navigation
- Copyright + additional resources links

## Images

**Hero Image:** Abstract AI/technology visualization - neural network patterns, flowing data streams, or geometric tech abstraction. Positioned as full-width background with overlay gradient, or split-screen right side placement.

**Section Illustrations:** Consider abstract icons/illustrations for:
- Brain icon for LLM section
- Robot/assistant icon for Agent section  
- Connected nodes for Agentic Systems
- Flowchart visual for ORA cycle

## Animations & Interactions

**Minimal, Purposeful Motion:**
- Hero: Staggered fade-up on load
- Cards: Subtle hover lift (2-4px translate-y)
- Scroll: Fade-in sections as they enter viewport
- Diagram: Sequential reveal of flowchart nodes
- NO autoplay, carousels, or distracting effects

**Buttons on Images:**
- Backdrop blur (bg-white/10 backdrop-blur-md)
- White text with subtle shadow
- Border for definition

## Page Structure

1. **Hero** - Title, subtitle, dual CTAs, hero image
2. **Introduction** - "The AI Hierarchy" overview cards
3. **Diagram Section** - ORA cycle visualization
4. **LLM Deep Dive** - Content + capabilities table
5. **AI Agents** - Comparison cards + architecture breakdown
6. **Agentic Workflows** - Multi-column feature showcase
7. **Technical Components** - 4-component grid breakdown
8. **Footer** - Newsletter + navigation

**Viewport Management:** Natural content flow, no forced 100vh constraints except hero (80-90vh)