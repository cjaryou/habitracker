import { ThemedText } from '@/components/themed-text';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { growthScreenStyles } from '../styles';
import { HabitCardProps } from '../types';

export function HabitCard({ habit, onUpdate }: HabitCardProps) {
  const handleMarkDone = () => {
    onUpdate(habit.id, {
      status: 'completed',
      completedAt: new Date(),
      current: habit.goal, // Complete count habits
    });
  };

  const handleSkip = () => {
    onUpdate(habit.id, { status: 'skipped' });
  };

  const handleUndo = () => {
    onUpdate(habit.id, {
      status: 'pending',
      completedAt: undefined,
      current: 0,
    });
  };

  const handleIncrement = (amount: number = 1) => {
    if (habit.type === 'count' && habit.goal) {
      const newCurrent = Math.min((habit.current || 0) + amount, habit.goal);
      const newStatus = newCurrent >= habit.goal ? 'completed' : 'in-progress';

      onUpdate(habit.id, {
        current: newCurrent,
        status: newStatus,
        ...(newStatus === 'completed' && { completedAt: new Date() }),
      });
    }
  };

  // Determine card style based on status
  const cardStyles = [
    growthScreenStyles.habitCard,
    habit.status === 'completed' && growthScreenStyles.habitCardCompleted,
    habit.status === 'in-progress' && growthScreenStyles.habitCardInProgress,
    habit.status === 'skipped' && growthScreenStyles.habitCardSkipped,
  ];

  // Status icons
  const statusIcons = {
    completed: '✅',
    'in-progress': '◐',
    pending: '◯',
    skipped: '⊘',
  };

  // Render based on habit type and status
  const renderHabitContent = () => {
    if (habit.status === 'completed') {
      return (
        <>
          <View style={growthScreenStyles.habitHeader}>
            <Text style={growthScreenStyles.habitEmoji}>{statusIcons.completed} {habit.emoji}</Text>
            <ThemedText style={growthScreenStyles.habitName}>{habit.name}</ThemedText>
          </View>
          <ThemedText style={growthScreenStyles.habitStatus}>
            Completed at {habit.completedAt?.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
          </ThemedText>
          {habit.note && (
            <ThemedText style={growthScreenStyles.habitNote}>&ldquo;{habit.note}&rdquo;</ThemedText>
          )}
          <TouchableOpacity style={growthScreenStyles.undoButton} onPress={handleUndo}>
            <ThemedText style={growthScreenStyles.undoButtonText}>Undo</ThemedText>
          </TouchableOpacity>
        </>
      );
    }

    if (habit.status === 'skipped') {
      return (
        <>
          <View style={growthScreenStyles.habitHeader}>
            <Text style={growthScreenStyles.habitEmoji}>{statusIcons.skipped} {habit.emoji}</Text>
            <ThemedText style={growthScreenStyles.habitName}>{habit.name}</ThemedText>
          </View>
          <ThemedText style={growthScreenStyles.habitStatus}>Skipped for today</ThemedText>
          <TouchableOpacity style={growthScreenStyles.undoButton} onPress={handleUndo}>
            <ThemedText style={growthScreenStyles.undoButtonText}>Undo Skip</ThemedText>
          </TouchableOpacity>
        </>
      );
    }

    // Boolean habit (pending)
    if (habit.type === 'boolean') {
      return (
        <>
          <View style={growthScreenStyles.habitHeader}>
            <Text style={growthScreenStyles.habitEmoji}>{statusIcons.pending} {habit.emoji}</Text>
            <ThemedText style={growthScreenStyles.habitName}>{habit.name}</ThemedText>
          </View>
          <ThemedText style={growthScreenStyles.habitStatus}>Not done yet</ThemedText>
          <View style={growthScreenStyles.buttonRow}>
            <TouchableOpacity
              style={[growthScreenStyles.button, growthScreenStyles.buttonPrimary]}
              onPress={handleMarkDone}>
              <ThemedText style={growthScreenStyles.buttonText}>Mark as Done</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[growthScreenStyles.button, growthScreenStyles.buttonSecondary]}
              onPress={handleSkip}>
              <ThemedText style={[growthScreenStyles.buttonText, growthScreenStyles.buttonTextSecondary]}>
                Skip
              </ThemedText>
            </TouchableOpacity>
          </View>
        </>
      );
    }

    // Count habit (in-progress or pending)
    if (habit.type === 'count') {
      const current = habit.current || 0;
      const goal = habit.goal || 1;
      const percentage = (current / goal) * 100;

      return (
        <>
          <View style={growthScreenStyles.habitHeader}>
            <Text style={growthScreenStyles.habitEmoji}>
              {habit.status === 'in-progress' ? statusIcons['in-progress'] : statusIcons.pending} {habit.emoji}
            </Text>
            <ThemedText style={growthScreenStyles.habitName}>{habit.name}</ThemedText>
          </View>

          {/* Visual Tracker for water/glasses */}
          {habit.unit === 'glasses' && (
            <View style={growthScreenStyles.visualTracker}>
              {Array.from({ length: goal }).map((_, index) => (
                <View
                  key={index}
                  style={[
                    growthScreenStyles.trackerSquare,
                    index < current ? growthScreenStyles.trackerFilled : growthScreenStyles.trackerEmpty,
                  ]}
                />
              ))}
              <ThemedText style={growthScreenStyles.trackerCount}>
                {current}/{goal}
              </ThemedText>
            </View>
          )}

          {/* Progress Bar for other count types */}
          {habit.unit !== 'glasses' && (
            <View style={growthScreenStyles.progressContainer}>
              <View style={growthScreenStyles.progressBar}>
                <View style={[growthScreenStyles.progressFill, { width: `${percentage}%` }]} />
              </View>
              <ThemedText style={growthScreenStyles.progressText}>
                {current}/{goal} {habit.unit}
              </ThemedText>
            </View>
          )}

          {/* Increment Buttons */}
          <View style={growthScreenStyles.incrementRow}>
            <TouchableOpacity
              style={growthScreenStyles.incrementButton}
              onPress={() => handleIncrement(1)}>
              <ThemedText style={growthScreenStyles.incrementButtonText}>+1</ThemedText>
            </TouchableOpacity>
            {goal >= 5 && (
              <>
                <TouchableOpacity
                  style={growthScreenStyles.incrementButton}
                  onPress={() => handleIncrement(2)}>
                  <ThemedText style={growthScreenStyles.incrementButtonText}>+2</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={growthScreenStyles.incrementButton}
                  onPress={() => handleIncrement(5)}>
                  <ThemedText style={growthScreenStyles.incrementButtonText}>+5</ThemedText>
                </TouchableOpacity>
              </>
            )}
          </View>

          {habit.status === 'pending' && (
            <TouchableOpacity style={growthScreenStyles.undoButton} onPress={handleSkip}>
              <ThemedText style={growthScreenStyles.undoButtonText}>Skip for today</ThemedText>
            </TouchableOpacity>
          )}
        </>
      );
    }

    return null;
  };

  return <View style={cardStyles}>{renderHabitContent()}</View>;
}
