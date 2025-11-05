# Blueprint Lead - Website Development Blueprint

**Project:** Blueprint Lead Marketing Website
**Version:** 1.0
**Last Updated:** January 2025
**Project Manager Role:** You (orchestrating sequential agent execution)

---

## TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Design System](#3-design-system)
4. [Project Architecture](#4-project-architecture)
5. [Specialized Agents](#5-specialized-agents)
6. [Sequential Development Phases](#6-sequential-development-phases)
7. [Handoff Document Requirements](#7-handoff-document-requirements)
8. [Project Manager Workflow](#8-project-manager-workflow)
9. [Coding Standards](#9-coding-standards)
10. [Quality Gates](#10-quality-gates)
11. [Success Criteria](#11-success-criteria)
12. [Deployment Process](#12-deployment-process)

---

## 1. PROJECT OVERVIEW

### Business Context

**Company:** Blueprint Lead (blueprintlead.com)
**Business Model:** Exclusive lead generation for licensed contractors in LA County
**Unique Value Proposition:** The only service offering pre-scheduled contractor appointments with permit-verified homeowners
**Target Audience:** Licensed and insured general contractors in Los Angeles County
**Established:** 2021 (4 years of operation)

### Website Goals

**Primary Objective:** Convert licensed contractors into consultation bookings

**Key Conversion Actions:**
1. Schedule consultation via Calendly
2. Submit contact form (handled via Resend)
3. Learn about the service (build trust and credibility)

**Secondary Objectives:**
- Establish Blueprint Lead as the premium, exclusive option in contractor lead generation
- Convey professionalism and selectivity (not desperate for sign-ups)
- Differentiate from competitors (HomeAdvisor, Thumbtack, Angi)
- Rank well in search for relevant keywords (contractor leads LA County, pre-scheduled appointments, etc.)

### Target Audience Characteristics

- **Demographics:** Licensed contractors, 35-60 years old, experienced professionals
- **Pain Points:** Wasting money on cold leads, competing with 5+ contractors, unqualified homeowners
- **Desires:** Exclusive leads, pre-scheduled appointments, high-value projects ($85K+)
- **Technical Sophistication:** Moderate - values speed, clarity, and professionalism over flashy design
- **Decision Process:** Will research, compare options, value transparency and proven results

### Content Source

All website copy is in **website-content.md** (located in Downloads folder). This content is final and should be used verbatim. Agents should reference this document for all text content on pages.

---

## 2. TECH STACK

### Core Framework

**Next.js 14+ (App Router)**
- Reason: SEO optimization, server-side rendering, fast performance
- App Router for modern Next.js patterns
- Static generation where possible for speed
- TypeScript for type safety

**React 18+**
- Functional components only (no class components)
- Hooks for state and side effects
- Server components where appropriate (App Router)

**TypeScript**
- Strict mode enabled
- Type everything (no `any` types unless absolutely necessary)
- Interfaces over types where appropriate
- Proper typing for components, props, and functions

### Styling

**Tailwind CSS**
- Utility-first CSS framework
- Custom configuration for Blueprint Lead design system
- No arbitrary values unless necessary
- Organized utility classes (use @apply for repeated patterns)

**ShadCN UI**
- Pre-built accessible components
- Customizable with Tailwind
- Import only what's needed (no bloat)
- Modify to match Blueprint Lead design system

### Animations

**Framer Motion**
- Moderate animations (not minimal, not excessive)
- Fade-ins on scroll
- Smooth page transitions
- Hover effects and micro-interactions
- Performance-conscious (no janky animations)

### Forms & Integrations

**Resend**
- Contact form email handling
- No backend required
- Serverless function integration (Vercel)

**Calendly**
- Custom button linking to Calendly scheduling page
- No embedded iframe (custom-designed CTA button that opens Calendly in new tab)
- Provide clear, professional design for scheduling CTA

### Additional Dependencies

**Lucide Icons or Heroicons**
- Modern, clean icon set
- Tree-shakeable
- Consistent style

**clsx / tailwind-merge**
- Conditional className utilities
- Clean Tailwind class merging

**next-seo**
- SEO meta tag management
- Schema.org structured data
- Open Graph and Twitter cards

### Development Tools

**ESLint + Prettier**
- Code quality enforcement
- Consistent formatting
- Next.js recommended config

**TypeScript ESLint**
- Type checking in CI/CD
- Catch issues early

### Hosting & Deployment

**Vercel**
- Optimal for Next.js
- Automatic deployments from Git
- Serverless functions for Resend integration
- Preview deployments for testing
- Production domain: blueprintlead.com

---

## 3. DESIGN SYSTEM

### Color Palette

**Primary Colors (Deep Slate + Emerald Green)**

```
Primary (Deep Slate):
- slate-900: #0f172a (darkest - headings, primary text)
- slate-800: #1e293b (dark backgrounds, cards)
- slate-700: #334155 (secondary text)
- slate-600: #475569 (muted text)
- slate-500: #64748b (borders, dividers)

Accent (Emerald Green):
- emerald-600: #059669 (primary CTA, links, highlights)
- emerald-500: #10b981 (hover states)
- emerald-700: #047857 (active states)
- emerald-50: #ecfdf5 (light backgrounds, success messages)
- emerald-100: #d1fae5 (subtle highlights)

Neutrals (Grays):
- white: #ffffff (backgrounds, cards)
- gray-50: #f9fafb (light backgrounds)
- gray-100: #f3f4f6 (subtle backgrounds)
- gray-200: #e5e7eb (borders)
- gray-900: #111827 (body text)

Semantic Colors:
- Success: emerald-600 (#059669)
- Error: red-600 (#dc2626)
- Warning: amber-500 (#f59e0b)
- Info: blue-500 (#3b82f6)
```

**Color Usage Guidelines:**
- **Headings:** slate-900
- **Body Text:** gray-900 or slate-700
- **Primary CTAs:** emerald-600 background, white text
- **Secondary CTAs:** slate-800 background, white text
- **Links:** emerald-600, hover emerald-700
- **Backgrounds:** white or gray-50
- **Cards/Sections:** white with gray-200 borders or slate-800 for dark sections
- **Trust Badges:** emerald-600 accent with slate-900 text

### Typography

**Font Stack:**
- **Sans-serif (Primary):** Inter, system-ui, -apple-system, sans-serif
- **Display (Optional for headlines):** Inter with tighter tracking
- Install via next/font/google for optimal loading

**Type Scale:**
```
Headings:
- H1 (Hero): text-5xl md:text-6xl font-bold (48px → 60px)
- H2 (Page Sections): text-4xl md:text-5xl font-bold (36px → 48px)
- H3 (Subsections): text-3xl md:text-4xl font-semibold (30px → 36px)
- H4 (Card Titles): text-2xl font-semibold (24px)
- H5 (Small Headings): text-xl font-semibold (20px)

Body:
- Large: text-lg (18px) - for hero subheadings, emphasis
- Base: text-base (16px) - primary body text
- Small: text-sm (14px) - captions, labels, metadata

Line Height:
- Headings: leading-tight (1.25)
- Body: leading-relaxed (1.625)
- Small text: leading-normal (1.5)

Font Weight:
- Bold: font-bold (700) - headings, emphasis
- Semibold: font-semibold (600) - subheadings, buttons
- Medium: font-medium (500) - labels, navigation
- Normal: font-normal (400) - body text
```

### Spacing System

Use Tailwind's default spacing scale (4px increments):
```
- xs: space-y-2 (8px)
- sm: space-y-4 (16px)
- md: space-y-6 (24px)
- lg: space-y-8 (32px)
- xl: space-y-12 (48px)
- 2xl: space-y-16 (64px)
- 3xl: space-y-20 (80px)

Container Padding:
- Mobile: px-4 (16px)
- Tablet: px-6 (24px)
- Desktop: px-8 (32px)

Section Spacing:
- Between sections: py-16 md:py-24 (64px → 96px)
- Within sections: py-8 md:py-12 (32px → 48px)
```

### Responsive Breakpoints

Use Tailwind's default breakpoints:
```
- sm: 640px (mobile landscape, small tablets)
- md: 768px (tablets)
- lg: 1024px (laptops, small desktops)
- xl: 1280px (desktops)
- 2xl: 1536px (large desktops)

Mobile-first approach: Design for mobile, enhance for larger screens
```

### Component Patterns

**Buttons:**
```tsx
Primary CTA:
- bg-emerald-600 hover:bg-emerald-700 text-white
- px-8 py-4 rounded-lg font-semibold
- Moderate shadow and hover lift effect
- Smooth transition

Secondary CTA:
- bg-slate-800 hover:bg-slate-700 text-white
- px-6 py-3 rounded-lg font-medium
- Subtle hover effect

Text Link:
- text-emerald-600 hover:text-emerald-700 underline-offset-4
- hover:underline transition
```

**Cards:**
```tsx
Standard Card:
- bg-white border border-gray-200 rounded-xl
- p-6 md:p-8
- shadow-sm hover:shadow-md transition

Dark Card:
- bg-slate-800 text-white
- border border-slate-700 rounded-xl
- p-6 md:p-8
```

**Trust Badges:**
```tsx
- Inline badge: bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full
- Icon + text combo with emerald-600 accent
```

### Animation Guidelines

**Moderate Animation Approach:**
- Fade-in on scroll (elements appear as user scrolls)
- Smooth page transitions (not jarring)
- Hover effects (scale, color, shadow)
- Button interactions (press, hover)
- Avoid: Parallax, excessive motion, distracting animations
- Performance: 60fps, GPU-accelerated properties only

**Framer Motion Patterns:**
```tsx
// Fade in from below
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Staggered children
const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
}
```

---

## 4. PROJECT ARCHITECTURE

### Folder Structure

```
blueprintlead-website/
├── .next/                     # Next.js build output (gitignored)
├── public/                    # Static assets
│   ├── images/               # Images, logos, icons
│   ├── fonts/                # Custom fonts (if any)
│   └── favicon.ico           # Favicon
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout (wraps all pages)
│   │   ├── page.tsx          # Homepage
│   │   ├── how-it-works/
│   │   │   └── page.tsx      # How It Works page
│   │   ├── pricing/
│   │   │   └── page.tsx      # Pricing & Tiers page
│   │   ├── project-types/
│   │   │   └── page.tsx      # Project Types page
│   │   ├── why-choose-us/
│   │   │   └── page.tsx      # Why Choose Us page
│   │   ├── about/
│   │   │   └── page.tsx      # About Us page
│   │   ├── faq/
│   │   │   └── page.tsx      # FAQ page
│   │   ├── contact/
│   │   │   └── page.tsx      # Contact/Schedule page
│   │   ├── terms/
│   │   │   └── page.tsx      # Terms of Service
│   │   ├── privacy/
│   │   │   └── page.tsx      # Privacy Policy
│   │   └── api/              # API routes (serverless functions)
│   │       └── contact/
│   │           └── route.ts  # Resend contact form handler
│   ├── components/           # React components
│   │   ├── atoms/            # Atomic design - smallest components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Icon.tsx
│   │   │   └── Link.tsx
│   │   ├── molecules/        # Combinations of atoms
│   │   │   ├── CTAButton.tsx
│   │   │   ├── TrustBadge.tsx
│   │   │   ├── NavLink.tsx
│   │   │   └── FormField.tsx
│   │   ├── organisms/        # Complex components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── TestimonialCard.tsx
│   │   └── templates/        # Page layouts
│   │       ├── PageLayout.tsx
│   │       └── SectionLayout.tsx
│   ├── lib/                  # Utility functions
│   │   ├── utils.ts          # General utilities (cn, etc.)
│   │   ├── constants.ts      # Site-wide constants
│   │   └── resend.ts         # Resend configuration
│   ├── styles/               # Global styles
│   │   └── globals.css       # Tailwind imports + global styles
│   └── types/                # TypeScript types
│       ├── index.ts          # Shared types
│       └── content.ts        # Content structure types
├── .env.local                # Environment variables (gitignored)
├── .eslintrc.json            # ESLint config
├── .gitignore                # Git ignore rules
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies
├── postcss.config.js         # PostCSS for Tailwind
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

### File Naming Conventions

**Components:**
- PascalCase for component files: `Button.tsx`, `HeroSection.tsx`
- Named exports: `export function Button() { ... }`
- One component per file

**Pages:**
- Lowercase with hyphens for URLs: `how-it-works/page.tsx`
- Default export for Next.js pages: `export default function HowItWorksPage() { ... }`

**Utilities:**
- camelCase for utility files: `utils.ts`, `resend.ts`
- Named exports for functions

**Types:**
- PascalCase for interfaces/types: `interface ButtonProps { ... }`
- Group related types in single files

### Import Organization

```tsx
// 1. React and Next.js
import { useState } from 'react'
import Link from 'next/link'

// 2. Third-party libraries
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// 3. Components (atoms → molecules → organisms)
import { Button } from '@/components/atoms/Button'
import { CTAButton } from '@/components/molecules/CTAButton'

// 4. Types
import type { ButtonProps } from '@/types'

// 5. Styles (if any separate CSS modules)
```

### Component Composition

**Atomic Design Principles:**
- **Atoms:** Basic building blocks (Button, Input, Badge) - no business logic
- **Molecules:** Simple combinations (CTAButton = Button + Icon, FormField = Label + Input + Error)
- **Organisms:** Complex, reusable sections (Header, Footer, ContactForm)
- **Templates:** Page layouts that compose organisms
- **Pages:** Specific instances of templates with content

**Props Pattern:**
```tsx
// Extend HTML element props for flexibility
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
```

---

## 5. SPECIALIZED AGENTS

### Agent Overview

**Total Agents:** 8
**Execution:** Sequential (one completes before next begins)
**Handoffs:** Each agent creates handoff document for next agent (stored in `/docs/handoffs/`)
**PM Review:** You review each handoff before delegating to next agent
**Agent Decisions:** Agent recommendations documented in sub-agent-research-findings.md

---

### AGENT 1: Setup Agent

**Role:** Initialize Next.js project, install dependencies, and configure development environment

**Expertise Area:** Next.js project initialization, TypeScript configuration, build tool setup

**PROACTIVE USE:** Invoke this agent automatically when:
- Starting a new Next.js project
- Project initialization is required
- Setting up Blueprint Lead development environment

**Primary Responsibility:**

INPUT: Blueprint.md specifications, tech stack requirements
PROCESS: Research best practices → Plan dependencies and structure → Initialize project → Configure tools → Verify setup
OUTPUT: Working Next.js project, configured tools, folder structure, handoff document

**Approach:**

1. **Research Phase**
   - Review blueprint.md Section 2 (Tech Stack) and Section 4 (Architecture)
   - Check latest Next.js 14+ best practices and App Router patterns
   - Identify required dependencies with correct versions

2. **Planning Phase**
   - Create dependency list with versions (Next.js, TypeScript, Tailwind, Framer Motion, etc.)
   - Plan folder structure matching blueprint Section 4
   - Design Tailwind config strategy for custom Blueprint Lead tokens

3. **Implementation Phase**
   - Initialize Next.js with `create-next-app` (TypeScript, Tailwind, App Router)
   - Install all dependencies: Framer Motion, Resend, ShadCN UI, Lucide icons
   - Create complete folder structure (src/app/, src/components/atoms|molecules|organisms|templates/, src/lib/, src/types/, src/styles/)
   - Set up `tailwind.config.ts` with Blueprint Lead color stubs (emerald, slate palettes)
   - Configure ESLint and TypeScript (strict mode)
   - Initialize Git repository with proper `.gitignore`
   - Create `.env.local.example` with required variables
   - Copy `website-content.md` to `/docs/website-content.md` for agent access

4. **Verification Phase**
   - Run `npm run dev` - must start without errors on port 3000
   - Test Tailwind: Apply utility class (e.g., `bg-emerald-600`) and verify rendering
   - Run `npx tsc --noEmit` - must compile without TypeScript errors
   - Verify folder structure matches blueprint exactly
   - Test Git status - clean working directory

5. **Documentation Phase**
   - Create handoff document using Section 7 template
   - Document all dependencies and versions
   - Explain folder structure and conventions
   - Note any configuration decisions made

**Tools & Permissions:**

**Allowed:**
- Read: blueprint.md, website-content.md
- Write: All project files (new project initialization)
- Execute: `npm create next-app`, `npm install`, `git init`, `npm run dev`, `npx tsc`

**Restricted:**
- Do NOT implement design system tokens (that's Design System Agent)
- Do NOT build components (that's Core Components Agent)
- Do NOT create pages beyond basic Next.js defaults

**Key Deliverables:**

1. **Initialized Next.js Project**
   - Format: Complete project structure
   - Location: Project root
   - Purpose: Foundation for all development
   - Validation: `npm run dev` runs without errors

2. **Complete Folder Structure**
   - Format: Directories matching blueprint Section 4
   - Location: `src/` directory with all subdirectories
   - Purpose: Organized codebase following atomic design
   - Validation: All required folders exist

3. **Configured Tailwind**
   - Format: `tailwind.config.ts` with color stubs
   - Location: Project root
   - Purpose: Ready for Design System Agent to expand
   - Validation: Tailwind utility classes render correctly

4. **Package.json with Dependencies**
   - Format: JSON with all required packages
   - Location: Project root
   - Purpose: All tools available for subsequent agents
   - Validation: `npm install` completes successfully

5. **Documentation Files**
   - `/docs/website-content.md` (copied for agent access)
   - `/docs/handoffs/` directory created
   - `.env.local.example` template

6. **Handoff Document**
   - Format: Markdown per Section 7 template
   - Location: `/docs/handoffs/phase-1-setup.md`
   - Purpose: Context for Design System Agent

**Success Criteria:**

**Functional Requirements:**
- [ ] `npm run dev` runs without errors on localhost:3000
- [ ] Visiting localhost:3000 shows Next.js welcome page
- [ ] Test Tailwind class (e.g., `bg-emerald-600`) renders correctly
- [ ] No console errors on page load

**Code Quality Requirements:**
- [ ] `npx tsc --noEmit` completes without TypeScript errors
- [ ] ESLint configured and runs without errors
- [ ] TypeScript strict mode enabled in tsconfig.json

**Structure Requirements:**
- [ ] Folder structure matches blueprint Section 4 exactly
- [ ] All atomic design directories created (atoms/, molecules/, organisms/, templates/)
- [ ] `src/lib/`, `src/types/`, `src/styles/` directories exist

**Configuration Requirements:**
- [ ] `tailwind.config.ts` has Blueprint Lead color stubs (emerald, slate)
- [ ] Git initialized with proper `.gitignore` (node_modules, .env.local, .next)
- [ ] `.env.local.example` lists required variables (RESEND_API_KEY, CALENDLY_LINK)

**Documentation Requirements:**
- [ ] Handoff document created at `/docs/handoffs/phase-1-setup.md`
- [ ] All dependencies documented with versions
- [ ] Configuration decisions explained with rationale
- [ ] Next steps clearly defined for Design System Agent

**This Agent Must NOT:**
- Implement design system tokens (emerald/slate full palettes) - that's Phase 2
- Build any components - that's Phase 3
- Create pages beyond Next.js defaults - that's Phase 5
- Make design decisions beyond basic project structure

---

### AGENT 2: Design System Agent

**Role:** Implement Tailwind design system with Blueprint Lead design tokens

**Expertise Area:** Tailwind CSS configuration, design tokens, typography systems, theme extension

**PROACTIVE USE:** Invoke this agent automatically when:
- Project setup is complete and Tailwind config stub exists
- Design system tokens need to be implemented
- Base styles and font configuration are required

**Primary Responsibility:**

INPUT: Completed Next.js setup, Tailwind config stub, blueprint design specifications, handoff from Setup Agent
PROCESS: Research Blueprint Lead design requirements → Think hard about token organization → Implement Tailwind extensions → Create base styles → Configure fonts → Test with sample components
OUTPUT: Complete tailwind.config.ts, globals.css, font configuration, design system test page, handoff document

**Approach:**

1. **Research Phase (Think Hard)**
   - Review blueprint.md Section 3 (Design System) in detail
   - Study Tailwind theme extension best practices
   - Read handoff document from Setup Agent (`/docs/handoffs/phase-1-setup.md`)
   - Examine Blueprint Lead brand requirements (Deep Slate + Emerald Green)

2. **Planning Phase (Think Hard About Token Organization)**
   - Decide token organization: `extend` vs `override` (recommendation: extend to preserve defaults)
   - Plan color palette implementation (emerald-50/100/500/600/700, slate-500/600/700/800/900)
   - Design typography scale (text-sm through text-6xl with line-heights)
   - Plan spacing system (space-y-2 through space-y-20)
   - Consider button styles, card styles, shadow values

3. **Implementation Phase**
   - Extend `tailwind.config.ts` with Blueprint Lead tokens:
     - colors.emerald (custom shades: 50, 100, 500, 600, 700)
     - colors.slate (custom shades: 500, 600, 700, 800, 900)
     - fontFamily.sans (Inter)
     - Custom spacing if needed
   - Create `src/styles/globals.css`:
     - Import Tailwind layers (@tailwind base/components/utilities)
     - Add CSS custom properties for colors (optional)
     - Set base typography styles
   - Configure Inter font in `src/app/layout.tsx`:
     - Use `next/font/google` to import Inter
     - Apply `font-sans` class to body
   - Create test page: `src/app/design-test/page.tsx`:
     - Display all color swatches with labels
     - Show all typography scales (headings, body text)
     - Demonstrate spacing examples
     - Button style previews
     - Card style previews

4. **Verification Phase**
   - Visit `/design-test` - all tokens should render correctly
   - Visual inspection: colors match blueprint specifications
   - Check Network tab: Inter font loads (woff2 file)
   - Run `npm run dev` without errors
   - Verify emerald-600 is correct shade for primary CTAs

5. **Documentation Phase**
   - Create handoff document at `/docs/handoffs/phase-2-design-system.md`
   - Document all design tokens and usage guidelines
   - Explain color decisions (why emerald-600 for CTAs, not emerald-500)
   - Note font configuration approach (font-sans class)

**Tools & Permissions:**

**Allowed:**
- Read: blueprint.md (Section 3), `/docs/handoffs/phase-1-setup.md`
- Write: `tailwind.config.ts`, `src/styles/globals.css`, `src/app/layout.tsx`, `src/app/design-test/page.tsx`
- Install: `next/font` packages (Google fonts - Inter)
- Execute: `npm run dev`, browser testing

**Restricted:**
- Do NOT build components (atoms/molecules/organisms) - that's Core Components Agent
- Do NOT modify package.json (already configured)
- Do NOT create page layouts - that's Layout Agent

**Key Deliverables:**

1. **Complete Tailwind Configuration**
   - Format: TypeScript config file with extended theme
   - Location: `tailwind.config.ts`
   - Purpose: All Blueprint Lead design tokens available
   - Validation: Colors, typography, spacing classes work in components

2. **Global Styles**
   - Format: CSS file with Tailwind imports and base styles
   - Location: `src/styles/globals.css`
   - Purpose: Foundation styles for entire application
   - Validation: No style conflicts, Tailwind layers load correctly

3. **Font Configuration**
   - Format: next/font/google configuration in layout
   - Location: `src/app/layout.tsx`
   - Purpose: Inter font loads on all pages
   - Validation: Network tab shows woff2 font loading

4. **Design System Test Page**
   - Format: Next.js page component
   - Location: `src/app/design-test/page.tsx`
   - Purpose: Visual verification of all design tokens
   - Validation: All colors, typography, spacing render correctly
   - Note: DELETE this page in Phase 8 (Polish Agent)

5. **Handoff Document**
   - Format: Markdown per Section 7 template
   - Location: `/docs/handoffs/phase-2-design-system.md`
   - Purpose: Context for Core Components Agent

**Success Criteria:**

**Functional Requirements:**
- [ ] All Blueprint Lead colors available (slate-900/800/700/600/500, emerald-600/500/700/50/100)
- [ ] Typography scale implemented (text-sm → text-6xl with correct line-heights)
- [ ] Inter font loads correctly on all pages
- [ ] Design test page renders all tokens at `/design-test`
- [ ] `npm run dev` runs without errors

**Design System Requirements:**
- [ ] Colors match blueprint specifications exactly
- [ ] emerald-600 designated for primary CTAs (documented in handoff)
- [ ] slate-900 designated for headings (documented in handoff)
- [ ] Spacing utilities available (space-y-2 through space-y-20)

**Code Quality Requirements:**
- [ ] `tailwind.config.ts` uses `extend` not `override` (preserves defaults)
- [ ] Clean, organized config file with comments
- [ ] globals.css properly imports Tailwind layers
- [ ] No TypeScript errors in configuration

**Documentation Requirements:**
- [ ] Handoff document explains all token decisions
- [ ] Color usage guidelines documented (which color for what purpose)
- [ ] Font configuration approach explained
- [ ] Critical info: "Use emerald-600 for CTAs, not emerald-500"

**This Agent Must NOT:**
- Build components (Button, Input, etc.) - that's Phase 3
- Create page layouts - that's Phase 4
- Implement animations - that's Phase 5 and Phase 8
- Make content decisions - follow blueprint specs only

---

### AGENT 3: Core Components Agent

**Role:** Build reusable atomic and molecular components using design system

**Expertise Area:** React component architecture, ShadCN UI integration, accessibility (WCAG AA), TypeScript typing

**PROACTIVE USE:** Invoke this agent automatically when:
- Design system is complete and tokens are available
- Foundational components need to be built
- ShadCN UI integration is required

**Primary Responsibility:**

INPUT: Completed design system, handoff from Design System Agent, component specifications
PROCESS: Research component patterns → Plan ShadCN integration → Build atomic components → Build molecular components → Test accessibility → Verify responsiveness
OUTPUT: Complete component library, test page, handoff document

**Approach:**

1. **Research Phase**
   - Review blueprint.md Section 5 (this agent) for component specifications
   - Read `/docs/handoffs/phase-2-design-system.md` to understand available tokens
   - Study ShadCN UI best practices and Blueprint Lead theme configuration
   - Review accessibility guidelines (WCAG AA requirements)

2. **Planning Phase**
   - Plan ShadCN CLI setup and configuration
   - Identify which primitives to install (Button, Input, Label, Badge)
   - Plan customization strategy (use emerald primary, slate secondary)
   - Design component API (props, variants, TypeScript interfaces)
   - List atomic components needed
   - List molecular components needed

3. **Implementation Phase - ShadCN Setup**
   - Run `npx shadcn-ui@latest init`
   - Configure to use Blueprint Lead theme:
     - Primary: emerald-600
     - Secondary: slate-900
     - Destructive: red-600
   - Install required primitives: `npx shadcn-ui@latest add button input label badge`
   - Customize installed components to match design system exactly

4. **Implementation Phase - Atomic Components**
   Build in `src/components/atoms/`:
   - `Button.tsx` (extend ShadCN, add Blueprint Lead variants: primary/secondary)
   - `Input.tsx` (extend ShadCN, add error state styling)
   - `Textarea.tsx` (similar to Input, for longer text)
   - `Badge.tsx` (extend ShadCN, for trust badges)
   - `Link.tsx` (Next.js Link wrapper with active state support)
   - `Icon.tsx` (Lucide icon wrapper)

5. **Implementation Phase - Molecular Components**
   Build in `src/components/molecules/`:
   - `CTAButton.tsx` (Button + optional Icon + external link support for Calendly)
   - `TrustBadge.tsx` (Badge + icon + text formatting)
   - `NavLink.tsx` (Link + active state highlighting with usePathname)
   - `FormField.tsx` (Label + Input/Textarea + error message display)

6. **Verification Phase - Accessibility Checklist**
   For EVERY component ensure:
   - [ ] Uses semantic HTML elements
   - [ ] Includes appropriate ARIA labels where needed
   - [ ] Supports keyboard navigation (Tab, Enter, Space, Escape)
   - [ ] Color contrast ratio ≥ 4.5:1 (test with WebAIM Contrast Checker)
   - [ ] Visible focus indicators (not `outline: none`)
   - [ ] Works with screen readers (test with VoiceOver/NVDA)

7. **Verification Phase - Component Test Page**
   Create `src/app/components-test/page.tsx` showcasing:
   - All button variants and sizes
   - All form inputs with labels and error states
   - All badges and their variants
   - Navigation link active/inactive states
   - CTAButton with and without icons

   Manual testing checklist:
   - [ ] Tab through all interactive elements
   - [ ] Test keyboard activation (Enter/Space)
   - [ ] Verify hover/focus/active states
   - [ ] Check mobile responsiveness
   - [ ] Validate TypeScript types compile

8. **Documentation Phase**
   - Add JSDoc comments to all components
   - Create handoff document at `/docs/handoffs/phase-3-core-components.md`
   - Document component API (props, variants, usage examples)
   - Explain ShadCN customization decisions
   - List all import paths

**Tools & Permissions:**

**Allowed:**
- Read: blueprint.md (Section 5), `/docs/handoffs/phase-2-design-system.md`, tailwind.config.ts
- Write: `src/components/atoms/*`, `src/components/molecules/*`, `src/app/components-test/page.tsx`
- Install: ShadCN UI CLI, Lucide React icons
- Execute: `npx shadcn-ui`, `npm run dev`, accessibility testing tools

**Restricted:**
- Do NOT build organisms (Header, Footer, ContactForm) - that's Layout Agent and Integration Agent
- Do NOT create page layouts or templates - that's Layout Agent
- Do NOT build pages - that's Page Builder Agent

**Key Deliverables:**

1. **Atomic Components** (in `src/components/atoms/`)
   - Button.tsx (primary/secondary variants, sizes)
   - Input.tsx (with error state)
   - Textarea.tsx
   - Badge.tsx
   - Link.tsx (Next.js Link wrapper)
   - Icon.tsx (Lucide wrapper)

2. **Molecular Components** (in `src/components/molecules/`)
   - CTAButton.tsx (Button + Icon + external link support)
   - TrustBadge.tsx (Badge + icon + text)
   - NavLink.tsx (Link + active state)
   - FormField.tsx (Label + Input + error display)

3. **TypeScript Types** (in `src/types/` or inline)
   - All component prop interfaces
   - Variant types
   - Size types

4. **Component Test Page**
   - Format: Next.js page component
   - Location: `src/app/components-test/page.tsx`
   - Purpose: Visual verification and manual testing
   - Note: DELETE this page in Phase 8 (Polish Agent)

5. **ShadCN Configuration**
   - `components.json` configured with Blueprint Lead theme
   - ShadCN primitives customized

6. **Handoff Document**
   - Format: Markdown per Section 7 template
   - Location: `/docs/handoffs/phase-3-core-components.md`
   - Purpose: Context for Layout Agent

**Success Criteria:**

**Functional Requirements:**
- [ ] All atomic components render correctly
- [ ] All molecular components render correctly
- [ ] Button variants (primary/secondary) styled per design system
- [ ] Input shows error state styling
- [ ] NavLink highlights active route
- [ ] CTAButton supports external links (for Calendly)
- [ ] All components accept `className` prop for customization

**Accessibility Requirements (WCAG AA):**
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible on all components
- [ ] Color contrast ≥ 4.5:1 on all text
- [ ] ARIA labels on icon-only buttons
- [ ] Form fields have associated labels
- [ ] Screen reader compatible (test with VoiceOver/NVDA)

**Code Quality Requirements:**
- [ ] TypeScript types complete and accurate
- [ ] All components follow naming conventions (PascalCase files)
- [ ] Components use named exports
- [ ] Props extend HTML element props (e.g., ButtonHTMLAttributes)
- [ ] No `any` types used
- [ ] JSDoc comments on all components

**Design System Requirements:**
- [ ] Components use design tokens only (no arbitrary values)
- [ ] emerald-600 used for primary buttons
- [ ] slate-900 used for text
- [ ] Spacing follows design system scale
- [ ] Typography follows design system scale

**Integration Requirements:**
- [ ] Components work with ShadCN primitives
- [ ] No conflicts with Tailwind configuration
- [ ] Components are tree-shakeable (individual imports)

**This Agent Must NOT:**
- Build Header, Footer, or ContactForm - those are organisms for later phases
- Create page layouts - that's Phase 4
- Add animations - that's Phase 5 and Phase 8
- Fetch or manage data - components are presentational only

---

### AGENT 4: Layout Agent

**Role:** Build header, footer, navigation, and page layout templates

**Expertise Area:** Layout composition, responsive design, navigation state management, Framer Motion animations

**PROACTIVE USE:** Invoke this agent automatically when:
- Core components are ready (atoms and molecules built)
- Header, footer, and page layouts need to be created
- Navigation system needs implementation

**Primary Responsibility:**

INPUT: Core components from Agent 3, handoff document, content specifications from website-content.md
PROCESS: Research layout patterns → Plan navigation structure → Build Header organism → Build Footer organism → Create layout templates → Implement navigation state → Test responsiveness
OUTPUT: Complete layout system (Header, Footer, templates), handoff document

**Approach:**

1. **Research Phase**
   - Review blueprint.md Section 5 (this agent) for layout specifications
   - Read `/docs/handoffs/phase-3-core-components.md` to understand available components
   - Review website-content.md global navigation section
   - Study Next.js App Router layout patterns

2. **Planning Phase**
   - Plan Header structure (logo, nav, CTA, mobile menu)
   - Plan Footer structure (links, info, CTA, copyright)
   - Design navigation state management (usePathname for active route)
   - Plan mobile menu implementation (Framer Motion slide-in)
   - Design responsive breakpoints (sm, md, lg, xl)

3. **Implementation Phase - Header Organism**
   Build `src/components/organisms/Header.tsx`:
   - **Desktop Layout** (≥768px):
     - Logo (Blueprint Lead) - left aligned
     - Navigation menu: How It Works, Pricing, Projects, Why Us, About, FAQ, Contact
     - Active link styling: `text-emerald-600 font-semibold` (use usePathname())
     - Primary CTA button: "Schedule Consultation" (emerald-600)
     - Trust badge: "Licensed & Insured Contractors Only"
   - **Mobile Layout** (<768px):
     - Logo (left), Hamburger icon (right)
     - No visible nav menu
   - **Mobile Menu Specification:**
     - Trigger: Hamburger icon (3 horizontal lines) with aria-label="Menu"
     - Animation: Slide in from right using Framer Motion
     - Backdrop: Semi-transparent overlay (slate-900/50)
     - Close: X icon, backdrop click, or Escape key
     - Links: Full-height list, large touch targets (min 44px height)
     - CTA: "Schedule Consultation" button at bottom
     - Behavior: Close menu on navigation (useEffect listening to pathname changes)

4. **Implementation Phase - Navigation State Management**
   ```tsx
   import { usePathname } from 'next/navigation'

   const pathname = usePathname()
   const isActive = (path: string) => pathname === path

   // Apply active styles
   className={cn(
     'text-slate-600 hover:text-emerald-600',
     isActive(href) && 'text-emerald-600 font-semibold'
   )}
   ```

5. **Implementation Phase - Footer Organism**
   Build `src/components/organisms/Footer.tsx`:
   - **Company Info Section:**
     - Blueprint Lead logo
     - Tagline (from website-content.md)
     - Copyright: `© ${new Date().getFullYear()} Blueprint Lead. All rights reserved.`
   - **Quick Links Section:**
     - All pages: Home, How It Works, Pricing, Projects, Why Us, About, FAQ, Contact
   - **Legal Links Section:**
     - Terms of Service, Privacy Policy
   - **Contact Info Section:**
     - Email: info@blueprintlead.com
     - Business hours: Mon-Fri 9AM-6PM PST
   - **CTA Section:**
     - "Schedule Consultation" button linking to Calendly
   - **Responsive:**
     - Mobile: Single column, stacked sections
     - Tablet (≥768px): 2 columns
     - Desktop (≥1024px): 4 columns

6. **Implementation Phase - Layout Templates**
   Build `src/components/templates/PageLayout.tsx`:
   - Structure: Header + {children} + Footer
     - Proper spacing between sections
     - Container width management (max-w-7xl mx-auto)
     - Semantic HTML: `<header>`, `<main>`, `<footer>`

   Build `src/components/templates/SectionLayout.tsx`:
   - Reusable section wrapper with props:
     - `variant`: 'default' | 'gray' | 'slate' (background colors)
     - `spacing`: 'sm' | 'md' | 'lg' (py-8, py-16, py-24)
     - Container width management
     - Proper padding and margins

7. **Implementation Phase - Root Layout Integration**
   Update `src/app/layout.tsx`:
   - Wrap {children} with Header and Footer (via PageLayout template)
   - Ensure Inter font applied globally
   - Add metadata (will be enhanced in Phase 7 by SEO Agent)

8. **Verification Phase - Responsive Testing**
   - [ ] Mobile (375px): Hamburger visible, nav hidden, logo left-aligned
   - [ ] Mobile menu opens/closes smoothly with Framer Motion animation
   - [ ] Tablet (768px): Full nav visible, hamburger hidden
   - [ ] Desktop (1280px): Full nav with proper spacing
   - [ ] All nav links highlight correctly on active page (test by visiting /pricing, /contact, etc.)
   - [ ] Footer stacks on mobile, multi-column on desktop
   - [ ] Touch targets are ≥44px on mobile (test with Chrome DevTools)

9. **Documentation Phase**
   - Create handoff document at `/docs/handoffs/phase-4-layout.md`
   - Document navigation state implementation
   - Explain mobile menu behavior
   - List all layout templates and their props

**Tools & Permissions:**

**Allowed:**
- Read: blueprint.md, `/docs/handoffs/phase-3-core-components.md`, website-content.md (global nav section)
- Write: `src/components/organisms/Header.tsx`, `src/components/organisms/Footer.tsx`, `src/components/templates/PageLayout.tsx`, `src/components/templates/SectionLayout.tsx`, update `src/app/layout.tsx`
- Use: Core components from Phase 3 (NavLink, CTAButton, TrustBadge, Button, Link)
- Install: Framer Motion (if not already installed)
- Execute: `npm run dev`, responsive testing in browser

**Restricted:**
- Do NOT build pages (homepage, pricing, etc.) - that's Page Builder Agent
- Do NOT create ContactForm - that's Integration Agent
- Do NOT implement SEO meta tags - that's SEO Agent

**Key Deliverables:**

1. **Header Component**
   - Format: React organism component
   - Location: `src/components/organisms/Header.tsx`
   - Purpose: Global navigation for all pages
   - Features: Desktop nav, mobile menu, active state, Framer Motion animations

2. **Footer Component**
   - Format: React organism component
   - Location: `src/components/organisms/Footer.tsx`
   - Purpose: Global footer for all pages
   - Features: Links, contact info, CTA, responsive columns

3. **PageLayout Template**
   - Format: React template component
   - Location: `src/components/templates/PageLayout.tsx`
   - Purpose: Wrap pages with Header + Footer
   - Features: Proper spacing, semantic HTML

4. **SectionLayout Template**
   - Format: React template component
   - Location: `src/components/templates/SectionLayout.tsx`
   - Purpose: Reusable section wrapper
   - Features: Background variants, spacing options

5. **Updated Root Layout**
   - Format: Next.js App Router layout
   - Location: `src/app/layout.tsx`
   - Purpose: Global layout with Header + Footer

6. **Handoff Document**
   - Format: Markdown per Section 7 template
   - Location: `/docs/handoffs/phase-4-layout.md`
   - Purpose: Context for Page Builder Agent

**Success Criteria:**

**Functional Requirements:**
- [ ] Header appears on all pages
- [ ] Footer appears on all pages
- [ ] Navigation links work (all 8 pages linkable)
- [ ] Active link highlights correctly (visit different pages to test)
- [ ] Mobile menu opens with hamburger click
- [ ] Mobile menu closes with X, backdrop click, or Escape key
- [ ] Mobile menu closes automatically on navigation
- [ ] CTAs link to Calendly (placeholder URL for now)

**Responsive Requirements:**
- [ ] Mobile (<768px): Hamburger menu, stacked footer
- [ ] Tablet (768px-1024px): Full nav, 2-column footer
- [ ] Desktop (≥1024px): Full nav, 4-column footer
- [ ] Touch targets ≥44px on mobile
- [ ] No horizontal scroll on any breakpoint

**Animation Requirements:**
- [ ] Mobile menu slides in from right smoothly (Framer Motion)
- [ ] Backdrop fades in with menu
- [ ] No jank or stuttering (60fps)

**Accessibility Requirements:**
- [ ] Hamburger icon has aria-label="Menu"
- [ ] Mobile menu traps focus when open
- [ ] Escape key closes mobile menu
- [ ] Tab navigation works correctly
- [ ] Active links have sufficient contrast

**Code Quality Requirements:**
- [ ] TypeScript types complete
- [ ] Components use core components from Phase 3
- [ ] No arbitrary Tailwind values
- [ ] Clean, organized code with JSDoc comments

**This Agent Must NOT:**
- Build individual pages - that's Phase 5
- Implement ContactForm - that's Phase 6
- Add SEO meta tags - that's Phase 7
- Final animation polish - that's Phase 8

---

### AGENT 5: Page Builder Agent

**Role:** Build all 10 pages with content from website-content.md

**Expertise Area:** Page composition, content integration, Framer Motion animations, semantic HTML

**PROACTIVE USE:** Invoke this agent automatically when:
- Layout system is complete (Header, Footer, templates ready)
- Pages need to be built with actual content
- Website structure needs implementation

**NOTE:** Phase 5 is broken into 5 sub-phases (5A-5E) for modularity and context management. Each sub-phase creates a handoff document and agents auto-proceed to the next sub-phase.

**Phase 5 Breakdown:**

**Phase 5A: Foundation - Organisms & Data (3-4 hours)**
- Review existing HeroSection.tsx (created during planning)
- Build 4 remaining organisms: TierCard, ProjectTypeCard, TestimonialCard, FAQAccordion
- Add data constants: TIERS, PROJECT_TYPES, TESTIMONIALS, FAQ_CATEGORIES, VALUE_PROPS
- Create handoff: `/docs/handoffs/phase-5a-organisms.md`

**Phase 5B: Simple Pages (2-3 hours)**
- Build /privacy (Privacy Policy - legal text)
- Build /terms (Terms of Service - legal text)
- Build /about (About Us - HeroSection + text sections)
- Create handoff: `/docs/handoffs/phase-5b-simple-pages.md`

**Phase 5C: Process Pages (3 hours)**
- Build /how-it-works (5-step process)
- Build /why-choose-us (5 differentiators + comparison)
- Create handoff: `/docs/handoffs/phase-5c-process-pages.md`

**Phase 5D: Feature Pages (4-5 hours)**
- Build /project-types (8 ProjectTypeCards)
- Build /pricing (4 TierCards + FAQ preview)
- Build /faq (FAQAccordion with 40+ items)
- Create handoff: `/docs/handoffs/phase-5d-feature-pages.md`

**Phase 5E: Contact & Homepage (5-6 hours)**
- Build /contact (FormField components + Zod validation + Calendly CTAs)
- Build / (homepage - most complex, uses all organisms)
- Create handoff: `/docs/handoffs/phase-5e-final-pages.md`

**Primary Responsibility:**

INPUT: Complete layout system, all components, /docs/website-content.md, handoff from Layout Agent
PROCESS: Execute 5A→5B→5C→5D→5E with handoff documents between each sub-phase
OUTPUT: All 10 pages built, 5 organisms, data constants, animations, 5 handoff documents

**Content Verification Protocol (CRITICAL):**
1. Read `/docs/website-content.md` in full BEFORE building any page
2. For each page, copy exact text from content.md (no paraphrasing)
3. Use content headings as source for semantic HTML hierarchy
4. Cross-reference all CTAs with content.md to ensure consistency
5. Create content checklist:
   - [ ] Homepage: Hero, value props, trust badges, testimonials, FAQ preview
   - [ ] How It Works: 5-step process with exact wording
   - [ ] Pricing: 4 tiers with all features listed
   - [ ] Project Types: All project categories
   - [ ] Why Choose Us: All benefit points
   - [ ] About Us: Company story
   - [ ] FAQ: All Q&A pairs
   - [ ] Contact: Form placeholder + info
   - [ ] Terms/Privacy: Legal content verbatim

**Framer Motion Animation Patterns (Use These Exact Patterns):**

```tsx
// Pattern 1: Fade Up on Scroll
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={fadeUpVariants}
>

// Pattern 2: Staggered Children
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

// Pattern 3: Hover Effects
<motion.div whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.2 }}>
```

**Animation Guidelines:**
- Apply fade-up to all major sections
- Use stagger for lists (features, pricing tiers, testimonials)
- Hover effects on cards and buttons
- Keep duration ≤ 0.5s for responsiveness
- Always use `viewport={{ once: true }}` to prevent re-triggering

**Page-by-Page Success Criteria:**

**Homepage:**
- [ ] Hero section has h1 with exact copy from content.md
- [ ] Primary CTA links to Calendly (placeholder URL for now)
- [ ] Trust badges visible
- [ ] Testimonials section with all 3 testimonials
- [ ] Animations: Fade-up on hero, stagger on value props, hover on testimonials

**How It Works:**
- [ ] 5 steps in order with exact wording
- [ ] Each step has icon, heading, description
- [ ] CTA links to /pricing
- [ ] Animations: Fade-up on each step with stagger

**Pricing:**
- [ ] All 4 tiers with exact features from content.md
- [ ] Correct pricing amounts
- [ ] Animations: Stagger on tier cards, hover effect

**[Repeat pattern for all 10 pages]**

**Key Deliverables:**
1. All 10 pages in `src/app/`
2. Page-specific organisms: HeroSection, TestimonialCard, TierCard, ProjectTypeCard, FAQAccordion
3. Framer Motion animations applied
4. Handoff document at `/docs/handoffs/phase-5-pages.md`

**Success Criteria:**
- [ ] All 10 pages render without errors
- [ ] Content matches website-content.md EXACTLY
- [ ] No Lorem Ipsum
- [ ] Animations smooth (60fps)
- [ ] Responsive on mobile/tablet/desktop
- [ ] Proper semantic HTML (one h1 per page)
- [ ] Design system followed

**This Agent Must NOT:**
- Build ContactForm functionality - Phase 6
- Add SEO meta tags - Phase 7
- Modify content from website-content.md

---

### AGENT 6: Integration Agent

**Role:** Integrate Resend for contact form and Calendly for scheduling

**Expertise Area:** API routes, form validation, third-party integrations, error handling

**PROACTIVE USE:** Invoke this agent automatically when:
- All pages are built and need form functionality
- Contact form and Calendly integration are required
- API routes need implementation

**Primary Responsibility:**

INPUT: All pages built, handoff from Page Builder Agent, Resend API key, Calendly link
PROCESS: Install Resend → Build API route → Implement form validation → Build ContactForm → Integrate Calendly → Test everything
OUTPUT: Working contact form, API route, Calendly buttons, handoff document

**Form Validation Rules (Client-Side with Zod):**

```tsx
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email format").max(254),
  phone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Format: (XXX) XXX-XXXX").optional(),
  licenseNumber: z.string().regex(/^CA-\d{6}$/, "Format: CA-XXXXXX"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000)
})
```

**Validation Rules:**
- **Name:** Required, min 2 chars, max 100 chars, no special chars except spaces/hyphens
- **Email:** Required, valid email format, max 254 chars
- **Phone:** Optional, if provided must match (XXX) XXX-XXXX format
- **License Number:** Required, alphanumeric, format CA-XXXXXX
- **Message:** Required, min 10 chars, max 1000 chars

**Error Handling Strategy:**

**1. Client-Side Validation Errors:**
- Display inline below each field
- Use red-600 text with red-100 background
- Clear errors when user corrects input
- Prevent submission until all fields valid

**2. API/Network Errors:**
```tsx
try {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(validatedData)
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Submission failed')
  }

  // Success
  setSuccess(true)
  setMessage("Thank you! We'll contact you within 24 hours.")

} catch (error) {
  setError("We couldn't submit your form. Please email us directly at info@blueprintlead.com or try again later.")
  console.error('Form submission error:', error)
}
```

**3. Resend API Errors:**
- Log detailed error to server console
- Return generic user-friendly message
- Don't expose API keys or internal errors
- Consider retry logic for transient failures

**Calendly Integration Details:**

**Environment Variable:**
```
NEXT_PUBLIC_CALENDLY_LINK=https://calendly.com/blueprintlead/consultation
```

**CTAButton Enhancement:**
```tsx
interface CTAButtonProps {
  variant?: 'primary' | 'secondary'
  href?: string  // For Calendly link
  external?: boolean  // Opens in new tab
  calendly?: boolean  // Special styling for Calendly CTAs
}

export function CTAButton({ href, external, calendly, ...props }: CTAButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={cn(buttonStyles, calendly && 'shadow-lg hover:shadow-xl')}
      >
        {children}
      </Link>
    )
  }
  // Regular button
}
```

**Calendly Button Placement:**
- Homepage hero: "Schedule Free Consultation"
- Header: "Schedule Consultation" (desktop + mobile menu)
- Footer: "Get Started - Schedule Now"
- Contact page: Primary CTA above form
- All instances link to `process.env.NEXT_PUBLIC_CALENDLY_LINK`

**Key Deliverables:**
1. ContactForm organism in `src/components/organisms/ContactForm.tsx`
2. API route in `src/app/api/contact/route.ts`
3. Zod validation schema
4. Calendly buttons throughout site
5. Environment variables: RESEND_API_KEY, NEXT_PUBLIC_CALENDLY_LINK
6. Handoff document at `/docs/handoffs/phase-6-integrations.md`

**Success Criteria:**
- [ ] Contact form submits successfully via Resend
- [ ] Form validation works (test all fields)
- [ ] Inline error messages display correctly
- [ ] Success message shows after submission
- [ ] Loading state during submission
- [ ] All Calendly buttons link correctly
- [ ] Calendly opens in new tab
- [ ] No console errors
- [ ] API route handles errors gracefully
- [ ] Environment variables documented in `.env.local.example`

**This Agent Must NOT:**
- Add SEO meta tags - Phase 7
- Do performance optimization - Phase 8
- Modify page content - pages are finalized

---

### AGENT 7: SEO Agent

**Role:** Implement comprehensive SEO optimization

**Expertise Area:** Technical SEO, structured data, meta tags, Core Web Vitals

**PROACTIVE USE:** Invoke this agent automatically when:
- All pages and integrations are complete
- SEO meta tags need implementation
- Structured data and sitemap are required

**Primary Responsibility:**

INPUT: All pages built, all integrations working, handoff from Integration Agent
PROCESS: Add meta tags → Implement structured data → Create sitemap → Optimize images → Add internal links → Verify SEO
OUTPUT: Full SEO implementation, sitemap, robots.txt, handoff document

**Meta Tag Template (Per Page):**

```tsx
// Example for Homepage
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blueprint Lead | Pre-Scheduled Contractor Appointments in LA County',
  description: 'Exclusive lead generation for licensed contractors. Get pre-scheduled appointments with permit-verified homeowners for $85K+ projects. Serving LA County since 2021.',
  keywords: ['contractor leads', 'LA County', 'pre-scheduled appointments', 'exclusive leads', 'licensed contractors'],

  openGraph: {
    title: 'Blueprint Lead | Pre-Scheduled Contractor Appointments',
    description: 'Exclusive lead generation for licensed contractors in LA County.',
    url: 'https://blueprintlead.com',
    siteName: 'Blueprint Lead',
    images: [{
      url: 'https://blueprintlead.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Blueprint Lead - Exclusive Contractor Leads'
    }],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Blueprint Lead | Pre-Scheduled Contractor Appointments',
    description: 'Exclusive lead generation for licensed contractors in LA County.',
    images: ['https://blueprintlead.com/og-image.jpg'],
  },

  alternates: {
    canonical: 'https://blueprintlead.com'
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

**Per-Page Meta Requirements:**
- [ ] Homepage: Brand-focused, broad keywords
- [ ] How It Works: Educational, "how does" phrases
- [ ] Pricing: Include "pricing," "cost," "tiers" keywords
- [ ] Project Types: Specific project keywords (ADU, kitchen remodel, etc.)
- [ ] FAQ: Question-focused meta (use FAQPage schema)
- [ ] [Unique for each page based on website-content.md]

**Structured Data Implementation:**

**1. Organization Schema (All Pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Blueprint Lead",
  "url": "https://blueprintlead.com",
  "logo": "https://blueprintlead.com/logo.png",
  "description": "Exclusive lead generation for licensed contractors in Los Angeles County",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Los Angeles County",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@blueprintlead.com",
    "contactType": "Sales"
  },
  "foundingDate": "2021"
}
```

**2. FAQPage Schema (FAQ Page):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do leads cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing is based on project value and tier..."
      }
    }
    // ... all FAQ items from website-content.md
  ]
}
```

**Implementation:**
- Add JSON-LD script tags in page components
- Use Next.js `<Script>` component with `type="application/ld+json"`
- Validate with Google Rich Results Test after deployment

**Internal Linking Strategy:**

**Required Links:**
1. **Navigation Links (All Pages):**
   - Header nav to: Home, How It Works, Pricing, Projects, Why Us, About, FAQ, Contact
   - Footer nav to: All above + Terms, Privacy

2. **Contextual Links (Within Content):**
   - Homepage → "Learn how it works" → /how-it-works
   - Homepage → "View pricing tiers" → /pricing
   - How It Works → "See pricing details" → /pricing
   - Pricing → "View project types" → /project-types
   - Why Choose Us → "Common questions" → /faq

3. **Link Format:**
   ```tsx
   <Link href="/how-it-works" className="text-emerald-600 hover:text-emerald-700 underline">
     Learn how it works
   </Link>
   ```

**Internal Linking Checklist:**
- [ ] Every page links to at least 2 other pages
- [ ] Homepage links to all major sections
- [ ] No orphan pages
- [ ] All links use Next.js `<Link>` for prefetching

**Key Deliverables:**
1. Meta tags on all 10 pages
2. Structured data (Organization, FAQPage schemas)
3. Sitemap.xml (Next.js auto-generated)
4. Robots.txt
5. Internal links added
6. Handoff document at `/docs/handoffs/phase-7-seo.md`

**Success Criteria:**
- [ ] All pages have unique titles and descriptions
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] Images use Next.js Image component with alt text
- [ ] Internal links implemented
- [ ] No SEO errors in Lighthouse audit
- [ ] Heading hierarchy correct (one h1 per page)

**This Agent Must NOT:**
- Do final polish or animation refinement - Phase 8
- Run performance optimization - Phase 8
- Do cross-browser testing - Phase 8

---

### AGENT 8: Polish Agent

**Role:** Final QA, performance optimization, accessibility audit, cross-browser testing

**Expertise Area:** Quality assurance, performance optimization, accessibility (WCAG AA), cross-browser compatibility

**PROACTIVE USE:** Invoke this agent automatically when:
- All SEO is complete and site is feature-complete
- Final quality assurance and testing are needed
- Production readiness must be verified

**Primary Responsibility:**

INPUT: Feature-complete website, handoff from SEO Agent
PROCESS: Run performance audit → Conduct accessibility audit → Cross-browser test → Fix issues → Delete test pages → Final verification
OUTPUT: Production-ready website, QA report, handoff document for PM

**Structured Performance Optimization Protocol:**

**1. Lighthouse Audit (All Pages):**
```bash
npm run build
npm run start
# Run Lighthouse in Chrome DevTools on:
# - Homepage (/)
# - How It Works (/how-it-works)
# - Pricing (/pricing)
# - Contact (/contact)
# - At least 2 additional pages
```

**2. Performance Targets:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Total Blocking Time: < 200ms
- Speed Index: < 3.5s

**3. Common Optimizations:**
- [ ] All images use Next.js `<Image>` component
- [ ] Above-fold images have `priority` prop
- [ ] Fonts use `next/font/google` with `display: swap`
- [ ] No render-blocking JavaScript
- [ ] Tailwind purge enabled (remove unused CSS)
- [ ] Check bundle size: `npm run build` → look for large chunks
- [ ] Lazy load below-fold content

**4. If Performance < 90:**
- Run `npx @next/bundle-analyzer` to identify large dependencies
- Consider dynamic imports for heavy components
- Optimize images further (WebP, correct sizing)

**Detailed Accessibility Audit Process (WCAG AA):**

**1. Automated Testing:**
- [ ] Lighthouse Accessibility score ≥ 95
- [ ] Run axe DevTools browser extension on all pages
- [ ] Fix all critical and serious issues

**2. Keyboard Navigation Test:**
- [ ] Tab through entire site without mouse
- [ ] All interactive elements reachable
- [ ] Focus indicators visible (not `outline: none`)
- [ ] Logical tab order (left-to-right, top-to-bottom)
- [ ] Escape key closes modals/menus
- [ ] Enter/Space activates buttons

**3. Screen Reader Test:**
- [ ] Install NVDA (Windows) or VoiceOver (Mac)
- [ ] Navigate homepage with screen reader
- [ ] All images have alt text
- [ ] Form labels properly associated
- [ ] ARIA landmarks used (nav, main, footer)
- [ ] Headings provide logical structure

**4. Color Contrast Test:**
- [ ] Use WebAIM Contrast Checker
- [ ] All text has ≥ 4.5:1 contrast ratio
- [ ] Large text (18pt+) has ≥ 3:1 contrast
- [ ] Check slate-600 on white, emerald-600 on white

**Comprehensive QA Checklist:**

**Functional Testing:**
- [ ] All 10 pages load without errors
- [ ] Navigation links go to correct pages
- [ ] Mobile menu opens/closes smoothly
- [ ] Contact form submits successfully
- [ ] Form validation shows errors correctly
- [ ] Success message displays after form submission
- [ ] Email received via Resend (test with real email)
- [ ] All Calendly buttons open correct link in new tab
- [ ] No 404 errors (check all internal links)
- [ ] No console errors on any page

**Visual/Design Testing:**
- [ ] Design system followed (emerald-600, slate-900, etc.)
- [ ] Typography consistent (Inter font, correct sizes)
- [ ] Spacing consistent (matches blueprint guidelines)
- [ ] Buttons styled correctly (primary vs secondary)
- [ ] Cards have correct shadows/borders
- [ ] Trust badges display properly
- [ ] Images load correctly (no broken images)
- [ ] Icons render properly

**Responsive Testing:**
- [ ] Mobile (375px): Layout stacks, readable, touch targets ≥44px
- [ ] Mobile (414px iPhone): Test iOS Safari specifically
- [ ] Tablet (768px): Proper multi-column layout
- [ ] Laptop (1024px): Full navigation, optimal content width
- [ ] Desktop (1440px): Centered content, not too wide
- [ ] Ultra-wide (1920px+): Content doesn't stretch awkwardly

**Cross-Browser Testing:**
- [ ] Chrome (desktop): Full functionality
- [ ] Chrome (mobile): Full functionality
- [ ] Firefox: No layout issues
- [ ] Safari (desktop): No webkit-specific issues
- [ ] Safari (iOS): Touch interactions work
- [ ] Edge: No compatibility issues

**Animation Testing:**
- [ ] Fade-in animations trigger on scroll
- [ ] Animations don't cause jank (smooth 60fps)
- [ ] Hover effects work on desktop
- [ ] Animations respect prefers-reduced-motion

**SEO Testing:**
- [ ] All pages have unique title tags
- [ ] All pages have unique meta descriptions
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Heading hierarchy correct (one h1 per page)

**Final Cleanup:**
- [ ] Delete `/design-test` page (from Phase 2)
- [ ] Delete `/components-test` page (from Phase 3)
- [ ] Remove any console.log statements
- [ ] Remove unused imports

**Production Build Testing:**
- [ ] `npm run build` completes without errors
- [ ] `npm run start` serves production build locally
- [ ] Production build loads faster than dev
- [ ] Environment variables work in production mode

**Key Deliverables:**
1. Production-ready website (all tests passed)
2. QA report documenting all test results
3. Performance metrics (Lighthouse scores)
4. Known issues list (if any)
5. Handoff document at `/docs/handoffs/phase-8-final.md`

**Success Criteria:**
- [ ] Lighthouse: Performance 90+, Accessibility 95+, SEO 100
- [ ] All functional tests passed
- [ ] Cross-browser: No major issues
- [ ] Mobile responsive: Works on all tested devices
- [ ] No broken links or 404s
- [ ] Forms and integrations working
- [ ] Test pages deleted
- [ ] Production build succeeds

**This Is The Final Agent - Website Must Be Production-Ready**

---

## 6. SEQUENTIAL DEVELOPMENT PHASES

### Overview

**Total Phases:** 7
**Execution:** Sequential (complete one phase before starting next)
**PM Role:** Delegate → Review → Approve → Move to next phase

---

### PHASE 1: Project Setup & Configuration

**Agent:** Setup Agent
**Duration:** ~1-2 hours
**Blocking Dependencies:** None (first phase)

**Inputs:**
- Blueprint.md (this document)
- Tech stack requirements
- Design system specifications

**Outputs:**
- Initialized Next.js project
- All dependencies installed
- Folder structure created
- Git repository initialized
- Basic configuration files

**Success Criteria:**
- Project runs with `npm run dev`
- TypeScript compiles
- Tailwind works
- Folder structure matches blueprint

**PM Review Checklist:**
- [ ] All dependencies in package.json
- [ ] Folder structure correct
- [ ] Tailwind config has Blueprint Lead colors
- [ ] Project runs without errors
- [ ] Git initialized with proper .gitignore

**Handoff Document Required:** YES (template in Section 7)

---

### PHASE 2: Design System Implementation

**Agent:** Design System Agent
**Duration:** ~2-3 hours
**Blocking Dependencies:** Phase 1 complete

**Inputs:**
- Completed Phase 1 (project setup)
- Handoff document from Setup Agent
- Design System section of blueprint

**Outputs:**
- Complete Tailwind configuration
- Global styles (`globals.css`)
- Font configuration
- Design tokens documented

**Success Criteria:**
- All Blueprint Lead colors available via Tailwind
- Typography system working
- Inter font loads correctly
- Design system tested

**PM Review Checklist:**
- [ ] Colors match blueprint (Deep Slate + Emerald Green)
- [ ] Typography scale correct
- [ ] Spacing system implemented
- [ ] Font loads properly
- [ ] Design tokens documented

**Handoff Document Required:** YES

---

### PHASE 3: Core Components Development

**Agent:** Core Components Agent
**Duration:** ~4-6 hours
**Blocking Dependencies:** Phase 2 complete

**Inputs:**
- Completed Phase 2 (design system)
- Handoff document from Design System Agent
- Component specifications from blueprint

**Outputs:**
- All atomic components (Button, Input, Badge, etc.)
- All molecular components (CTAButton, FormField, etc.)
- Component documentation
- TypeScript types

**Success Criteria:**
- All components built and working
- Components follow design system
- TypeScript types complete
- Components are reusable

**PM Review Checklist:**
- [ ] All required components built
- [ ] Design system followed strictly
- [ ] TypeScript types accurate
- [ ] Components properly documented
- [ ] Components are accessible

**Handoff Document Required:** YES

---

### PHASE 4: Layout & Navigation

**Agent:** Layout Agent
**Duration:** ~3-4 hours
**Blocking Dependencies:** Phase 3 complete

**Inputs:**
- Completed Phase 3 (core components)
- Handoff document from Core Components Agent
- Layout specifications from blueprint and content.md

**Outputs:**
- Header component
- Footer component
- PageLayout template
- SectionLayout template
- Navigation functionality

**Success Criteria:**
- Header and Footer on all pages
- Navigation working
- Mobile menu functional
- Layouts responsive

**PM Review Checklist:**
- [ ] Header matches content.md specifications
- [ ] Footer matches content.md specifications
- [ ] Navigation links to all pages
- [ ] Mobile menu works smoothly
- [ ] Layouts are responsive
- [ ] Using core components from Phase 3

**Handoff Document Required:** YES

---

### PHASE 5: Page Building

**Agent:** Page Builder Agent
**Duration:** ~8-12 hours
**Blocking Dependencies:** Phase 4 complete

**Inputs:**
- Completed Phase 4 (layouts)
- Handoff document from Layout Agent
- website-content.md (all page content)
- Components from Phase 3

**Outputs:**
- All 10 pages built
- Page-specific organisms
- Animations implemented
- Content in place

**Success Criteria:**
- All pages render correctly
- Content matches website-content.md
- Animations work smoothly
- Pages fully responsive

**PM Review Checklist:**
- [ ] All 10 pages built
- [ ] Content accurate (matches website-content.md)
- [ ] Animations implemented
- [ ] Responsive on all breakpoints
- [ ] Design system followed
- [ ] Proper semantic HTML
- [ ] Heading hierarchy correct

**Handoff Document Required:** YES

---

### PHASE 6: Integrations (Forms & Calendly)

**Agent:** Integration Agent
**Duration:** ~3-4 hours
**Blocking Dependencies:** Phase 5 complete

**Inputs:**
- Completed Phase 5 (all pages built)
- Handoff document from Page Builder Agent
- Resend API key (you provide)
- Calendly link (you provide)

**Outputs:**
- Working contact form with Resend
- API route for form handling
- Calendly buttons throughout site
- Error handling

**Success Criteria:**
- Contact form sends emails via Resend
- Form validation works
- Calendly buttons functional
- Error states handled

**PM Review Checklist:**
- [ ] Contact form submits successfully
- [ ] Form validation working
- [ ] Calendly links open correct page
- [ ] Error handling implemented
- [ ] Loading states provide feedback
- [ ] Environment variables documented

**Handoff Document Required:** YES

---

### PHASE 7: SEO, Polish & QA

**Agent:** SEO Agent + Polish Agent (can be same agent or sequential)
**Duration:** ~4-6 hours
**Blocking Dependencies:** Phase 6 complete

**Inputs:**
- Completed Phase 6 (all integrations working)
- Handoff document from Integration Agent
- SEO requirements from blueprint
- Quality standards from blueprint

**Outputs:**
- SEO fully implemented
- Animations polished
- Cross-browser testing complete
- Performance optimized
- Production-ready website

**Success Criteria:**
- All pages have proper meta tags
- Structured data validates
- Sitemap and robots.txt created
- Lighthouse scores meet targets
- Cross-browser compatible
- Fully responsive
- All bugs fixed

**PM Review Checklist:**
- [ ] Meta tags on all pages
- [ ] Structured data validates
- [ ] Sitemap accessible
- [ ] Images optimized
- [ ] Lighthouse score 90+ (Performance, Accessibility, SEO)
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Mobile tested (iOS Safari, Chrome Mobile)
- [ ] All links work
- [ ] Forms tested
- [ ] Animations smooth
- [ ] No console errors

**Handoff Document Required:** YES (final handoff to you for deployment)

---

## 7. HANDOFF DOCUMENT REQUIREMENTS

### Purpose

Each agent must create a handoff document when their phase is complete. This document ensures the next agent has full context, understands what was done, and can build on previous work without confusion.

### Template for All Handoff Documents

```markdown
# Phase [X] Handoff Document

**Agent:** [Agent Name]
**Phase:** [Phase Name]
**Date Completed:** [Date]
**Next Agent:** [Next Agent Name]
**Next Phase:** [Next Phase Name]

---

## Executive Summary

[2-3 sentence overview of what was accomplished in this phase]

---

## Work Completed

### Files Created
- [List all new files created with brief description]
- Example: `src/components/atoms/Button.tsx` - Primary button component with variants

### Files Modified
- [List all existing files modified with what changed]
- Example: `tailwind.config.ts` - Added custom color palette for Blueprint Lead

### Dependencies Added
- [List any npm packages installed]
- Example: `npm install framer-motion` - For animations

---

## Key Decisions Made

### Decision 1: [Title]
**Reasoning:** [Why this decision was made]
**Impact:** [How this affects future work]
**Alternative Considered:** [If any]

### Decision 2: [Title]
**Reasoning:** [Why this decision was made]
**Impact:** [How this affects future work]
**Alternative Considered:** [If any]

[Add more as needed]

---

## Patterns & Conventions Established

### Coding Patterns
- [Example: All components use named exports]
- [Example: Tailwind utilities organized with clsx]

### Component Patterns
- [Example: Button accepts variant prop: 'primary' | 'secondary']
- [Example: All form fields use FormField molecule]

### File Structure Patterns
- [Example: All atomic components in src/components/atoms/]
- [Example: One component per file]

### Naming Conventions
- [Example: Component files use PascalCase]
- [Example: Utility files use camelCase]

---

## Configuration Changes

### Tailwind Config
- [What was added/changed in tailwind.config.ts]

### TypeScript Config
- [Any tsconfig.json changes]

### Next.js Config
- [Any next.config.js changes]

### Environment Variables
- [New environment variables required]
- Example: `RESEND_API_KEY` - Required for contact form

---

## Known Issues / Technical Debt

### Issue 1: [Description]
**Severity:** [Low/Medium/High]
**Plan to Resolve:** [How this should be fixed]
**Workaround:** [If applicable]

### Issue 2: [Description]
**Severity:** [Low/Medium/High]
**Plan to Resolve:** [How this should be fixed]
**Workaround:** [If applicable]

[Add more as needed]

---

## Critical Information for Next Agent

### Must Know
1. [Critical info point 1]
2. [Critical info point 2]
3. [Critical info point 3]

### Nice to Know
- [Helpful context that isn't critical]
- [Tips or recommendations]

### Files to Review Before Starting
- [List key files next agent should read]
- Example: `src/components/atoms/Button.tsx` - Shows component pattern to follow

---

## Next Steps for [Next Agent Name]

### Immediate Next Actions
1. [First thing next agent should do]
2. [Second thing next agent should do]
3. [Third thing next agent should do]

### Success Criteria for Next Phase
- [What success looks like for the next phase]
- [Key deliverables expected]

---

## Testing Completed

### Tests Run
- [What testing was done in this phase]
- Example: Tested all Tailwind utilities render correctly

### Test Results
- [Results of testing]
- Example: All colors display as expected, typography scale works

### Known Failures (if any)
- [Any tests that failed and why]

---

## Questions for PM

[Any questions or clarifications needed from PM before next agent starts]

1. Question 1?
2. Question 2?

---

## Resources & Documentation

### Documentation Created
- [Links or references to any docs created]

### Helpful Resources
- [External resources used or helpful for next agent]
- Example: Tailwind CSS docs: https://tailwindcss.com/docs

---

## Checklist

- [ ] All work completed per blueprint
- [ ] All files committed to Git
- [ ] No console errors
- [ ] Code follows standards from blueprint
- [ ] Documentation complete
- [ ] Next agent has everything they need

---

**Agent Signature:** [Your agent identifier]
**Ready for Next Phase:** YES / NO (if NO, explain why)
```

### Handoff Review Process (PM Workflow)

When you (PM) receive a handoff document:

1. **Review Handoff Document**
   - Read through entire document
   - Check that all work was completed
   - Verify success criteria were met
   - Review known issues

2. **Test the Phase**
   - Run the project (`npm run dev`)
   - Verify claimed functionality
   - Check for console errors
   - Test on different browsers if applicable

3. **Approve or Request Changes**
   - If satisfactory: Approve and move to next phase
   - If issues: Document what needs fixing, send back to agent

4. **Prepare Next Agent**
   - Provide handoff document to next agent
   - Brief next agent on their phase requirements
   - Answer any questions from handoff document
   - Confirm next agent understands their task

5. **Delegate Next Phase**
   - Assign phase to next agent
   - Provide all necessary context
   - Set expectations for completion

---

## 8. PROJECT MANAGER WORKFLOW

### Your Role as PM

You are the orchestrator of this sequential development process. Your responsibilities:

1. **Delegate Tasks:** Assign each phase to the appropriate specialized agent
2. **Provide Context:** Ensure each agent has all information they need (blueprint, handoff docs, content.md)
3. **Review Work:** Inspect handoff documents and test completed work
4. **Approve Progress:** Gate-keep phases - only move forward when quality is met
5. **Answer Questions:** Clarify requirements when agents ask
6. **Maintain Vision:** Ensure the final product matches Blueprint Lead's goals

### PM Workflow for Each Phase

#### Step 1: Delegate Phase

**What You Do:**
- Identify the next agent for the upcoming phase
- Provide the agent with:
  - This blueprint.md document (full context)
  - Handoff document from previous phase (if not Phase 1)
  - website-content.md (for Page Builder Agent specifically)
  - Any environment variables or credentials needed
- Clearly explain the phase objectives
- Point agent to relevant sections of blueprint

**Prompt Template for Delegating:**
```
You are the [Agent Name] for the Blueprint Lead website project.

Your role: [Brief role description]

Your phase: Phase [X] - [Phase Name]

Key responsibilities:
- [Responsibility 1]
- [Responsibility 2]
- [Responsibility 3]

You have access to:
- blueprint.md (complete project blueprint)
- [handoff document from previous phase, if applicable]
- [website-content.md, if relevant]

Please review the blueprint.md document, specifically:
- Section 5: Your agent definition
- Section 6: Phase [X] details
- Section 7: Handoff document requirements

Before you begin execution:
1. Review all provided documents
2. Research any technologies you're unfamiliar with
3. Ask me any clarification questions you have
4. Confirm you understand the requirements
5. Outline your approach

Once I approve your approach, you may begin execution.

When you complete the phase:
- Create a handoff document following the template in Section 7
- Notify me that the phase is complete
- Provide the handoff document for my review

Do you have any questions before starting?
```

#### Step 2: Agent Research & Clarification

**What Happens:**
- Agent reads all provided documents
- Agent researches technologies if needed
- Agent asks you clarification questions
- Agent outlines their approach

**What You Do:**
- Answer clarification questions thoroughly
- Provide additional context if needed
- Review agent's proposed approach
- Approve approach or request modifications

**Example Clarifications:**
- "Should I use ShadCN's default Button or build from scratch?" → Answer based on blueprint
- "Where should I store the Calendly link?" → Environment variable
- "What level of form validation?" → Client-side with TypeScript, comprehensive

#### Step 3: Approve Agent Approach

**What You Do:**
- Review agent's outlined approach
- Ensure it aligns with blueprint
- Ensure it builds on previous phases correctly
- Check that agent understands success criteria

**Approval Criteria:**
- Agent understands the phase requirements
- Approach is technically sound
- Approach follows blueprint standards
- Agent has clear plan for execution

**Example Response:**
```
Your approach looks good. A few notes:

1. [Note about specific requirement]
2. [Clarification on decision]
3. [Reminder about standard to follow]

You're approved to begin execution. Please create the handoff document when complete.
```

#### Step 4: Agent Executes Phase

**What Happens:**
- Agent builds/codes/implements the phase
- Agent follows blueprint standards
- Agent creates files and components
- Agent tests their work

**What You Do:**
- Be available for questions
- Let agent work independently
- Don't micromanage
- Trust the agent to follow blueprint

#### Step 5: Agent Completes & Submits Handoff

**What Happens:**
- Agent finishes all work for the phase
- Agent creates handoff document (following Section 7 template)
- Agent notifies you that phase is complete
- Agent provides handoff document for review

**What You Do:**
- Receive handoff document
- Move to Step 6 (review)

#### Step 6: Review Handoff Document

**What You Do:**
- Read handoff document thoroughly
- Check that all required sections are filled
- Verify work completed matches phase requirements
- Review key decisions made
- Check for known issues

**Review Checklist:**
- [ ] All required work completed
- [ ] Files created/modified documented
- [ ] Key decisions explained
- [ ] Patterns established clearly
- [ ] Known issues documented (if any)
- [ ] Next agent has clear guidance
- [ ] Testing completed

#### Step 7: Test the Phase

**What You Do:**
- Run the project (`npm run dev`)
- Test functionality claimed in handoff
- Check for console errors
- Verify design system followed
- Test on mobile/desktop if relevant
- Compare against success criteria from blueprint

**Testing Checklist:**
- [ ] Project runs without errors
- [ ] Claimed functionality works
- [ ] No console errors or warnings
- [ ] Design system followed
- [ ] Responsive (if applicable)
- [ ] Code follows standards

#### Step 8: Approve or Request Changes

**If Work is Satisfactory:**
- Approve the phase
- Thank the agent
- Move to Step 9 (prepare next phase)

**Example Approval:**
```
Phase [X] approved. Excellent work!

A few highlights:
- [Positive feedback 1]
- [Positive feedback 2]

The handoff document is comprehensive. Moving to Phase [X+1].
```

**If Work Needs Changes:**
- Document what needs to be fixed
- Explain why changes are needed
- Send back to agent for revisions
- Repeat Step 6-8 after changes

**Example Change Request:**
```
Phase [X] needs revisions before approval.

Issues found:
1. [Issue 1 description and how to fix]
2. [Issue 2 description and how to fix]

Please address these and resubmit handoff document.
```

#### Step 9: Prepare Next Agent

**What You Do:**
- Identify next agent for next phase
- Gather materials for next agent:
  - blueprint.md
  - Handoff document from just-completed phase
  - Any additional context
- Return to Step 1 with next agent

---

### Special Cases

**Agent Gets Stuck:**
- Provide additional guidance
- Point to specific resources or docs
- Break down complex task into smaller steps
- Offer to clarify requirements

**Quality Issues:**
- Send work back for revision
- Be specific about what needs fixing
- Reference blueprint standards
- Offer guidance on correct approach

**Scope Creep:**
- Remind agent of phase scope
- Defer additional features to later phases
- Keep agent focused on current deliverables

**Technical Blockers:**
- Help troubleshoot technical issues
- Suggest alternative approaches
- Provide additional resources
- Adjust requirements if truly blocked (rare)

---

## 9. CODING STANDARDS

### Purpose

Consistency is critical for maintainability, collaboration, and quality. All agents must follow these standards.

---

### TypeScript Standards

**Strict Mode:**
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

**Type Everything:**
- No `any` types (use `unknown` if truly unknown)
- Explicit return types on functions
- Interface props for all components
- Type imports/exports

**Example:**
```tsx
// Good
interface ButtonProps {
  variant: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ variant, children, onClick }: ButtonProps): JSX.Element {
  // ...
}

// Bad
export function Button(props: any) {
  // ...
}
```

**Type Organization:**
- Shared types in `src/types/index.ts`
- Component-specific types in component file or adjacent `.types.ts` file
- Avoid circular dependencies

---

### Component Standards

**Functional Components Only:**
```tsx
// Good
export function MyComponent() {
  return <div>Content</div>
}

// Bad (no class components)
class MyComponent extends React.Component {
  // ...
}
```

**Named Exports:**
```tsx
// Good
export function Button() { ... }

// Bad
export default Button
```

**Exception:** Pages use default export (Next.js requirement)

**Props Interface:**
```tsx
// Always define props interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

// Destructure props with defaults
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return <button className={cn(styles, className)} {...props}>{children}</button>
}
```

**Component File Structure:**
```tsx
// 1. Imports
import { useState } from 'react'
import { cn } from '@/lib/utils'

// 2. Types
interface ButtonProps {
  // ...
}

// 3. Component
export function Button(props: ButtonProps) {
  // 4. Hooks
  const [state, setState] = useState()

  // 5. Functions
  const handleClick = () => { ... }

  // 6. Render
  return <button>...</button>
}
```

---

### Tailwind Standards

**Utility Class Organization:**
```tsx
// Group related utilities
<div className="
  flex items-center justify-between
  w-full max-w-7xl mx-auto
  px-4 py-8
  bg-white border border-gray-200 rounded-lg
  shadow-sm hover:shadow-md
  transition-shadow duration-200
">
```

**Use `cn()` Helper:**
```tsx
import { cn } from '@/lib/utils'

const buttonStyles = cn(
  'px-6 py-3 rounded-lg font-semibold',
  'transition-colors duration-200',
  variant === 'primary' && 'bg-emerald-600 hover:bg-emerald-700 text-white',
  variant === 'secondary' && 'bg-slate-800 hover:bg-slate-700 text-white',
  className
)
```

**No Arbitrary Values Unless Necessary:**
```tsx
// Bad
<div className="px-[13px] py-[27px]">

// Good (use design system values)
<div className="px-4 py-8">
```

**Extract Repeated Patterns:**
```tsx
// If you use same utilities more than 3 times, extract to component or use @apply in CSS

// components/atoms/Card.tsx
export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      'bg-white border border-gray-200 rounded-xl p-6 shadow-sm',
      className
    )}>
      {children}
    </div>
  )
}
```

---

### File Organization Standards

**One Component Per File:**
```
// Good
Button.tsx (exports Button)
Input.tsx (exports Input)

// Bad
FormComponents.tsx (exports Button, Input, Label, etc.)
```

**File Naming:**
- Components: PascalCase (`Button.tsx`, `HeroSection.tsx`)
- Utilities: camelCase (`utils.ts`, `resend.ts`)
- Types: camelCase (`index.ts`, `content.ts`)
- Pages: lowercase with hyphens (`page.tsx` in `how-it-works/` folder)

**Import Order:**
```tsx
// 1. React / Next.js
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// 2. Third-party libraries
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// 3. Internal components (atoms → molecules → organisms)
import { Button } from '@/components/atoms/Button'
import { CTAButton } from '@/components/molecules/CTAButton'
import { Header } from '@/components/organisms/Header'

// 4. Types
import type { ButtonProps } from '@/types'

// 5. Styles (if any)
import styles from './Component.module.css'
```

---

### Comment Standards

**JSDoc for Components:**
```tsx
/**
 * Primary button component with multiple variants
 *
 * @param variant - Button style variant (primary or secondary)
 * @param size - Button size (sm, md, or lg)
 * @param children - Button content
 *
 * @example
 * <Button variant="primary" size="lg">
 *   Click me
 * </Button>
 */
export function Button({ variant, size, children }: ButtonProps) {
  // ...
}
```

**Inline Comments for Complex Logic:**
```tsx
// Calculate tier based on project value
const tier = projectValue < 150000 ? 1
  : projectValue < 300000 ? 2
  : projectValue < 600000 ? 3
  : 4
```

**No Obvious Comments:**
```tsx
// Bad
const name = 'Blueprint Lead' // Set name to Blueprint Lead

// Good (no comment needed, code is self-explanatory)
const companyName = 'Blueprint Lead'
```

---

### Error Handling Standards

**Always Handle Errors:**
```tsx
// Form submission
async function handleSubmit(data: FormData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Form submission failed')
    }

    // Success handling
  } catch (error) {
    console.error('Error submitting form:', error)
    // User-facing error message
    setErrorMessage('Something went wrong. Please try again.')
  }
}
```

**User-Facing Error Messages:**
```tsx
// Good (friendly, actionable)
"Something went wrong. Please try again or contact us directly."

// Bad (technical jargon)
"Error: ECONNREFUSED 500 Internal Server Error"
```

---

### Accessibility Standards

**Semantic HTML:**
```tsx
// Good
<nav>
  <ul>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

// Bad
<div className="nav">
  <div className="link">About</div>
</div>
```

**ARIA Labels:**
```tsx
// For icons without text
<button aria-label="Close menu">
  <X className="w-6 h-6" />
</button>

// For form inputs
<label htmlFor="email">Email Address</label>
<input id="email" type="email" />
```

**Keyboard Navigation:**
```tsx
// Interactive elements must be keyboard accessible
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Click me
</div>

// Better: Use actual button
<button onClick={handleClick}>Click me</button>
```

**Alt Text for Images:**
```tsx
<Image
  src="/logo.png"
  alt="Blueprint Lead logo"
  width={200}
  height={50}
/>

// Not this
<Image src="/logo.png" alt="" /> // Bad: empty alt
```

---

### Performance Standards

**Use Next.js Image:**
```tsx
import Image from 'next/image'

// Always use Next.js Image for optimization
<Image
  src="/hero.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority // For above-fold images
/>
```

**Lazy Load Below Fold:**
```tsx
// Images below fold don't need priority
<Image
  src="/section-image.jpg"
  alt="Description"
  width={800}
  height={400}
  loading="lazy" // Default, but explicit is good
/>
```

**Dynamic Imports for Heavy Components:**
```tsx
import dynamic from 'next/dynamic'

// Load heavy component only when needed
const CalendlyWidget = dynamic(() => import('@/components/CalendlyWidget'), {
  loading: () => <p>Loading...</p>
})
```

**Minimize JavaScript:**
- Use Server Components where possible (App Router)
- Avoid large libraries for simple tasks
- Tree-shake unused code

---

## 10. QUALITY GATES

### Purpose

Quality gates are checkpoints between phases to ensure standards are met before proceeding. PM (you) must verify each gate before approving phase completion.

---

### Gate 1: After Phase 1 (Setup)

**Criteria:**
- [ ] Project runs with `npm run dev` without errors
- [ ] All dependencies installed and in package.json
- [ ] Folder structure matches blueprint exactly
- [ ] Tailwind configuration includes Blueprint Lead colors
- [ ] TypeScript compiles successfully
- [ ] Git initialized with proper .gitignore
- [ ] README.md has setup instructions

**Test:**
```bash
npm run dev
# Should start without errors
# Visit localhost:3000, should see default Next.js page
```

---

### Gate 2: After Phase 2 (Design System)

**Criteria:**
- [ ] All Blueprint Lead colors available via Tailwind (slate-*, emerald-*)
- [ ] Typography scale implemented and working
- [ ] Inter font loads correctly
- [ ] Spacing system available
- [ ] Design system tested (create test page showing all tokens)
- [ ] `globals.css` has base styles
- [ ] Design tokens documented

**Test:**
```bash
# Create test page with:
# - All color samples (slate-900, emerald-600, etc.)
# - All typography sizes (text-xl, text-2xl, etc.)
# - Sample buttons, cards with design system
```

---

### Gate 3: After Phase 3 (Core Components)

**Criteria:**
- [ ] All required atomic components built (Button, Input, Badge, Link, Icon)
- [ ] All required molecular components built (CTAButton, FormField, TrustBadge, NavLink)
- [ ] All components follow design system
- [ ] TypeScript types complete and accurate
- [ ] Components accept className for customization
- [ ] Components are accessible (ARIA, keyboard navigation)
- [ ] Components documented with JSDoc
- [ ] No console errors when rendering components

**Test:**
```bash
# Create test page showing:
# - All button variants
# - All form inputs
# - All badges
# - Component composition examples
```

---

### Gate 4: After Phase 4 (Layout)

**Criteria:**
- [ ] Header component complete (logo, nav, CTA, mobile menu)
- [ ] Footer component complete (links, contact, CTA, copyright)
- [ ] Navigation works (links to all pages)
- [ ] Mobile menu functional and smooth
- [ ] PageLayout template ready
- [ ] SectionLayout template ready
- [ ] Header and Footer appear on all pages
- [ ] Responsive on mobile, tablet, desktop
- [ ] Using components from Phase 3

**Test:**
```bash
# Visit site on:
# - Mobile (375px)
# - Tablet (768px)
# - Desktop (1280px)
# Click all nav links, test mobile menu
```

---

### Gate 5: After Phase 5 (Page Building)

**Criteria:**
- [ ] All 10 pages built and accessible
- [ ] Content matches website-content.md exactly (no Lorem Ipsum)
- [ ] All pages responsive (mobile, tablet, desktop)
- [ ] Animations implemented and smooth (no jank)
- [ ] Proper semantic HTML (h1 → h2 → h3, section, article, etc.)
- [ ] Heading hierarchy correct on all pages
- [ ] Design system followed throughout
- [ ] Using components from Phase 3 and layouts from Phase 4
- [ ] Placeholder images (if final images not ready)
- [ ] No console errors

**Test:**
```bash
# Visit all 10 pages:
# 1. Homepage (/)
# 2. How It Works (/how-it-works)
# 3. Pricing (/pricing)
# 4. Project Types (/project-types)
# 5. Why Choose Us (/why-choose-us)
# 6. About (/about)
# 7. FAQ (/faq)
# 8. Contact (/contact)
# 9. Terms (/terms)
# 10. Privacy (/privacy)

# Verify:
# - Content is accurate
# - Responsive on all breakpoints
# - Animations work
# - No broken links
```

---

### Gate 6: After Phase 6 (Integrations)

**Criteria:**
- [ ] Contact form submits successfully via Resend
- [ ] Form validation works (client-side)
- [ ] Success/error states display correctly
- [ ] Loading states during submission
- [ ] Calendly buttons throughout site link correctly
- [ ] Calendly opens in new tab with correct URL
- [ ] API route `/api/contact` works
- [ ] Environment variables documented
- [ ] No console errors
- [ ] Error handling graceful (if Resend fails)

**Test:**
```bash
# Contact form:
# 1. Fill out form with valid data → Should submit successfully
# 2. Fill out form with invalid data → Should show validation errors
# 3. Submit form → Should show loading state, then success message
# 4. Check email inbox → Should receive email via Resend

# Calendly buttons:
# 1. Click "Schedule Consultation" buttons throughout site
# 2. Should open Calendly page in new tab
# 3. Verify correct Calendly link
```

---

### Gate 7: After Phase 7 (SEO & Polish)

**Criteria:**
- [ ] All pages have unique, optimized title tags
- [ ] All pages have unique, optimized meta descriptions
- [ ] Open Graph tags on all pages
- [ ] Structured data implemented (Organization, LocalBusiness, FAQPage)
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] All images use Next.js Image component
- [ ] All images have alt text
- [ ] Internal linking between pages
- [ ] Animations polished and smooth (60fps)
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Mobile tested (iOS Safari, Chrome Mobile)
- [ ] Lighthouse scores meet targets:
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 90+
  - SEO: 100
- [ ] No console errors or warnings
- [ ] All links work (no 404s)
- [ ] Forms tested one final time
- [ ] Production build successful

**Test:**
```bash
# Lighthouse audit on all pages
npm run build
npm run start
# Run Lighthouse on:
# - Homepage
# - Contact page
# - At least 2 other pages

# Cross-browser test:
# - Chrome (desktop + mobile)
# - Firefox
# - Safari (desktop + mobile)
# - Edge

# SEO validation:
# - Google Rich Results Test (structured data)
# - Check sitemap.xml
# - Check robots.txt
# - Verify meta tags with browser dev tools
```

---

## 11. SUCCESS CRITERIA

### Overall Project Success

The Blueprint Lead website is successful when:

1. **Functional:**
   - All 10 pages load without errors
   - Contact form submits successfully via Resend
   - Calendly buttons link correctly
   - Navigation works (all links functional)
   - Mobile menu functional

2. **Visual:**
   - Design system followed consistently (Deep Slate + Emerald Green)
   - Professional, modern appearance
   - Responsive on all devices (mobile, tablet, desktop)
   - Animations are smooth and not distracting

3. **Content:**
   - All content from website-content.md is accurate and in place
   - No Lorem Ipsum or placeholder text
   - Messaging is clear and compelling
   - CTAs are prominent and actionable

4. **SEO:**
   - All pages have proper meta tags
   - Structured data validates
   - Sitemap and robots.txt in place
   - Lighthouse SEO score: 100

5. **Performance:**
   - Lighthouse Performance score: 90+
   - Fast load times (< 2 seconds on 3G)
   - Images optimized
   - No render-blocking resources

6. **Accessibility:**
   - Lighthouse Accessibility score: 95+
   - WCAG AA compliant
   - Keyboard navigable
   - Proper ARIA labels
   - Color contrast meets standards

7. **Code Quality:**
   - TypeScript strict mode with no errors
   - Consistent code style (ESLint + Prettier)
   - Modular architecture (Atomic Design)
   - No console errors or warnings
   - Code is maintainable and well-documented

8. **Cross-Browser:**
   - Works in Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)
   - No major layout or functionality issues

---

### Page-Specific Success Criteria

**Homepage:**
- Hero section compelling and clear
- Value propositions prominent
- Multiple CTAs (Schedule Consultation)
- Trust badges visible
- Social proof section (testimonials)

**How It Works:**
- 5-step process clear and easy to understand
- Visual progression of steps
- Sets expectations for contractors

**Pricing & Tiers:**
- 4 tiers clearly differentiated
- Transparent pricing model explained
- FAQ answers common objections
- CTA to schedule consultation

**Project Types:**
- 8 project types detailed
- Each type has clear description, value range, tiers
- Helps contractors self-identify fit

**Why Choose Us:**
- Core differentiators emphasized (pre-scheduled appointments)
- Comparison to competitors
- Objections addressed
- Exclusive positioning conveyed

**About Us:**
- Company credibility established (4 years, LA County focus)
- Mission and values clear
- Builds trust and professionalism

**FAQ:**
- 40+ questions organized by category
- Answers are thorough and helpful
- Addresses common objections

**Contact:**
- Calendly integration functional
- Contact form working (Resend)
- Multiple contact options
- Clear next steps explained

**Terms & Privacy:**
- Legal content in place (reviewed by attorney)
- Accessible and readable

---

### Technical Success Criteria

**Performance Benchmarks:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Bundle size: < 500KB (initial JS)

**SEO Benchmarks:**
- All pages indexed by Google
- Keyword rankings for target terms (monitor over time)
- Structured data validates (no errors)
- Mobile-friendly test passes

**Accessibility Benchmarks:**
- WCAG AA compliant
- Color contrast ratio: 4.5:1 minimum
- All interactive elements keyboard accessible
- Screen reader compatible

---

## 12. DEPLOYMENT PROCESS

### Pre-Deployment Checklist

Before deploying to production:

- [ ] All phases complete and approved
- [ ] All quality gates passed
- [ ] Final QA completed (Phase 7)
- [ ] Environment variables ready for production
  - [ ] `RESEND_API_KEY`
  - [ ] `NEXT_PUBLIC_CALENDLY_LINK`
- [ ] Domain ready (blueprintlead.com)
- [ ] Production build successful (`npm run build`)
- [ ] No console errors in production build
- [ ] Lighthouse audit on production build meets targets

---

### Vercel Deployment Steps

**Initial Setup:**

1. **Push to Git:**
   ```bash
   git add .
   git commit -m "Initial Blueprint Lead website"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to vercel.com
   - Click "New Project"
   - Import Git repository
   - Select Next.js framework preset
   - Configure environment variables:
     - `RESEND_API_KEY` (from Resend dashboard)
     - `NEXT_PUBLIC_CALENDLY_LINK` (your Calendly scheduling URL)

3. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Get preview URL (e.g., blueprintlead.vercel.app)

4. **Test Preview:**
   - Visit preview URL
   - Test all functionality
   - Verify environment variables work (forms, Calendly)
   - Check performance with Lighthouse

5. **Configure Custom Domain:**
   - In Vercel project settings → Domains
   - Add blueprintlead.com
   - Follow DNS configuration instructions
   - Add www.blueprintlead.com (optional)
   - Wait for DNS propagation (can take up to 24 hours)

6. **Production Deployment:**
   - Once domain is configured, Vercel automatically deploys to custom domain
   - Visit blueprintlead.com
   - Verify everything works

---

### Post-Deployment

**Immediate Testing:**
- [ ] Visit blueprintlead.com (and www.blueprintlead.com if configured)
- [ ] Test contact form submission
- [ ] Click Calendly buttons
- [ ] Navigate all pages
- [ ] Test on mobile device
- [ ] Run Lighthouse audit on production URL

**SEO Setup:**
- [ ] Submit sitemap to Google Search Console
  - Go to search.google.com/search-console
  - Add property: blueprintlead.com
  - Verify ownership
  - Submit sitemap: blueprintlead.com/sitemap.xml
- [ ] Verify structured data (Google Rich Results Test)
- [ ] Monitor indexing over next few days

**Monitoring:**
- [ ] Set up Vercel Analytics (optional)
- [ ] Monitor Resend email delivery
- [ ] Track Calendly bookings

---

### Continuous Deployment

Future updates:
```bash
# Make changes
git add .
git commit -m "Update: [description]"
git push origin main

# Vercel automatically deploys on push to main branch
# Preview URL created for testing
# Once verified, promote to production (or auto-deploy)
```

---

## APPENDIX

### Useful Commands

**Development:**
```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server locally
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

**Git:**
```bash
git status           # Check status
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push origin main # Push to remote
git log --oneline    # View commit history
```

**Testing:**
```bash
# Run Lighthouse
npm run build && npm run start
# Open Chrome DevTools → Lighthouse → Run audit

# Check for TypeScript errors
npx tsc --noEmit

# Check for unused dependencies
npx depcheck
```

---

### Resources

**Documentation:**
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- ShadCN UI: https://ui.shadcn.com
- Framer Motion: https://www.framer.com/motion
- Resend: https://resend.com/docs
- Vercel: https://vercel.com/docs

**Tools:**
- Google Lighthouse: https://developers.google.com/web/tools/lighthouse
- Google Rich Results Test: https://search.google.com/test/rich-results
- WAVE Accessibility: https://wave.webaim.org
- PageSpeed Insights: https://pagespeed.web.dev

**Blueprint Lead Resources:**
- Website Content: `website-content.md` (in Downloads folder)
- This Blueprint: `blueprint.md` (in Downloads folder)

---

### Contact & Support

**For Questions or Issues:**
- Contact PM (you) for clarifications
- Refer to blueprint.md for all standards and requirements
- Consult handoff documents from previous phases for context

---

## FINAL NOTES

This blueprint is the single source of truth for the Blueprint Lead website project. All agents must follow this document strictly. Deviations should be discussed with PM (you) before implementation.

**Key Principles:**
1. **Sequential Execution:** Complete one phase before starting next
2. **Handoff Documents:** Essential for context and continuity
3. **Quality Gates:** No shortcuts - meet all criteria before proceeding
4. **Coding Standards:** Consistency is non-negotiable
5. **Modular Architecture:** Build reusable, maintainable components
6. **Design System:** Follow Deep Slate + Emerald Green palette strictly
7. **Content Accuracy:** Use website-content.md exactly as written
8. **User Experience:** Professional, fast, accessible, responsive

**Project Goal:**
Build a high-converting, professional website that positions Blueprint Lead as the premium, exclusive choice for licensed contractors seeking pre-scheduled appointments with permit-verified homeowners in LA County.

**Success = Conversion:** Contractors schedule consultations because the website builds trust, demonstrates value, and makes the process easy.

---

**Blueprint Version:** 1.0
**Last Updated:** January 2025
**Status:** Ready for Phase 1

**PM (You):** Ready to delegate Phase 1 to Setup Agent when ready.

---

END OF BLUEPRINT