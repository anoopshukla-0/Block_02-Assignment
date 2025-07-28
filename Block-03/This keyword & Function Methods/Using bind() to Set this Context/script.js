let car = {
  brand: "Tesla",
  getBrand: function() {
    return this.brand;
  }
};

// Bind the getBrand method to car object permanently
let boundGetBrand = car.getBrand.bind(car);

// Call the bound function
console.log(boundGetBrand());  // Output: "Tesla"
