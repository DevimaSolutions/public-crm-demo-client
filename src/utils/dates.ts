import enGB from 'date-fns/locale/en-GB';

const getWeekDays = (short: boolean): string[] => {
  return [...Array(7).keys()].map((elem) =>
    String(enGB.localize?.day(elem, short ? { width: 'abbreviated' } : undefined)),
  );
};

const getMonths = (short: boolean): string[] => {
  return [...Array(12).keys()].map((elem) =>
    String(enGB.localize?.month(elem, short ? { width: 'abbreviated' } : undefined)),
  );
};

export default {
  getWeekDays,
  getMonths,
};
