// REST PARAMETER
function pertambahan(...arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }

  return sum;
}

console.log(pertambahan(1, 4, 5, 3, 7, 8, 1, 4, 23));

// DEFAULT PARAMETER

function perkalian(a, b = 1) {
  console.log(a, b);
  return a * b;
}

console.log(perkalian(5));

// CURRYING
function makeSandwich(daging, sayur) {
  return `sandwich dengan isi ${daging} ${sayur}`;
}

console.log(makeSandwich("sapi", "selada"));
console.log(makeSandwich("sapi", "brokoli"));

function makeSandwich2(daging) {
  return function (sayur) {
    return `sandwich dengan isi ${daging} ${sayur}`;
  };
}

const kasihDaging = makeSandwich2("sapi");
const sandwichSelada = kasihDaging("selada");
const sandwichBrokoli = kasihDaging("brokoli");
// console.log(infoLog(sandwichSelada));
// console.log(errorLog(sandwichBrokoli));

function addition(n1) {
  return function (n2) {
    return n1 + n2;
  };
}

const tambah5 = addition(5);
console.log(tambah5(10));
console.log(tambah5(12));

const tambah10 = addition(10);

// level 1 -> info
// level 2 -> error
// TANPA CURRYING
function logging(level, message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
}

// DENGAN CURRYING
function log(level) {
  return function (message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
  };
}

const infoLog = log("info");
const errorLog = log("error");
