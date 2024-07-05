const SerieModel = require("../models/series");
const GeneroModel = require("../models/generos");
const convertToEmbedUrl = require("../utils/UrlYoutube");
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
      IsListSerie: true,
    });
  });
};
exports.getModSerie = (req, res, next) => {
  GeneroModel.getAll((generos) => {
    res.render("series/modSeries", {
      pageTitle: "CineHd | Modificad",
      Generos: generos,
      EditMode: false,
    });
  });
};

exports.getModEditSerie = (req, res, next) => {
  const SerieId = req.params.SerieId;
  SerieModel.getByID(SerieId, (serie) => {
    if (!serie) {
      return res.redirect("/managerSerie");
    }

    GeneroModel.getAll((generos) => {
      res.render("series/modSeries", {
        pageTitle: `Modificad | ${serie.name}`,
        Generos: generos,
        Serie: serie,
        EditMode: true,
      });
    });
  });
};

exports.postModSerie = (req, res, next) => {
  const url = convertToEmbedUrl.convertToEmbedUrl(req.body.Link);
  console.log("Url: " + url);
  const nombre = req.body.Title;
  const imgUrl = req.body.ImgUrl;
  const link = url;
  const genero = req.body.Genero;

  const serie = new SerieModel(null, nombre, imgUrl, link, genero);
  serie.save();
  res.redirect("/managerSerie");
};

exports.postEditSerie = (req, res, next) => {
  const url = convertToEmbedUrl.convertToEmbedUrl(req.body.Link);
  console.log("Url: " + url);
  const id = req.body.id;
  const nombre = req.body.Title;
  const imgUrl = req.body.ImgUrl;
  const link = url;
  const genero = req.body.Genero;

  const serie = new SerieModel(id, nombre, imgUrl, link, genero);
  serie.save();
  res.redirect("/managerSerie");
};

exports.postDeleteSerie = (req, res, next) => {
  const GeneroId = req.body.GeneroId;
  SerieModel.delete(GeneroId);
  res.redirect("/managerSerie");
};
exports.postBuscarSeries = (req, res, next) => {
  const info = req.body.info;
  SerieModel.buscar(info, (resultados) => {
    res.render("cine/home", {
      pageTitle: `Buscar | "${info}"`,
      Series: resultados,
      hasSeries: resultados.length > 0,
      IsListSerie: true,
    });
  });
};
