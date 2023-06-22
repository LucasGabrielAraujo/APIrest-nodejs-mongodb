import express from "express";
import {engine} from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

//path.join para concatenar la direccion
app.set('views', path.join(__dirname, "views"));

//motor de plantillas para usar archivos .hbs
//sintaxis en https://www.npmjs.com/package/express-handlebars
app.engine('.hbs', engine({
    layoutsDir:path.join(app.get('views'), 'layouts'),
    //partialsDir:path.join(app.get('views'), 'porciones'), # si se quiere modificar la ruta de "partials" se modifica aqui
    defaultLayout: 'main',
    extname: ".hbs",

}));
app.set("view engine", ".hbs");

//middLewares - mostrar logs por consola
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//routes
app.use(indexRoutes);

//archivos estaticos
app.use(express.static(path.join(__dirname,"public")))

export default app;