import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';
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
            {dayData.completed ? (
              <Ionicons name="flame" size={28} color="#FF6B35" />
            ) : (
              <Ionicons name="ellipse-outline" size={24} color="#D0D0D0" />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
