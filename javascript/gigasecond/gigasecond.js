export const gigasecond = (d) => {
  const A_GIGASECOND = 1e12;
  return new Date(d.getTime() + A_GIGASECOND);
}; 
