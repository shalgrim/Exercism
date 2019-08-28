export const gigasecond = (d) => {
  const trillion_milliseconds = 1000000000000;

  const input_time = d.getTime();
  const later_date = new Date();
  later_date.setTime(input_time + trillion_milliseconds);
  return later_date;
};
