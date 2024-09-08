function getLongestSubStr(str) {
  let l = 0;
  let r = 0;
  let maxLen = 0;
  const map = new Map();

  while (r < str.length) {
    const char = str[r];
    //substr will break if char already exist in the map
    if (map.has(char)) {
      l = Math.max(map.get(char) + 1, l);
    }

    map.set(str[r], r);
    maxLen = Math.max(r - l + 1, maxLen);
    r++;
  }

  return maxLen;
}

function getLongestSubStr2(str) {
  let l = 0;
  let r = 0;
  let maxLen = 0;
  const set = new Set();

  while (r < str.length) {
    const char = str[r];
    if (set.has(char)) {
      set.delete(str[l]);
      l++;
    }
    set.add(char);
    maxLen = Math.max(set.size, maxLen);
    r++;
  }

  return maxLen;
}

console.log(getLongestSubStr("abba"));
console.log(getLongestSubStr("bbbbb"));
console.log(getLongestSubStr("pwwkew"));
console.log(getLongestSubStr("abba"));

console.log("----------------");

console.log(getLongestSubStr2("abba"));
console.log(getLongestSubStr2("bbbbb"));
console.log(getLongestSubStr2("pwwkew"));
console.log(getLongestSubStr2("abba"));
