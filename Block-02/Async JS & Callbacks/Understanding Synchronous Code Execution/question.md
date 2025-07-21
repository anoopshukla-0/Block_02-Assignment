=========================================
🧩 SECTION 1: 📌 QUESTION
=========================================

🔸 Problem Statement:

Write a JavaScript program that demonstrates synchronous code execution.  
You should create three console logs that print "Task 1", "Task 2", and "Task 3" in sequence.

🧠 Requirement:
- Since synchronous code runs line-by-line (top to bottom),
  the console output should show:


🛠 Output Example:
--------------------
Task 1  
Task 2  
Task 3


=========================================
📖 SECTION 2: SELF LEARNING
=========================================

🧠 Concept: DUBEX Method — *Synchronous Code Execution*

🔹 **D → Definition:**  
Synchronous code in JavaScript means code that executes **line-by-line** in the exact order it's written, waiting for each line to finish before moving to the next.

🔹 **U → Use Case Scenarios:**  
- Ideal for simple, linear tasks  
- DOM manipulation in order  
- Input validations  
- Small scripts or loops that don’t involve delays or waiting

🔹 **B → Benefits:**  
- Predictable execution flow  
- Easier to debug and trace  
- No callback hell or asynchronous complexities

🔹 **E → Example Code:**
```javascript
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
