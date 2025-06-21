function createCounter() {
  let count = 0; 

  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
}

const myCounter = createCounter();

myCounter.increment();
myCounter.increment();

console.log(myCounter.getCount()); 

console.log(myCounter.count);
