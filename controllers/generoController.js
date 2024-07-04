const GeneroModel = require("../models/generos");

exports.getGenero = (req, res, next) => {
  GeneroModel.getAll((generos) => {
    res.render("generos/index", {
      pageTitle: "CineHd | Generos",
      Generos: generos,
      hasGeneros: generos.length > 0,
      IsListSerie: true,
    });
  });
};
exports.getModGenero = (req, res, next) => {
  res.render("generos/modGeneros", {
    pageTitle: "CineHd | Modificad",
    EditMode: false,
  });
};
exports.getModEditGenero = (req, res, next) => {
  const GeneroId = req.params.GeneroId;
  GeneroModel.getByID(GeneroId, (genero) => {
    if (!genero) {
      return res.redirect("/managerGenero");
    }

    res.render("generos/modGeneros", {
      pageTitle: `Modificad | ${genero.genero}`,
      EditMode: true,
      Genero:genero
    });
  });
};
exports.postEditGenero = (req, res, next) => {
  const id = req.body.id;
  console.log("GeneroId: " + id);

  const genero = req.body.Genero;
  const Url = req.body.Url;

  const Newgenero = new GeneroModel(id, genero, Url);
  Newgenero.save();
  res.redirect("/managerGenero");
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
