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
      contentContainerStyle={{ paddingHorizontal: 12 }}
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
              <Ionicons name="fitness" size={22} color="#E89A6F" />
            ) : (
              <Ionicons name="ellipse" size={18} color="#E5D5C5" />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
