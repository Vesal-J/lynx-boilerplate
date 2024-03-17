import express, { Express } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import indexRouter from "./routes/index";

const app: Express = express();
dotenv.config();

// Change cors origins
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json())
app.use(express.static('public'))

// define all of routes and module imports in index router
app.use(indexRouter)

app.listen(process.env.PORT, () => {
  console.log(`[⚡ Lynx] Running on http://localhost:${process.env.PORT || 3000}`);
});
