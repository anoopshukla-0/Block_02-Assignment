function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

// Create an object with name and age
const person = {
  name: "Anoop",
  age: 26
};

// Call personInfo using the call() method with person as this
personInfo.call(person);
