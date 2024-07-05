/*
Nombre de la serie(input text),
imagen de portada(input text)
enlace del video de youtube (input text)
género al que pertenece la serie(select con todos los géneros creado en el sistema).
*/

const jsonFileHandler = require("../utils/jsonFileHandler");
const path = require("path");
const dataPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "series.json"
);

module.exports = class Serie {
  constructor(id, name, img, link, genero) {
    this.id = id;
    this.name = name;
    this.imgUrl = img;
    this.link = link;
    this.genero = genero;
  }
  save() {
    jsonFileHandler.ReadAllData(dataPath, (series) => {
      if (this.id) {
        const indexSerie = series.findIndex((s) => s.id === this.id);
        if (indexSerie >= 0) {
          series[indexSerie] = this;
          jsonFileHandler.WriteData(dataPath, series);
        }
      } else {
        this.id = Math.random().toString();
        series.push(this);
        jsonFileHandler.WriteData(dataPath, series);
      }
    });
  }

  static getAll(cb) {
    jsonFileHandler.ReadAllData(dataPath, cb);
  }
  static getByID(id, cb) {
    jsonFileHandler.ReadAllData(dataPath, function (series) {
      const serie = series.find((s) => s.id === id);
      cb(serie);
    });
  }
  static delete(id) {
    jsonFileHandler.ReadAllData(dataPath, function (series) {
      const NewListSeries = series.filter((s) => s.id !== id);
      jsonFileHandler.WriteData(dataPath, NewListSeries);
    });
  }
  static buscar(info, cb) {
    jsonFileHandler.Buscar(dataPath, info, cb);
  }
};
