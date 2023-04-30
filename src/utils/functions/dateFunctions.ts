import { thisYear, thisMonth, thisDate } from '@/utils/constants/date';

export const toDate = (date: string): Date => new Date(date);

export const getDay = (date: Date): string =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

export const formatYYYYMM = (date: Date): string =>
  `${date.getFullYear()}/${date.getMonth() + 1}`;

export const formatDD = (date: Date): string =>
  `${date.getDate()}`;

export const getDateAgo = (ago: number): Date => {
  const today = new Date();
  return new Date(today.setDate(today.getDate() - ago));
}

export const getDateAgoFromDesignated = (date: Date, ago: number): Date => {
  const day = new Date(date);
  return new Date(day.setDate(day.getDate() - ago));
}

// export const getDiffDate = (fromDay: Date, toDay: Date): number => {
//   const diffTime = fromDay.getTime() - toDay.getTime();
//   return Math.floor(diffTime / (1000 * 60 * 60 * 24));
// }
// export const getOldestDate = (dates: Date[]): Date =>
//   dates.reduce(function (a: Date, b: Date) { return a < b ? a : b; });

// export const getLatestDate = (dates: Date[]): Date =>
//   dates.reduce(function (a: Date, b: Date) { return a > b ? a : b; });

export const getAWeekIncludingTheSpecifiedDate = (
  year = thisYear,
  month = thisMonth,
  date = thisDate,
): Date[] => {
  const specifiedDate = new Date(year, month, date);
  const thisDayOfWeekNum = specifiedDate.getDay() // 0（日曜日）～6（土曜日）
  const thisSunday = specifiedDate.getDate() - thisDayOfWeekNum;
  const aWeek: Date[] = [];
  for (let i = 0; i < 7; i++) {
    aWeek.push(new Date(year, month, thisSunday + i))
  }
  return aWeek
}