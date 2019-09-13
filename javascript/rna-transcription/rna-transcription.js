const dnaToRnaMap = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

export const toRna = (dna) => {
  return dna
      .split('')
      .map((d) => ( dnaToRnaMap[d] ))
      .join('');
};
