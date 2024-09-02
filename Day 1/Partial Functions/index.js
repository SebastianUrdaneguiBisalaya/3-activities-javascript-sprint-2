// Beginner Exercises
// 1. Basic Callback Example
function withDelay(callback, delay) {
  setTimeout(callback, delay);
}

// 2. Simple Array Filter
function filterArray(arr, callback) {
  let newArr = [];
  arr.forEach((item) => {
    if (callback(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}

// 3. Function Timer
function timeFunction(fn) {
  const start = Date.now();
  fn();
  const end = Date.now();
  console.log(`Function took ${end - start}ms to execute.`);
}

timeFunction(() => {
  for (let i = 0; i < 1000000; i++) {
    console.log(i);
  }
});

// Advance Level
// 1. Function Debouncing
function debounce(fn, delay) {
  let time;
  return function (...args) {
    if (time) {
      clearTimeout(time);
    }
    time = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 2. Throttle Function
function throttle(fn, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

// 3. Custom Map Function
function customMap(arr, callback) {
  let newArray = [];
  arr.forEach((item) => {
    const result = callback(item);
    newArray.push(result);
  });
  return newArray;
}

// 4. Compose Function
function compose(...fns) {
  return function (result) {
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
}

// 5. Partial Application
function partial(fn, ...presetArgs) {
  return function (...latestArgs) {
    return fn(...presetArgs, ...latestArgs);
  };
}
