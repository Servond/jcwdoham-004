const readline = require("readline");

// VARIABLE
// LET MEMPERBOLEHKAN VALUE DIDALAMNYA DIRUBAH SETELAH DIBUAT
// let message = "Welcome, Budi";
// console.log(message);
// message = "Hello, Budi";

// // CONST TIDAK MEMPERBOLEHKAN VALUE DIDALAMNYA DIRUBAH SETELAH DIBUAT
// const hello = "Welcome, Budi";
// // hello = "Hello, Budi";
// console.log(hello);

let panjang;
console.log(panjang);
let lebar;

panjang = 5;
lebar = 7;

const rumusLuasPersegiPanjang = panjang * lebar;
console.log(rumusLuasPersegiPanjang);

let a = 10;
let b = a;

a = 5;

console.log(a + b);

let now = new Date();
console.log(now);
let date = new Date("2022-01-01");
console.log(date);

const text = "5";
console.log(Number(text) + 5);
// concat

// PROBLEMNYA INGIN MENAMBAHKAN 2 ANGKA
// 1. INPUT BERUPA SEBUAH STRING ANGKA 5
// 2. OUTPUTNYA INGIN MENJADI ANGKA 10
// SOLUSI -> MERUBAH TIPE DATA STRING ANGKA 5 MENJADI ANGKA 5
