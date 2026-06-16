# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes — match its exact classes
3. If no — build it following ui-rules.md and ui-tokens.md, then add it here

After building any component — update this file with the component name, file path, and exact classes used.

---

## Components

| Component | File | Notes |
|-----------|------|-------|
| Button | components/ui/button.tsx | Primary/secondary/outline/ghost variants, uses CSS variables |
| GoogleIcon | components/ui/icons/OAuthIcons.tsx | Google OAuth logo SVG, uses CSS variables for brand colors |
| GitHubIcon | components/ui/icons/OAuthIcons.tsx | GitHub OAuth logo SVG, uses currentColor |
| OAuthButton | components/auth/OAuthButton.tsx | Reusable OAuth button with icon and loading state |
| Navbar | components/layout/Navbar.tsx | Full-width white header, 3 links + user email/logout |
| Footer | components/layout/Footer.tsx | Minimal footer with brand + links, 32px padding |
| Hero | components/homepage/Hero.tsx | Gradient hero, headline, CTAs, dashboard preview image, 32px padding |
| HowItWorks | components/homepage/HowItWorks.tsx | Section heading + 3 feature rows with icons, right-side jobs-list image, 32px padding |
| Features | components/homepage/Features.tsx | Section heading + 3 feature rows with icons, left-side agent-log image, 32px padding |
| Testimonials | components/homepage/Testimonials.tsx | Success story quote, avatar, attribution |
| CTASection | components/homepage/CTASection.tsx | Final bottom CTA card with image |
| LandingImage | components/homepage/ui.tsx | Image wrapper for landing page visuals |

---

## Card Pattern (LoginPage)

File: `app/(auth)/login/page.tsx`

| Property | Class |
|----------|-------|
| Background | `bg-surface` |
| Border | `border-border` |
| Border radius | `rounded-2xl` |
| Padding | `p-8` |
| Shadow | `shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]` |
| Width | `max-w-sm` |

**Pattern notes:** Login card uses same card pattern as homepage sections (white background, border-border, rounded-2xl, p-8, same shadow). Centered vertically and horizontally.

---

## Error Banner Pattern

File: `app/(auth)/login/page.tsx`

| Property | Class |
|----------|-------|
| Background | `bg-error-lightest` |
| Text color | `text-error` |
| Border radius | `rounded-md` |
| Padding | `p-3` |
| Text size | `text-sm` |

**Pattern notes:** Error banners use the lightest error background with error text color. No border. Same pattern should be used for all error states.

---

## OAuth Button Pattern

File: `components/auth/OAuthButton.tsx`

| Property | Class |
|----------|-------|
| Primary variant | `bg-accent text-accent-foreground hover:bg-accent-dark` |
| Secondary variant | `bg-white text-text-primary border border-border hover:bg-surface-secondary` |
| Size | `h-9 px-4 text-sm` (from Button) |
| Border radius | `rounded-md` |
| Justify | `justify-center gap-3` |
| Full width | `w-full` |

**Pattern notes:** OAuth buttons use Button components with full width and center-aligned content. GitHub uses secondary variant (outline style), Google uses primary variant (purple). Both have icon on left.

---

## PostHog Events

| Event | Where | Key Properties |
|-------|-------|----------------|
| `oauth_sign_in_clicked` | Login page | provider |
| `oauth_sign_in_success` | Callback page | - |
| `oauth_sign_in_failed` | Login/Callback | error, provider |
| `oauth_callback_error` | Callback page | error |
| `sign_out_clicked` | Navbar | - |
| `hero_cta_clicked` | Hero/CTA sections | cta |
| `dashboard_viewed` | Dashboard page | - |
| `find_jobs_viewed` | Find Jobs page | - |
| `profile_viewed` | Profile page | - |