function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

const arr = [5, 6, 11, 12, 15, 18, 20, 22, 25, 30];
const target = 30;
const targetIndex = binarySearch(arr, target);
console.log({ target, targetIndex });
