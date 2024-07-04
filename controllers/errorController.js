exports.get404 = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "CineHd | 404" });
};
