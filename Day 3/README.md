## Exercises

### 1. Callback Function

Write a function `getUserData` that simulates fetching user data from a server. It should take a callback function that logs the user data or an error message if something goes wrong.

### 2. Promises

Create a promise-based function `getUserData` that fetches user data. The promise should resolve with the data after 2 seconds or reject with an error message.

### 3. Chaining Promises

Write two promise-based functions, `getUserData` and `getPostsByUser`. Chain these functions so that after fetching the user data, the posts for that user are fetched.

### 4. Async/Await

Convert the promise-based `getUserData` function into an async function. Use async/await to fetch the user data and log it to the console.

### 5. Error Handling with Async/Await

Create an async function `fetchAndDisplayData` that fetches data using `getUserData`. Implement error handling using `try/catch` blocks to manage any potential errors.