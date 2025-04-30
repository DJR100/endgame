/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

/**
 * Theme colors for the EndGambling app.
 * Calming, supportive colors that promote wellness and recovery.
 */

const primaryLight = '#4A90E2'; // Calming blue
const primaryDark = '#67B7E1';  // Softer blue for dark mode
const accentColor = '#44C282';  // Hopeful green for progress/success

export const Colors = {
  light: {
    text: '#333333',             // Dark grey for readability
    background: '#FFFFFF',       // Clean white background
    tint: primaryLight,          // Blue tint for interactive elements
    icon: '#687076',             // Subtle icon color
    tabIconDefault: '#A9B4BE',   // Light grey for inactive tabs
    tabIconSelected: primaryLight, // Blue for active tab
    cardBackground: '#F5F8FA',   // Light blue-grey for cards
    success: '#44C282',          // Green for positive reinforcement
    warning: '#F7B955',          // Amber for caution/alerts
    error: '#E77474',            // Soft red for errors
    progress: accentColor,       // Green for progress indicators
  },
  dark: {
    text: '#ECEDEE',             // Off-white for readability
    background: '#121822',       // Dark blue-grey background
    tint: primaryDark,           // Lighter blue tint for dark mode
    icon: '#9BA1A6',             // Medium grey for icons
    tabIconDefault: '#6A7682',   // Grey for inactive tabs
    tabIconSelected: primaryDark, // Light blue for active tab  
    cardBackground: '#1E2633',   // Slightly lighter than background
    success: '#44C282',          // Same green for consistency
    warning: '#F7B955',          // Same amber for consistency
    error: '#E77474',            // Same soft red for consistency
    progress: accentColor,       // Same green for progress
  },
};
