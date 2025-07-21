# 🎯 JS Event Loop Debugging + Callback Function — Solution

---

## ✅ Problem Recap:
You were given a JavaScript snippet with asynchronous tasks. The goal was to ensure the messages print in the correct logical sequence by understanding the **event loop** in JavaScript.

---

## ✅ Final Code (Event Loop Order Example):
```javascript
console.log("Begin");

setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});

console.log("End");
```

---

## 🧾 Output (Correct Sequence):
```
Begin
End
Promise Task
Timeout Task
```

---

## 🧠 Why This Order?
This sequence perfectly follows the **JavaScript Event Loop** logic:

| Phase           | Action            | Reason                           |
|----------------|-------------------|----------------------------------|
| Call Stack     | Begin             | Sync code always runs first      |
| Call Stack     | End               | Continues after "Begin"          |
| Microtask Queue| Promise Task      | Promises go in microtask queue   |
| Macrotask Queue| Timeout Task      | setTimeout runs after microtasks |

> Even with a delay of `0ms`, `setTimeout` waits until all microtasks are finished — that's the magic of the event loop. ✨

---

## 📘 Bonus Tip:
Want to test more? Try stacking:
```js
setTimeout(...)
Promise.resolve(...)
queueMicrotask(...)
```
To watch who jumps the line. 😉

---

📌 **Level Up:** Understanding the event loop gives you a HUGE edge in handling async behavior, especially with `async/await`, `fetch()`, and performance optimization!

Keep going, Rockstar Dev! 💻🔥

---

## 🎯 Callback Function — Task Execution Order

### 🧩 Problem Statement:
Write a JavaScript program that demonstrates the use of a callback function to execute tasks in sequence. Your program should:

- Define a function `taskOne()` that logs "Task 1 completed".
- Define a function `taskTwo(callback)` that logs "Task 2 completed" and then executes the callback function.
- Call `taskTwo(taskOne)` to ensure `taskOne` runs only after `taskTwo` finishes.

### ✅ Expected Output:
```
Task 2 completed
Task 1 completed
```

### ✅ Solution Code:
```javascript
function taskOne() {
  console.log("Task 1 completed");
}

function taskTwo(callback) {
  console.log("Task 2 completed");
  callback();
}

taskTwo(taskOne);
```

### 🧠 Why This Works:
- `taskTwo` executes synchronously and logs "Task 2 completed"
- Then it immediately invokes the `callback()` function, which is `taskOne`
- That’s why "Task 1 completed" comes **after** "Task 2 completed"

This is the foundation of how async flows are managed using callbacks in JS! 🚀

---

## 🧩 Nested Callback Simulation — API Call

### 📌 Problem Statement:
Create a program that simulates API calls using nested callbacks:

- `fetchUserData(callback)`:
  - Logs "Fetching user data..."
  - After 1s, calls `callback` with "User data received"
- Inside callback, `fetchUserPosts(callback)`:
  - Logs "Fetching user posts..."
  - After 1.5s, calls `callback` with "User posts received"
- Finally log "All data loaded successfully!"

### ✅ Expected Output:
```
Fetching user data...
(1 second delay)
User data received
Fetching user posts...
(1.5 second delay)
User posts received
All data loaded successfully!
```

### ✅ Solution Code:
```javascript
function fetchUserData(callback) {
  console.log("Fetching user data...");
  setTimeout(() => {
    console.log("User data received");
    callback();
  }, 1000);
}

function fetchUserPosts(callback) {
  console.log("Fetching user posts...");
  setTimeout(() => {
    console.log("User posts received");
    callback();
  }, 1500);
}

fetchUserData(() => {
  fetchUserPosts(() => {
    console.log("All data loaded successfully!");
  });
});
```

### 🧠 Why This Works:
- Each function uses `setTimeout` to simulate API delay.
- Callbacks ensure that one task starts only after the previous finishes.
- The structure forms a **callback pyramid**, which was common before Promises and async/await.

💡 This is how real async workflows were managed in JavaScript before modern syntax improvements!
