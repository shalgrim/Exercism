const dnaToRnaMap = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

const dnaToRnaMapper = (d) => {
  return dnaToRnaMap[d];
}

export const toRna = (dna) => {
  const chars = dna.split('');
  const rnaValues = chars.map(dnaToRnaMapper);
  return rnaValues.join('');
};
