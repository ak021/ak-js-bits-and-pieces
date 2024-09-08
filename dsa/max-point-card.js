var maxScore = function (cardPoints, k) {
  let lsum = 0;
  let rsum = 0;
  let sum = 0;

  for (let i = 0; i < k - 1; i++) {
    lsum += cardPoints[i];
  }
  sum = lsum;
  console.log({ sum });

  let lastIndex = cardPoints.length - 1;
  for (let i = k - 1; i > 0; i--) {
    lsum = lsum - cardPoints[i];
    rsum = rsum + cardPoints[lastIndex];
    sum = Math.max(sum, lsum + rsum);
    lastIndex--;
  }

  return sum;
};
