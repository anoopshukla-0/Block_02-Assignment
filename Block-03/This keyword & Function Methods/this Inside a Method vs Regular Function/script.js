// Object with method
let user = {
  username: "john_doe",
  showUsername: function () {
    console.log("Method:", this.username);
  }
};

// Standalone function
function displayUsername() {
  console.log("Function:", this.username);
}

// Call as a method
user.showUsername(); // 👉 Output: Method: john_doe

// Call as a regular function
displayUsername();   // 👉 Output: Function: undefined (or 'Function: some global value' in non-strict mode)
