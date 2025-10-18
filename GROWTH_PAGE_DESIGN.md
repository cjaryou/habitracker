# Growth Page (Timeline Screen) Design Document

## Overview
The Growth page visualizes the user's habit journey through a **simple, non-scrollable interface** that shows progress, milestones, and achievements at a glance. This page embodies the "growth" metaphor of the terrarium theme with a growing tree visualization.

---

## Design Philosophy
- ✅ **One-Screen View** - All information visible without scrolling
- ✅ **Visual Growth** - Tree grows as user progresses
- ✅ **Quick Stats** - Important metrics at a glance
- ✅ **Achievement Focus** - Celebrate milestones prominently
- ✅ **Performance Tracking** - See which habits are going well

---

## Page Layout (Mobile-First)

### Full Screen Structure:
```
┌─────────────────────────────────────────┐
│         GROWTH PAGE (Timeline)          │
├─────────────────────────────────────────┤
│                                         │
│  🌳 SECTION 1: VISUAL GROWTH TREE       │
│  ┌─────────────────────────────────┐   │
│  │        🌳 (Growing Tree)        │   │
│  │       🌿 🌿 🌿                  │   │
│  │      🌿 🌿 🌿 🌿 🌿             │   │
│  │                                 │   │
│  │   Your Growth: 45 days          │   │
│  │   Progress: (●●●●●●●●○○) 75%   │   │
│  │   Next Goal: 60 days            │   │
│  └─────────────────────────────────┘   │
│                                         │
│  🎯 SECTION 2: QUICK STATS              │
│  ┌─────────┬──────────┬─────────┐      │
│  │  45     │   89%    │   14    │      │
│  │ Days    │ Success  │ Streak  │      │
│  └─────────┴──────────┴─────────┘      │
│                                         │
│  🏆 SECTION 3: ACHIEVEMENTS             │
│  ┌──────────┐ ┌──────────┐ ┌──────┐   │
│  │ ✓ 7-Day  │ │ ✓ Week   │ │ ◯ 30 │   │
│  │ Warrior  │ │ Master   │ │ Days │   │
│  └──────────┘ └──────────┘ └──────┘   │
│                                         │
│  📅 SECTION 4: MONTH HEATMAP            │
│  Oct: [■■■□■■■□■■■■■■■□■■]            │
│  Sep: [■■■■■■■■■■■■■■■■■■]            │
│  Aug: [■■□■■■□■■■■□■■■■■■]            │
│                                         │
│  📊 SECTION 5: HABIT PERFORMANCE        │
│  🧘 Meditation  ■■■■■ 95%               │
│  🏃 Exercise    ■■■■□ 87%               │
│  📚 Reading     ■■■□□ 65%               │
│                                         │
└─────────────────────────────────────────┘
```

---

## Key Sections

---

## Key Sections

### 1. 🌳 **Visual Growth Tree**
The centerpiece of the page - a visual representation of growth over time.

**Purpose:**
- Immediate visual feedback of progress
- Emotional connection to growth metaphor
- Motivational anchor

**Design:**
```
Stage 1 (0-14 days):    🌱 Seedling
Stage 2 (15-30 days):   🌿 Small Plant
Stage 3 (31-60 days):   🌳 Young Tree
Stage 4 (61-90 days):   🌳🌳 Mature Tree
Stage 5 (91+ days):     🌳🌳🌳 Ancient Tree
```

**Components:**
- Animated tree illustration (changes with milestones)
- Progress bar to next milestone
- Text: "Your Growth: X days"
- Text: "Next Goal: X days (X% complete)"

**Interactions:**
- Tap tree → View growth history timeline
- Smooth animation when milestone reached

---

### 2. 📊 **Quick Stats**
Three key metrics displayed prominently.

**Layout:**
```
┌─────────────┬─────────────┬─────────────┐
│    45       │    89%      │     14      │
│  TOTAL      │  SUCCESS    │  CURRENT    │
│   DAYS      │    RATE     │  STREAK     │
└─────────────┴─────────────┴─────────────┘
```

**Metrics:**
1. **Total Days**: How many days user has tracked habits
2. **Success Rate**: Overall completion percentage
3. **Current Streak**: Days in a row with at least 1 habit completed

**Styling:**
- Large numbers (32px font)
- Labels below (12px, muted)
- Card with subtle shadow
- Green accent for streak 🔥

---

### 3. 🏆 **Achievements**
Badge system showing earned and locked achievements.

**Achievement Types:**
```typescript
const ACHIEVEMENTS = [
  { id: '7day', name: '7-Day Warrior', icon: '🎖️', requirement: 7 },
  { id: '14day', name: 'Week Master', icon: '🏅', requirement: 14 },
  { id: '30day', name: 'Month Legend', icon: '🏆', requirement: 30 },
  { id: '60day', name: 'Iron Will', icon: '⭐', requirement: 60 },
  { id: '100day', name: 'Century Club', icon: '💎', requirement: 100 },
  { id: 'perfect', name: 'Perfect Week', icon: '✨', requirement: 'special' },
];
```

**Visual Design:**
```
Unlocked:
┌──────────┐
│    🎖️    │
│  7-Day   │
│ Warrior  │
│ Oct 15   │
└──────────┘

Locked:
┌──────────┐
│    ◯     │
│  30-Day  │
│  Legend  │
│  (5 days)│
└──────────┘
```

**Layout:**
- Grid: 3 columns
- First row: Unlocked badges (colored)
- Second row: Upcoming badges (grayed out)

**Interactions:**
- Tap badge → Show achievement details modal
- Unlock animation when earned

---

### 4. 📅 **Month Heatmap**
GitHub-style contribution graph for last 3 months.

**Design:**
```
Oct 2025: [■ ■ ■ □ ■ ■ ■ □ ■ ■ ■ ■ ... ■ ■ □]
           1 2 3 4 5 6 7 8 9 10 11 12 ... 30 31

Sep 2025: [■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ... ■ ■ ■]
           1 2 3 4 5 6 7 8 9 10 11 12 ... 29 30

Aug 2025: [■ ■ □ ■ ■ ■ □ ■ ■ ■ ■ □ ... ■ ■ ■]
           1 2 3 4 5 6 7 8 9 10 11 12 ... 30 31
```

**Color System:**
- ⬜ Empty (0% completion): `#E0E0E0`
- 🟨 Partial (1-49%): `#FFE082`
- 🟩 Good (50-99%): `#A5D6A7`
- 🟢 Perfect (100%): `#66BB6A`

**Features:**
- Scroll horizontally to see older months
- Tap day → Show day details in modal
- Week numbers on left (optional)

**Data Structure:**
```typescript
interface DayData {
  date: Date;
  completionRate: number; // 0-100
  habitsCompleted: number;
  totalHabits: number;
}
```

---

### 5. 📊 **Habit Performance**
Individual habit success rates.

**Design:**
```
┌────────────────────────────────────┐
│ 🧘 Morning Meditation              │
│ ■■■■■■■■■░ 95%                     │
│                                    │
│ 🏃 Daily Exercise                  │
│ ■■■■■■■■░░ 87%                     │
│                                    │
│ 📚 Read 10 Pages                   │
│ ■■■■■■░░░░ 65%                     │
│                                    │
│ 💧 Drink Water                     │
│ ■■■■■■■░░░ 72%                     │
└────────────────────────────────────┘
```

**Components:**
- Habit emoji + name
- Horizontal progress bar
- Percentage on right
- Sorted by success rate (highest first)

**Color Coding:**
- 90-100%: Green `#66BB6A`
- 70-89%: Yellow `#FFB74D`
- 50-69%: Orange `#FF9800`
- <50%: Red `#EF5350`

**Interactions:**
- Tap habit → Navigate to detailed habit stats (future feature)

---

## Component Structure

### File Organization:
```
components/
  growth-screen/
    index.tsx                    # Main screen component
    styles.ts                    # All styles
    constants.ts                 # Constants & config
    types.ts                     # TypeScript interfaces
    
    components/
      growth-tree.tsx            # Tree visualization
      quick-stats.tsx            # 3-box stats
      achievements-grid.tsx      # Achievement badges
      month-heatmap.tsx          # Heatmap calendar
      habit-performance.tsx      # Habit bars
      day-detail-modal.tsx       # Modal for day details
    
    hooks/
      use-growth-data.ts         # Data fetching hook
      use-achievements.ts        # Achievement logic
    
    utils/
      growth-calculations.ts     # Calculate tree stage, etc.
      achievement-logic.ts       # Check unlocked achievements
```

---

## Data Structure

### Growth Data:
```typescript
interface GrowthData {
  totalDays: number;
  currentStreak: number;
  longestStreak: number;
  successRate: number; // 0-100
  treeStage: 1 | 2 | 3 | 4 | 5;
  nextMilestone: {
    days: number;
    progress: number; // 0-100
  };
}
```

### Achievement:
```typescript
interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number | 'special';
  unlocked: boolean;
  unlockedDate?: Date;
  progress?: number; // 0-100 for locked achievements
}
```

### Heatmap Entry:
```typescript
interface HeatmapDay {
  date: Date;
  completionRate: number; // 0-100
  habitsCompleted: number;
  totalHabits: number;
  status: 'empty' | 'partial' | 'good' | 'perfect';
}
```

### Habit Performance:
```typescript
interface HabitPerformance {
  habitId: string;
  habitName: string;
  emoji: string;
  successRate: number; // 0-100
  totalAttempts: number;
  successfulAttempts: number;
}
```

---

## Animations & Interactions

### Page Load:
```typescript
// Staggered fade-in animation
1. Tree fades in (300ms)
2. Stats boxes slide up (300ms, delay 100ms each)
3. Achievements pop in (300ms, delay 50ms each)
4. Heatmap fades in (300ms)
5. Habit bars animate width (500ms)
```

### Achievement Unlock:
```typescript
// When user unlocks achievement
1. Badge scales up (1.2x)
2. Sparkle animation
3. Haptic feedback
4. Show toast notification
5. Update badge UI
```

### Heatmap Interaction:
```typescript
// On day tap
1. Show tooltip with day stats
2. Highlight surrounding week
3. Haptic feedback
```

### Tree Growth:
```typescript
// When reaching new stage
1. Tree morphs to next stage
2. Leaves/branches animate in
3. Success sound effect
4. Particle effects
```

---

## Color Palette

### Primary Colors:
```typescript
const COLORS = {
  // Tree & Growth
  treeGreen: '#66BB6A',
  leafGreen: '#81C784',
  darkGreen: '#388E3C',
  
  // Stats
  statBackground: '#FFFFFF',
  statBorder: '#E0E0E0',
  
  // Heatmap
  heatmapEmpty: '#E0E0E0',
  heatmapPartial: '#FFE082',
  heatmapGood: '#A5D6A7',
  heatmapPerfect: '#66BB6A',
  
  // Achievements
  achievementGold: '#FFD54F',
  achievementSilver: '#BDBDBD',
  achievementLocked: '#E0E0E0',
  
  // Performance
  performanceExcellent: '#66BB6A',
  performanceGood: '#FFB74D',
  performanceFair: '#FF9800',
  performancePoor: '#EF5350',
  
  // Background
  background: '#F9F6F1',
  cardBackground: '#FFFFFF',
};
```

---

## Responsive Design

### Mobile (Default):
- Single column layout
- Stack all sections vertically
- Heatmap scrolls horizontally
- Touch-friendly tap targets (44px minimum)

### Tablet:
- Two-column layout
- Tree + Stats on left
- Achievements + Performance on right
- Heatmap full width at bottom

### Landscape:
- Optimize for horizontal space
- Side-by-side sections
- Reduce tree size slightly

---

## Accessibility

### Screen Reader Support:
```typescript
// Example accessibility labels
<View accessible accessibilityLabel="Growth tree showing 45 days progress">
  <GrowthTree stage={3} />
</View>

<TouchableOpacity 
  accessible 
  accessibilityRole="button"
  accessibilityLabel="7-Day Warrior achievement unlocked on October 15"
>
  <AchievementBadge />
</TouchableOpacity>
```

### High Contrast Mode:
- Increase border thickness
- Darker text colors
- Stronger shadows

### Haptic Feedback:
- Light impact on tap
- Medium impact on achievement unlock
- Success notification on milestone

---

## Performance Optimizations

### Data Loading:
```typescript
// Lazy load heatmap data
const { data: heatmapData } = useHeatmapData({
  months: 3,
  lazy: true,
});

// Memoize expensive calculations
const treeStage = useMemo(() => 
  calculateTreeStage(totalDays), 
  [totalDays]
);
```

### Rendering:
- Use `React.memo()` for static components
- FlatList for large achievement lists
- Virtualized heatmap for long timeframes

### Animations:
- Use `useNativeDriver: true` for transforms
- Avoid animating layout properties
- Use `react-native-reanimated` for complex animations

---

## Implementation Phases

### Phase 1 (MVP - Week 1):
- [ ] Basic layout structure
- [ ] Static tree visualization (hardcoded stage)
- [ ] Quick stats with mock data
- [ ] Simple achievement grid (3-4 badges)
- [ ] Basic styling

### Phase 2 (Week 2):
- [ ] Connect to real data
- [ ] Month heatmap (current month only)
- [ ] Habit performance bars
- [ ] Day detail modal
- [ ] Basic animations

### Phase 3 (Week 3):
- [ ] Tree stage progression logic
- [ ] Achievement unlock system
- [ ] 3-month heatmap with scroll
- [ ] Polish animations
- [ ] Haptic feedback

### Phase 4 (Polish):
- [ ] Advanced tree animations
- [ ] Share achievements feature
- [ ] Export stats as image
- [ ] Seasonal themes
- [ ] Sound effects

---

## Testing Checklist

### Visual Testing:
- [ ] Tree displays correctly at all stages
- [ ] Stats boxes show accurate numbers
- [ ] Achievements render properly (locked/unlocked)
- [ ] Heatmap colors are correct
- [ ] Habit bars calculate percentages correctly

### Interaction Testing:
- [ ] Tap tree → Show history
- [ ] Tap achievement → Show details
- [ ] Tap heatmap day → Show day modal
- [ ] Scroll heatmap horizontally
- [ ] All animations smooth (60fps)

### Data Testing:
- [ ] Handles 0 days correctly
- [ ] Handles 365+ days
- [ ] Empty habits list
- [ ] All achievements unlocked
- [ ] No achievements unlocked

### Edge Cases:
- [ ] First day user
- [ ] User with gaps in data
- [ ] User who stopped and restarted
- [ ] Perfect 100% user
- [ ] User with many habits (10+)

---

## Future Enhancements

### Version 2.0:
1. **Detailed Timeline View**: Optional scrollable timeline (modal)
2. **Comparison Mode**: Compare this month vs last month
3. **Predictions**: AI-powered streak predictions
4. **Social Sharing**: Share achievements on social media
5. **Custom Achievements**: User-created goals

### Version 3.0:
1. **Multiple Trees**: Different trees for different habit categories
2. **Seasonal Themes**: Tree changes appearance by season
3. **Weather Effects**: Rain, snow, sun based on performance
4. **Garden Integration**: Trees appear in garden
5. **Friends Leaderboard**: Compare growth with friends

---

## Design References

**Inspired by:**
- GitHub Contribution Graph (heatmap)
- Duolingo Streak System (achievements)
- Forest App (tree growth metaphor)
- Apple Fitness Rings (visual progress)
- Habitica (gamification elements)

---

## Notes

- **Keep it simple**: Don't overwhelm with data
- **Visual first**: Use graphics over numbers where possible
- **Celebrate wins**: Make achievements prominent
- **Quick glance**: All info visible without interaction
- **Motivational**: Design should inspire continued use

---

## Mock Data for Development

```typescript
// For testing and prototyping
export const MOCK_GROWTH_DATA: GrowthData = {
  totalDays: 45,
  currentStreak: 14,
  longestStreak: 28,
  successRate: 89,
  treeStage: 3,
  nextMilestone: {
    days: 60,
    progress: 75,
  },
};

export const MOCK_ACHIEVEMENTS: Achievement[] = [
  {
    id: '7day',
    name: '7-Day Warrior',
    description: 'Complete habits for 7 days in a row',
    icon: '🎖️',
    requirement: 7,
    unlocked: true,
    unlockedDate: new Date('2025-10-08'),
  },
  {
    id: '14day',
    name: 'Week Master',
    description: 'Complete habits for 14 days in a row',
    icon: '🏅',
    requirement: 14,
    unlocked: true,
    unlockedDate: new Date('2025-10-15'),
  },
  {
    id: '30day',
    name: 'Month Legend',
    description: 'Complete habits for 30 days in a row',
    icon: '🏆',
    requirement: 30,
    unlocked: false,
    progress: 47, // 14/30 = 47%
  },
];

export const MOCK_HABIT_PERFORMANCE: HabitPerformance[] = [
  {
    habitId: '1',
    habitName: 'Morning Meditation',
    emoji: '🧘',
    successRate: 95,
    totalAttempts: 45,
    successfulAttempts: 43,
  },
  {
    habitId: '2',
    habitName: 'Daily Exercise',
    emoji: '🏃',
    successRate: 87,
    totalAttempts: 45,
    successfulAttempts: 39,
  },
  {
    habitId: '3',
    habitName: 'Read 10 Pages',
    emoji: '📚',
    successRate: 65,
    totalAttempts: 45,
    successfulAttempts: 29,
  },
];
```

---

## Success Criteria

**This page is successful when:**
1. ✅ Users feel motivated by seeing their growth
2. ✅ All key metrics visible at a glance
3. ✅ Users return daily to check progress
4. ✅ Achievement unlocks create excitement
5. ✅ Performance remains smooth (60fps)
6. ✅ Data loads in <1 second
7. ✅ No confusion about what data means
8. ✅ Users share their achievements

---

*Last Updated: October 18, 2025*
*Status: Design Complete - Ready for Implementation*
