## Challenges


# JavaScript Functions 


## IIFE (Immediately Invoked Function Expression)


### Beginner Exercises

1. **Simple IIFE**
   - **Objective:** Use an IIFE to create a block of code where you define variables with the same names as in the global scope, but without affecting the global scope..

2. **Basic Counter with IIFE**
   - **Objective:** Use an IIFE to create a counter that keeps its state private and provides methods to increment and get the current count.
   - **Example:**
     ```javascript
     //after initialization ->
     counter.increment();
     console.log(counter.getCount()); // Output: 1
     ```

3. **Simple Configuration Object**
   - **Objective:** Use an IIFE to create a simple configuration object with default values.
   - **Example:**
     ```javascript
     const config = (function() { 
     // Your implementation here
     })();

     console.log(config.getConfig()); // Output: { color: 'blue', fontSize: '14px' }
     ``````
     
### Advanced Exercises

1. **Private Variable with IIFE**
   - **Objective:** Use an IIFE to create a private variable that is accessible only through specific getter and setter methods.
   - **Example:**
     ```javascript
     const module = (function() {
         // Your implementation here
     })();

     console.log(module.getVar()); // Output: 0
     module.setVar(42);
     console.log(module.getVar());
     console.log(module.getVar()); // Output: 42 
  ``


2. **Singleton Pattern with IIFE**
   - **Objective:** Implement a Singleton pattern using an IIFE to ensure only one instance of an object is created.
   - **Example:**
     ```javascript
     const singleton = (function() {
        // Your implementation here
     })();

     const obj1 = singleton.getInstance();
     const obj2 = singleton.getInstance();
     console.log(obj1 === obj2); // Output: true
     ```

3. **Module Pattern**
   - **Objective:** Use an IIFE to create a module that exposes public methods while keeping some variables and methods private.
   - **Example:**
     ```javascript
     const myModule = (function() {
         // Your implementation here
     })();

     myModule.publicMethod();
     // Output:
     // Public method
     // Private method
     // secret
     ```

4. **Lazy Initialization**
   - **Objective:** Use an IIFE to lazily initialize a variable only when it is accessed for the first time.
   - **Example:**
     ```javascript
     const lazyInit = (function() {
        // Your implementation here
     })();

     lazyInit(); // Output: Initializing...
     lazyInit(); // Output: Already initialized
     ```

5. **Configuration Module**
   - **Objective:** Create a configuration module using an IIFE that allows setting and getting configuration values in a controlled way.
   - **Example:**
     ```javascript
     const config = (function() {
         // Your implementation here
     })();

     config.set('theme', 'dark');
     console.log(config.get('theme')); // Output: dark
     ```


## Closures

### Beginner Exercises

1. **Simple Counter**
   - **Objective:** Create a `createSimpleCounter` function that returns a function which, when called, increments and returns a counter.
   - **Example:**
     ```javascript
     function createSimpleCounter() {
         // Your implementation here
     }

     const counter = createSimpleCounter();
     console.log(counter()); // Output: 1
     console.log(counter()); // Output: 2
     ```

2. **Greeting Generator**
   - **Objective:** Create a function `greet(name)` that returns another function. The returned function should take a greeting message and log a full greeting using the name and message.
   - **Example:**
     ```javascript
     function greet(name) {
         // Your implementation here
     }

     const greetJohn = greet('John');
     greetJohn('Hello'); // Output: Hello, John!
     ```

3. **Multiplier Function**
   - **Objective:** Create a `createMultiplier` function that takes a number `n` and returns a new function that multiplies its input by `n`.
   - **Example:**
     ```javascript
     function createMultiplier(n) {
         // Your implementation here
     }

     const double = createMultiplier(2);
     console.log(double(5)); // Output: 10
     ```


### Advanced Exercises

1. **Memoization Function**
   - **Objective:** Create a function `memoize(fn)` that returns a memoized version of any single-argument function. The memoized function should cache the results of previous calls and return the cached result for the same inputs without recomputing.
   - **Example:**
     ```javascript
     function memoize(fn) {
         // Your implementation here
     }

     const slowSquare = (n) => { 
         for(let i = 0; i < 1000000000; i++) {} // Simulate slow computation
         return n * n;
     };

     const fastSquare = memoize(slowSquare);
     console.log(fastSquare(5)); // Slow on first call
     console.log(fastSquare(5)); // Fast on second call
     ```

2. **Private Counter with Reset**
   - **Objective:** Create a `createCounter` function that returns an object with two methods: `increment` and `reset`. `increment` should increase the counter by 1 each time it’s called, and `reset` should reset the counter to 0. Use closures to keep the counter private.
   - **Example:**
     ```javascript
     function createCounter() {
         // Your implementation here
     }

     const counter = createCounter();
     console.log(counter.increment()); // Output: 1
     console.log(counter.increment()); // Output: 2
     counter.reset();
     console.log(counter.increment()); // Output: 1
     ```

3. **Once Function**
   - **Objective:** Implement a function `once(fn)` that allows the passed function to be executed only once. Any subsequent calls should return the result of the first invocation.
   - **Example:**
     ```javascript
     function once(fn) {
         // Your implementation here
     }

     const logOnce = once((msg) => console.log(msg));
     logOnce("Hello!"); // Output: Hello!
     logOnce("Hello again!"); // No output
     ```

4. **Curry Function**
   - **Objective:** Create a function `curry(fn)` that transforms a function with multiple arguments into a series of functions that take one argument and return another function, until all arguments have been provided.
   - **Example:**
     ```javascript
     function curry(fn) {
         // Your implementation here
     }

     function add(a, b, c) {
         return a + b + c;
     }

     const curriedAdd = curry(add);
     console.log(curriedAdd(1)(2)(3)); // Output: 6
     ```

5. **Function Composition**
   - **Objective:** Create a `compose` function that takes multiple functions as arguments and returns a new function. The new function should be the result of applying the original functions in sequence, from right to left.
   - **Example:**
     ```javascript
     function compose(...fns) {
         // Your implementation here
     }

     const add1 = (x) => x + 1;
     const double = (x) => x * 2;
     const subtract3 = (x) => x - 3;

     const composed = compose(subtract3, double, add1);
     console.log(composed(5)); // Output: 9
     ```



## Higher-Order Functions


### Beginner Exercises

1. **Basic Callback Example**
   - **Objective:** Write a function `withDelay(callback, delay)` that takes a callback function and a delay in milliseconds, and executes the callback after the delay using `setTimeout`.
   - **Example:**
     ```javascript
     function withDelay(callback, delay) {
         // Your implementation here
     }

     withDelay(() => console.log("This is delayed"), 1000); // Output after 1 second: "This is delayed"
     ```

2. **Simple Array Filter**
   - **Objective:** Create a `filterArray` function that takes an array and a callback function. The callback should be used to determine which elements should be included in the returned array.
   - **Example:**
     ```javascript
     function filterArray(arr, callback) {
         // Your implementation here
     }

     const numbers = [1, 2, 3, 4, 5];
     const evens = filterArray(numbers, x => x % 2 === 0);
     console.log(evens); // Output: [2, 4]
     ```

3. **Function Timer**
   - **Objective:** Write a `timeFunction` function that takes another function `fn` and times how long it takes to execute, logging the time to the console.
   - **Example:**
     ```javascript
     function timeFunction(fn) {
         const start = Date.now();
         fn();
         const end = Date.now();
         console.log(`Function took ${end - start}ms to execute.`);
     }

     timeFunction(() => {
         for (let i = 0; i < 1000000; i++) {} // Some computation
     });
     ```



### Advanced Exercises

1. **Function Debouncing**
   - **Objective:** Implement a debouncing function `debounce(fn, delay)` that ensures the given function `fn` is only called after it has stopped being called for `delay` milliseconds.
   - **Example:**
     ```javascript
     function debounce(fn, delay) {
         // Your implementation here
     }

     const log = debounce(() => console.log('Debounced!'), 500);
     log();
     log();
     log(); // Only one "Debounced!" should appear after 500ms
     ```

2. **Throttle Function**
   - **Objective:** Implement a throttling function `throttle(fn, interval)` that ensures the given function `fn` is called at most once every `interval` milliseconds.
   - **Example:**
     ```javascript
     function throttle(fn, interval) {
         // Your implementation here
     }

     const log = throttle(() => console.log('Throttled!'), 500);
     log();
     log(); // Only one "Throttled!" should appear every 500ms
     ```

3. **Custom Map Function**
   - **Objective:** Create a `customMap` function that mimics the behavior of the `Array.prototype.map` method. The function should take an array and a callback, and return a new array with the results of applying the callback to each element.
   - **Example:**
     ```javascript
     function customMap(arr, callback) {
         // Your implementation here
     }

     const numbers = [1, 2, 3];
     const doubled = customMap(numbers, x => x * 2);
     console.log(doubled); // Output: [2, 4, 6]
     ```

4. **Compose Functions**
   - **Objective:** Implement a `compose` function that takes multiple functions as arguments and returns a function that is the result of composing the original functions from right to left.
   - **Example:**
     ```javascript
     function compose(...fns) {
         // Your implementation here
     }

     const add1 = x => x + 1;
     const double = x => x * 2;

     const composed = compose(add1, double);
     console.log(composed(5)); // Output: 11 (double(5) => 10, add1(10) => 11)
     ```

5. **Partial Application**
   - **Objective:** Implement a function `partial(fn, ...presetArgs)` that partially applies a function by pre-setting some of its arguments.
   - **Example:**
     ```javascript
     function partial(fn, ...presetArgs) {
         // Your implementation here
     }

     const add = (a, b, c) => a + b + c;
     const add5 = partial(add, 5);

     console.log(add5(10, 15)); // Output: 30
     ```
### Explanation of `partial` Function

The `partial` function takes two things:

1.  **`fn`**: The original function that you want to partially apply.
2.  **`...presetArgs`**: The arguments that you want to pre-set or fix in the original function.

When you call `partial`, it returns a new function. This new function, when called, will call the original function `fn` with the preset arguments (`presetArgs`) plus any additional arguments that are passed to the new function.

### Example Breakdown

Let's break down the process with an example.

#### Step 1: Define the Original Function

Suppose you have a function `add` that takes three arguments:
```javascript
function add(a, b, c) {
    return a + b + c;
}
```
#### Step 2: Create a Partial Function

Now, you want to create a new function where one of the arguments (let's say `a`) is pre-set to a specific value (e.g., `5`):
```javascript
const add5 = partial(add, 5);
```

n this example, `add5` is a new function where the first argument is fixed as `5`. You can now call `add5` with the remaining two arguments `b` and `c`.

#### Step 3: Use the Partial Function

When you call `add5` with the remaining arguments, like this:
```javascript
console.log(add5(10, 15)); // Output: 30
```

It will be equivalent to calling `add(5, 10, 15)`, which results in `5 + 10 + 15 = 30`.

### Recursion Exercises

#### Beginner Level

1.  **Factorial Calculation**
    
    -   **Objective:** Write a recursive function `factorial(n)` that computes the factorial of a non-negative integer `n`. The factorial of `n` (denoted as `n!`) is the product of all positive integers less than or equal to `n`.
    -   **Example:**
        
```javascript
function factorial(n) {
    // Your implementation here
}

console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(factorial(3)); // Output: 6 (3! = 3 * 2 * 1)
```
**Fibonacci Sequence**

-   **Objective:** Write a recursive function `fibonacci(n)` that returns the `n`-th number in the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two numbers.
-   **Example:**
```javascript
function fibonacci(n) {
    // Your implementation here
}

console.log(fibonacci(5)); // Output: 5 (0, 1, 1, 2, 3, 5)
console.log(fibonacci(7)); // Output: 13 (0, 1, 1, 2, 3, 5, 8, 13)
```
**Sum of Array**

-   **Objective:** Write a recursive function `sumArray(arr)` that calculates the sum of all elements in an array `arr`.
-   **Example:**
```javascript
function sumArray(arr) {
    // Your implementation here
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([5, 10, 15])); // Output: 30
```
#### Advanced Level

1.  **Flatten Nested Arrays**
    
    -   **Objective:** Write a recursive function `flatten(arr)` that takes a nested array and returns a flat array with all elements at the same level.
    -   **Example:**
        
```javascript
function flatten(arr) {
    // Your implementation here
}

console.log(flatten([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flatten([[1, 2], [3, [4, [5]]]])); // Output: [1, 2, 3, 4, 5]
```