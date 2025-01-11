import { assert } from 'chai';

// function
function getCount(str) {
  // count the number of vowels in the string
  let vowelsCount = 0;

  const arr = str.split("");
  const vowels = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = 0; j < vowels.length; j++) {
      const vowel = vowels[j];
      if (element == vowel) {
        vowelsCount++
      }
    }
    
  }
  return vowelsCount;

}

// tests
assert.strictEqual(getCount('abracadabra'), 5);
