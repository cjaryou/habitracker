# Growth Page (Timeline Screen) Design Document

## Overview
The Growth page visualizes the user's habit journey through a timeline interface that shows progress, milestones, and character evolution over time. This page embodies the "growth" metaphor of the terrarium theme.

---

## Core Concept: Timeline Tree
**Visual Metaphor:** A growing tree/vine timeline that represents the user's habit journey
- Root at bottom = Beginning of journey
- Branches/leaves = Completed habits and milestones
- Flowers/fruits = Major achievements
- Seasonal changes = Different eras/phases

---

## Key Features

### 1. **Vertical Timeline (Primary)**
A scrollable vertical timeline showing chronological progress:

#### Timeline Structure:
```
┌─────────────────────┐
│   [Current Era]     │ ← Top (Today/Current)
│   ╭─○─╮            │
│   │   │            │
│   ○   ○ Milestone  │
│   │   │            │
│   ○───○            │
│   │                │
│   ○ Day marker     │
│   │                │
│   [Previous Era]   │
│   ○───○            │
│   │   │            │
└─────────────────────┘
```

#### Timeline Elements:
- **Day Nodes** (circles/leaves): Individual days
  - Completed: Full green leaf
  - Missed: Wilted/faded leaf
  - Partial: Half-filled leaf

- **Week Clusters**: Group of 7 leaves on a branch

- **Month Markers**: Larger branch node with month label

- **Era Transitions**: Special visual marker (flower blooming)

---

### 2. **Stats Overview Card (Top)**
Quick stats summary before timeline:

```
┌─────────────────────────────────┐
│  📊 Growth Summary              │
│  ┌──────┬──────┬──────┐        │
│  │ 45   │ 89%  │ 127  │        │
│  │ Days │ Rate │ Total│        │
│  └──────┴──────┴──────┘        │
│                                 │
│  Current Streak: 🔥 14 days    │
│  Longest Streak: 🏆 28 days    │
└─────────────────────────────────┘
```

**Stats to Show:**
- Current streak
- Longest streak
- Total completed days
- Success rate (%)
- Total habits tracked
- Days since start

---

### 3. **Milestone Cards**
Special cards that appear between timeline nodes:

```
┌─────────────────────────────────┐
│  🎉 Milestone Unlocked!         │
│                                 │
│  [Achievement Icon]             │
│  "Week Warrior"                 │
│  Completed 7 days in a row      │
│                                 │
│  Reward: New plant unlocked 🌿  │
└─────────────────────────────────┘
```

**Milestone Types:**
- Streak achievements (7, 14, 30, 60, 100 days)
- Era transitions (Stone → Bronze → Iron → etc.)
- Perfect weeks/months
- Total habit completions
- Special dates (New Year, Birthday, etc.)

---

### 4. **Era Evolution Visualization**
Visual transitions showing character/ecosystem evolution:

```
┌─────────────────────────────────┐
│  🌟 Era Evolution               │
│                                 │
│  Iron Era → Medieval Era        │
│                                 │
│  [Before]  ──→  [After]         │
│  [Image]        [Image]         │
│                                 │
│  Unlocked: 3 new decorations    │
│  Garden Level: 4 → 5            │
└─────────────────────────────────┘
```

---

### 5. **Interactive Timeline Features**

#### Tap on Day Node:
Shows detailed day view modal:
```
┌─────────────────────────────────┐
│  📅 March 15, 2025              │
│  ─────────────────────          │
│                                 │
│  ✅ Morning meditation          │
│  ✅ Exercise (30 min)           │
│  ✅ Read 10 pages               │
│  ❌ Drink 8 glasses water       │
│                                 │
│  Success Rate: 75%              │
│  Mood: 😊 Happy                 │
│  Notes: "Great workout!"        │
└─────────────────────────────────┘
```

#### Long Press on Week Cluster:
Shows week summary

#### Pinch to Zoom:
- Zoom out: See months at once
- Zoom in: See individual days

---

### 6. **Filter Options**
Top bar with filters:

```
┌─────────────────────────────────┐
│  [All] [Completed] [Missed]     │
│  [Last Week] [Last Month] [All] │
└─────────────────────────────────┘
```

**Filter Categories:**
- Time range (Week, Month, Quarter, Year, All)
- Status (All, Completed, Missed, Partial)
- Era (specific era only)

---

## Visual Design Elements

### Color Coding:
- **Success**: Green shades (#6B9B6B, #7FAF7F)
- **Missed**: Muted gray (#B8A898)
- **Partial**: Orange/amber
- **Milestones**: Golden (#F4D58D)
- **Era markers**: Purple/violet

### Animations:
1. **Timeline appears**: Grow from bottom to top (tree growing)
2. **Day nodes**: Pulse when completed
3. **Milestones**: Sparkle/shimmer effect
4. **Era transitions**: Blooming flower animation

### Icons:
- 🌱 Seed (Start)
- 🍃 Leaf (Daily completion)
- 🌿 Branch (Week completion)
- 🌸 Flower (Milestone)
- 🎯 Target (Goal reached)
- 🏆 Trophy (Achievement)

---

## Data Structure

### Timeline Entry:
```typescript
interface TimelineEntry {
  id: string;
  date: Date;
  type: 'day' | 'week' | 'month' | 'milestone' | 'era-transition';
  status: 'completed' | 'missed' | 'partial' | 'future';
  completionRate: number; // 0-100
  habitsCompleted: number;
  totalHabits: number;
  mood?: string;
  notes?: string;
}
```

### Milestone:
```typescript
interface Milestone {
  id: string;
  title: string;
  description: string;
  icon: string;
  date: Date;
  reward?: {
    type: 'decoration' | 'character' | 'badge';
    name: string;
  };
}
```

---

## Implementation Priority

### Phase 1 (MVP):
- [ ] Basic vertical timeline with day nodes
- [ ] Stats overview card
- [ ] Simple day detail view
- [ ] Scroll to today button

### Phase 2:
- [ ] Milestone cards
- [ ] Era transition markers
- [ ] Week clustering
- [ ] Filters

### Phase 3:
- [ ] Advanced animations
- [ ] Pinch to zoom
- [ ] Mood tracking
- [ ] Export timeline as image

---

## Alternative Design Ideas

### 1. **Garden Plot Timeline**
Instead of vertical tree, show a garden plot where:
- Each plant = A habit
- Plant growth = Consistency
- Flowers = Milestones

### 2. **Circular Year View**
Annual circular timeline:
- Center = Start of year
- Outer ring = End of year
- Radial segments = Months
- Good for yearly overview

### 3. **River Flow**
Flowing river metaphor:
- Water flow = Time passing
- Rocks = Milestones
- Smooth flow = Good habits
- Rapids/obstacles = Challenges

### 4. **Constellation Map**
Space theme alternative:
- Stars = Completed days
- Constellations = Weekly patterns
- Planets = Major milestones

---

## Technical Considerations

### Performance:
- Virtualized list for long timelines (react-native-reanimated)
- Lazy load timeline data (pagination)
- Cache rendered timeline segments

### Accessibility:
- Screen reader support for timeline navigation
- High contrast mode for visibility
- Haptic feedback on interactions

### Responsive Design:
- Adapt timeline width for different screen sizes
- Landscape mode: Horizontal timeline option
- Tablet: Side-by-side timeline + detail view

---

## User Stories

1. **As a user**, I want to see my progress over time so I can feel motivated
2. **As a user**, I want to tap on specific days to see what I accomplished
3. **As a user**, I want to celebrate milestones to feel rewarded
4. **As a user**, I want to quickly scroll to today to check current status
5. **As a user**, I want to filter by time period to analyze patterns

---

## Success Metrics

- Time spent on Growth page
- Scroll depth (how far back users look)
- Milestone view rate
- Day detail tap rate
- Filter usage frequency

---

## Future Enhancements

1. **Share Timeline**: Export as beautiful image for social media
2. **Compare Periods**: Side-by-side comparison (This month vs Last month)
3. **Predictions**: AI-powered habit prediction based on patterns
4. **Social Features**: Compare timeline with friends
5. **Habit Insights**: "You're most consistent on Mondays"
6. **Seasonal Themes**: Timeline appearance changes with seasons

---

## Design References

Inspired by:
- GitHub contribution graph
- Duolingo streak calendar
- Apple Fitness activity rings timeline
- Forest app tree growth visualization
- Habitica quest timeline

---

## Notes
- Keep it simple initially - focus on clear data visualization
- Ensure performance with long timelines (1+ year of data)
- Make interactions intuitive (tap, scroll, pinch)
- Celebrate achievements prominently
- Maintain terrarium/growth theme consistency
