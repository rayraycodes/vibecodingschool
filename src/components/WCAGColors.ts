/**
 * WCAG 2.1 AA Compliant Color Utilities
 * 
 * These color classes ensure all text meets minimum contrast ratios:
 * - Normal text: 4.5:1 contrast ratio
 * - Large text (18pt+/24px+ or 14pt+/19px+ bold): 3:1 contrast ratio
 */

export const wcagColors = {
  // Light theme text colors (on white/light backgrounds)
  textPrimary: 'text-text-primary-light dark:text-text-primary-dark',
  textSecondary: 'text-text-secondary-light dark:text-text-secondary-dark',
  textTertiary: 'text-text-tertiary-light dark:text-text-tertiary-dark',
  
  // Borders - must be visible (3:1+ contrast)
  borderLight: 'border-gray-400 dark:border-gray-600',
  borderMedium: 'border-gray-500 dark:border-gray-500',
  
  // Backgrounds
  bgSurface: 'bg-light-surface dark:bg-dark-surface',
  bgCard: 'bg-light-card dark:bg-dark-card',
};

