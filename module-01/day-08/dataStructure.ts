const str: string = "test";

// NON PRIMITIVE DATA STRUCTURE

// STACK
// LIFO (LAST IN FIRST OUT)

interface IStack {
  push: (n: number) => void;
  pop: () => void;
  show: () => number[];
}

class Stack implements IStack {
  #container: number[] = [];

  push(n: number) {
    this.#container.push(n);
  }

  pop() {
    this.#container.pop();
  }

  show() {
    return this.#container;
  }
}

const newStack = new Stack();
newStack.push(5);
newStack.push(6);
newStack.push(1);
newStack.pop();
console.log(newStack.show());

// QUEUE
// FIFO (FIRST IN FIRST OUT)

interface IQueue {
  push: (n: number) => void;
  shift: () => void;
  show: () => number[];
}

class Queue implements IQueue {
  #container: number[] = [];

  push(n: number) {
    this.#container.push(n);
  }

  shift() {
    this.#container.shift();
  }

  show() {
    return this.#container;
  }
}

const newQueue = new Queue();
newQueue.push(5);
newQueue.push(6);
newQueue.push(1);
newQueue.shift();
console.log(newQueue.show());

// SET

const arr: number[] = [1, 2, 3, 1, 4, 5, 1, 1, 1, 1, 1, 1];
console.log(arr);

const newArr = Array.from(new Set(arr));
console.log(newArr);

// MAP
const obj = {
  name: "budi",
  2: 22,
};
console.log(obj);

const newMap = new Map();
newMap.set({ name: "Budi" }, [1, 2, 3, 4]);
console.log(newMap);
