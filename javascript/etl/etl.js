export const transform = (old) => {
  const rv = new Object();

  for (var value in old) {
    let letterList = old[value];
    letterList.forEach(x => rv[x.toLowerCase()] = parseInt(value));
  }

  return rv;
};
