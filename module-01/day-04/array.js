// PRIMITIVE DATA TYPE
const string = "ini sebuah tipe data string";
const num = 5;
const bool = true;
const undef = undefined;
const _null = null;

let temp = 5;
temp = 4;
console.log(temp);

// NON PRIMITIVE DATA TYPE
const arrOfNum = [1, 2, 3, 5, 4, 10, 11, 12, 13, 14];
console.log(arrOfNum[5]);

const arrOfStr = ["hello", "world"];
arrOfStr.push("message"); // memasukkan element baru akhir array
arrOfStr.unshift("ini pertama"); // memasukkan element baru ke awal array
arrOfStr.pop(); // meremove element pada akhir array
arrOfStr.shift(); // meremove element pada awal array
console.log(arrOfStr);

const arr = [1, "hello", true, null];
console.log(arr);

for (let x = 0; x < 1; x++) {
  console.log(arrOfStr[x].toUpperCase());
}

for (const test of arrOfStr) {
  console.log(test.toUpperCase());
}
