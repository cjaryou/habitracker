import { ThemedText } from '@/components/themed-text';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { homeScreenStyles } from './styles';
import { DayData } from './types';

interface DaysCalendarProps {
  daysOfWeek: DayData[];
  todayIndex: number;
}

export function DaysCalendar({ daysOfWeek, todayIndex }: DaysCalendarProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={homeScreenStyles.daysContainer}>
      {daysOfWeek.map((dayData, index) => (
        <TouchableOpacity key={index} style={homeScreenStyles.dayWrapper}>
          <View
            style={[
              homeScreenStyles.dayBox,
              index === todayIndex && homeScreenStyles.dayBoxToday,
              dayData.completed && homeScreenStyles.dayBoxCompleted,
            ]}>
            <ThemedText style={homeScreenStyles.dayText}>{dayData.day}</ThemedText>
            <ThemedText style={homeScreenStyles.dayEmoji}>
              {dayData.completed ? '🟠' : '⚪'}
            </ThemedText>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
