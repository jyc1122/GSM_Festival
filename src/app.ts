import * as express from "express"
class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}
const app = new App().application;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', './public/views');

app.get("/", (req: express.Request, res: express.Response) => {
  res.render('index.html');
})
app.listen(4000, () => console.log(`Open Server http://127.0.0.1:4000`)); 
