import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TREE_STAGES } from '../constants';
import { statsScreenStyles as styles } from '../styles';
import { GrowthTreeProps } from '../types';

export function GrowthTree({ stage, totalDays, nextMilestone }: GrowthTreeProps) {
  // Get tree info based on stage
  const getTreeInfo = () => {
    if (stage === 1) return TREE_STAGES.SEEDLING;
    if (stage === 2) return TREE_STAGES.SMALL_PLANT;
    if (stage === 3) return TREE_STAGES.YOUNG_TREE;
    if (stage === 4) return TREE_STAGES.MATURE_TREE;
    return TREE_STAGES.ANCIENT_TREE;
  };

  const treeInfo = getTreeInfo();

  return (
    <TouchableOpacity style={styles.treeContainer} activeOpacity={0.8}>
      {/* Tree Icon */}
      <Text style={styles.treeIcon}>{treeInfo.icon}</Text>

      {/* Tree Stage Name */}
      <Text style={styles.treeTitle}>{treeInfo.name}</Text>

      {/* Growth Status */}
      <Text style={styles.treeProgressText}>Your Growth: {totalDays} days</Text>

      {/* Progress Bar */}
      <View style={styles.treeProgress}>
        <View style={[styles.treeProgressFill, { width: `${nextMilestone.progress}%` }]} />
      </View>

      {/* Next Milestone */}
      <Text style={styles.treeProgressText}>
        Next Goal: {nextMilestone.days} days ({nextMilestone.progress}% complete)
      </Text>
    </TouchableOpacity>
  );
}
