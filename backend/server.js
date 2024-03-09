import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

import authRouter from "./routers/auth.router.js";
import conectToMongoDB from "./db/conectToMongoDB.js";
import generateQR from "./utils/generateQr.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRouter);

app.get("/getqr",(req,res)=>{
  const qrUrl = generateQR("gaurav");
  console.log(qrUrl)
  res.send(qrUrl);
})

app.listen(PORT, async () => {
  await conectToMongoDB();
  console.log(`The server is runnig on ${PORT}`);
});
