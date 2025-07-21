function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
  name: "Anoop",
  age: 26
};

personInfo.call(person);
