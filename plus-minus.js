function plusMinus(arr) {
  const ratioPositive = (arr.filter((number) => number > 0).length / arr.length).toFixed(6);
  const ratioNegative = (arr.filter((number) => number < 0).length / arr.length).toFixed(6);
  const ratioZero = (arr.filter((number) => number === 0).length / arr.length).toFixed(6);
  console.log(ratioPositive + "\n" + ratioNegative + "\n" + ratioZero);
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
