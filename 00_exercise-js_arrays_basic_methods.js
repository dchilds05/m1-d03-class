/**
 * Solution of basic methods exercise
 */
/*
// checkPrime returns true/false

let numbersPrimes = [25, 7, 9, 15, 10];

numbersPrimes.forEach(function (value) {
  console.log(checkPrime(value));
});

// for (number of numbersPrimes) console.log(checkPrime(number));

function checkPrime(number) {
  if (number === 0 || number === 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function checkPalindrome(string) {
  const result = string.split("").reverse().join("") === string;
  return result;
}

console.log(checkPalindrome("anna"));

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];

function sumArray(arrayOfNumbers) {
  let sum = 0;
  for (num of arrayOfNumbers) {
    sum += num;
  }
  return sum;
}

console.log(sumArray(arrayOfNumbers));



*/
//HUNGRY FOR MORE

//Digit Sum
let sumDigits = function(num){
  let arr = Array.from(String(num), Number);
  let sum = 0;
  arr.forEach(function(value){
      sum += value;
  })

  return sum;
}



//Pythagoras
let calculateSide = function(sideA, sideB){
  sideC = Math.hypot(sideA, sideB);
  return sideC;
}



//Triangles
let tri = function(num){
  for (let i = "#"; i.length < num; i += "#"){
      return i;
  }
}

let reverseTri = function(num){
  let newString = "";
  for (let i = 0; newString.length < num; i ++){
      newString += "#";
  }
  for (let x = newString; x.length > 0; x = x.slice(0, x.length - 1)){
      return(x);
  }
}

//"Second" Numbers
let sampleArr = [4,2,6,9,5]

let secondNumbers = function(arr){
  newArr = arr;
  newArr.sort(function(a, b){
    return a - b;
  });
  console.log(`second highest: ${arr[arr.length - 2]}`);
  console.log(`second lowest: ${arr[1]}`);
}


//Unique String
