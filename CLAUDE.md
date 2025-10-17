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

#### Home Screen Terrarium Theme Redesign (v3.0 - Current)
**Theme:** Closed Terrarium / Ecosystem - Character lives in a self-sustaining glass jar environment

**Core Concept:**
The app now uses a terrarium metaphor where the user's character inhabits a glass jar ecosystem. Habits nurture and grow the ecosystem, creating a calming, nature-inspired experience that differentiates from gamified competitors.

**Layout Structure:**
1. **Terrarium Lid** (Top): Glass-like header with character info
   - Translucent glass effect with border
   - Avatar + name + level display
   - Moisture indicators (streak, humidity %)
   - Uses water droplet icons instead of flames

2. **Main Glass Container** (Center): The terrarium jar itself
   - Rounded glass container with 3px border
   - Glass reflection effects (white overlay, 30% opacity)
   - Character lives inside the ecosystem
   - Decorative elements: water droplets, plants, moss patches, grass blades
   - Layered soil bottom (3 layers: light/medium/dark brown)

3. **Weekly Calendar** (Inside Terrarium): Moss-covered stones
   - Day markers styled as moss stones
   - Completed days: dark green moss
   - Today: highlighted with golden border
   - White text on colored backgrounds

4. **Progress Bar** (Inside Terrarium, above soil)
   - Water blue fill on soil-colored background
   - Text: "X/30 days • Growing ecosystem"

5. **Action Button** (Outside Terrarium): Nature-themed CTA
   - Deep grass green background
   - Leaf icon + "Nurture Today" text
   - Light green border accent

6. **Bottom Navigation** (Wooden Base): Natural wood texture
   - Soil-colored background (light brown #8B7355)
   - Center group: Dark green pill with white icons
   - Nature icons: leaf (home), git-branch (growth), bar-chart (stats), flower (garden)
   - Active state: Golden glow

**Terrarium Color Palette** (`TerrariumColors` in styles.ts):
```typescript
// Glass & Container
glassOverlay: 'rgba(255, 255, 255, 0.15)'
glassBorder: 'rgba(255, 255, 255, 0.3)'
glassReflection: 'rgba(255, 255, 255, 0.7)'

// Background
skyGradientTop: '#E8F4F8' (light sky blue)
skyGradientBottom: '#D4E8E0' (mint)

// Soil Layers
soilDark: '#4A3728'
soilMedium: '#6B5744'
soilLight: '#8B7355'

// Nature Elements
grassDark: '#5C8A5C'
grassMedium: '#7FAF7F'
grassLight: '#A8D5A8'
leafGreen: '#6B9B6B'
mossGreen: '#88A888'

// Water & Moisture
waterDrop: '#5DADE2'
moisture: '#B8E6F0'
condensation: 'rgba(184, 230, 240, 0.3)'

// Accents
golden: '#F4D58D'
coral: '#FF8B6B'
```

**Key Design Elements:**
- Glass morphism effects throughout
- Organic, rounded shapes (16-24px radius)
- Natural shadows and depth
- Decorative ecosystem elements (plants, water, soil)
- Calm, earthy color palette
- Focus on growth and nurturing metaphors

**Component Files:**
- `components/home-screen/terrarium-decorations.tsx` - Water droplets, plants, moss, grass
- `components/home-screen/styles.ts` - Complete terrarium styling with TerrariumColors palette
- `components/home-screen/index.tsx` - Main layout with glass container structure

**Icon Updates:**
- Ecosystem theme: `leaf`, `water`, `bar-chart`, `stump-regrowth` (Game Icons SVG)
- Growth icon: Carbon crop-growth SVG (`assets/svgs/carbon--crop-growth.svg`)
- Garden icon: Game Icons stump-regrowth SVG (`assets/svgs/game-icons--stump-regrowth.svg`)
- Removed: `flame`, `time-outline`, replaced with water/moisture metaphors

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
