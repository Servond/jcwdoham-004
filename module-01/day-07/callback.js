const greet = (message, cb) => {
  console.log(message);
  cb();
};

function sayBye() {
  console.log("oke bye");
}

greet("Hallo", sayBye);

const arr = [5, 4, 3, 2, 1];
arr.sort((a, b) => a - b);

arr.map((num) => {
  console.log(num);
});
