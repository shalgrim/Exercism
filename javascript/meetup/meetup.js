const weekdayMapper = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

const weeksToAdd = {
    "1st": 0,
    "2nd": 1,
    "3rd": 2,
    "4th": 3,
    '5th': 4,
}

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
    } else {
        date = new Date(year, month, 1);
        const diff = weekdayMapper[weekday] - date.getDay();

        if (diff >= 0) {
            date = new Date(year, month, 1 + diff);
        } else {
            date = new Date(year, month, 8 + diff);
        }

        if (ordinal == 'last') {
            // add three weeks
            date = new Date(year, month, date.getDate() + 21);

            // try adding another
            const maybeDate = new Date(year, month, date.getDate() + 7);

            if (date.getMonth() == maybeDate.getMonth()) {
                date = maybeDate;
            }
        } else {
            date = new Date(year, month, date.getDate() + weeksToAdd[ordinal] * 7);
            if (date.getMonth() != month) {
                throw new Error('No such date');
            }
        }
    }
    return date;
};
