const dnaToRnaMap = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

export const toRna = (dna) => {
  const chars = dna.split('');
  const rnaValues = chars.map((d) => ( dnaToRnaMap[d] ));
  return rnaValues.join('');
};
