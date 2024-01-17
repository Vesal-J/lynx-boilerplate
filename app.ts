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

app.use(express.static('public'))

app.use(indexRouter)

app.listen(process.env.PORT, () => {
  console.log(`[⚡ Lynx] Running on http://localhost:${process.env.PORT}`);
});
