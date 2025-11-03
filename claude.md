# Blueprint Lead - Marketing Website

## Project Overview
- Marketing website for Blueprint Lead contractor lead generation (LA County)
- Goal: Convert licensed contractors to consultation bookings
- Business: Exclusive, pre-scheduled appointments with permit-verified homeowners

## Documentation (READ THESE FIRST)
- `blueprint.md` - Complete project specification (your agent role in Section 5, handoff template in Section 7)
- `website-content.md` - All website copy (use verbatim, do not modify)

## Tech Stack
- Next.js 14+ (App Router, TypeScript, React 18)
- TypeScript (strict mode enabled)
- Tailwind CSS + ShadCN UI
- Framer Motion (animations)
- Resend (contact forms via API routes)
- Calendly (external scheduling, custom buttons only)
- Vercel (deployment)

## Project Structure
- `src/app/` - Next.js App Router pages (page.tsx, layout.tsx)
- `src/components/` - Atomic design (atoms/ → molecules/ → organisms/ → templates/)
- `src/lib/` - Utilities (utils.ts, constants.ts, resend.ts)
- `src/types/` - TypeScript type definitions
- `src/styles/globals.css` - Tailwind imports + global styles
- `tailwind.config.ts` - Custom design system configuration

## Sequential Agent Model (CRITICAL)
- You are one of 8 specialized agents working sequentially
- Each agent completes their phase before the next begins
- Review handoff document from previous agent (if not Agent 1)
- Complete your phase per blueprint.md Section 5 (your agent definition)
- Create handoff document per blueprint.md Section 7 template
- Do NOT skip ahead or do work assigned to other agents

## Design System
- Colors: Deep Slate (primary) + Emerald Green (accent)
- Full palette in `tailwind.config.ts`
- Typography: Inter font (via next/font/google)
- Atomic design pattern: atoms → molecules → organisms → templates → pages

## Coding Standards (Key Rules)
- TypeScript: strict mode, no `any` types, explicit return types
- Components: named exports, functional only, PascalCase files (Button.tsx)
- Pages: default exports (Next.js requirement), lowercase with hyphens (how-it-works/)
- Props: extend HTML element props, destructure with defaults
- Tailwind: utility-first, no arbitrary values, use cn() helper
- One component per file
- Accessibility: WCAG AA minimum (semantic HTML, ARIA labels, keyboard navigation)

## Content Guidelines
- Use content from website-content.md EXACTLY as written
- No Lorem Ipsum, no placeholder text
- Do not modify or "improve" approved copy
- Reference website-content.md for all page text, meta descriptions, CTAs

## Quality Standards
- Lighthouse: Performance 90+, Accessibility 95+, SEO 100
- Cross-browser: Chrome, Firefox, Safari, Edge
- Mobile responsive: all breakpoints (sm, md, lg, xl, 2xl)
- No console errors or TypeScript warnings

## Common Commands
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run lint` - ESLint check
- `npx tsc --noEmit` - TypeScript check

## Critical Constraints
- Do NOT create documentation files (README.md, API docs) unless explicitly requested
- Do NOT use `any` types
- Do NOT use arbitrary Tailwind values (e.g., px-[13px])
- Do NOT create class components (functional only)
- Do NOT skip quality gates (see blueprint.md Section 10)
- Do NOT modify content from website-content.md

## References
- blueprint.md: Section 5 (agent roles), Section 7 (handoff template), Section 9 (coding standards), Section 10 (quality gates)
