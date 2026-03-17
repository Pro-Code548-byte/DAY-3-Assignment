let n = 36;

// Even or Odd
if (n % 2 === 0) {
  console.log(n + " is even");
} else {
  console.log(n + " is odd");
}

// Positive, Negative, or Zero
if (n > 0) {
  console.log(n + " is positive");
} else if (n < 0) {
  console.log(n + " is negative");
} else {
  console.log(n + " is zero");
}

// Divisible by 4
if (n % 4 === 0) {
  console.log(n + " is divisible by 4");
} else {
  console.log(n + " is not divisible by 4");
}

// Perfect Square
let sqrt = Math.sqrt(n);

if (sqrt % 1 === 0) {
  console.log(n + " is a perfect square");
} else {
  console.log(n + " is not a perfect square");
}
