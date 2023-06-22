import mongoose from "mongoose";
import {MONGODB_URI} from "./config"

(async()=>{
    const db = await mongoose.connect(MONGODB_URI)
    console.log("DB conectado a", db.connection.name);
})()