# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native habit tracking application built with Expo Router. The app appears to be gamified with a character/pet system that progresses through different eras based on user habits. The app uses file-based routing and supports iOS, Android, and web platforms.

## Commands

### Development
```bash
# Start the development server
bun expo start

# Start on specific platform
bun run android
bun run ios
bun run web

# Install dependencies
bun install
```

### Code Quality
```bash
# Run linter
bun run lint
```

### Install Packages
```bash
# Install a new package
bun add <package-name>

# Install dev dependency
bun add -D <package-name>
```

### Reset Project
```bash
# Moves starter code to app-example directory and creates blank app directory
bun run reset-project
```

## Architecture

### Routing Structure
- Uses **Expo Router** with file-based routing
- Root layout: `app/_layout.tsx` - Sets up theme provider, safe area, and navigation
- Tab-based navigation defined in `app/(tabs)/_layout.tsx`
- Main screens:
  - `app/(tabs)/index.tsx` - Home screen with habit tracking UI
  - `app/(tabs)/explore.tsx` - Explore/discovery screen
  - `app/modal.tsx` - Modal presentation example

### Component Organization
- **Atomic design pattern**: Components are organized by scope and reusability
- `components/` - Shared components used across the app
  - `home-screen/` - Modular components for the main home screen
    - Each sub-component has its own file (header, calendar, character container, etc.)
    - `types.ts` - TypeScript interfaces for props
    - `constants.ts` - Component-level constants
    - `styles.ts` - StyleSheet definitions
    - `index.tsx` - Main component that composes all parts
  - `ui/` - Generic UI primitives (collapsible, icon-symbol)
  - `themed-*.tsx` - Theme-aware wrapper components

### Theme System
- Defined in `constants/theme.ts`
- Supports light/dark modes via `@react-navigation/native` theming
- Custom color scheme hook: `hooks/use-color-scheme.ts`
- Platform-specific font definitions for iOS, Android, and web
- Themed components use `useThemeColor` hook from `hooks/use-theme-color.ts`

### TypeScript Configuration
- Strict mode enabled
- Path alias: `@/*` maps to project root (e.g., `@/components/...`)
- Extends Expo's base TypeScript config

### Expo Configuration (app.json)
- New Architecture enabled (`newArchEnabled: true`)
- React Compiler experiment enabled
- Typed routes experiment enabled
- Edge-to-edge rendering on Android
- Custom splash screen with dark mode support

### Key Dependencies
- **React 19.1.0** and **React Native 0.81.4**
- **Expo Router 6.x** - File-based routing
- **React Navigation 7.x** - Bottom tabs and stack navigation
- **React Native Reanimated 4.x** - Animations
- **React Native Gesture Handler 2.x** - Touch gestures
- **Expo modules**: Constants, Font, Image, Haptics, Linking, Web Browser, Symbols

## Development Notes

### Recent Design Updates (Oct 2025)

#### Home Screen Complete Redesign (v2.0)
**Goal:** Create unique, gamified habit tracker - different from competitors while maintaining core functionality

**New Layout Structure:**
1. **Stats Cards Row** (Top): 3 card layout displaying Level, Day Streak, and Era
   - White cards with subtle shadows
   - Larger typography for values
   - Replaces horizontal tag system
   
2. **Integrated Character Card** (Center): Main focus area
   - Character name + level badge in header
   - Large character display area
   - Progress bar showing evolution timeline (X/30 days)
   - White card with golden border accent
   
3. **Weekly Section**: Titled section for week overview
   - "This Week" header
   - Horizontal scrolling days calendar
   
4. **Action Button**: Prominent CTA
   - Bright orange (#FF6B35) with glow effect
   - Check mark + "Complete Today's Habits" text
   - Uppercase, bold styling

**Key Differentiators from Competitors:**
- ❌ No separate tags - integrated into cards
- ✅ Stats cards instead of inline pills
- ✅ Character + info unified in one card
- ✅ Progress bar shows evolution timeline
- ✅ Titled sections for clarity
- ✅ Bright action button (vs dark)
- ✅ Card-based layout (vs flat)

**Design System:**
- White cards on beige background
- Golden accents (#FFD93D, #FFE8B3)
- Orange for actions (#FF6B35)
- Strong shadows for depth
- Rounded corners (16-24px)

#### Icon Library
- Professional icon library: `@expo/vector-icons` (Ionicons) replaces emoji
- Icons used:
  - Timer: `time-outline` (header)
  - Streak: `flame` (header, days calendar)
  - Incomplete day: `ellipse-outline` (days calendar)
  - Navigation: `home`, `time`, `stats-chart`, `people`

#### Bottom Navigation
- Unique design with white background and 24px rounded corners
- Layout: `[Home] | [History • Stats (grouped)] | [Social]`
- Center group has dark pill (#1A2332) background
- Active states: Golden yellow (#FFD93D) icons with scale effect
- Strong shadow effect for modern floating appearance

#### Colors & Styling
- Primary dark: `#1A2332`
- Accent gold: `#FFD93D`
- Flame orange: `#FF6B35`
- Text brown: `#5A4A3A`, `#8B7355`
- Background: `#F5F5DC` (beige) with white bottom nav

### Component Development
- When creating new components for the home screen, follow the modular pattern in `components/home-screen/`
- Always export types separately in a `types.ts` file
- Keep styles in a separate `styles.ts` file using `StyleSheet.create()`
- Extract constants to `constants.ts` to avoid magic numbers/strings

### Navigation
- Use Expo Router's `Stack` component for screen navigation
- Navigation state is handled by the router automatically
- Tab navigation uses a stack navigator wrapping tab screens

### Theming
- Always use `ThemedView` and `ThemedText` components instead of plain View/Text
- Custom colors should be added to `constants/theme.ts` in both light and dark variants
- Use `useThemeColor` hook to access theme-aware colors dynamically

### Platform-Specific Code
- Web-specific code: `*.web.ts(x)` files (e.g., `use-color-scheme.web.ts`)
- iOS-specific code: `*.ios.ts(x)` files (e.g., `icon-symbol.ios.tsx`)
- Use `Platform.select()` for inline platform-specific values

### Expo Features
- The app uses React Native's new architecture (Fabric renderer)
- React Compiler is enabled for automatic optimizations
- Haptic feedback should be used for interactive elements (via expo-haptics)

## Documentation Guidelines

### Markdown Files (.md)
- **DO NOT** create `.md` documentation files automatically
- Only create `.md` files when explicitly requested by the user
- Existing documentation files in the repo (if any) should be updated on request only
- Keep all project guidance and notes in this `CLAUDE.md` file

### Design & Implementation Notes
- Document major design changes and component updates directly in this file's relevant sections
- Use inline comments in code files instead of creating separate documentation files
- Example updates: New icon libraries, design system changes, component architecture decisions
