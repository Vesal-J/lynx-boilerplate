import express, { Express } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import indexRouter from "./src/routes";
import path from "path";

const app: Express = express();
dotenv.config();

// Change cors origins
app.use(
  cors({
    origin: "*",
  })
);

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())
app.use(express.static('public'))

// define all of routes and module imports in index router
app.use(indexRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[⚡ Lynx] Running on http://localhost:${process.env.PORT || 3000}`);
});
