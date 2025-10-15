"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const PORT = 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// GET http://localhost:8080/api
app.get("/api", (req, res) => {
    res.json({ message: "Hello from express API 2!" });
});
// GET http://localhost:8080/api/data
app.get("/api/data", (req, res) => {
    res.json({ data: [1, 2, 3, 4, 5, 6] });
});
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
