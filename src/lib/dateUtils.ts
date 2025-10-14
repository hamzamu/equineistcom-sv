// src/lib/dateUtils.ts
import { format } from 'date-fns';

/**
 * Format a date string (ISO or timestamp) to "MMM dd, yyyy"
 * @param dateStr - e.g., "2024-09-27 11:02:03.814Z"
 * @returns Formatted string like "Sep 27, 2024"
 */
export function formatDate(dateStr: string): string {
  // Handle different formats (ISO + custom)
  const date = new Date(dateStr);

  // Check if valid date
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  return format(date, 'MMM dd, yyyy');
}