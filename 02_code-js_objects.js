/**
 * Code along objects
 */

const order1 = {
  beverage: "cappucino",
  price: 10,
  sugar: false,
  extraFoam: true,
};

const order2 = {
  beverage: "cappucino",
  price: 10,
  sugar: false,
  extraFoam: false,
};

const property = "beverage";

order1[property]; // This would not work: order1.property

console.log(order2.alcohol, order2.extraFoam, order1.price);

/*
const order1 = {
  beverage: "cappucino",
  price: 10,
  sugar: false,
  extraFoam: true,
};

const order2 = {
  beverage: "cappucino",
  price: 10,
  sugar: false,
  extraFoam: false,
};

console.log(order2.alcohol, order2.extraFoam, order1.price); // A non-existing property returns undefined
 */
/*
// Objects as a protection for naming
const order1 = {
  beverage: "cappucino",
  price: 10,
  sugar: false,
  extraFoam: true,
};

const order2 = {
  beverage: "cappucino",
  price: 10,
  sugar: false,
  extraFoam: true,
};
 */
/* // The reason for objects
let beverage = "cappucino";
const price = 10;
const sugar = false;
const extraFoam = true;

beverage = "caffé"; // this is not possible because it will overwrite the first one
 */
