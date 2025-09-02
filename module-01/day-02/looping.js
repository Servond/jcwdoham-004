// while loop
let a = 1;
while (true) {
  console.log("ini while");

  if (a == 5) {
    break;
  }

  a++;
  // i++; // i = i + 1, i += 1
}

console.log("sudah selesai looping");

// for loop
for (let j = 10; j > 0; j--) {
  if (j == 8) {
    console.log("ketemu break");
    // break, akan menghentikan operasi looping secara paksa
    break;
  }

  console.log(j);
}
console.log("ketemu break looping selesai");

for (let j = 10; j > 0; j--) {
  if (j == 8) {
    console.log("ketemu continue");
    // break, akan menghentikan operasi looping secara paksa
    continue;
  }
  // code dibawah ini tidak akan dibaca ketika ketemu operator continue
  console.log(j);
}
console.log("looping selesai");

// // do while
// let x = 11;
// do {
//   console.log(x, "ini do while");
//   x++;
// } while (x < 10);

// let n = 25;

// if (n <= 1) {
//   console.log("bukan bilangan prima");
// } else {
//   for (let i = 2; i < n; i++) {
//     console.log(i);
//     if (n % i === 0) {
//       console.log("bukan bilangan prima");
//       break;
//     }
//   }
// }

// let buah = "semangka";

// // or operator (||), jika salah satu kondisi mereturn true maka block of code akan dijalankan
// if (buah === "apel" || buah === "jeruk" || buah === "semangka") {
//   console.log("Buah dijual");
// } else {
//   console.log("Buah tidak dijual");
// }

// // and operator (&&), jika salah satu kondisi mereturn false maka block of code tidak akan dijalankan
// if (buah === "apel" && buah === "jeruk") {
//   console.log("Buah dijual");
// } else {
//   console.log("Buah tidak dijual");
// }
