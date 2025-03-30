function miniMaxSum(arr) {
  const minimumSum = arr.sort((a, b) => a - b).slice(0, arr.length - 1);
  const maximumSum = arr.sort((a, b) => a - b).slice(1);
  let totalMinimumSum = 0;
  let totalMaximumSum = 0;

  for (let i = 0; i < minimumSum.length; i++) {
    totalMinimumSum += minimumSum[i];
  }

  for (let j = 0; j < maximumSum.length; j++) {
    totalMaximumSum += maximumSum[j];
  }
  console.log(totalMinimumSum, totalMaximumSum);
}

miniMaxSum([1, 2, 3, 4, 5]);
