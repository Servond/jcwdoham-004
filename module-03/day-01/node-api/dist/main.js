"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PORT = 8080;
const app = http_1.default.createServer((req, res) => {
    // GET http://localhost:8080/api
    if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify({ message: "Hello from Node.js API!" }));
        res.end();
    }
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
