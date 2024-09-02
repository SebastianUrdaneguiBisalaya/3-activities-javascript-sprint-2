// Beginner Exercises
// 1. Simple Counter
let initValue = 0;
function createSimpleCounter() {
  return (initValue += 1);
}

// 2. Greeting Generator
function greet(name) {
  return function fullGreet() {
    return `Hello, ${name}`;
  };
}

// 3. Multiplier Function
function createMultiplier(n) {
  return function doubleMultiplier(n_) {
    return n * n_;
  };
}

// Advance exercises
// 1. Memoization Function
function memoize(fn) {
  const cache = new Map();
  return function (value) {
    if (cache.has(value)) {
      return cache.get(value);
    }
    const result = fn(value);
    cache.set(value, result);
  };
}

const slowSquare = (n) => {
  for (let i = 0; i < 1000000000; i++) {}
  return n * n;
};

// Private Counter with Reset
function createCounter() {
  let counter = 0;
  return {
    increment: function () {
      return (counter += 1);
    },
    reset: function () {
      return (counter = 0);
    },
  };
}

// Once Function
function once(fn) {
  let newImplementation = false;
  let result;
  return function (...values) {
    if (!newImplementation) {
      newImplementation = true;
      result = fn(...values);
    }
    return result;
  };
}

// Curry Function
// Es un patrón de diseño donde una función es inmediatamente
// evaluada y retorna una segunda función.
function curry(fn) {
  const argExpected = fn.length;
  function curried(...arg) {
    if (arg.length >= argExpected) {
      return fn(...arg);
    } else {
      return function (...otherArg) {
        return curried(...arg, ...otherArg);
      };
    }
  }
  return curried;
}

function add(a, b, c) {
  return a + b + c;
}

// Function Composition
function compose(...fns) {
  return function (result) {
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
}
