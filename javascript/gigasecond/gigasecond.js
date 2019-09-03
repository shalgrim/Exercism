const A_GIGASECOND_IN_MILLISECONDS = 1e12;

export const gigasecond = (d) => {
  return new Date(d.getTime() + A_GIGASECOND_IN_MILLISECONDS);
}; 
