// only works on sorted arrays
// time complexity is O(log(n))
  // number of times we must halve the array until length becomes 0
// space complexity: O(n)
function binarySearch(array, target) {
  if (array.length === 0) {
    return false;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx + 1);

  if (target < array[midIdx]) {
    return binarySearch(leftHalf, target);
  } else if (target > array[midIdx]) {
    return binarySearch(rightHalf, target)
  } else {
    return true;
  }
}