// worst case time complexity: O(n^2)
// space complexity: O(n)
// we get the first element as pivot, so our worst scenario is always
// O(n^2), but we should randomize it

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.shift();
  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted];

}

