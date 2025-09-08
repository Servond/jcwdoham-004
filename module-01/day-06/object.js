const mouse = {
  // properties object
  // brand adalah sebuah key
  // "logitech" adalah sebuah value
  brand: "logitech",

  // type adalah sebuah key
  // "gx500" adalah sebuah value
  type: "gx500",

  // price adalah sebuah key
  // 25000 adalah sebuah value
  price: 25000,
};

console.log(mouse);
console.log(mouse.price);
console.log(mouse.brand);
console.log(mouse["type"]);

// mengupdate property key price dengan value "250000" karena property key sudah ada didalam object
mouse.price = "250000";

// membuat property dengan key color dan value "red" karena didalam object belum ada property dengan key tersebut
mouse.color = "red";
console.log(mouse);

delete mouse.color;
console.log(mouse);

const person = {
  firstName: "Budi",
  lastName: "Doremi",
  email: "budi@gmail.com",
  phoneNumber: "081231232",
  address: {
    address: "jln jalanan no 52",
    postal: {
      code: "11524",
      provinsi: "dunia",
      kecamatan: "dunia luar",
    },
  },
};

console.log(person.address.postal?.kecamatan);
// person.address.postal.city = "Bandung";
// console.log(person.address.postal);

// const test = {
//   a: "ini string",
//   b: 5,
//   c: [
//     {
//       d: true,
//       e: [1, 5, 6, 7],
//     },
//   ],
// };
// console.log(test.c[0].e[3]);

// MUTABLE & IMMUTABLE
let string = "hello";
let newString = string;
newString = "welcome";
console.log(string);
console.log(newString);

const arr = [1, 2, 3, 4, 5];
const newArr = [...arr];
arr.push(10);
newArr.push(50);
console.log(newArr, arr);

// FOR IN LOOP
const keyboard = {
  brand: "logitech",
  type: "elite",
  price: 500000,
};

for (const key in keyboard) {
  console.log(keyboard[key]);
}

const laptopExtremeGaming = {
  brand: "hp",
  type: "xtreme",
  cpu: "intel i7",
  ram: "32gb",
  gpu: "nvidia gtx 9999",
  color: "platinum",
  display: "ultra hd",
  resolution: "2k",
};
const brand = "test";
const {
  brand: brands,
  type,
  cpu,
  ram,
  gpu,
  color,
  display,
  resolution,
} = laptopExtremeGaming;

console.log(laptopExtremeGaming.brand);
console.log(laptopExtremeGaming.type);
console.log(laptopExtremeGaming.cpu);
console.log(laptopExtremeGaming.ram);
console.log(brands);
console.log(gpu);
console.log(color);
console.log(display);
console.log(resolution);
