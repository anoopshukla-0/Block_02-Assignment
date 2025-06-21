function outerFunction() {
  const message = "Hey Anoop, you just unlocked closures! 🚀";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); 
