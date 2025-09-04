// function declaration
addTwo(1);
addTwo(5);
function addTwo(num) {
  console.log(num + 2);
}

function addNumber(a, b, c) {
  return a + b + c;
}

addNumber(3, 2, 5);
const num1 = addNumber(1, 2, 3);
const num2 = addNumber(5, 5, 5);

console.log(num1, num2);

function greet() {
  return 5;
}

const message = greet();
console.log(message);

// REST PAREMETER
function substractNumber(...nums) {
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum -= nums[i];
  }
  console.log(sum);
}

substractNumber(5, 6, 7, 1, 2, 4, 5, 6, 1);

// FUNCTION EXPRESSION
const multiplicationNumber = function (a, b) {
  return a * b;
};
console.log(multiplicationNumber(5, 2));

// ARROW FUNCTION
const divideNumber = (a, b) => {
  return a / b;
};

console.log(divideNumber(10, 2));

const checkOddEven = (num) => {
  //   let message = "";
  //   if (num % 2 === 0) {
  //     message = "Bilangan " + num + " adalah bilangan genap";
  //   } else {
  //     message = "Bilangan " + num + " adalah bilangan ganjil";
  //   }

  //   return message;
  //
  // TERNARY OPERATOR (PENYINGKATAN IF ELSE)
  // TEMPLATE LITERAL
  return num % 2 === 0
    ? `Bilangan ${num} adalah bilangan genap`
    : `Bilangan ${num} adalah bilangan ganjil`;
};

console.log(checkOddEven(10));

// NESTED FUNCTION
function greeting(name) {
  let hello = "Welcome";
  function message() {
    return "Hello";
  }

  function greet() {
    console.log(hello);
    return `Welcome, ${name}`;
  }
  let result = `${message()} ${greet()}`;
  return result;
}

console.log(greeting("Budi"));

// CLOSURE
function pertambahan(num) {
  let i = 5;
  return function () {
    return num + i;
  };
}
const tambah = pertambahan(5);
console.log(tambah());
