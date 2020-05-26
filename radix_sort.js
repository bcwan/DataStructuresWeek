// getDigitFrom helper method
// absolute value to avoid getting back negative digits
// divide by Math.pow(10, i) to divide integer by it's place value, 10^place
// floor to round away decimals
// mod 10 to get the digit of interest
const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
