const SerieModel = require("../models/series");
exports.getHome = (req, res, next) => {
  SerieModel.getAll((series) => {
    res.render("cine/home", {
      pageTitle: "CineHD | Home",
      Series: series,
      hasSeries: series.length > 0,
    });
  });
};
