import { Periods } from '@/types/periods';
import dateUtils from '@/utils/dates';

interface Intervals {
  min: number;
  max: number;
}

interface Response {
  key: string;
  pv: number;
}

const getRandomValues = (arr: string[], { min, max }: Intervals) => {
  return arr.map((key: string) => ({
    key,
    pv: Math.floor(Math.random() * (max - min) + min),
  }));
};

const periodMap = {
  [Periods.Week]: (matches: boolean) => dateUtils.getWeekDays(matches),
  [Periods.Month]: (matches: boolean) => dateUtils.getMonths(matches),
  [Periods.Year]: () => ['01', '05', '09', '13', '17', '21', '26', '31'],
};

const getDateByPeriod = (period: Periods, matches: boolean, intervals: Intervals): Response[] => {
  const date = periodMap[period](matches);
  return getRandomValues(date, intervals);
};

export default {
  getDateByPeriod,
};
