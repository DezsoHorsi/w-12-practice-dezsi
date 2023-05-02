const express = require("express");
const app = express();
const path = require("path"); // ez is egy importálás, ez teszi lehetővé a fájlrendszerben a mozgást.
const port = 9000;

//1. end point: minden egyes alkalmazásunk belépőpontja.
app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
});
//3. end point: az images.json-t érjük el vele.
app.get("/images", (req, res) => {
  res.sendFile(path.join(`${__dirname}/data/images.json`));
});

//2. end point: statikus nyilvános mappa elérhetővé tétele
app.use("/public", express.static(`${__dirname}/../frontend/public`));

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`);
});