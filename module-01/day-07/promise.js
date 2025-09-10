// SYNCHRONOUS
console.log(1);
console.log(2);
console.log(3);

// ASYNCHRONOUS
console.log(1);
setTimeout(() => console.log(2), 2000);
console.log(3);

// PROMISE

const makeIceCream = new Promise((resolve, reject) => {
  let isReady = false;

  setTimeout(() => {
    if (isReady) {
      resolve("Es krim sudah bisa diambil");
    } else {
      reject("Es krimnya jatoh");
    }
  }, 2000);
});

makeIceCream
  .then((str) => console.log(str, "ini then jalan"))
  .catch((err) => console.log(err, "ini catch jalan"))
  .finally(() => console.log("Sudah selesai"));

// ASYNC AWAIT
async function networkCall() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await data.json();

    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
// networkCall();

const obj = {
  name: "budi",
  age: 22,
};

const json = JSON.stringify(obj);
console.log(json);

const newObj = JSON.parse(json);
console.log(newObj);

let str = "test";
str = 5;
