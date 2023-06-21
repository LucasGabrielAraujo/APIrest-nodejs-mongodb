import mongoose from "mongoose";

(async()=>{
    const db = await mongoose.connect("mongodb//localhost/mongolito")
    console.log("DB conectado a", db.connection.name);
})()