const NUCLEOTIDES = ['A', 'C', 'G', 'T'];

export class NucleotideCounts {

  static parseNucleotide(nucleotide, dna) {
    console.log(dna);
    console.log(typeof(dna));
    console.log(nucleotide);
    return (dna.match(new RegExp(nucleotide, 'g')) || []).length
  }
  static parse(dna) {
    // count A, C, G, and T in dna
    const counts = NUCLEOTIDES.map(nucleotide => NucleotideCounts.parseNucleotide(nucleotide, dna));
    const answer = counts.map(count => count.toString()).join(' ');
    return answer;

    throw new Error("Remove this statement and implement this function");
  }
}
