=========================================
🧩 SECTION 1: 📌 PROBLEM STATEMENT
=========================================

Problem Statement:
Create a JavaScript program that simulates a loading screen using setInterval. The program should:

Start by logging "Loading..." every 1 second.
After 5 seconds, stop the loading messages and log "Loaded successfully!".
Use setInterval to repeat the loading message and clearInterval to stop it.


=========================================
📖 SECTION 2: SELF LEARNING (DUBEX Method)
=========================================

🧠 Concept: setInterval + clearInterval

🔹 D → Definition:
- `setInterval()` is a built-in JavaScript function that repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
- `clearInterval()` is used to stop the execution set by `setInterval()` using its interval ID.

🔹 U → Use Case Scenarios:
- Simulating loading screens or delays
- Real-time clocks or timers
- Repeating tasks like checking server status or notifications

🔹 B → Benefits:
- Allows timed repetitive tasks without blocking main execution
- Great for creating delay-based UI feedback
- Easy to control via `clearInterval()`

🔹 E → Example (Generic):
Use `setInterval()` to simulate loading, then stop it with `clearInterval()` after a condition is met (like 5 seconds passing).

🔹 X → Extra Information:
- The time delay is in milliseconds (1000 ms = 1 sec)
- `setInterval()` doesn't guarantee exact timing due to event loop mechanics
- Always store the returned ID to clear the interval later

💡 Tip: Pairing `setInterval()` with a counter gives you precise control over how long something should repeat.

🎯 You're now playing with timed behavior in JavaScript — a key skill for building dynamic UIs!
