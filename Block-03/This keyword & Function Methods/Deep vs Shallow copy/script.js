function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Original object
const original = {
  name: "Alice",
  hobbies: ["reading", "traveling"]
};

// Clone the object
const cloned = deepClone(original);

// Modify the clone
cloned.hobbies.push("coding");

// Log both objects to verify deep cloning
console.log("Original:", original);
console.log("Clone:", cloned);
