// PAGE 3

// 1

console.log(typeof 1);
console.log(typeof "");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof []);
console.log(typeof {});

function primitiveOnly(arr) {
  const result = [];
  for (const val of arr) {
    if (typeof val !== "object" || val === null) {
      result.push(val);
    }
  }

  return result;
}

console.log(
  primitiveOnly([1, {}, [], true, "halo", "message", 5, false, undefined, null])
);

// 2

function sumDuplicate(arr) {
  let sum = 0;
  const dup = [];
  // [10, 20]

  for (let i = 0; i < arr.length; i++) {
    if (dup.includes(arr[i])) continue;

    let count = 0;
    // arr[i] = 10
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }

    if (count > 1) {
      sum += arr[i] * count;
      dup.push(arr[i]);
    }
  }

  return sum;
}

console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10, 20]));

function rockPaperScissor(input) {
  input = input.toUpperCase();
  // 0 === BATU
  // 1 === KERTAS
  // 2 === GUNTING
  let option = ["ROCK", "PAPER", "SCISSOR"];
  const comp = option[Math.floor(Math.random() * 3)];

  if (!option.includes(input)) return "INVALID INPUT";

  let message = `You throw ${input}, Computer throw ${comp}, You `;

  if (input === comp) {
    message += "DRAW";
  } else if (
    (input === option[0] && comp === option[2]) ||
    (input === option[1] && comp === option[0]) ||
    (input === option[2] && comp === option[1])
  ) {
    message += "WIN";
  } else {
    message += "LOSE";
  }

  return message;
}

console.log(rockPaperScissor("SCISSOR"));
