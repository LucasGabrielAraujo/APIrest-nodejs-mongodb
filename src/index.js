import app from "./app"
const PORT = process.env.PORT || 3000;
import './database'


app.listen(PORT);
console.log("Server en puerto", PORT);
