import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { statsScreenStyles as styles } from '../styles';
import { MonthHeatmapProps } from '../types';

export function MonthHeatmap({ months, onDayPress }: MonthHeatmapProps) {
  const getMonthName = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const getDayStyle = (status: 'empty' | 'partial' | 'good' | 'perfect') => {
    switch (status) {
      case 'empty':
        return styles.heatmapEmpty;
      case 'partial':
        return styles.heatmapPartial;
      case 'good':
        return styles.heatmapGood;
      case 'perfect':
        return styles.heatmapPerfect;
      default:
        return styles.heatmapEmpty;
    }
  };

  return (
    <View style={styles.heatmapContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          {months.map((monthDays, monthIndex) => {
            if (monthDays.length === 0) return null;

            return (
              <View key={monthIndex} style={styles.heatmapMonth}>
                {/* Month Label */}
                <Text style={styles.heatmapMonthLabel}>{getMonthName(monthDays[0].date)}</Text>

                {/* Days Grid */}
                <View style={styles.heatmapDays}>
                  {monthDays.map((day, dayIndex) => (
                    <TouchableOpacity
                      key={dayIndex}
                      style={[styles.heatmapDay, getDayStyle(day.status)]}
                      onPress={() => onDayPress?.(day)}
                      activeOpacity={0.7}
                    />
                  ))}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
