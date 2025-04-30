/**
 * This file contains TypeScript type definitions used throughout the EndGambling app
 */

// User profile type
export interface UserProfile {
  id: string;
  name: string;
  soberDays: number;
  goals: Goal[];
  triggers?: Trigger[];
}

// Recovery goal
export interface Goal {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
}

// Gambling trigger
export interface Trigger {
  id: string;
  name: string;
  notes?: string;
  avoidanceStrategies?: string[];
}

// Progress entry
export interface ProgressEntry {
  id: string;
  date: Date;
  mood: 'great' | 'good' | 'neutral' | 'difficult' | 'struggling';
  notes?: string;
  triggers?: string[];
  cravingIntensity?: number; // 1-10 scale
}

// Resource item
export interface Resource {
  id: string;
  title: string;
  description: string;
  url?: string;
  type: 'article' | 'video' | 'contact' | 'tool';
} 