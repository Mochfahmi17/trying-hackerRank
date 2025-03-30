function birthdayCakeCandles(candles) {
  const maxHeight = Math.max(...candles);
  return candles.filter((candle) => candle === maxHeight).length;
}

console.log(birthdayCakeCandles([9547948, 8558390, 9999933, 5148263, 5764559, 906438, 9296778, 1156268, 6642930]));
