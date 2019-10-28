export class Words {
  count(phrase) {
    const answer = {};

    for (let word of phrase.trim().split(/\s+/).values()) {
      word = word.toLowerCase();
      const count = (answer[word] && typeof answer[word] == 'number') ? answer[word] + 1 : 1;
      Object.defineProperty(answer, word, {
        value: count,
        writable: true,
        enumerable: true,
      });
    }

    return answer;
  }
}
