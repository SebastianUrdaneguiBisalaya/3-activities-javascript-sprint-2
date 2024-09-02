// Beginner Level
// 1. Factorial Calculation

function factorial(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// 2. Fibonacci Sequence
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 3. Sum of Array
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

// Advanced Level
// 1.  Flatten Nested Array
function flatten(arr) {
  let newArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      newArr = newArr.concat(flatten(item));
    } else {
      newArr.push(item);
    }
  });
  return newArr;
}
