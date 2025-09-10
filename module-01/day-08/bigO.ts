function o1(n: number[]) {
  return n[0];
}

console.log(o1([5, 6, 7, 8, 9, 10, 42, 69, 12, 100, 10000]));

function on(n: number[]) {
  for (const num of n) {
    console.log(num);
  }
}

on([5, 6, 7, 8, 9, 10, 42, 69, 12, 100, 10000]);

function on2(n: number[]) {
  for (const num of n) {
    for (const num2 of n) {
      console.log(num === num2);
    }
  }
}

on2([5, 6, 7, 8, 9, 10, 42, 69, 12, 100, 10000]);

function on3(n: number[]) {
  for (const num of n) {
    for (const num2 of n) {
      for (const num3 of n) {
        console.log(num === num2);
      }
    }
  }
}

on3([5, 6, 7, 8, 9, 10, 42, 69, 12, 100, 10000]);

function oNLogN(n: number[]) {
  return n.sort();
}

function merge(l: number[], r: number[]) {
  let res: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < l.length && j < r.length) {
    if (l[i] < r[j]) {
      res.push(l[i]);
      i++;
    } else {
      res.push(r[j]);
      j++;
    }
  }
}

function mergeSort(n: number[]) {}
