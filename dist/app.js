"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.application = express();
    }
}
const app = new App().application;
app.get("/", (req, res) => {
    res.send("start");
});
app.listen(4000, () => console.log("start"));
//# sourceMappingURL=app.js.map