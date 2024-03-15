function hollowSquare(n) {
    let result = ""; // Variable to store the square pattern
  
    // Iterate through each row
    for (let row = 1; row <= n; row++) {
      // Iterate through each column within the current row
      for (let col = 1; col <= n; col++) {
        // Check for boundary conditions and print asterisks accordingly
        if (row === 1 || row === n || col === 1 || col === n) {
          result += "*";
        } else {
          result += " "; // Fill inner spaces with spaces
        }
      }
      result += "\n"; // Move to the next line after each row
    }
  
    return result; // Return the completed pattern
}
console.log(hollowSquare(5))