import express from "express";
import dotenv from "dotenv";
import connectMGDB from "./src/configs/dbconfig.js";
import routes from "./src/routes/index.js";

dotenv.config()
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

connectMGDB(process.env.dbURL)
routes(app)

app.listen(process.env.PORT, () => {
    console.log("server đang chạy trên cổng " + process.env.PORT)
})