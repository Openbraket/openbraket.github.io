// Added React import to resolve missing namespace for React.ReactNode
import React from 'react';

export interface StatData {
  label: string;
  value: string;
  subValue?: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  metric: string;
  icon: React.ReactNode;
}

export interface RoadmapItem {
  year: string;
  phase: string;
  description: string;
}