import "dotenv/config";
import express from "express";
import cors from "cors";
import dbConnect from "./utils/dbConnect.js"
import router from "./Router/routes.js";
const port = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
app.use("/api/v1", router);
dbConnect().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
  });
}).catch((error)=>{
    console.log(error);
})
