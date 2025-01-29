//* Link : https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  let n = arr.length; //* Ukuran matrix
  console.log("output dari n: ", n);
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  //* Melakukan loop pada variabel n
  for (let i = 0; i < n; i++) {
    primaryDiagonalSum += arr[i][i];
    secondaryDiagonalSum += arr[i][n - 1 - i];
  }

  console.log("output dari primaryDiagonalSum: ", primaryDiagonalSum);
}

const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
console.log(diagonalDifference(matrix));

//? Penjelasan
//* Pada code ini :
// for (let i = 0; i < n; i++) {
//     primaryDiagonalSum += arr[i][i];
//     secondaryDiagonalSum += arr[i][n - 1 - i];
//   }

//? Elemen diagonal utama :
//! tentunya pada iterasi pertama (i = 0) :
//* index: arr[0][0] = 11
//* Operasi: primaryDiagonalSum += 11
//* hasil dari primaryDiagonalSum = 11

//? Elemen diagonal sekunder :
//! tentunya pada iterasi pertama (i = 0)
//* index: arr[0][2] = 4 (karena n - 1 - 0 = 2)
//* Operasi: secondaryDiagonalSum += 4
//* hasil dari secondaryDiagonalSum = 4

//? Elemen diagonal utama :
//! tentunya pada iterasi kedua (i = 1) :
//* index: arr[1][1] = 5
//* Operasi: primaryDiagonalSum += 11
//* hasil dari primaryDiagonalSum = 16 (karena 11 + 5 = 16)

//? Elemen diagonal sekunder :
//! tentunya pada iterasi kedua (i = 1)
//* index: arr[1][1] = 5 (karena n - 1 - 1 = 1)
//* Operasi: secondaryDiagonalSum += 5
//* hasil dari secondaryDiagonalSum = 9 (karena 4 + 5 = 9)

//? Elemen diagonal utama :
//! tentunya pada iterasi ketiga (i = 2) :
//* index: arr[2][2] = -12
//* Operasi: primaryDiagonalSum += -12
//* hasil dari primaryDiagonalSum = 4 (karena 16 + (-12) = 16)

//? Elemen diagonal sekunder :
//! tentunya pada iterasi ketiga (i = 2)
//* index: arr[2][0] = 10 (karena n - 1 - 2 = 0)
//* Operasi: secondaryDiagonalSum += 10
//* hasil dari secondaryDiagonalSum = 19 (karena 9 + 10 = 19)

//* Lalu kita hitung primaryDiagonalSum + secondaryDiagonalSum
//* Math.abs(primaryDiagonalSum + secondaryDiagonalSum)
