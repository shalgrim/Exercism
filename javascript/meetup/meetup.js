const ONE_DAY = 24*60*60*1000;

const weekdayMapper = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

export const meetupDay = (year, month, weekday, ordinal) => {
    let date;

    if (ordinal == 'teenth') {
        date = new Date(year, month, 13);
        const diff = weekdayMapper[weekday] - date.getDay();
        if (diff >= 0) {
            date = new Date(year, month, 13 + diff);
        } else {
            date = new Date(year, month, 20 + diff);
        }
    }
    return date;
};
