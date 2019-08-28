export const gigasecond = (d) => {

  // a trillion milliseconds is a gigasecond
  const trillion_milliseconds = 1000000000000;

  // these tests pass
  // but mentor just keeps asking cryptic questions
  const input_time = d.getTime();
  const later_date = new Date();
  later_date.setTime(input_time + trillion_milliseconds);
  return later_date;
};
