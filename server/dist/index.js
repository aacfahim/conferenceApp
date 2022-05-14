"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const event_1 = require("./controllers/event");
var app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello from the express webserver');
});
app.use('/event', event_1.EventController);
app.listen(3000, () => {
    console.log('Server is up and running');
});
