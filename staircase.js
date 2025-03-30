function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let sharp = " ".repeat(n - i) + "#".repeat(i);
    console.log(sharp);
  }
}

console.log(staircase(6));
