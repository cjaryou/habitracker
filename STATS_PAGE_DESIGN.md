# Stats Page Design Document

## Overview
The Stats page provides comprehensive analytics and insights about the user's habit tracking journey. It transforms raw data into actionable insights through beautiful visualizations and meaningful metrics.

---

## Core Concept: Data Garden
**Visual Metaphor:** Statistics presented as a flourishing data garden
- Charts bloom like flowers
- Numbers grow like plants
- Trends flow like water
- Insights sprout naturally

---

## Key Features

### 1. **Dashboard Overview (Top Section)**
Quick glance at key metrics:

```
┌─────────────────────────────────┐
│  📊 Your Stats Garden           │
│  ─────────────────────          │
│                                 │
│  ┌──────┐ ┌──────┐ ┌──────┐   │
│  │  45  │ │ 89%  │ │ 127  │   │
│  │ Days │ │ Rate │ │Habits│   │
│  └──────┘ └──────┘ └──────┘   │
│                                 │
│  ┌──────┐ ┌──────┐ ┌──────┐   │
│  │  14  │ │  28  │ │  3.2 │   │
│  │Streak│ │ Best │ │ Avg  │   │
│  └──────┘ └──────┘ └──────┘   │
└─────────────────────────────────┘
```

**Key Metrics:**
- Current streak
- Success rate (%)
- Total habits tracked
- Longest streak
- Average habits/day
- Days active
- Perfect weeks count
- Current level/era

---

### 2. **Weekly Heatmap**
Visual calendar showing completion patterns:

```
┌─────────────────────────────────┐
│  📅 Activity Heatmap            │
│  ─────────────────────          │
│                                 │
│  M  ■ □ ■ ■ □ ■ ■             │
│  T  ■ ■ ■ □ ■ ■ ■             │
│  W  □ ■ ■ ■ ■ □ ■             │
│  T  ■ ■ □ ■ ■ ■ ■             │
│  F  ■ ■ ■ ■ □ ■ ■             │
│  S  ■ □ ■ ■ ■ ■ □             │
│  S  □ ■ ■ □ ■ ■ ■             │
│                                 │
│  □ Low  ■ Medium  ■ High        │
└─────────────────────────────────┘
```

**Features:**
- Last 4-12 weeks visualization
- Color intensity = Completion rate
- Tap day for details
- GitHub-style contribution graph
- Identifies patterns (weekday vs weekend)

---

### 3. **Completion Rate Chart**
Line/area chart showing trends over time:

```
┌─────────────────────────────────┐
│  📈 Completion Trends           │
│  ─────────────────────          │
│  100% ╱╲                        │
│   75% ╱  ╲╱╲                    │
│   50% ╱      ╲                  │
│   25% ╱        ╲                │
│    0% ─────────────             │
│      Week 1  2  3  4            │
│                                 │
│  This Week: ▲ +12% vs last week │
└─────────────────────────────────┘
```

**Options:**
- Time range: Week, Month, Quarter, Year
- Metric: Completion %, Streak, Total habits
- Chart type: Line, Bar, Area
- Compare periods

---

### 4. **Habit Breakdown**
Individual habit performance:

```
┌─────────────────────────────────┐
│  🎯 Habit Performance           │
│  ─────────────────────          │
│                                 │
│  Morning Meditation             │
│  ████████░░ 82%  45/55 days     │
│  Best streak: 12 days 🔥        │
│                                 │
│  Exercise                       │
│  ██████████ 95%  52/55 days     │
│  Best streak: 28 days 🔥🔥      │
│                                 │
│  Read 10 Pages                  │
│  ████░░░░░░ 67%  37/55 days     │
│  Best streak: 8 days 🔥         │
│                                 │
│  [View All Habits →]            │
└─────────────────────────────────┘
```

**Per Habit:**
- Completion rate
- Total completions
- Best streak
- Current streak
- Trend indicator (↑↓→)
- Days since last completion

---

### 5. **Time of Day Analysis**
When are you most productive?

```
┌─────────────────────────────────┐
│  ⏰ Best Performance Times      │
│  ─────────────────────          │
│                                 │
│  Morning (6-12)   ████████ 85%  │
│  Afternoon (12-6) ██████░░ 68%  │
│  Evening (6-12)   ████████ 92%  │
│  Night (12-6)     ██░░░░░░ 45%  │
│                                 │
│  💡 You're an evening person!   │
└─────────────────────────────────┘
```

---

### 6. **Streak Calendar**
Visual representation of streaks:

```
┌─────────────────────────────────┐
│  🔥 Streak History              │
│  ─────────────────────          │
│                                 │
│  Current: 14 days 🔥            │
│  Longest: 28 days 🔥🔥          │
│                                 │
│  [====14====]                   │
│  [=====17=====]                 │
│  [========28========] ← Best    │
│  [===12===]                     │
│  [======19======]               │
│                                 │
│  Total: 5 streaks (90+ days)    │
└─────────────────────────────────┘
```

---

### 7. **Weekly Pattern Analysis**
Identify your best/worst days:

```
┌─────────────────────────────────┐
│  📊 Weekly Patterns             │
│  ─────────────────────          │
│                                 │
│  Best Day:   Tuesday 🏆 (92%)   │
│  Worst Day:  Saturday 😢 (63%)  │
│                                 │
│  Mon ████████ 85%               │
│  Tue █████████ 92% ⭐           │
│  Wed ███████░ 78%               │
│  Thu ████████ 87%               │
│  Fri ███████░ 75%               │
│  Sat ██████░░ 63% ⚠️            │
│  Sun ███████░ 71%               │
│                                 │
│  💡 Consider easier habits on   │
│     weekends!                   │
└─────────────────────────────────┘
```

---

### 8. **Achievements Gallery**
Unlocked badges and milestones:

```
┌─────────────────────────────────┐
│  🏆 Achievements                │
│  ─────────────────────          │
│                                 │
│  ┌──────┐ ┌──────┐ ┌──────┐   │
│  │  🔥  │ │  🌟  │ │  💪  │   │
│  │ Week │ │Month │ │ Iron │   │
│  │Warrior│ │ King │ │ Man  │   │
│  └──────┘ └──────┘ └──────┘   │
│                                 │
│  ┌──────┐ ┌──────┐ ┌──────┐   │
│  │  🎯  │ │  ?   │ │  ?   │   │
│  │Perfect│ │Locked│ │Locked│   │
│  │ 10   │ │  ?   │ │  ?   │   │
│  └──────┘ └──────┘ └──────┘   │
│                                 │
│  Progress: 12/30 Unlocked       │
└─────────────────────────────────┘
```

**Achievement Categories:**
- Streak milestones (7, 14, 30, 60, 100 days)
- Perfect weeks/months
- Era unlocks
- Habit variety (track X different habits)
- Consistency (90% for 30 days)
- Special events (New Year, Birthday)

---

### 9. **Insights & Suggestions**
AI-powered insights:

```
┌─────────────────────────────────┐
│  💡 Smart Insights              │
│  ─────────────────────          │
│                                 │
│  ⭐ Your best habit:             │
│     "Exercise" - 95% completion │
│     Keep it up! 💪              │
│                                 │
│  ⚠️ Needs attention:            │
│     "Meditation" - dropped 15%  │
│     Try moving to morning?      │
│                                 │
│  🎯 Recommendation:             │
│     You're consistent on        │
│     weekdays. Try "tiny habits" │
│     strategy for weekends.      │
│                                 │
│  📈 Progress:                   │
│     +23% better than last month │
│     You're on fire! 🔥          │
└─────────────────────────────────┘
```

**Insight Types:**
- Performance trends
- Pattern recognition
- Habit suggestions
- Optimization tips
- Motivational messages
- Comparison to averages

---

### 10. **Monthly Report Card**
Comprehensive monthly summary:

```
┌─────────────────────────────────┐
│  📋 March 2025 Report           │
│  ─────────────────────          │
│                                 │
│  Overall Grade: A- 🌟           │
│                                 │
│  Completion Rate: 87% (↑5%)     │
│  Active Days: 27/31             │
│  Perfect Days: 15               │
│  Habits Tracked: 127            │
│  Longest Streak: 14 days        │
│                                 │
│  Top 3 Habits:                  │
│  1. Exercise (95%)              │
│  2. Read (89%)                  │
│  3. Meditation (82%)            │
│                                 │
│  Areas to Improve:              │
│  • Weekend consistency          │
│  • Water intake habit           │
│                                 │
│  [Share Report] [Export PDF]    │
└─────────────────────────────────┘
```

---

## Data Visualizations

### Chart Types:

1. **Line Chart**
   - Completion rate over time
   - Streak progression
   - Habit count trends

2. **Bar Chart**
   - Weekly comparison
   - Habit performance ranking
   - Monthly totals

3. **Heatmap**
   - Calendar view
   - Time of day patterns
   - Day of week patterns

4. **Donut/Pie Chart**
   - Habit category breakdown
   - Success vs missed ratio
   - Time distribution

5. **Progress Bars**
   - Individual habit completion
   - Goal progress
   - Level progress

6. **Area Chart**
   - Cumulative habits
   - Rolling average
   - Trend visualization

---

## Filter & Time Range Options

```
┌─────────────────────────────────┐
│  [Last 7 Days ▼]                │
│  • Last 7 Days                  │
│  • Last 30 Days                 │
│  • Last 3 Months                │
│  • Last Year                    │
│  • All Time                     │
│  • Custom Range                 │
└─────────────────────────────────┘
```

**Additional Filters:**
- By habit (specific or all)
- By category
- By success rate (high/low)
- By day of week
- By time of day

---

## Interactive Features

### 1. **Tap on Chart**
- Show exact data point
- Drill down to details
- Compare with average

### 2. **Swipe Between Periods**
- Swipe left: Previous period
- Swipe right: Next period
- Smooth transitions

### 3. **Pinch to Zoom**
- Zoom in: More detailed view
- Zoom out: Broader overview

### 4. **Long Press**
- Quick actions menu
- Share specific stat
- Export data

### 5. **Pull to Refresh**
- Update latest data
- Recalculate stats
- Refresh insights

---

## Data Structure

### Stats Summary:
```typescript
interface StatsSummary {
  totalDays: number;
  completionRate: number;
  currentStreak: number;
  longestStreak: number;
  totalHabits: number;
  averageHabitsPerDay: number;
  perfectDays: number;
  activeDays: number;
  currentLevel: number;
  currentEra: string;
}
```

### Habit Performance:
```typescript
interface HabitPerformance {
  habitId: string;
  habitName: string;
  totalCompletions: number;
  totalPossible: number;
  completionRate: number;
  currentStreak: number;
  bestStreak: number;
  trend: 'up' | 'down' | 'stable';
  lastCompleted: Date;
}
```

### Time Pattern:
```typescript
interface TimePattern {
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
  completionRate: number;
  averageHabits: number;
  bestHour: number;
}
```

---

## Implementation Priority

### Phase 1 (MVP):
- [ ] Dashboard with key metrics (6 stat cards)
- [ ] Simple bar chart (weekly completion)
- [ ] Habit breakdown list
- [ ] Basic filters (time range)

### Phase 2:
- [ ] Weekly heatmap
- [ ] Line chart with trends
- [ ] Time of day analysis
- [ ] Weekly pattern analysis

### Phase 3:
- [ ] Achievements gallery
- [ ] Smart insights (AI)
- [ ] Monthly report card
- [ ] Advanced charts (area, donut)

### Phase 4:
- [ ] Export features (PDF, image)
- [ ] Share to social media
- [ ] Compare with friends
- [ ] Predictive analytics

---

## Visual Design

### Color Palette:
- **High performance**: Green (#6B9B6B)
- **Medium performance**: Amber (#F4D58D)
- **Low performance**: Coral (#FF8B6B)
- **Neutral/Background**: Soft beige (#F9F6F1)
- **Accents**: Water blue (#5DADE2)

### Card Styles:
- White background with subtle shadows
- Rounded corners (16-24px)
- Gradient accents for premium feel
- Icons with nature theme

### Typography:
- Numbers: Large, bold, prominent
- Labels: Small, uppercase, muted
- Insights: Medium, regular, readable
- Headings: Large, semi-bold

---

## Animations

1. **Chart Appearance**
   - Bars grow from bottom
   - Lines draw from left to right
   - Numbers count up

2. **Card Entry**
   - Fade in + slide up
   - Stagger effect (cascade)

3. **Stat Update**
   - Number morph animation
   - Pulse effect on change
   - Color transition

4. **Achievement Unlock**
   - Pop + sparkle effect
   - Confetti animation
   - Sound effect (optional)

---

## Alternative Views

### 1. **Compact Mode**
Minimal stats for quick check:
- 3-4 key numbers only
- No charts
- Quick insights

### 2. **Detailed Mode** (Default)
Full analytics dashboard:
- All charts and graphs
- Comprehensive insights
- Export options

### 3. **Comparison Mode**
Side-by-side comparisons:
- This week vs last week
- This month vs last month
- Your stats vs average user

---

## User Stories

1. **As a user**, I want to see my overall performance to understand my progress
2. **As a user**, I want to identify patterns to optimize my routine
3. **As a user**, I want to celebrate achievements to stay motivated
4. **As a user**, I want insights on what to improve
5. **As a user**, I want to share my stats with friends

---

## Success Metrics

- Time spent on Stats page
- Chart interaction rate
- Filter usage frequency
- Insight read rate
- Achievement view rate
- Export/share frequency

---

## Technical Considerations

### Performance:
- Lazy load charts (only visible ones)
- Cache calculated stats
- Optimize large datasets (1+ year)
- Use memoization for expensive calculations

### Libraries:
- **Charts**: victory-native or react-native-chart-kit
- **Animations**: react-native-reanimated
- **Date handling**: date-fns
- **Number formatting**: numeral or Intl

### Accessibility:
- Screen reader labels for charts
- High contrast mode
- Text alternatives for visual data
- Keyboard navigation support

---

## Future Enhancements

1. **Export & Share**
   - PDF report generation
   - Beautiful stat images for social
   - CSV data export

2. **Social Features**
   - Leaderboards (opt-in)
   - Friend comparisons
   - Group challenges

3. **Advanced Analytics**
   - Correlation analysis (habit A affects habit B)
   - Predictive modeling (likely to break streak)
   - Anomaly detection

4. **Customization**
   - Reorder stat cards
   - Choose favorite charts
   - Custom metrics

5. **Integrations**
   - Health app data
   - Weather correlation
   - Calendar integration

---

## Design References

Inspired by:
- Apple Health app
- Strava analytics
- GitHub insights
- Duolingo progress tracking
- Google Fit statistics

---

## Notes
- Balance detail with simplicity - don't overwhelm
- Focus on actionable insights, not just numbers
- Make it visually appealing - stats should be beautiful
- Performance is critical with large datasets
- Celebrate successes prominently
