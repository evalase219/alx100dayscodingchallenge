function loopRightTriangle(n) {
  result = "";
  for (let row = 1; row <= n; row++) {
    //print asterisks for number of times it runs through the row
    for (let col = 1; col <= row; col++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
}
console.log(loopRightTriangle(7))