"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "hello";
str = "5";
console.log(str);
let num = 5;
let bool = true;
let arrStr = ["test", "hello"];
let arrNum = [1, 2, 3];
const obj = [
    {
        name: "budi",
        age: 22,
        email: "",
    },
];
class Product {
    name = "";
    price = 0;
    constructor(_name, _price) {
        this.name = _name;
        this.price = _price;
    }
}
class Transaction {
    #total = 0;
    #cart = {
        products: [],
        qty: 0,
    };
    addToCart(product, qty) {
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
//# sourceMappingURL=index.js.map