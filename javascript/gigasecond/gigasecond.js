export const gigasecond = (d) => {
  d.setSeconds(d.getSeconds() + 1000000000);
  return d;
};
