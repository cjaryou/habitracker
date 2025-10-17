import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TerrariumColors } from './styles';

export function TerrariumDecorations() {
  return (
    <>
      {/* Water droplets on glass */}
      <View style={[styles.waterDroplet, { top: 30, right: 25 }]} />
      <View style={[styles.waterDroplet, { top: 80, right: 40 }]} />
      <View style={[styles.waterDroplet, { top: 120, right: 30 }]} />
      <View style={[styles.waterDroplet, { top: 60, left: 35 }]} />
      <View style={[styles.waterDroplet, { top: 140, left: 25 }]} />

      {/* Small plants decorations */}
      <View style={[styles.plantDecoration, { bottom: 85, left: 20 }]}>
        <Ionicons name="leaf" size={20} color={TerrariumColors.leafGreen} />
      </View>
      <View style={[styles.plantDecoration, { bottom: 90, right: 25 }]}>
        <Ionicons name="leaf" size={16} color={TerrariumColors.grassDark} />
      </View>

      {/* Tiny grass blades on soil */}
      <View style={[styles.grassBlade, { bottom: 82, left: 50 }]} />
      <View style={[styles.grassBlade, { bottom: 84, left: 65 }]} />
      <View style={[styles.grassBlade, { bottom: 81, right: 60 }]} />
      <View style={[styles.grassBlade, { bottom: 83, right: 75 }]} />

      {/* Moss patches */}
      <View style={[styles.mossPatch, { bottom: 80, left: 80 }]} />
      <View style={[styles.mossPatch, { bottom: 78, right: 90 }]} />
    </>
  );
}

const styles = StyleSheet.create({
  waterDroplet: {
    position: 'absolute',
    width: 6,
    height: 8,
    backgroundColor: TerrariumColors.waterDrop,
    borderRadius: 6,
    opacity: 0.5,
  },
  plantDecoration: {
    position: 'absolute',
    opacity: 0.7,
  },
  grassBlade: {
    position: 'absolute',
    width: 2,
    height: 12,
    backgroundColor: TerrariumColors.grassMedium,
    borderRadius: 1,
  },
  mossPatch: {
    position: 'absolute',
    width: 10,
    height: 4,
    backgroundColor: TerrariumColors.mossGreen,
    borderRadius: 2,
    opacity: 0.6,
  },
});
