function multiplyNumbers(a, b) {
  // Define an object with a multiply method
  const multiplier = {
    multiply: function(x, y) {
      return x * y;
    }
  };

  // Use apply() to call the multiply method with [a, b]
  return multiplier.multiply.apply(null, [a, b]);
}

// Example usage:
console.log(multiplyNumbers(5, 4)); // Output: 20
