export const gigasecond = (d) => {
  const billion = 1000000000;

  if (d.getYear() < 60) {
    d.setSeconds(d.getSeconds() + billion);
    d.setHours(d.getHours() - 1);
  } else {
      d.setSeconds(d.getSeconds() + 1000000000);
  }
  return d;
};
