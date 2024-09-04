var summaryRanges = function (nums) {
  let start = 0;
  let end = 0;

  const ans = [];

  while (end < nums.length) {
    if (nums[end] + 1 !== nums[end + 1]) {
      if (nums[end] - nums[start] > 0) {
        ans.push(`${nums[start]}->${nums[end]}`);
      } else {
        ans.push(`${nums[start]}`);
      }
      end++;
      start = end;
    } else {
      end++;
    }
  }
  return ans;
};

const arr1 = [0, 1, 2, 4, 5, 7];
const arr2 = [0, 2, 3, 4, 6, 8, 9];
console.log(summaryRanges(arr2));
