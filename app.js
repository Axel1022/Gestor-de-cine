const express = require("express");
const path = require("path");
const bodyParser = require("body-parser"); // Añade esta línea
const app = express();
const puerto = 8080;
const home = require("./routes/home");
const router = require("./routes/admin");
const errorController = require("./controllers/errorController");
const { engine } = require("express-handlebars");

app.engine(
  "hbs",
  engine({
    layoutsDir: "views/layouts",
    default: "main",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views ", "views");
app.use(express.static(path.join(__dirname, "public")));

// Añade esta línea para parsear cuerpos de solicitudes POST
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", home);
app.use("/", router);
app.use("/", errorController.get404);

app.listen(puerto);
