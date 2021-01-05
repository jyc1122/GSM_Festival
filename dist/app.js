<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.application = express();
    }
}
const app = new App().application;
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', './public/views');
app.get("/", (req, res) => {
    res.render('index.html');
});
app.listen(4000, () => console.log(`Open Server http://127.0.0.1:4000`));
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.application = express();
    }
}
const app = new App().application;
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', './public/views');
app.get("/", (req, res) => {
    res.render('index.html');
});
app.listen(4000, () => console.log(`Open Server http://127.0.0.1:4000`));
>>>>>>> 4608f489232691e2f449934a2b189da7b96c4f06
//# sourceMappingURL=app.js.map