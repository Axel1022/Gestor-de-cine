const jsonFileHandler = require("../utils/jsonFileHandler");
const path = require("path");
const dataPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "generos.json"
);

module.exports = class Genero {
  constructor(id, genero, url) {
    this.id = id;
    this.genero = genero;
    this.urlImg = url;
  }
  save() {
    jsonFileHandler.ReadAllData(dataPath,(generos)=> {
      if (this.id) {
        const indexGenero = generos.findIndex((g) => g.id === this.id);
        if (indexGenero) {
          generos[indexGenero] = this;
          jsonFileHandler.WriteData(dataPath, generos);
        }
      } else {
        this.id = Math.random().toString();
        generos.push(this);
        jsonFileHandler.WriteData(dataPath, generos);
      }
    });
  }
  static getAll(cb) {
    jsonFileHandler.ReadAllData(dataPath, cb);
  }
  static getByID(id, cb) {
    jsonFileHandler.ReadAllData(dataPath, function (generos) {
      const genero = generos.find((g) => g.id === id);
      cb(genero);
    });
  }
  static delete(id) {
    jsonFileHandler.ReadAllData(dataPath, function (generos) {
      const NewListGeneros = generos.filter((g) => g.id !== id);
      jsonFileHandler.WriteData(dataPath, NewListGeneros);
    });
  }
}
