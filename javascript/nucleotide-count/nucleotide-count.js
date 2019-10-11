const NUCLEOTIDES = ["A", "C", "G", "T"];

export class NucleotideCounts {
  static parseNucleotide(nucleotide, dna) {
    return (dna.match(new RegExp(nucleotide, "g")) || []).length;
  }
  static parse(dna) {
    // count A, C, G, and T in dna
    const counts = NUCLEOTIDES.map(nucleotide =>
      NucleotideCounts.parseNucleotide(nucleotide, dna)
    );
    const answer = counts.map(count => count.toString()).join(" ");

    if (counts.reduce((x, y) => x + y) != dna.length) {
      throw new Error("Invalid nucleotide in strand");
    }
    return answer;
  }
}
