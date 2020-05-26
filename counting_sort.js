//superior sorting algorithm from the ones we have encountered, but it's for sorting integer
// we must know the largest integer value in the input array prior to sort since we are using the
// integer properties
// run time O(n + k), n being we have to loop through every element, and k being the while loop pushing
// based on counters

// space complexity is O(k)

function countingSort(arr, max) {
  const result = [];
  const counters = new Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    counters[arr[i]]++;
  }

  for (let i = 0; i < counters.length; i++) {
    while(counters[i] > 0) {
      result.push(i);
      counters[i]--;
    }
  }

  return result;
}