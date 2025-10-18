# Growth/Timeline Screen - Daily Habit Manager Design

## 📋 Overview
The Growth screen (Timeline page) is your **daily habit command center** - similar to the Self-Care page in the reference app. This is where users actively manage their habits for today, mark tasks as complete, and track progress.

---

## 🎯 Core Philosophy

**Growth = Daily Action, Not History**
- ✅ **Action-Oriented**: Users can DO things here (mark done, update progress)
- ✅ **Today-Focused**: Shows today's habits, not past data
- ✅ **Quick Access**: Fast interaction, minimal taps
- ✅ **Motivational**: Positive reinforcement and visual feedback

**Stats page shows the past, Growth page manages the present.**

---

## 📱 Page Layout (Mobile-First)

```
┌─────────────────────────────────────────┐
│      GROWTH - Daily Habit Tracker       │
├─────────────────────────────────────────┤
│                                         │
│  📅 TODAY - October 18, 2025           │
│  Good morning! Time to grow 🌱          │
│                                         │
│  ─────────────────────────────          │
│                                         │
│  📝 TODAY'S HABITS                      │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ 🧘 Morning Meditation           │   │
│  │ ✅ Completed at 7:30 AM         │   │
│  │ Great start to the day!         │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ 🏃 Daily Exercise               │   │
│  │ ◯ Not Done Yet                  │   │
│  │ [Mark as Done] [Skip]           │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ 📚 Read 10 Pages                │   │
│  │ ◐ In Progress (5/10)            │   │
│  │ [+] 6 7 8 9 10 pages            │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ 💧 Drink 8 Glasses Water        │   │
│  │ 🟦🟦🟦🟦⬜⬜⬜⬜ 4/8            │   │
│  │ [+1 Glass]                      │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [+ Add New Habit]                      │
│                                         │
│  ─────────────────────────────          │
│                                         │
│  🌳 YOUR PROGRESS TODAY                 │
│  ┌─────────────────────────────────┐   │
│  │     🌿🌿🌿                       │   │
│  │   "2/4 habits done!"            │   │
│  │   Keep it up! 💪                │   │
│  │                                 │   │
│  │   Current Streak: 🔥 14 days    │   │
│  └─────────────────────────────────┘   │
│                                         │
│  🎯 QUICK ACTIONS                       │
│  ┌────────────┬────────────┐           │
│  │ 📊 Stats   │ 🏆 Rewards │           │
│  └────────────┴────────────┘           │
│  ┌────────────┬────────────┐           │
│  │ 📅 History │ ⚙️ Settings │           │
│  └────────────┴────────────┘           │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🏗️ Components Structure

### 1. **Header Section**
```tsx
interface HeaderProps {
  date: Date;
  userName?: string;
  greeting: string; // "Good morning!", "Good evening!"
}

// Example:
📅 TODAY - October 18, 2025
Good morning, Alex! Time to grow 🌱
```

**Features:**
- Dynamic greeting based on time of day
- Current date display
- Personalized with user name (optional)

---

### 2. **Habit Card Component**

```tsx
interface HabitCard {
  id: string;
  name: string;
  emoji: string;
  type: 'boolean' | 'count' | 'duration'; // checkbox, counter, timer
  status: 'pending' | 'in-progress' | 'completed' | 'skipped';
  
  // For count/duration types
  current?: number;
  goal?: number;
  unit?: string; // "pages", "glasses", "minutes"
  
  // Completion info
  completedAt?: Date;
  note?: string;
}
```

#### **Card States:**

**A) Completed Habit:**
```
┌─────────────────────────────────┐
│ ✅ 🧘 Morning Meditation        │
│ Completed at 7:30 AM            │
│ "Great start to the day!"       │
│ [Undo]                          │
└─────────────────────────────────┘

Style: Green background, checkmark
Actions: Undo button (mark as not done)
```

**B) Pending Habit (Boolean):**
```
┌─────────────────────────────────┐
│ ◯ 🏃 Daily Exercise             │
│ Not done yet                    │
│ [Mark as Done] [Skip]           │
└─────────────────────────────────┘

Style: White/neutral background
Actions: Mark as done, Skip for today
```

**C) In-Progress Habit (Counter):**
```
┌─────────────────────────────────┐
│ ◐ 📚 Read 10 Pages              │
│ 📖📖📖📖📖○○○○○ 5/10          │
│ [+1] [+2] [+5] [Set Custom]     │
└─────────────────────────────────┘

Style: Yellow/orange background
Actions: Quick add buttons, custom input
```

**D) In-Progress Habit (Visual Tracker):**
```
┌─────────────────────────────────┐
│ ◐ 💧 Drink 8 Glasses            │
│ 🟦🟦🟦🟦⬜⬜⬜⬜ 4/8            │
│ [+1 Glass]                      │
└─────────────────────────────────┘

Style: Blue progress
Actions: Increment button
```

**E) Skipped Habit:**
```
┌─────────────────────────────────┐
│ ⊘ 🧘 Morning Meditation         │
│ Skipped for today               │
│ [Undo Skip]                     │
└─────────────────────────────────┘

Style: Gray, faded
Actions: Undo skip
```

---

### 3. **Add New Habit Button**

```
┌─────────────────────────────────┐
│     [+ Add New Habit]           │
└─────────────────────────────────┘

Tap → Opens modal/sheet to create habit
```

**Add Habit Modal:**
```
┌─────────────────────────────────┐
│  Create New Habit               │
├─────────────────────────────────┤
│                                 │
│  Habit Name:                    │
│  [________________]             │
│                                 │
│  Emoji: 🎯 [Pick]               │
│                                 │
│  Type:                          │
│  (•) Simple Checkbox            │
│  ( ) Counter (with goal)        │
│  ( ) Duration (with timer)      │
│                                 │
│  Goal (optional):               │
│  [__] [minutes/pages/glasses]   │
│                                 │
│  Frequency:                     │
│  (•) Daily                      │
│  ( ) Weekly                     │
│                                 │
│  [Cancel]         [Create]      │
└─────────────────────────────────┘
```

---

### 4. **Progress Summary Card**

```tsx
interface ProgressSummary {
  completedToday: number;
  totalToday: number;
  currentStreak: number;
  motivationalMessage: string;
}
```

```
┌─────────────────────────────────┐
│  🌳 YOUR PROGRESS TODAY          │
│                                 │
│      🌿🌿🌿                      │
│    "2/4 habits done!"           │
│    Keep it up! 💪               │
│                                 │
│  Current Streak: 🔥 14 days     │
│  Progress: ████████░░ 50%       │
└─────────────────────────────────┘

Colors:
- 0-25%: Red/Orange
- 26-50%: Yellow
- 51-75%: Light Green
- 76-100%: Dark Green
```

**Motivational Messages:**
- 0%: "Ready to start? You got this! 🌱"
- 25%: "Good beginning! Keep going! 💪"
- 50%: "Halfway there! 🎯"
- 75%: "Almost done! Finish strong! ⚡"
- 100%: "Perfect day! You're amazing! 🎉"

---

### 5. **Quick Actions Grid**

```
┌────────────┬────────────┐
│ 📊 Stats   │ 🏆 Rewards │
│ View Data  │ Shop       │
└────────────┴────────────┘
┌────────────┬────────────┐
│ 📅 History │ ⚙️ Settings│
│ Calendar   │ Manage     │
└────────────┴────────────┘

Each button navigates to respective page
```

---

## 🎨 Design System

### Colors:
```typescript
const HABIT_COLORS = {
  // Status colors
  completed: '#66BB6A',      // Green
  inProgress: '#FFB74D',     // Orange
  pending: '#E0E0E0',        // Gray
  skipped: '#BDBDBD',        // Dark Gray
  
  // Card backgrounds
  cardWhite: '#FFFFFF',
  cardCompleted: '#E8F5E9',  // Light green
  cardInProgress: '#FFF3E0', // Light orange
  cardSkipped: '#F5F5F5',    // Light gray
  
  // Text
  textPrimary: '#2C2C2C',
  textSecondary: '#757575',
  textSuccess: '#388E3C',
  
  // Accent
  accentPrimary: '#6B9B6B',
  accentSecondary: '#8B7355',
};
```

### Typography:
```typescript
const TYPOGRAPHY = {
  habitTitle: { fontSize: 16, fontWeight: '600' },
  habitStatus: { fontSize: 14, fontWeight: '400' },
  progressNumber: { fontSize: 20, fontWeight: '700' },
  sectionTitle: { fontSize: 14, fontWeight: '700', textTransform: 'uppercase' },
};
```

### Spacing:
```typescript
const SPACING = {
  cardPadding: 16,
  cardMargin: 12,
  sectionMargin: 20,
  buttonHeight: 44,
};
```

---

## 🔄 Interactions & Animations

### 1. **Mark as Done Animation**
```typescript
// When user taps "Mark as Done"
1. Haptic feedback (light impact)
2. Checkmark icon scales up (1.0 → 1.2 → 1.0)
3. Card background transitions to green
4. Confetti animation (if all habits done)
5. Update progress summary
```

### 2. **Progress Counter Animation**
```typescript
// When user increments counter
1. Number animates (count up)
2. Progress bar fills smoothly
3. If goal reached:
   - Success animation
   - Haptic feedback (success)
   - Card transitions to completed state
```

### 3. **Add Habit Animation**
```typescript
// When new habit created
1. Modal slides down
2. New habit card slides in from bottom
3. Subtle bounce effect
```

### 4. **Streak Update**
```typescript
// When completing all habits
1. Flame emoji pulses
2. Number increments with animation
3. Achievement toast appears
```

---

## 📊 Data Structure

### Main State:
```typescript
interface TodayHabits {
  date: Date;
  habits: HabitCard[];
  summary: {
    completed: number;
    total: number;
    percentage: number;
  };
  streak: number;
}
```

### Habit Types:
```typescript
// Boolean Habit (Simple checkbox)
type BooleanHabit = {
  type: 'boolean';
  status: 'completed' | 'pending' | 'skipped';
};

// Count Habit (With goal)
type CountHabit = {
  type: 'count';
  current: number;
  goal: number;
  unit: string; // "pages", "glasses", "reps"
};

// Duration Habit (With timer)
type DurationHabit = {
  type: 'duration';
  current: number; // seconds
  goal: number;    // seconds
  unit: 'minutes' | 'hours';
};
```

---

## 🎯 User Flows

### Flow 1: Mark Simple Habit as Done
```
1. User opens Growth page
2. Sees list of today's habits
3. Taps [Mark as Done] on "Morning Meditation"
4. Card animates to green ✅
5. Progress summary updates (1/4 → 2/4)
6. Haptic feedback
7. Done!
```

### Flow 2: Update Progress Habit
```
1. User sees "Read 10 Pages" at 5/10
2. Taps [+1] button 5 times
3. Counter animates: 5 → 6 → 7 → 8 → 9 → 10
4. At 10/10: Success animation plays
5. Card transitions to completed state ✅
6. Progress summary updates
```

### Flow 3: Add New Habit
```
1. User taps [+ Add New Habit]
2. Modal opens with form
3. User fills:
   - Name: "Drink Water"
   - Emoji: 💧
   - Type: Counter
   - Goal: 8 glasses
4. Taps [Create]
5. Modal closes
6. New habit card appears in list
7. Saved to database
```

### Flow 4: Skip Habit for Today
```
1. User realizes they can't exercise today
2. Taps [Skip] on "Daily Exercise"
3. Confirmation: "Skip this habit for today?"
4. Confirms
5. Card grays out
6. Doesn't break streak (one skip allowed per week)
```

---

## 🔔 Notifications & Reminders

### Reminder System:
```typescript
interface HabitReminder {
  habitId: string;
  time: Date; // "08:00", "18:00"
  message: string;
  enabled: boolean;
}

// Examples:
"Time for morning meditation! 🧘"
"Don't forget your daily exercise! 🏃"
"Have you had your water today? 💧"
```

---

## 🎁 Rewards & Gamification

### Streak Milestones:
```
7 days:  🎖️ "Week Warrior" badge
14 days: 🏅 "Two Week Master"
30 days: 🏆 "Month Legend"
100 days: 💎 "Century Club"

Each milestone unlocks:
- New garden decorations
- Special emojis
- Profile badges
```

### Daily Rewards:
```
Complete all habits → Earn 10 points
Perfect week → Earn 100 bonus points
Monthly streak → Earn 500 bonus points

Points can be spent in Garden shop
```

---

## 📱 Technical Implementation

### File Structure:
```
components/
  timeline-screen/
    index.tsx                    # Main screen
    styles.ts                    # All styles
    constants.ts                 # Config
    types.ts                     # TypeScript types
    
    components/
      habit-card.tsx             # Individual habit card
      add-habit-modal.tsx        # Create habit modal
      progress-summary.tsx       # Progress card
      quick-actions.tsx          # Action buttons
      header.tsx                 # Date & greeting
    
    hooks/
      use-today-habits.ts        # Fetch today's habits
      use-habit-actions.ts       # Mark done, update, skip
    
    utils/
      habit-helpers.ts           # Helper functions
      notifications.ts           # Reminder logic
```

### Key Components:

#### `habit-card.tsx`:
```tsx
export function HabitCard({ habit, onUpdate }: HabitCardProps) {
  const handleMarkDone = () => {
    onUpdate(habit.id, { status: 'completed', completedAt: new Date() });
  };
  
  const handleIncrement = () => {
    if (habit.type === 'count') {
      onUpdate(habit.id, { current: habit.current + 1 });
    }
  };
  
  const handleSkip = () => {
    onUpdate(habit.id, { status: 'skipped' });
  };
  
  return (
    <View style={styles.card}>
      {/* Render based on habit.status */}
    </View>
  );
}
```

#### `use-today-habits.ts`:
```tsx
export function useTodayHabits() {
  const [habits, setHabits] = useState<HabitCard[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch today's habits from database
    fetchTodayHabits().then(setHabits);
  }, []);
  
  const updateHabit = (id: string, updates: Partial<HabitCard>) => {
    setHabits(prev => 
      prev.map(h => h.id === id ? { ...h, ...updates } : h)
    );
    // Save to database
    saveHabitUpdate(id, updates);
  };
  
  return { habits, updateHabit, loading };
}
```

---

## ✅ Implementation Checklist

### Phase 1 (MVP - Week 1):
- [ ] Basic habit card component
- [ ] Display today's habits (mock data)
- [ ] Mark as done functionality
- [ ] Progress summary card
- [ ] Basic styling

### Phase 2 (Week 2):
- [ ] Counter habits (with goal)
- [ ] Add new habit modal
- [ ] Skip habit functionality
- [ ] Undo actions
- [ ] Animations (mark done, progress)

### Phase 3 (Week 3):
- [ ] Duration/timer habits
- [ ] Edit habit
- [ ] Delete habit
- [ ] Habit reminders
- [ ] Persistence (database)

### Phase 4 (Polish):
- [ ] Advanced animations
- [ ] Haptic feedback
- [ ] Sound effects
- [ ] Streak milestones
- [ ] Rewards integration

---

## 🎯 Success Metrics

**This page is successful when:**
1. ✅ Users check in daily (>80% daily active users)
2. ✅ Average completion rate >70%
3. ✅ Time to mark all habits <1 minute
4. ✅ Users feel motivated (NPS score >8)
5. ✅ Zero confusion about how to use
6. ✅ Streaks maintained (>60% users have 7+ day streak)

---

## 🚀 Future Enhancements

### Version 2.0:
1. **Habit Templates**: Pre-made habit suggestions
2. **Social Features**: Share progress with friends
3. **Smart Scheduling**: AI suggests best times for habits
4. **Habit Stacking**: Link habits together
5. **Voice Commands**: "Mark meditation as done"

### Version 3.0:
1. **Habit Insights**: "You complete exercise best on Mondays"
2. **Adaptive Goals**: Automatically adjust goals based on performance
3. **Mood Tracking**: Link habits with mood data
4. **Weather Integration**: Adjust outdoor habits based on weather
5. **Apple Watch**: Complete habits from watch

---

## 💡 Design Inspiration

**Similar to:**
- Streaks (Habit tracker)
- Habitica (Gamified habits)
- Productive (Habit tracking)
- Way of Life (Simple habit tracker)
- Loop Habit Tracker

**Key Differentiators:**
- ✅ Terrarium theme integration
- ✅ Visual growth metaphor
- ✅ Garden shop rewards
- ✅ Character growth system

---

## 📝 Notes

- **Keep it simple**: Don't overwhelm with options
- **Fast interactions**: Every action <200ms
- **Visual feedback**: Always show state changes
- **Positive reinforcement**: Celebrate every win
- **Flexible**: Support different habit types
- **Beautiful**: Match terrarium aesthetic

---

*Design Status: Ready for Implementation*
*Last Updated: October 18, 2025*
*Next Step: Create habit-card component*
