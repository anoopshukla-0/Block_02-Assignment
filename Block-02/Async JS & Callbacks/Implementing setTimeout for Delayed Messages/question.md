=========================================
🧩 SECTION 1: 📌 QUESTION
=========================================

🔸 Problem Statement:

Write a JavaScript program that uses `setTimeout` to print a delayed message.

Your code should:
1. Print `"Message 1"` immediately.
2. Use `setTimeout` to print `"Message 2 after 2 seconds"` **after a 2-second delay**.
3. Print `"Message 3"` immediately after `"Message 1"`.



=========================================
📖 SECTION 2: SELF LEARNING
=========================================

🧠 Concept: DUBEX Method — *Asynchronous Code Execution with `setTimeout`*

🔹 **D → Definition:**  
Asynchronous code allows tasks to run **without blocking** the execution of the next lines.  
`setTimeout()` is used to **delay the execution** of a function by a specified number of milliseconds.

🔹 **U → Use Case Scenarios:**  
- Delaying UI actions (e.g., showing a toast after a form is submitted)  
- Animations or timed events  
- Simulating network requests during testing  
- Retry logic or backoff in real apps

🔹 **B → Benefits:**  
- Prevents blocking long-running tasks  
- Keeps the app responsive  
- Helps simulate real-world asynchronous operations

🔹 **E → Example Code:**
```javascript
console.log("Message 1");

setTimeout(() => {
  console.log("Message 2 after 2 seconds");
}, 2000);

console.log("Message 3");
