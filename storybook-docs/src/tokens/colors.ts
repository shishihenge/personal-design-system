// Your Figma Color Tokens as TypeScript constants
export const colors = {
  // Primary
  primary50: '#C8FBEE',
  primary500: '#1A3F37',  // Your brand blue
  
  // Neutral
  neutral100: '#F3F4F6',
  neutral900: '#111827',
  
  // Semantic
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
} as const;

// Type for autocomplete
export type ColorTokens = typeof colors;