"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    const age = 32;
    res.json({ message: `Taylor Swift is a singer and she is ${age}` });
});
app.listen(5000, () => {
    console.log('server starts at 5000');
});
