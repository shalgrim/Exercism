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

        while (date.getDay() != weekdayMapper[weekday]) {
            date = new Date(year, month, date.getDate() + 1);
        }

    }
    return date;
};
