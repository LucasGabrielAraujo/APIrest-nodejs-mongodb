import app from "./app"
import { PORT } from "./config";
import './database'


app.listen(PORT);
console.log("Server en puerto", PORT);
