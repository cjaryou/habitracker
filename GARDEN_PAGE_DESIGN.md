# Garden Page Design Document

## Overview
The Garden page is where users collect, view, and manage decorations, plants, and rewards earned through consistent habit tracking. It's a visual showcase of their journey and achievements, embodying the "reward and collection" aspect of the app.

---

## Core Concept: Personal Terrarium Garden
**Visual Metaphor:** A customizable terrarium garden that grows with user's habits
- Each achievement unlocks new plants/decorations
- User arranges their garden
- Garden evolves through different eras
- Rare items for special accomplishments

---

## Key Features

### 1. **Garden View (Main Canvas)**
Interactive 3D-like terrarium where items are placed:

```
┌─────────────────────────────────┐
│  🌿 My Terrarium Garden         │
│  ─────────────────────          │
│                                 │
│        [Glass Dome]             │
│      ╱ 🌸   🌱   🪨 ╲          │
│     │  🌿 [Pet] 🍄  │          │
│     │   🪴   💧  🌾  │          │
│     │  🌵        🌻  │          │
│      ╲___Soil Base___╱          │
│                                 │
│  [Edit] [View All] [Share]      │
└─────────────────────────────────┘
```

**Features:**
- Drag & drop to place items
- Zoom in/out to see details
- Rotate view (if 3D)
- Day/night mode toggle
- Weather effects (rain, sun, fog)

---

### 2. **Collection Gallery**
Grid view of all owned items:

```
┌─────────────────────────────────┐
│  🎨 My Collection               │
│  ─────────────────────          │
│                                 │
│  [Plants] [Decor] [Pets] [All]  │
│                                 │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐      │
│  │🌱 │ │🌸 │ │🌿 │ │🌵 │      │
│  │Oak│ │Rose│ │Fern│ │Cact│    │
│  │ ✓ │ │ ✓ │ │ ✓ │ │ ✓ │      │
│  └───┘ └───┘ └───┘ └───┘      │
│                                 │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐      │
│  │🌺 │ │🍄 │ │🪨 │ │ ? │      │
│  │Lily│ │Mush│ │Rock│ │???│    │
│  │ ✓ │ │ ✓ │ │ ✓ │ │ 🔒│      │
│  └───┘ └───┘ └───┘ └───┘      │
│                                 │
│  Collected: 42/120              │
└─────────────────────────────────┘
```

**Categories:**
- **Plants**: Flowers, trees, bushes, succulents
- **Decorations**: Rocks, logs, crystals, ornaments
- **Pets/Characters**: Different creature types
- **Backgrounds**: Sky patterns, seasons
- **Soil Types**: Different textures/colors
- **Special Effects**: Mist, butterflies, fireflies

---

### 3. **Item Detail View**
When tapping on an item:

```
┌─────────────────────────────────┐
│  🌸 Cherry Blossom              │
│  ─────────────────────          │
│                                 │
│       [Large Image]             │
│                                 │
│  Rarity: ⭐⭐⭐ Rare             │
│  Category: Flowering Tree       │
│  Era: Feudal Japan              │
│                                 │
│  "A delicate sakura tree that   │
│   blooms in spring, symbolizing │
│   beauty and renewal."          │
│                                 │
│  Unlocked: March 15, 2025       │
│  Requirement: 30-day streak     │
│                                 │
│  [Place in Garden] [Info]       │
└─────────────────────────────────┘
```

**Information:**
- Name & description
- Rarity level (common, uncommon, rare, epic, legendary)
- How to unlock
- Date unlocked
- Lore/story
- Part of collection set
- Stats (if applicable)

---

### 4. **Unlock Progress**
Shows locked items and how to unlock them:

```
┌─────────────────────────────────┐
│  🔒 Unlock Next Items           │
│  ─────────────────────          │
│                                 │
│  ┌──────────────────────────┐  │
│  │ 🌺 Lotus Flower          │  │
│  │ ▓▓▓▓▓▓▓▓░░ 80%          │  │
│  │ 8 more days for 60-day   │  │
│  │ streak                   │  │
│  └──────────────────────────┘  │
│                                 │
│  ┌──────────────────────────┐  │
│  │ 🦋 Butterfly Effect      │  │
│  │ ▓▓▓▓░░░░░░ 45%          │  │
│  │ Complete 5 perfect weeks │  │
│  │ (Currently: 2/5)         │  │
│  └──────────────────────────┘  │
│                                 │
│  ┌──────────────────────────┐  │
│  │ 🏆 Golden Acorn          │  │
│  │ ░░░░░░░░░░ 0%           │  │
│  │ Reach Legend Era         │  │
│  │ (Currently: Iron Era)    │  │
│  └──────────────────────────┘  │
└─────────────────────────────────┘
```

**Progress Tracking:**
- Visual progress bars
- Clear requirements
- Estimated time to unlock
- Tips to achieve faster

---

### 5. **Collection Sets**
Themed item collections:

```
┌─────────────────────────────────┐
│  📦 Collection Sets             │
│  ─────────────────────          │
│                                 │
│  ┌──────────────────────────┐  │
│  │ 🌸 Japanese Garden       │  │
│  │ ████████░ 8/10           │  │
│  │                          │  │
│  │ ✓ Sakura  ✓ Bamboo      │  │
│  │ ✓ Koi     ✓ Stone Path  │  │
│  │ ✓ Lantern ✓ Moss        │  │
│  │ ✓ Bridge  ✓ Maple       │  │
│  │ 🔒 Pagoda 🔒 Zen Rock   │  │
│  │                          │  │
│  │ Reward: Special Scene    │  │
│  └──────────────────────────┘  │
│                                 │
│  ┌──────────────────────────┐  │
│  │ 🌵 Desert Oasis          │  │
│  │ ██░░░░░░░ 2/10           │  │
│  │ ...                      │  │
│  └──────────────────────────┘  │
└─────────────────────────────────┘
```

**Set Themes:**
- Japanese Garden
- Desert Oasis
- Tropical Rainforest
- Arctic Tundra
- Magical Forest
- Underwater Cave
- Mountain Peak
- Savanna Plains

**Set Bonuses:**
- Unlock special background
- Unlock unique pet skin
- Special animation
- Exclusive title/badge

---

### 6. **Garden Customization Tools**

```
┌─────────────────────────────────┐
│  🎨 Edit Mode                   │
│  ─────────────────────          │
│                                 │
│  [Select Item ▼]                │
│  • Plants                       │
│  • Decorations                  │
│  • Pets                         │
│  • Effects                      │
│                                 │
│  [Actions]                      │
│  • 📌 Place                     │
│  • ↔️ Move                      │
│  • 🔄 Rotate                    │
│  • 📏 Scale                     │
│  • 🗑️ Remove                   │
│  • 📋 Layers (front/back)       │
│                                 │
│  [Templates]                    │
│  • Save current layout          │
│  • Load saved layout            │
│  • Use preset design            │
│                                 │
│  [Preview] [Save] [Cancel]      │
└─────────────────────────────────┘
```

---

### 7. **Rarity System**

Visual indicators for item rarity:

```
┌────────────────────┐
│ Common     ⚪      │ Gray/White
│ Uncommon   🟢      │ Green
│ Rare       🔵      │ Blue
│ Epic       🟣      │ Purple
│ Legendary  🟡      │ Gold
│ Mythical   🔴      │ Red (Special events)
└────────────────────┘
```

**Rarity Traits:**
- Animation quality
- Glow effects
- Particle effects
- Sound effects (optional)
- Unlock difficulty

---

### 8. **Shop/Market (Optional)**
Browse and purchase items with in-app currency:

```
┌─────────────────────────────────┐
│  🏪 Garden Shop                 │
│  ─────────────────────          │
│                                 │
│  Your Coins: 🪙 450             │
│                                 │
│  Daily Deals 🔥                 │
│  ┌───┐ ┌───┐ ┌───┐            │
│  │🌻 │ │🪨 │ │🦋 │            │
│  │Sun│ │Rock│ │Butt│           │
│  │50🪙│ │30🪙│ │100🪙│         │
│  └───┘ └───┘ └───┘            │
│                                 │
│  Featured Items ⭐              │
│  [Rare plant bundle - 200🪙]   │
│  [Season pass - 500🪙]         │
│                                 │
│  Earn Coins:                    │
│  • Complete daily habits (+10)  │
│  • Perfect week (+50)           │
│  • Achievements (+various)      │
└─────────────────────────────────┘
```

**Currency Sources:**
- Daily habit completions
- Streaks
- Achievements
- Level ups
- Special events
- (Optional) In-app purchase

---

### 9. **Sharing Features**

```
┌─────────────────────────────────┐
│  📸 Share Your Garden           │
│  ─────────────────────          │
│                                 │
│  [Garden Screenshot]            │
│                                 │
│  Options:                       │
│  ☑ Include stats overlay        │
│  ☑ Add motivational quote       │
│  ☑ Show collection progress     │
│  ☐ Show username                │
│                                 │
│  [Save Image]                   │
│  [Share to Social]              │
│  [Copy Link]                    │
└─────────────────────────────────┘
```

---

### 10. **Seasonal Events**

```
┌─────────────────────────────────┐
│  🎃 Halloween Event (14d left)  │
│  ─────────────────────          │
│                                 │
│  Limited Time Items:            │
│  ┌───┐ ┌───┐ ┌───┐            │
│  │👻 │ │🎃 │ │🦇 │            │
│  │Ghost│Pump│ Bat│             │
│  │150🪙│100🪙│80🪙│            │
│  └───┘ └───┘ └───┘            │
│                                 │
│  Event Challenge:               │
│  Complete 7-day streak during   │
│  event to unlock exclusive      │
│  "Haunted Tree" decoration!     │
│                                 │
│  Progress: ▓▓▓▓░░░ 4/7 days     │
└─────────────────────────────────┘
```

**Event Types:**
- Seasonal (Spring, Summer, Fall, Winter)
- Holidays (Christmas, Halloween, Easter)
- Special occasions (New Year, App Anniversary)
- Collaborations (themed events)

---

## Item Categories & Examples

### Plants 🌱
**Flowers:**
- Rose, Sunflower, Lotus, Sakura, Tulip, Orchid

**Trees:**
- Oak, Pine, Bamboo, Palm, Bonsai, Willow

**Bushes:**
- Fern, Lavender, Moss, Ivy, Herbs

**Succulents:**
- Cactus, Aloe, Jade, Echeveria

### Decorations 🪨
**Natural:**
- Rocks, Pebbles, Logs, Branches, Shells

**Structural:**
- Bridges, Paths, Fences, Gates, Archways

**Ornamental:**
- Lanterns, Statues, Crystals, Fountains

**Functional:**
- Water features, Benches, Stepping stones

### Pets/Creatures 🐸
**Common:**
- Frog, Butterfly, Ladybug, Snail, Bee

**Uncommon:**
- Rabbit, Hedgehog, Squirrel, Bird, Turtle

**Rare:**
- Fox, Owl, Deer, Peacock, Koi fish

**Legendary:**
- Dragon (tiny), Phoenix, Unicorn, Griffin

### Effects ✨
**Weather:**
- Rain, Snow, Fog, Sunshine, Rainbow

**Particles:**
- Fireflies, Sparkles, Leaves falling, Petals

**Ambiance:**
- Day/Night cycle, Seasons, Wind effect

---

## Data Structure

### Garden Item:
```typescript
interface GardenItem {
  id: string;
  name: string;
  description: string;
  category: 'plant' | 'decoration' | 'pet' | 'effect' | 'background';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythical';
  imageUrl: string;
  animationUrl?: string;

  unlockRequirement: {
    type: 'streak' | 'achievement' | 'level' | 'event' | 'purchase';
    value: number | string;
  };

  unlocked: boolean;
  dateUnlocked?: Date;

  price?: number; // in coins
  era?: string;
  setId?: string; // if part of collection set
}
```

### Garden Layout:
```typescript
interface GardenLayout {
  id: string;
  name: string;
  items: Array<{
    itemId: string;
    position: { x: number; y: number; z: number };
    rotation: number;
    scale: number;
    layer: number; // for z-index
  }>;
  background?: string;
  theme?: string;
  lastModified: Date;
}
```

### Collection Set:
```typescript
interface CollectionSet {
  id: string;
  name: string;
  description: string;
  theme: string;
  items: string[]; // item IDs
  reward: {
    type: 'background' | 'pet' | 'badge' | 'effect';
    itemId: string;
  };
  progress: number; // 0-100
}
```

---

## Implementation Priority

### Phase 1 (MVP):
- [ ] Basic garden view (static 2D)
- [ ] Collection gallery grid
- [ ] Item detail view
- [ ] Simple placement (drag & drop)
- [ ] Basic unlock system (streak-based)

### Phase 2:
- [ ] Collection sets
- [ ] Rarity system with visual effects
- [ ] Garden customization tools
- [ ] Save/load layouts
- [ ] Unlock progress tracking

### Phase 3:
- [ ] Shop/market system
- [ ] Currency & economy
- [ ] Advanced placement (rotate, scale, layers)
- [ ] Sharing features
- [ ] Templates & presets

### Phase 4:
- [ ] 3D garden view (optional)
- [ ] Seasonal events
- [ ] Animated items
- [ ] Social features (visit friends' gardens)
- [ ] Trading system (optional)

---

## Visual Design

### Garden Canvas:
- Isometric or 2.5D perspective
- Soft shadows for depth
- Ambient lighting
- Smooth animations
- Particle effects for magic

### UI Elements:
- Floating action buttons
- Minimalist controls
- Transparent panels
- Natural color palette
- Touch-friendly hit areas

### Item Design:
- Hand-drawn or 3D rendered
- Consistent art style
- Clear silhouettes
- Readable at small sizes
- Animated states (idle, selected)

---

## Animations

1. **Item Unlock**
   - Chest/seed opens
   - Item rises with sparkles
   - Glow effect
   - Celebration confetti

2. **Placement**
   - Drag with shadow preview
   - Snap to grid (optional)
   - Drop with bounce
   - Dust particle on land

3. **Garden Life**
   - Plants sway in wind
   - Butterflies flutter
   - Water ripples
   - Day/night transitions

4. **Collection Complete**
   - Set items glow
   - Connection lines appear
   - Reward chest drops
   - Banner display

---

## User Stories

1. **As a user**, I want to collect items to feel rewarded for my efforts
2. **As a user**, I want to customize my garden to express creativity
3. **As a user**, I want to see my progress to stay motivated
4. **As a user**, I want rare items to have goals to work towards
5. **As a user**, I want to share my garden to inspire others

---

## Success Metrics

- Collection completion rate
- Garden edit frequency
- Time spent in Garden page
- Share/screenshot frequency
- Item unlock rate
- Currency usage
- Event participation rate

---

## Technical Considerations

### Performance:
- Optimize rendering for many items
- Use sprite sheets for small items
- Lazy load item images
- Cache garden layouts
- Efficient collision detection (if needed)

### Storage:
- Local storage for layouts
- Cloud sync for cross-device
- Asset caching
- Efficient data structure

### Accessibility:
- Screen reader item descriptions
- Keyboard navigation
- High contrast mode
- Haptic feedback

---

## Monetization (Optional)

### Free Features:
- All basic items unlockable through gameplay
- Unlimited garden layouts
- Core customization tools

### Premium Options:
- Exclusive item packs
- Extra garden slots
- Premium currency
- Early access to events
- Ad removal

**Important:** Never lock core gameplay behind paywall!

---

## Future Enhancements

1. **Social Garden**
   - Visit friends' gardens
   - Gift items
   - Garden parties (multiplayer events)
   - Community showcases

2. **Garden Minigames**
   - Water plants for bonuses
   - Hunt for hidden items
   - Garden puzzles
   - Seasonal challenges

3. **Advanced Customization**
   - Custom color themes
   - Import custom items (modding)
   - Terrain editing
   - Weather control

4. **Cross-App Integration**
   - Import from other apps
   - Export to wallpaper
   - AR view (view garden in real world)
   - Live wallpaper

5. **Story Mode**
   - Garden has narrative
   - Characters with stories
   - Quest system
   - Unlockable lore

---

## Design References

Inspired by:
- Animal Crossing pocket camp
- Neko Atsume
- Sky: Children of Light
- Zen Koi series
- Pocket Camp
- Terrarium: Garden Idle

---

## Notes
- Balance between collection and customization
- Make unlocking feel rewarding, not grindy
- Allow creative expression
- Keep performance smooth with many items
- Regular content updates to maintain engagement
- Respect user's creativity (no forced designs)
