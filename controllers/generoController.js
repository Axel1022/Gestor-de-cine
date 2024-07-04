const GeneroModel = require("../models/generos");

exports.getGenero = (req, res, next) => {
  GeneroModel.getAll((generos) => {
    res.render("generos/index", {
      pageTitle: "CineHd | Generos",
      Generos: generos,
      hasGeneros: generos.length > 0,
      IsListSerie: true
    });
  });
};
exports.getModGenero = (req, res, next) => {
  res.render("generos/modGeneros", { pageTitle: "CineHd | Modificad" });
};

exports.postModGenero = (req, res, next) => {
  const genero = req.body.Genero;
  const Url = req.body.Url;

  const serie = new GeneroModel(null, genero, Url);
  serie.save();
  res.redirect("/managerGenero");
};

exports.postDeleteGenero = (req, res, next) => {
  const GeneroId = req.body.GeneroId;
  GeneroModel.delete(GeneroId);
  res.redirect("/managerGenero");
};

