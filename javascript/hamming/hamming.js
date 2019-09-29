const compareChars = (char1, char2) => {
  if (char1 !== char2) {
    return 1;
  }
  return 0;
};

export const compute = (strand1, strand2) => {
  if (strand1.length != strand2.length) {
    if (strand1.length === 0) {
      throw new Error("left strand must not be empty");
    }

    if (strand2.length === 0) {
      throw new Error("right strand must not be empty");
    }

    throw new Error("left and right strands must be of equal length");
  }

  const charDifferences = strand1
    .split("")
    .map((character, index) => compareChars(character, strand2[index]));
  return charDifferences.reduce((x, y) => x + y, 0);
};
