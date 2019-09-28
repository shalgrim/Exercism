//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strand1, strand2) => {
  const hamming_distance = 0;
  if (strand1.length != strand2.length) {
      throw new Error("Can only compare strands of equal length.");
  }

  strand1.map((character, index) => { character == strand2[index] ? hamming_distance++ : 0});

  return hamming_distance;
};
