import { useEffect, useMemo, useState } from "react";

export function mapApiDayToKey(apiDay) {
  const d = (apiDay || '').toUpperCase();
  switch (d) {
    case 'MONDAY':
      return 'MON';
    case 'TUESDAY':
      return 'TUE';
    case 'WEDNESDAY':
      return 'WED';
    case 'THURSDAY':
      return 'THU';
    case 'FRIDAY':
      return 'FRI';
    case 'SATURDAY':
      return 'SAT';
    default:
      return 'MON';
  }
}
export function toMinutes(tStr) {
  if (typeof tStr === 'number') return tStr;
  if (!tStr) return 0;
  let s = String(tStr).trim().toLowerCase();
  const am = s.includes('am');
  const pm = s.includes('pm');
  s = s.replace(/[^\d:]/g, '');
  const [hStr, mStr = '0'] = s.split(':');
  let h = parseInt(hStr || '0', 10);
  let m = parseInt(mStr || '0', 10);
  if (pm && h < 12) h += 12;
  if (am && h === 12) h = 0;
  return h * 60 + m;
}

export function minutesToLabel(mins) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const hh = h.toString().padStart(2, '0');
  const mm = m.toString().padStart(2, '0');
  return `${hh}:${mm}`;
}
export function rangeArray(start, end, step) {
  const out = [];
  for (let v = start; v <= end; v += step) out.push(v);
  return out;
}
export function useTimeNowMinutes() {
  const [nowMin, setNowMin] = useState(() => new Date().getHours() * 60 + new Date().getMinutes());
  useEffect(() => {
    const t = setInterval(() => {
      const d = new Date();
      setNowMin(d.getHours() * 60 + d.getMinutes());
    }, 30_000);
    return () => clearInterval(t);
  }, []);
  return nowMin;
}

export function useTodayIndex() {
  return useMemo(() => {
    const jsDay = new Date().getDay();
    const map = { 0: 5, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5 };
    return map[jsDay] ?? 0;
  }, []);
}