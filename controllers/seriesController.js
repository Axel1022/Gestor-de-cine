const SerieModel = require("../models/series");
const GeneroModel = require("../models/generos");
exports.getSerieId = (req, res, next) => {
  const serieId = req.params.serieId;

  SerieModel.getByID(serieId, (serie) => {
    res.render("series/serieDetalle", {
      pageTitle: `Detalle | ${serie?.name}`,
      Serie: serie,
      hasSerie: serie ? true : false,
    });
  });
};
exports.getSerie = (req, res, next) => {
  SerieModel.getAll((series) => {
    res.render("series/index", {
      pageTitle: "Admin | Series",
      Series: series,
      hasSeries: series.length > 0,
      IsListSerie: true
    });
  });
};
exports.getModSerie = (req, res, next) => {
  GeneroModel.getAll((generos) => {
    res.render("series/modSeries", {
      pageTitle: "CineHd | Modificad",
      Generos: generos
    });
  });
};

exports.postModSerie = (req, res, next) => {
  const nombre = req.body.Title;
  const imgUrl = req.body.ImgUrl;
  const link = req.body.Link;
  const genero = req.body.Genero;

  const serie = new SerieModel(null, nombre, imgUrl, link, genero);
  serie.save();
  res.redirect("/managerSerie");
};

exports.postDeleteSerie = (req, res, next) => {
  const GeneroId = req.body.GeneroId;
  SerieModel.delete(GeneroId);
  res.redirect("/managerSerie");
};
