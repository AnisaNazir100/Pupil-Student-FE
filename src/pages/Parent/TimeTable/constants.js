
export const DAYS = [
  { key: 'MON', label: 'Monday' },
  { key: 'TUE', label: 'Tuesday' },
  { key: 'WED', label: 'Wednesday' },
  { key: 'THU', label: 'Thursday' },
  { key: 'FRI', label: 'Friday' },
  { key: 'SAT', label: 'Saturday' }
];

export const COLORS = ['#6C63FF', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#a1887f', '#90caf9', '#f48fb1'];

export const ENV_START = import.meta.env.VITE_APP_TIMELINE_START || '08:00';
export const ENV_END = import.meta.env.VITE_APP_TIMELINE_END || '15:00';