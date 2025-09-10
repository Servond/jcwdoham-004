let str: string = "hello";
str = "5";
console.log(str);

let num: number = 5;

let bool: boolean = true;

let arrStr: string[] = ["test", "hello"];
let arrNum: number[] = [1, 2, 3];

interface IObj {
  name: string;
  age: number;
  email: string;
}

const obj: IObj[] = [
  {
    name: "budi",
    age: 22,
    email: "",
  },
];

interface IProduct {
  name: string;
  price: number;
}

interface ICart {
  products: IProduct[];
  qty: number;
}

interface ITransaction {
  addToCart: (product: IProduct, qty: number) => void;
  showTotal: () => number;
  checkOut: () => {
    total: number;
    cart: ICart;
  };
}

class Product implements IProduct {
  name = "";
  price = 0;

  constructor(_name: string, _price: number) {
    this.name = _name;
    this.price = _price;
  }
}

class Transaction implements ITransaction {
  #total: number = 0;
  #cart: ICart = {
    products: [],
    qty: 0,
  };

  addToCart(product: IProduct, qty: number) {
    this.#cart.products.push(product);
    this.#cart.qty += qty;
    this.#total += product.price * qty;
  }

  showTotal() {
    return this.#total;
  }

  checkOut() {
    const result = {
      total: this.#total,
      cart: this.#cart,
    };

    this.#total = 0;
    this.#cart = {
      products: [],
      qty: 0,
    };

    return result;
  }
}

const keyboard = new Product("keyboard", 50000);
const mouse = new Product("mouse", 25000);

const trx = new Transaction();
trx.addToCart(mouse, 5);
trx.addToCart(keyboard, 2);
console.log(trx.checkOut());
