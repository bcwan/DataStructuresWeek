// getDigitFrom helper method
// absolute value to avoid getting back negative digits
// divide by Math.pow(10, i) to divide integer by it's place value, 10^place
// floor to round away decimals
// mod 10 to get the digit of interest
const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

//getIntLength
// find number of digits of the largest number in the list
// know how many times to run through algorithmic process
const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

//getMaxDigits
function getMaxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}

//for positive integers
function radixSort(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let maxDigits = getMaxDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigitFrom(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

//Radix Sort will have run time of O(n * k), with k being the longest length digit