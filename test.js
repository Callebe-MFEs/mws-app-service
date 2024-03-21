let letters = [
  [" "],
  [""],
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
  ["m", "n", "o"],
  ["p", "q", "r", "s"],
  ["t", "u", "v"],
  ["w", "x", "y", "z"],
];

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  console.log(digits);
  let output = [];

  if (!digits) return [];

  let firstDigit = parseInt(digits[0], 10);

  if (digits.length === 1) return letters[firstDigit];

  let subOutput = letterCombinations(digits.slice(1));

  for (let i = 0; i < letters[firstDigit].length; i++) {
    for (let j = 0; j < subOutput.length; j++) {
      output.push(`${letters[firstDigit][i]}${subOutput[j]}`);
    }
  }

  console.log(output);

  return output;
};

console.log(letterCombinations("234"));
