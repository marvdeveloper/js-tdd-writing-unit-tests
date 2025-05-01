
export function pointsForWord(word) {
    let points = 0;
    for (const char of word) {
      // Using the 'i' flag for case insensitivity, checking for vowels
      points += /[aeiou]/i.test(char) ? 1 : 2;  
    }
    return points;
  }
  